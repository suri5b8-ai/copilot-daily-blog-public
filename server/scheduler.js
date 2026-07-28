import cron              from 'node-cron';
import { getTodaysTopic } from './topics-data.js';
import { sendDailyEmail } from './mailer.js';
import { getActiveEmails } from './subscribers.js';

/**
 * Starts the daily email scheduler.
 * Runs at SEND_HOUR:SEND_MINUTE every day (defaults to 08:00).
 */
export function startScheduler() {
  const hour   = process.env.SEND_HOUR   ?? '8';
  const minute = process.env.SEND_MINUTE ?? '0';
  const startDate = process.env.SCHEDULE_START_DATE || '2026-07-28';

  // Cron: minute hour * * *
  const expression = `${minute} ${hour} * * *`;

  console.log(`[scheduler] Daily emails scheduled at ${hour.padStart(2,'0')}:${minute.padStart(2,'0')} (cron: "${expression}")`);
  console.log(`[scheduler] Schedule start date: ${startDate}`);

  cron.schedule(expression, async () => {
    const topic      = getTodaysTopic(startDate);
    const recipients = getActiveEmails();

    console.log(`[scheduler] Firing — Day ${topic.day}: "${topic.title}" → ${recipients.length} subscriber(s)`);

    if (recipients.length === 0) {
      console.log('[scheduler] No active subscribers. Skipping send.');
      return;
    }

    try {
      const result = await sendDailyEmail(topic, recipients);
      console.log(`[scheduler] Done — sent:${result.sent} failed:${result.failed}`);
    } catch (err) {
      console.error('[scheduler] Error sending daily email:', err.message);
    }
  });
}
