import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { getCurrentUser } from '../../../../lib/auth.js';
import { validateArticleForm } from '../../../../services/articleFormValidation';
import { sendNewArticleNotification } from '../../../../lib/email.js';
import { insertArticleToDB, insertArticleTags, insertArticleCategory } from '../../../../services/blogData.js';
import {
	saveArticleComponent,
	titleToPageComponent,
	titleToSlug,
	titleToImageName
} from '../../../../utils/generateArticleComponent.js';
import { updateArticleIndex } from '../../../../utils/updateArticleIndex.js';
import { resizeImage } from '../../../../utils/resizer.js';
import { sizes as imagesSizes } from '../../../../utils/imageSizes.js';
import { withTimeout } from '../../../../utils/updateWithTimeout.js';
import { scheduleBuildAndPm2Restart } from '../../../../lib/gitPushAndRestart.js';
import { addArticleToSitemapAndRobots } from '../../../../lib/sitemapAndRobots.js';

/** Comma-separated usernames allowed to submit articles (empty = any authenticated user). */
const ALLOWED_USERNAMES = (process.env.ALLOWED_ARTICLE_SUBMIT_USERNAMES ?? '')
	.split(',')
	.map((s) => s.trim().toLowerCase())
	.filter(Boolean);

const BLOG_ARTICLES_IMAGE_DIR = path.join(process.cwd(), 'public', 'assets', 'images', 'blog-articles');

const DB_OP_TIMEOUT_MS = 15000;
const SAVE_COMPONENT_TIMEOUT_MS = 30000;

/**
 * POST /api/articles/submit
 * Submit a new article, generate React component, and send email notification.
 * Accepts JSON or FormData (multipart); when FormData, saves uploaded image to
 * public/assets/images/blog-articles.
 */
export async function POST(request: Request) {
	try {
		console.log('[articles/submit] POST start');

		// Require authenticated user
		const user = await getCurrentUser();
		if (!user) {
			return NextResponse.json({
				error: 'Unauthorized', message: 'Authentication required to submit articles.'
			},
				{
					status: 401
				}
			);
		}

		// Optionally restrict to allowed usernames
		if (ALLOWED_USERNAMES.length > 0) {
			const usernameLower = String(user.username ?? '').toLowerCase();
			if (!ALLOWED_USERNAMES.includes(usernameLower)) {
				return NextResponse.json({
					error: 'Forbidden', message: 'You are not allowed to submit articles.'
				},
					{
						status: 403
					}
				);
			}
		}

		const contentType = request.headers.get('content-type') ?? '';
		let body: Record<string, unknown>;
		let uploadedFile: File | null = null;

		if (contentType.includes('multipart/form-data')) {
			console.log('[articles/submit] parsing FormData');
			const formData = await request.formData();
			console.log('[articles/submit] FormData parsed');
			const tagRaw = formData.get('tag');
			const tag = typeof tagRaw === 'string'
				? (() => {
					try {
						return JSON.parse(tagRaw) as string[];
					} catch {
						return [];
					}
				})()
				: Array.isArray(tagRaw) ? tagRaw : [];
			body = {
				title: formData.get('title') ?? '',
				shortDescription: formData.get('shortDescription') ?? '',
				author: formData.get('author') ?? '',
				publishingDate: formData.get('publishingDate') ?? '',
				articleColor: formData.get('articleColor') ?? '',
				category: formData.get('category') ?? '',
				tag,
				mainImage: (formData.get('mainImage') as File | null)?.name ?? '',
				markdownContent: formData.get('markdownContent') ?? '',
			};
			const file = formData.get('mainImage');
			uploadedFile = file instanceof File && file.size > 0 ? file : null;
		} else {
			console.log('[articles/submit] parsing JSON body');
			body = (await request.json()) as Record<string, unknown>;
			console.log('[articles/submit] JSON parsed');
		}

		// Validate form data
		const validationResult = validateArticleForm({
			title: String(body.title ?? ''),
			shortDescription: String(body.shortDescription ?? ''),
			author: String(body.author ?? ''),
			publishingDate: String(body.publishingDate ?? ''),
			articleColor: String(body.articleColor ?? ''),
			category: String(body.category ?? ''),
			tag: Array.isArray(body.tag) ? (body.tag as string[]) : [],
			mainImage: String(body.mainImage ?? ''),
			markdownContent: String(body.markdownContent ?? ''),
		});

		if (!validationResult.isValid) {
			return NextResponse.json({
				error: 'Validation failed',
				errors: validationResult.errors,
			},
				{
					status: 400
				}
			);
		}

		if (!validationResult.sanitizedData) {
			return NextResponse.json(
				{
					error: 'Invalid form data'
				},
				{
					status: 400
				}
			);
		}
		console.log('[articles/submit] validation ok');

		const {
			title,
			shortDescription,
			author,
			markdownContent,
			publishingDate,
			category,
			tag,
			mainImage,
			articleColor: payloadArticleColor,
		} = validationResult.sanitizedData;

		// Use article colour from payload or default
		const articleColor = payloadArticleColor ?? 'FF603B';

		console.log('[articles/submit] loading generateArticleComponent');
		console.log('[articles/submit] saving component...');
		const componentResult = await withTimeout(
			saveArticleComponent(title, markdownContent, articleColor),
			SAVE_COMPONENT_TIMEOUT_MS,
			'saveArticleComponent'
		);
		console.log('[articles/submit] component saved', componentResult.success ? 'ok' : componentResult.error);

		if (!componentResult.success) {
			console.error('Failed to generate article component:', componentResult.error);
			return NextResponse.json(
				{
					error: 'Failed to generate article component',
					details: componentResult.error,
				},
				{
					status: 500
				}
			);
		}

		console.log('Article component generated:', {
			fileName: componentResult.fileName,
			componentName: componentResult.componentName,
			filePath: componentResult.filePath,
		});

		// Update index.js to export the new component
		const indexResult = updateArticleIndex(
			componentResult.componentName,
			componentResult.fileName
		);

		if (!indexResult.success && !indexResult.skipped) {
			console.warn('Failed to update article index:', indexResult.error);
			// Don't fail the request, just log a warning
		} else if (indexResult.exportAdded) {
			console.log('Component export added to index.js');
		}

		// Update sitemap.txt and robots.txt with the new article URL
		const articleSlug = titleToSlug(title);
		const sitemapRobotsResult = await addArticleToSitemapAndRobots(articleSlug);
		if (sitemapRobotsResult.success) {
			console.log('[articles/submit] sitemap.txt and robots.txt updated with new article');
		} else {
			console.warn('Failed to update sitemap.txt or robots.txt:', sitemapRobotsResult.error);
		}

		// Save article to the articles table (link and image use CYRILLIC_TO_LATIN, no length limit)
		const articleLink = `/blog/articles/${articleSlug}`;
		const publishedMySQL = new Date(publishingDate)
			.toISOString()
			.slice(0, 19)
			.replace('T', ' ');

		// Image path: /assets/images/blog-articles/ + name from title (transliterated, spaces → _)
		const imageNameFromTitle = titleToImageName(title);
		let articleImagePath = `/assets/images/blog-articles/${imageNameFromTitle}_main.jpg`;

		let savedFileName: string | null = null;

		// Save uploaded image to public/assets/images/blog-articles (original file from request)
		if (uploadedFile) {
			console.log('[articles/submit] saving uploaded image...');
			const ext = path.extname(uploadedFile.name).toLowerCase() || '.jpg';
			const safeExt = /^\.(jpe?g|png|gif|webp)$/.test(ext) ? ext : '.jpg';
			const fileName = `${imageNameFromTitle}_main${safeExt}`;
			savedFileName = fileName;
			const filePath = path.join(BLOG_ARTICLES_IMAGE_DIR, fileName);
			await fs.mkdir(BLOG_ARTICLES_IMAGE_DIR, { recursive: true });
			const buffer = Buffer.from(await uploadedFile.arrayBuffer());
			await fs.writeFile(filePath, buffer);
			articleImagePath = `/assets/images/blog-articles/${fileName}`;

			// Create responsive images only for this uploaded file (fileName = user-selected image).
			// Resizer batch job does not run when imported; only resizeImage(fileName, ...) is called.
			try {
				const results = await Promise.allSettled(
					imagesSizes.map((imageSize: number) =>
						resizeImage(fileName, imageSize, BLOG_ARTICLES_IMAGE_DIR)
					)
				);
				const failed = results.filter((r) => r.status === 'rejected');
				if (failed.length > 0) {
					console.warn('Some responsive image sizes failed for', fileName, failed);
				}
			} catch (resizeErr) {
				console.warn('Responsive image resize failed for', fileName, resizeErr);
			}
			console.log('[articles/submit] image saved and resized');
		}

		let articleInsertId: number;
		try {
			console.log('[articles/submit] inserting article (DB)...');
			const insertResult = await withTimeout(
				insertArticleToDB({
					article_color: articleColor,
					title,
					englishTitle: '',
					published: publishedMySQL,
					link: articleLink,
					description: shortDescription,
					image: articleImagePath,
					views: '0000000000',
					is_section_main_image: 0,
					author,
					pageComponent: titleToPageComponent(title),
				}),
				DB_OP_TIMEOUT_MS,
				'insertArticleToDB'
			);
			articleInsertId = insertResult.insertId ?? 0;
			console.log('[articles/submit] article inserted, id:', articleInsertId);
		} catch (dbError: unknown) {
			const message = dbError && typeof dbError === 'object' && 'error' in dbError
				? String((dbError as { error: string }).error)
				: 'Failed to save article to database';
			console.error('insertArticleToDB failed:', dbError);
			return NextResponse.json(
				{ error: 'Failed to save article to database', details: message },
				{ status: 500 }
			);
		}

		if (articleInsertId) {
			try {
				console.log('[articles/submit] inserting tags and category...');
				await withTimeout(
					insertArticleTags(articleInsertId, tag),
					DB_OP_TIMEOUT_MS,
					'insertArticleTags'
				);
				await withTimeout(
					insertArticleCategory(articleInsertId, category),
					DB_OP_TIMEOUT_MS,
					'insertArticleCategory'
				);
				console.log('[articles/submit] tags and category inserted');
			} catch (linkError: unknown) {
				const message = linkError && typeof linkError === 'object' && 'error' in linkError
					? String((linkError as { error: string }).error)
					: 'Failed to save article tags/category';
				console.error('insertArticleTags/insertArticleCategory failed:', linkError);
				return NextResponse.json(
					{ error: 'Failed to save article tags or category', details: message },
					{ status: 500 }
				);
			}
		}

		console.log('Article submitted and saved to DB:', {
			title,
			link: articleLink,
			componentName: componentResult.componentName,
			fileName: componentResult.fileName,
		});

		// Send email notification in background (do not block response; SMTP can timeout on server)
		sendNewArticleNotification({ title, markdownContent }).catch((err) => {
			console.error('[articles/submit] Email notification failed:', err);
		});

		// Schedule build + PM2 restart after 5s (production only)
		scheduleBuildAndPm2Restart(5000);

		return NextResponse.json({
			success: true,
			message: 'Article submitted successfully',
			component: {
				fileName: componentResult.fileName,
				componentName: componentResult.componentName,
				filePath: componentResult.filePath,
			},
		});
	} catch (error) {
		console.error('Article submission error:', error);
		return NextResponse.json(
			{
				error: 'Internal server error'
			},
			{
				status: 500
			}
		);
	}
}

