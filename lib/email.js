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
export async function sendEmail({ to, subject, text }) {
  // Get email configuration from environment variables
  const emailService = process.env.EMAIL_SERVICE || 'smtp'; // 'smtp' or 'http'
  const smtpHost = process.env.SMTP_HOST || 'localhost';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpUser = process.env.SMTP_USER || '';
  const smtpPassword = process.env.SMTP_PASSWORD || '';
  const smtpFrom = process.env.SMTP_FROM || smtpUser || 'noreply@uppr.com.ua';

  // Normalize recipients to array
  const recipients = Array.isArray(to) ? to : [to];

  if (recipients.length === 0) {
    console.error('No email recipients specified');
    return false;
  }

  try {
    if (emailService === 'http' && process.env.EMAIL_API_URL) {
      // Use HTTP API (e.g., SendGrid, Mailgun, etc.)
      return await sendViaHTTP({
        apiUrl: process.env.EMAIL_API_URL,
        apiKey: process.env.EMAIL_API_KEY || '',
        from: smtpFrom,
        to: recipients,
        subject,
        text,
      });
    } else {
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
      });
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Send email via HTTP API (using native fetch)
 * Works with services like SendGrid, Mailgun, Postmark, etc.
 */
async function sendViaHTTP({ apiUrl, apiKey, from, to, subject, text }) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: { email: from },
        personalizations: [
          {
            to: to.map(email => ({ email })),
          },
        ],
        subject,
        content: [
          {
            type: 'text/plain',
            value: text,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP email API error: ${response.status} - ${errorText}`);
    }

    console.log(`Email sent successfully via HTTP API to: ${to.join(', ')}`);
    return true;
  } catch (error) {
    console.error('HTTP email API error:', error);
    throw error;
  }
}

/**
 * Send email via SMTP using Node.js built-in modules
 * Simple implementation for basic SMTP servers
 */
async function sendViaSMTP({ host, port, user, password, from, to, subject, text }) {
  const { createConnection } = await import('net');
  const { connect } = await import('tls');

  return new Promise((resolve, reject) => {
    // Create email message
    const message = createEmailMessage({ from, to, subject, text });

    let socket;
    let responseBuffer = '';
    let state = 'connect';

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
          } else if (state === 'ehlo' && code === 250 && isLastLine) {
            if (user && password) {
              socket.write('AUTH LOGIN\r\n');
              state = 'auth_user';
            } else {
              socket.write(`MAIL FROM: <${from}>\r\n`);
              state = 'mail_from';
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
            socket.write('DATA\r\n');
            state = 'data';
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
        // SSL/TLS connection (port 465)
        socket = connect(port, host, { rejectUnauthorized: false }, () => {
          socket.on('data', handleData);
          socket.on('error', reject);
          socket.on('close', () => {
            if (state !== 'message_sent') {
              reject(new Error('Connection closed unexpectedly'));
            }
          });
        });
      } else {
        // Plain TCP connection (port 25, 587)
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
 * Create email message in RFC 5322 format
 */
function createEmailMessage({ from, to, subject, text }) {
  const date = new Date().toUTCString();
  const messageId = `<${Date.now()}-${Math.random().toString(36).substr(2, 9)}@${process.env.SMTP_HOST || 'localhost'}>`;
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
