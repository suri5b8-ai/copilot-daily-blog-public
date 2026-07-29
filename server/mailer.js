import nodemailer from 'nodemailer';
import { WEEKS } from './topics-data.js';

/**
 * Build a Nodemailer transporter from environment variables.
 *
 * Required env vars (set in Railway dashboard — never hardcode):
 *   SMTP_HOST     e.g. smtp.veolia.com
 *   SMTP_PORT     e.g. 587  (or 465 for SSL)
 *   SMTP_SECURE   true = SSL/port 465 | false = STARTTLS/port 587  (default: false)
 *   SMTP_USER     your SMTP login / email address
 *   SMTP_PASS     your SMTP password (stored only in Railway env vars)
 *   SMTP_FROM     display address, e.g. "GitHub Copilot Daily <you@veolia.com>"
 */
function getTransporter() {
  const host   = process.env.SMTP_HOST;
  const port   = parseInt(process.env.SMTP_PORT  || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true';   // true = port 465 SSL
  const user   = process.env.SMTP_USER;
  const pass   = process.env.SMTP_PASS;

  const missing = [...(!host ? ['SMTP_HOST'] : []), ...(!user ? ['SMTP_USER'] : []), ...(!pass ? ['SMTP_PASS'] : [])];
  if (missing.length > 0) {
    throw new Error(`Missing env vars: ${missing.join(', ')} — defined vars: SMTP_HOST=${!!host} SMTP_USER=${!!user} SMTP_PASS=${!!pass}`);
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

/** Verify Gmail SMTP credentials on startup */
export async function verifyConnection() {
  const transporter = getTransporter();
  await transporter.verify();
}

// ── Audience label map ──────────────────────────────────────────────────────
const AUDIENCE = { both: 'Everyone', developer: 'Developers', tester: 'Testers' };
const DIFFICULTY_EMOJI = { Beginner: '🟢', Intermediate: '🟡', Advanced: '🔴' };

// ── Email HTML template ─────────────────────────────────────────────────────
function buildDailyEmailHtml(topic, unsubscribeUrl, blogUrl) {
  const week     = WEEKS.find(w => w.week === topic.week) || { title: 'GitHub Copilot', color: '#2563eb' };
  const keyPts   = (topic.keyPoints || []).slice(0, 5);
  const links    = (topic.links    || []).slice(0, 4);
  const audience = AUDIENCE[topic.audience] || 'Everyone';
  const diffEmoj = DIFFICULTY_EMOJI[topic.difficulty] || '🟢';

  const keyPointsHtml = keyPts.map(p =>
    `<li style="margin:6px 0;padding-left:6px;color:#c9d1d9;font-size:14px;line-height:1.6;">${escHtml(p)}</li>`
  ).join('');

  const linksHtml = links.map(l =>
    `<li style="margin:6px 0;">
      <a href="${escAttr(l.url)}" style="color:${week.color};font-size:13px;text-decoration:none;font-weight:600;">
        ↗ ${escHtml(l.text)}
      </a>
    </li>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Day ${topic.day}: ${escHtml(topic.title)}</title>
</head>
<body style="margin:0;padding:0;background:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#161b22,#1a2332);border-radius:16px 16px 0 0;padding:28px 32px;border:1px solid #30363d;border-bottom:none;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#8b949e;">
              GitHub Copilot Daily
            </p>
            <h1 style="margin:0;font-size:22px;font-weight:800;color:#e6edf3;line-height:1.3;">
              Day ${topic.day} of 42 &mdash; ${escHtml(topic.title)}
            </h1>
            <p style="margin:8px 0 0;font-size:14px;color:#8b949e;">${escHtml(topic.subtitle)}</p>
          </td>
        </tr>

        <!-- Color stripe for week -->
        <tr>
          <td style="background:${week.color};height:4px;"></td>
        </tr>

        <!-- Meta badges -->
        <tr>
          <td style="background:#161b22;padding:14px 32px;border-left:1px solid #30363d;border-right:1px solid #30363d;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <span style="background:${week.color}22;color:${week.color};padding:4px 10px;border-radius:12px;font-size:12px;font-weight:700;">
                    Week ${topic.week}: ${escHtml(week.title)}
                  </span>
                </td>
                <td style="padding-right:12px;">
                  <span style="background:#21262d;color:#8b949e;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:600;">
                    ${diffEmoj} ${escHtml(topic.difficulty)}
                  </span>
                </td>
                <td style="padding-right:12px;">
                  <span style="background:#21262d;color:#8b949e;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:600;">
                    👥 ${audience}
                  </span>
                </td>
                <td>
                  <span style="background:#21262d;color:#8b949e;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:600;">
                    ⏱ ${escHtml(topic.duration)}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Summary -->
        <tr>
          <td style="background:#161b22;padding:0 32px;border-left:1px solid #30363d;border-right:1px solid #30363d;">
            <div style="background:#21262d;border-left:4px solid #58a6ff;padding:16px 20px;border-radius:0 8px 8px 0;margin-bottom:4px;">
              <p style="margin:0;font-size:15px;color:#c9d1d9;line-height:1.7;font-style:italic;">
                ${escHtml(topic.summary)}
              </p>
            </div>
          </td>
        </tr>

        <!-- Key Takeaways -->
        <tr>
          <td style="background:#161b22;padding:24px 32px 8px;border-left:1px solid #30363d;border-right:1px solid #30363d;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#6e7681;">
              ✅ Key Takeaways
            </p>
            <ul style="margin:0;padding-left:18px;list-style-type:disc;">
              ${keyPointsHtml}
            </ul>
          </td>
        </tr>

        <!-- Resources -->
        <tr>
          <td style="background:#161b22;padding:20px 32px;border-left:1px solid #30363d;border-right:1px solid #30363d;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#6e7681;">
              🔗 Resources
            </p>
            <ul style="margin:0;padding:0;list-style:none;">
              ${linksHtml}
            </ul>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#161b22;padding:20px 32px 28px;border-left:1px solid #30363d;border-right:1px solid #30363d;text-align:center;">
            <a href="${escAttr(blogUrl)}"
               style="display:inline-block;background:${week.color};color:#ffffff;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.3px;">
              Open Full Topic in the Blog →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#161b22;border:1px solid #30363d;border-top:1px solid #30363d;border-radius:0 0 16px 16px;padding:16px 32px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#6e7681;line-height:1.6;">
              You're receiving this because you subscribed to GitHub Copilot Daily.<br/>
              <a href="${escAttr(unsubscribeUrl)}" style="color:#58a6ff;text-decoration:underline;">Unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;
}

function buildWelcomeHtml(topic, unsubscribeUrl, blogUrl) {
  const week = WEEKS.find(w => w.week === topic.week) || { title: 'GitHub Copilot', color: '#2563eb' };
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#161b22;border:1px solid #30363d;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#161b22,#1a2332);padding:32px;">
          <p style="margin:0 0 6px;font-size:12px;color:#8b949e;text-transform:uppercase;font-weight:700;letter-spacing:1px;">Welcome!</p>
          <h1 style="margin:0 0 12px;font-size:24px;color:#e6edf3;font-weight:800;">You're subscribed to<br/>GitHub Copilot Daily 🎉</h1>
          <p style="margin:0;font-size:15px;color:#8b949e;line-height:1.7;">
            You'll receive one email every morning with a new GitHub Copilot topic from our 42-day learning journey —
            covering basics through advanced techniques for both developers and testers.
          </p>
        </td></tr>
        <tr><td style="background:${week.color};height:4px;"></td></tr>
        <tr><td style="padding:24px 32px;">
          <p style="margin:0 0 8px;font-size:13px;color:#6e7681;font-weight:600;">TODAY'S TOPIC (Day ${topic.day})</p>
          <p style="margin:0 0 4px;font-size:17px;color:#e6edf3;font-weight:700;">${escHtml(topic.title)}</p>
          <p style="margin:0 0 20px;font-size:13px;color:#8b949e;">${escHtml(topic.subtitle)}</p>
          <a href="${escAttr(blogUrl)}" style="display:inline-block;background:${week.color};color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;">
            Start Learning →
          </a>
        </td></tr>
        <tr><td style="padding:16px 32px;border-top:1px solid #30363d;text-align:center;">
          <p style="margin:0;font-size:12px;color:#6e7681;">
            <a href="${escAttr(unsubscribeUrl)}" style="color:#58a6ff;text-decoration:underline;">Unsubscribe</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// ── Public send functions ────────────────────────────────────────────────────

/** Send the daily topic email to a list of subscriber emails */
export async function sendDailyEmail(topic, subscriberEmails) {
  if (!subscriberEmails.length) return { sent: 0, failed: 0 };
  const transporter = getTransporter();
  const blogUrl  = process.env.BLOG_URL  || 'http://localhost:5173';
  const fromName = process.env.FROM_NAME || 'GitHub Copilot Daily';
  const fromAddr = process.env.SMTP_FROM  || 'noreply-core_dev@harsco.com';

  let sent = 0, failed = 0;

  for (const email of subscriberEmails) {
    const unsubUrl = `${blogUrl}/api/unsubscribe?email=${encodeURIComponent(email)}`;
    try {
      await transporter.sendMail({
        from:    `"${fromName}" <${fromAddr}>`,
        to:      email,
        subject: `Day ${topic.day}/42: ${topic.title} — GitHub Copilot Daily`,
        html:    buildDailyEmailHtml(topic, unsubUrl, blogUrl),
      });
      sent++;
    } catch (err) {
      console.error(`[mailer] Failed to send to ${email}:`, err.message);
      failed++;
    }
  }

  console.log(`[mailer] Daily email Day ${topic.day} → sent:${sent} failed:${failed}`);
  return { sent, failed };
}

/** Send a welcome email immediately after subscription */
export async function sendWelcomeEmail(email, topic) {
  const transporter = getTransporter();
  const blogUrl  = process.env.BLOG_URL  || 'http://localhost:5173';
  const fromName = process.env.FROM_NAME || 'GitHub Copilot Daily';
  const fromAddr = process.env.SMTP_FROM  || 'noreply-core_dev@harsco.com';
  const unsubUrl = `${blogUrl}/api/unsubscribe?email=${encodeURIComponent(email)}`;

  await transporter.sendMail({
    from:    `"${fromName}" <${fromAddr}>`,
    to:      email,
    subject: 'Welcome to GitHub Copilot Daily! 🚀',
    html:    buildWelcomeHtml(topic, unsubUrl, blogUrl),
  });
  console.log(`[mailer] Welcome email sent to ${email}`);
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(str) {
  return String(str ?? '').replace(/"/g,'%22').replace(/'/g,'%27');
}
