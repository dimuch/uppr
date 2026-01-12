import { NextResponse } from 'next/server';
import { validateArticleForm } from '../../../../services/articleFormValidation';
import { sendEmail } from '../../../../lib/email.js';

/**
 * POST /api/articles/submit
 * Submit a new article, generate React component, and send email notification
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formData = body;

    // Validate form data
    const validationResult = validateArticleForm(formData);

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

    const { title, markdownContent, publishingDate, category } = validationResult.sanitizedData;

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

    // TODO: Save article to database here
    // Include: title, markdownContent, publishingDate, category, tag, author, mainImage
    // Also save: componentName (for pageComponent field), fileName
    console.log('Article submitted:', {
      title,
      markdownContent: markdownContent.substring(0, 100) + '...',
      publishingDate,
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

