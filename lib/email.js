/**
 * Email notification utility using Node.js built-in modules
 * Sends emails via SMTP without third-party libraries
 *
 * Uses native fetch API for email services that support HTTP APIs
 * Falls back to SMTP via net/tls modules if needed
 */

/**
 * Send email notification
 * @param {Object} options - Email options
 * @param {string|string[]} options.to - Recipient email(s)
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Email body text
 * @returns {Promise<boolean>} - Success status
 */
export async function sendEmail({to, subject, text}) {
  // Get email configuration from environment variables
  const emailService = process.env.EMAIL_SERVICE || 'smtp'; // 'smtp' or 'http'
  const smtpHost = process.env.SMTP_HOST || 'localhost';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpUser = process.env.SMTP_USER || '';
  const smtpPassword = process.env.SMTP_PASSWORD || '';
  const smtpFrom = process.env.SMTP_FROM || smtpUser || 'noreply@uppr.com.ua';
  const smtpUseTLS = process.env.SMTP_USE_TLS !== 'false';

  // Normalize recipients to array
  const recipients = Array.isArray(to) ? to : [to];

  if (recipients.length === 0) {
    console.error('No email recipients specified');
    return false;
  }
  try {
    // Use SMTP (default)
    return await sendViaSMTP({
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      password: smtpPassword,
      from: smtpFrom,
      to: recipients,
      subject,
      text,
      useTLS: smtpUseTLS,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Send email via SMTP using Node.js built-in modules
 * Simple implementation for basic SMTP servers
 */
async function sendViaSMTP({host, port, user, password, from, to, subject, text, useTLS = true}) {
  const {createConnection} = await import('net');
  const {connect} = await import('tls');

  return new Promise((resolve, reject) => {
    // Create email message
    const message = createEmailMessage({
      from, to, subject, text
    });

    let socket;
    let responseBuffer = '';
    let state = 'connect';
    let startTLSRequired = false;
    let ehloResponse = '';

    const handleData = (data) => {
      responseBuffer += data.toString();
      const lines = responseBuffer.split('\r\n');
      responseBuffer = lines.pop() || '';

      for (const line of lines) {
        if (line.length === 0) continue;

        const code = parseInt(line.substring(0, 3), 10);
        const isLastLine = !line[3] || line[3] === ' ';

        if (code >= 200 && code < 400) {
          // Success response
          if (state === 'connect' && code === 220) {
            socket.write('EHLO ' + host + '\r\n');
            state = 'ehlo';
          } else if (state === 'ehlo') {
            // Collect EHLO response lines
            ehloResponse += line + '\r\n';
            if (code === 250 && isLastLine) {
              // Check if STARTTLS is supported
              const supportsSTARTTLS = ehloResponse.toUpperCase().includes('STARTTLS');

              // Port 587 typically requires STARTTLS, or if useTLS is true and STARTTLS is supported
              if ((port === 587 || useTLS) && supportsSTARTTLS && !startTLSRequired) {
                socket.write('STARTTLS\r\n');
                state = 'starttls';
                startTLSRequired = true;
              } else if (user && password) {
                socket.write('AUTH LOGIN\r\n');
                state = 'auth_user';
              } else {
                socket.write(`MAIL FROM: <${from}>\r\n`);
                state = 'mail_from';
              }
            }
          } else if (state === 'starttls' && code === 220) {
            // STARTTLS accepted, upgrade connection
            const plainSocket = socket;
            socket = connect(
              {
                socket: plainSocket, rejectUnauthorized: false
              },
              () => {
                // After TLS upgrade, send EHLO again
                socket.write('EHLO ' + host + '\r\n');
                ehloResponse = '';
                state = 'ehlo_tls';
              }
            );
            socket.on('data', handleData);
            socket.on('error', reject);
          } else if (state === 'ehlo_tls') {
            // Collect EHLO response after TLS
            ehloResponse += line + '\r\n';
            if (code === 250 && isLastLine) {
              if (user && password) {
                socket.write('AUTH LOGIN\r\n');
                state = 'auth_user';
              } else {
                socket.write(`MAIL FROM: <${from}>\r\n`);
                state = 'mail_from';
              }
            }
          } else if (state === 'auth_user' && code === 334) {
            socket.write(Buffer.from(user).toString('base64') + '\r\n');
            state = 'auth_pass';
          } else if (state === 'auth_pass' && code === 334) {
            socket.write(Buffer.from(password).toString('base64') + '\r\n');
            state = 'auth_result';
          } else if (state === 'auth_result' && code === 235) {
            socket.write(`MAIL FROM: <${from}>\r\n`);
            state = 'mail_from';
          } else if (state === 'mail_from' && code === 250) {
            socket.write(`RCPT TO: <${to[0]}>\r\n`);
            state = 'rcpt_to';
          } else if (state === 'rcpt_to' && code === 250) {
            if (to.length > 1) {
              // Send to next recipient
              socket.write(`RCPT TO: <${to[1]}>\r\n`);
              to.shift(); // Remove first recipient
            } else {
              socket.write('DATA\r\n');
              state = 'data';
            }
          } else if (state === 'data' && code === 354) {
            socket.write(message + '\r\n.\r\n');
            state = 'message_sent';
          } else if (state === 'message_sent' && code === 250) {
            socket.write('QUIT\r\n');
            socket.end();
            resolve(true);
            return;
          }
        } else {
          // Error response
          socket.destroy();
          reject(new Error(`SMTP error: ${line}`));
          return;
        }
      }
    };

    const connectSocket = () => {
      if (port === 465) {
        // SSL/TLS connection (port 465) - direct TLS
        socket = connect(port, host, {
          rejectUnauthorized: false
        }, () => {
          socket.on('data', handleData);
          socket.on('error', reject);
          socket.on('close', () => {
            if (state !== 'message_sent') {
              reject(new Error('Connection closed unexpectedly'));
            }
          });
        });
      } else {
        // Plain TCP connection (port 25, 587) - will use STARTTLS if needed
        socket = createConnection(port, host, () => {
          socket.on('data', handleData);
          socket.on('error', reject);
          socket.on('close', () => {
            if (state !== 'message_sent') {
              reject(new Error('Connection closed unexpectedly'));
            }
          });
        });
      }
    };

    connectSocket();

    // Timeout after 30 seconds
    setTimeout(() => {
      if (socket && !socket.destroyed) {
        socket.destroy();
        reject(new Error('SMTP connection timeout'));
      }
    }, 30000);
  });
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
export function sendNewArticleNotification({title, markdownContent}) {
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

  console.log('Sending email notification:');
  return sendEmail({
    to: emailList,
    subject,
    text,
  }).catch((error) => {
    console.error('Email notification failed:', error);
  });
}

/**
 * Create email message in RFC 5322 format
 */
function createEmailMessage({from, to, subject, text}) {
  const date = new Date().toUTCString();
  const messageId = `
    <${Date.now()}-${Math.random().toString(36).substr(2, 9)}@${process.env.SMTP_HOST || 'localhost'}>
  `;
  const recipients = Array.isArray(to) ? to.join(', ') : to;

  return [
    `From: ${from}`,
    `To: ${recipients}`,
    `Subject: ${subject}`,
    `Date: ${date}`,
    `Message-ID: ${messageId}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: 7bit`,
    '',
    text,
  ].join('\r\n');
}
