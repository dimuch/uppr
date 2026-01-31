import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { validateArticleForm } from '../../../../services/articleFormValidation';
import { sendEmail } from '../../../../lib/email.js';
import { insertArticleToDB } from '../../../../services/blogData.js';

const BLOG_ARTICLES_IMAGE_DIR = path.join(process.cwd(), 'public', 'assets', 'images', 'blog-articles');

/**
 * POST /api/articles/submit
 * Submit a new article, generate React component, and send email notification.
 * Accepts JSON or FormData (multipart); when FormData, saves uploaded image to
 * public/assets/images/blog-articles.
 */
export async function POST(request: Request) {
	try {
		const contentType = request.headers.get('content-type') ?? '';
		let body: Record<string, unknown>;
		let uploadedFile: File | null = null;

		if (contentType.includes('multipart/form-data')) {
			const formData = await request.formData();
			const tagRaw = formData.get('tag');
			const tag = typeof tagRaw === 'string'
				? (() => { try { return JSON.parse(tagRaw) as string[]; } catch { return []; } })()
				: Array.isArray(tagRaw) ? tagRaw : [];
			body = {
				title: formData.get('title') ?? '',
				shortDescription: formData.get('shortDescription') ?? '',
				author: formData.get('author') ?? '',
				publishingDate: formData.get('publishingDate') ?? '',
				category: formData.get('category') ?? '',
				tag,
				mainImage: (formData.get('mainImage') as File | null)?.name ?? '',
				markdownContent: formData.get('markdownContent') ?? '',
			};
			const file = formData.get('mainImage');
			uploadedFile = file instanceof File && file.size > 0 ? file : null;
		} else {
			body = (await request.json()) as Record<string, unknown>;
		}

		// Validate form data
		const validationResult = validateArticleForm({
			title: String(body.title ?? ''),
			shortDescription: String(body.shortDescription ?? ''),
			author: String(body.author ?? ''),
			publishingDate: String(body.publishingDate ?? ''),
			category: String(body.category ?? ''),
			tag: Array.isArray(body.tag) ? (body.tag as string[]) : [],
			mainImage: String(body.mainImage ?? ''),
			markdownContent: String(body.markdownContent ?? ''),
		});

		if (!validationResult.isValid) {
			return NextResponse.json(
				{
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

		const {
			title,
			shortDescription,
			author,
			markdownContent,
			publishingDate,
			category,
			mainImage,
		} = validationResult.sanitizedData;

		// Generate and save React component from markdown
		// Use a default article color (can be customized per category later)
		const articleColor = 'FF603B'; // Default color, can be fetched from category if needed

		// Dynamic import for CommonJS modules
		const { saveArticleComponent, titleToPageComponent, titleToSlug, titleToImageName } = await import('../../../../utils/generateArticleComponent.js');
		const { updateArticleIndex } = await import('../../../../utils/updateArticleIndex.js');

		const componentResult = saveArticleComponent(title, markdownContent, articleColor);

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

		// Save article to the articles table (link and image use CYRILLIC_TO_LATIN, no length limit)
		const articleSlug = titleToSlug(title);
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
				const { resizeImage } = await import('../../../../utils/resizer.js');
				const { sizes: imagesSizes } = await import('../../../../utils/imageSizes.js');
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
		}

		try {
			await insertArticleToDB({
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
			});
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

		console.log('Article submitted and saved to DB:', {
			title,
			link: articleLink,
			componentName: componentResult.componentName,
			fileName: componentResult.fileName,
		});

		// Send email notification
		const adminEmails = process.env.ADMIN_NOTIFICATION_EMAILS;

		if (adminEmails) {
			// Parse email addresses (comma or semicolon separated)
			const emailList = adminEmails
				.split(/[,;]/)
				.map(email => email.trim())
				.filter(email => email.length > 0);

			if (emailList.length > 0) {
				const submissionDate = new Date().toLocaleString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
					timeZoneName: 'short',
				});

				const emailSubject = `New Article added, ${title}`;
				const emailText = `
          Hello!
          
          New article was just added:
          
          Title: ${title}
          Date: ${submissionDate}
          Content: ${markdownContent}
        `;

				// Send email (don't await to avoid blocking response)
				sendEmail({
					to: emailList,
					subject: emailSubject,
					text: emailText,
				}).catch(error => {
					console.error('Email notification failed:', error);
					// Don't fail the request if email fails
				});
			}
		}

		// Build list of new files for git; then push and optionally restart (production)
		const filesForGit: string[] = [
			'components/articles/index.js',
		];
		if (componentResult.filePath) {
			filesForGit.push(path.relative(process.cwd(), componentResult.filePath));
		}
		if (savedFileName) {
			filesForGit.push(path.relative(process.cwd(), path.join(BLOG_ARTICLES_IMAGE_DIR, savedFileName)));
			const { sizes: imagesSizes } = await import('../../../../utils/imageSizes.js');
			const webpName = savedFileName.replace(/\.[^.]+$/, '.webp');
			for (const size of imagesSizes as number[]) {
				filesForGit.push(path.join('public', 'assets', 'images', 'blog-articles', 'responsive', String(size), webpName));
			}
		}
		const commitMessage = `Add article: ${title}`;
		const jsonResponse = NextResponse.json({
			success: true,
			message: 'Article submitted successfully',
			component: {
				fileName: componentResult.fileName,
				componentName: componentResult.componentName,
				filePath: componentResult.filePath,
			},
		});
		setImmediate(() => {
			import('../../../../lib/gitPushAndRestart.js').then(({ gitPushAndRestart }) =>
				gitPushAndRestart(filesForGit, commitMessage)
			).catch((err: unknown) => console.error('gitPushAndRestart error', err));
		});
		return jsonResponse;
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

