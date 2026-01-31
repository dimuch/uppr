import { NextResponse } from 'next/server';
import { validateArticleForm } from '../../../../services/articleFormValidation';
import { sendEmail } from '../../../../lib/email.js';
import { insertArticleToDB } from '../../../../services/blogData.js';

/**
 * POST /api/articles/submit
 * Submit a new article, generate React component, and send email notification
 */
export async function POST(request: Request) {
	try {
		const body = await request.json();
		// Validate form data
		const validationResult = validateArticleForm(body);

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
		const { saveArticleComponent } = await import('../../../../utils/generateArticleComponent.js');
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

		// Save article to the articles table (link matches existing pattern: /blog/articles/{slug})
		const articleSlug = (componentResult.fileName ?? '').replace(/\.js$/, '');
		const articleLink = `/blog/articles/${articleSlug}`;
		const publishedMySQL = new Date(publishingDate)
			.toISOString()
			.slice(0, 19)
			.replace('T', ' ');

		// Image path: /assets/images/blog-articles/ + name from title (max 40 chars, spaces → _)
		const imageNameFromTitle = title
			.trim()
			.replace(/\s+/g, '_')
			.replace(/[/\\:*?"<>|]/g, '')
			.slice(0, 40);
		const articleImagePath = `/assets/images/blog-articles/${imageNameFromTitle}_main.jpg`;

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
				pageComponent: componentResult.componentName,
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

