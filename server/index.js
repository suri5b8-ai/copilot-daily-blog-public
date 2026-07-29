import 'dotenv/config';
import express        from 'express';
import cors           from 'cors';
import { addSubscriber, removeSubscriber, getCount, getActiveEmails } from './subscribers.js';
import { sendWelcomeEmail, sendDailyEmail, verifyConnection }         from './mailer.js';
import { getTodaysTopic }                                              from './topics-data.js';
import { startScheduler }                                             from './scheduler.js';

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ───────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://copilot-blog-frontend.onrender.com',
  /\.up\.railway\.app$/,   // any Railway preview URL
];
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json());

// Simple input validation helper (no external library needed)
function isValidEmail(email) {
  return typeof email === 'string' &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ── Routes ───────────────────────────────────────────────────────────────────

/** GET /api/health  — liveness check */
app.get('/api/health', (_req, res) => {
  const startDate = process.env.SCHEDULE_START_DATE || '2026-07-28';
  const today     = getTodaysTopic(startDate);
  res.json({
    status:   'ok',
    day:      today.day,
    topic:    today.title,
    count:    getCount(),
    sendTime: `${process.env.SEND_HOUR ?? 8}:${String(process.env.SEND_MINUTE ?? 0).padStart(2,'0')}`,
  });
});

/** POST /api/subscribe  — register a new subscriber */
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const result = addSubscriber(email);

  if (result.alreadyExists) {
    return res.status(409).json({ error: 'This email is already subscribed.' });
  }

  // Send welcome email (non-blocking — don't fail the request if email fails)
  const startDate = process.env.SCHEDULE_START_DATE || '2026-07-28';
  const topic     = getTodaysTopic(startDate);
  sendWelcomeEmail(email, topic).catch(err =>
    console.error('[subscribe] Welcome email failed:', err.message)
  );

  return res.status(201).json({
    message: `Successfully subscribed! Watch for your welcome email at ${email}.`,
    day:     topic.day,
    topic:   topic.title,
  });
});

/** DELETE /api/unsubscribe  — remove a subscriber (from unsubscribe link) */
app.delete('/api/unsubscribe', (req, res) => {
  const email = req.body?.email || req.query?.email;
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const result = removeSubscriber(email);
  if (result.notFound) {
    return res.status(404).json({ error: 'Email not found in subscriber list.' });
  }

  return res.json({ message: `${email} has been unsubscribed.` });
});

/** GET /api/unsubscribe?email=…  — one-click unsubscribe from email link */
app.get('/api/unsubscribe', (req, res) => {
  const { email } = req.query;
  if (!isValidEmail(email)) {
    return res.status(400).send('<p>Invalid unsubscribe link.</p>');
  }
  removeSubscriber(email);
  res.send(`
    <!DOCTYPE html><html><head><meta charset="UTF-8"/>
    <style>body{background:#0d1117;color:#e6edf3;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;}</style>
    </head><body>
    <div style="text-align:center;max-width:400px">
      <h2>Unsubscribed</h2>
      <p style="color:#8b949e;">${email} has been removed from GitHub Copilot Daily.</p>
      <a href="${process.env.BLOG_URL || 'http://localhost:5173'}" style="color:#58a6ff;">Return to the blog</a>
    </div></body></html>
  `);
});

/** GET /api/subscribers/count  — public subscriber count */
app.get('/api/subscribers/count', (_req, res) => {
  res.json({ count: getCount() });
});

/** GET /api/env-check  — debug: shows which SMTP vars are defined (no values) */
app.get('/api/env-check', (_req, res) => {
  const vars = ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','SMTP_FROM','SMTP_SECURE'];
  const result = {};
  vars.forEach(k => { result[k] = !!process.env[k]; });
  res.json(result);
});

/**
 * GET /api/test-email  — send a single test email and return result synchronously.
 */
app.get('/api/test-email', async (req, res) => {
  try {
    const { sendWelcomeEmail } = await import('./mailer.js');
    const topic = getTodaysTopic(process.env.SCHEDULE_START_DATE || '2026-07-28');
    await sendWelcomeEmail(process.env.TEST_RECIPIENT || process.env.GMAIL_USER, topic);
    res.json({ ok: true, message: `Test email sent to ${process.env.TEST_RECIPIENT || process.env.GMAIL_USER}` });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

/**
 * POST /api/send-today  — manually trigger today's email (admin use / testing).
 * Protected by a simple token check.
 */
app.post('/api/send-today', (req, res) => {
  const adminToken = process.env.ADMIN_TOKEN;
  if (adminToken && req.headers['x-admin-token'] !== adminToken) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  const startDate  = process.env.SCHEDULE_START_DATE || '2026-07-28';
  const topic      = getTodaysTopic(startDate);
  const recipients = getActiveEmails();

  if (recipients.length === 0) {
    return res.status(200).json({ message: 'No active subscribers.', sent: 0, failed: 0 });
  }

  // Respond immediately — send emails in the background to avoid timeout
  res.json({ message: `Day ${topic.day} email queued for ${recipients.length} recipients.`, topic: topic.title, queued: recipients.length });

  setImmediate(async () => {
    try {
      const result = await sendDailyEmail(topic, recipients);
      console.log(`[send-today] Done — sent:${result.sent} failed:${result.failed}`);
    } catch (err) {
      console.error('[send-today] Error:', err.message);
    }
  });
});

// ── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, async () => {
  console.log(`\n🚀 GitHub Copilot Daily — Email Server`);
  console.log(`   Listening on http://localhost:${PORT}`);
  console.log(`   Schedule start: ${process.env.SCHEDULE_START_DATE || '2026-07-28'}`);

  // Verify Gmail SMTP credentials on startup (non-fatal)
  try {
    await verifyConnection();
    console.log('   ✅ Gmail SMTP verified');
  } catch (err) {
    console.warn(`   ⚠️  Gmail not configured — set GMAIL_USER and GMAIL_APP_PASSWORD in server/.env`);
    console.warn(`      (${err.message})`);
  }

  // Start the daily cron scheduler
  startScheduler();
  console.log('');
});
