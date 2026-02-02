/**
 * Email notification utility using Node.js built-in modules
 * Sends emails via HTTP API (Resend) or SMTP.
 *
 * On Digital Ocean, outbound SMTP ports 25, 465, and 587 are blocked.
 * Use RESEND_API_KEY (HTTP API) for reliable delivery on DO, or SMTP on port 2525
 * if your provider supports it (e.g. Mailgun, SendGrid).
 */

/**
 * Send email via Resend HTTP API (works on Digital Ocean; no SMTP ports needed).
 * @param {Object} opts - { apiKey, from, to, subject, text }
 * @returns {Promise<boolean>}
 */
async function sendViaResend({ apiKey, from, to, subject, text }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
    }),
  });

  console.log('res ==> ', res);

  if (!res.ok) {
    const body = await res.text();
    const err = new Error(`Resend API error ${res.status}: ${body}`);
    err.resendBody = body;
    throw err;
  }
  return true;
}

/**
 * Send email notification
 * Uses Resend API if RESEND_API_KEY is set (recommended on Digital Ocean).
 * Otherwise uses SMTP (ports 25/465/587 are blocked on DO; use port 2525 if your provider supports it).
 *
 * @param {Object} options - Email options
 * @param {string|string[]} options.to - Recipient email(s)
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Email body text
 * @returns {Promise<boolean>} - Success status
 */
export async function sendEmail({ to, subject, text }) {
  const recipients = Array.isArray(to) ? to : [to];
  if (recipients.length === 0) {
    console.error('[email] No recipients specified');
    return false;
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpFrom = process.env.SMTP_FROM || 'noreply@uppr.com.ua';
  const resendFrom = process.env.RESEND_FROM || smtpFrom;

  if (resendApiKey) {
    try {
      const ok = await sendViaResend({
        apiKey: resendApiKey,
        from: resendFrom,
        to: recipients,
        subject,
        text,
      });
      if (ok) {
        console.log('[email] Sent via Resend to', recipients.join(', '));
      }
      return ok;
    } catch (error) {
      console.error('[email] Resend failed:', error?.message || error);
      if (error?.resendBody) console.error('[email] Resend response:', error.resendBody);
      return false;
    }
  }
}

/**
 * Send notification email when a new article is submitted.
 * Recipients are taken from ADMIN_NOTIFICATION_EMAILS (comma or semicolon separated).
 * Does nothing if env is not set or empty. Returns a promise that resolves when send completes
 * (or when there are no recipients); caller can .catch() to log failures without failing the request.
 *
 * @param {Object} options
 * @param {string} options.title - Article title
 * @param {string} options.markdownContent - Article markdown content
 * @returns {Promise<void>}
 */
export function sendNewArticleNotification({ title, markdownContent }) {
  const adminEmails = process.env.ADMIN_NOTIFICATION_EMAILS;
  if (!adminEmails) {
    return Promise.resolve();
  }

  const emailList = adminEmails
    .split(/[,;]/)
    .map((email) => email.trim())
    .filter((email) => email.length > 0);

  if (emailList.length === 0) {
    return Promise.resolve();
  }

  const submissionDate = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  const subject = `New Article added, ${title}`;
  const text = `
    Hello!
    
    New article was just added:
    
    Title: ${title}
    Date: ${submissionDate}
    Content: ${markdownContent}
    `;

  console.log('[email] Sending new-article notification to', emailList.join(', '));
  return sendEmail({
    to: emailList,
    subject,
    text,
  }).then((ok) => {
    if (!ok) {
      throw new Error('sendEmail returned false');
    }
  }).catch((error) => {
    console.error('[email] New-article notification failed:', error?.message || error);
    throw error;
  });
}