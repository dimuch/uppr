import { NextResponse } from 'next/server';
import { validateArticleForm } from '../../../../services/articleFormValidation';
import { sendEmail } from '../../../../lib/email.js';

/**
 * POST /api/articles/submit
 * Submit a new article and send email notification
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
        { status: 400 }
      );
    }

    if (!validationResult.sanitizedData) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      );
    }

    const { title, markdownContent, publishingDate } = validationResult.sanitizedData;

    // TODO: Save article to database here
    // For now, we'll just log it
    console.log('Article submitted:', {
      title,
      markdownContent: markdownContent.substring(0, 100) + '...',
      publishingDate,
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
        const emailText = `Hallo!

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
    });
  } catch (error) {
    console.error('Article submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

