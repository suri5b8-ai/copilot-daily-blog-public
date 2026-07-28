import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH   = path.join(__dirname, 'data', 'subscribers.json');

function read() {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch {
    return { subscribers: [] };
  }
}

function write(data) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}

/** Add a subscriber. Returns { ok, alreadyExists } */
export function addSubscriber(email) {
  const db = read();
  const exists = db.subscribers.some(s => s.email.toLowerCase() === email.toLowerCase());
  if (exists) return { ok: false, alreadyExists: true };

  db.subscribers.push({
    email:     email.toLowerCase().trim(),
    createdAt: new Date().toISOString(),
    active:    true,
  });
  write(db);
  return { ok: true, alreadyExists: false };
}

/** Remove a subscriber. Returns { ok, notFound } */
export function removeSubscriber(email) {
  const db = read();
  const before = db.subscribers.length;
  db.subscribers = db.subscribers.filter(s => s.email.toLowerCase() !== email.toLowerCase());
  if (db.subscribers.length === before) return { ok: false, notFound: true };
  write(db);
  return { ok: true, notFound: false };
}

/** Return all active subscriber email addresses */
export function getActiveEmails() {
  return read().subscribers.filter(s => s.active).map(s => s.email);
}

/** Return total count */
export function getCount() {
  return read().subscribers.length;
}
