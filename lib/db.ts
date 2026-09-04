import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";
import type { QuizType, UserAnswer } from "./types";

// Deliberately minimal schema: no IP, no user agent, no cookie/session id,
// no account link. A submission is a bare, unlinkable fact — see the privacy
// policy for why (quiz answers are political-opinion data, GDPR Art. 9).
const DB_DIR = process.env.DB_DIR ?? path.join(process.cwd(), "var", "db");
const DB_PATH = path.join(DB_DIR, "submissions.sqlite3");

fs.mkdirSync(DB_DIR, { recursive: true });

const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA journal_mode = WAL;");

db.exec(`
  CREATE TABLE IF NOT EXISTS quiz_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_type TEXT NOT NULL CHECK (quiz_type IN ('rapide', 'complet')),
    answers_json TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
  );
`);

const insertStmt = db.prepare(
  `INSERT INTO quiz_submissions (quiz_type, answers_json) VALUES (?, ?)`,
);

export function insertSubmission(quizType: QuizType, answers: UserAnswer[]) {
  insertStmt.run(quizType, JSON.stringify(answers));
}

// Retention: delete submissions older than the stated policy period.
// Call this from a periodic job (see scripts/purge-old-submissions.ts).
const RETENTION_DAYS = 730; // 24 months — keep in sync with the privacy policy copy.

const purgeStmt = db.prepare(
  `DELETE FROM quiz_submissions WHERE created_at < datetime('now', ?)`,
);

export function purgeExpiredSubmissions() {
  const result = purgeStmt.run(`-${RETENTION_DAYS} days`);
  return result.changes;
}

export function countSubmissions() {
  const row = db.prepare(`SELECT COUNT(*) as n FROM quiz_submissions`).get() as {
    n: number;
  };
  return row.n;
}
