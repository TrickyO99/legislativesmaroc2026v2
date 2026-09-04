import { NextRequest, NextResponse } from "next/server";
import { insertSubmission } from "@/lib/db";
import type { AnswerValue, QuizType, UserAnswer } from "@/lib/types";

// In-memory only, never persisted to disk — just enough to blunt abuse.
// Resets on every server restart, and is never joined to the stored
// submissions, so it can't be used to re-identify anyone later.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function isValidAnswer(a: unknown): a is UserAnswer {
  if (typeof a !== "object" || a === null) return false;
  const rec = a as Record<string, unknown>;
  const validValue: AnswerValue[] = [-2, -1, 0, 1, 2, null];
  return (
    typeof rec.questionId === "string" &&
    validValue.includes(rec.value as AnswerValue) &&
    (rec.weight === 1 || rec.weight === 2)
  );
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { quizType, answers } = (body ?? {}) as {
    quizType?: unknown;
    answers?: unknown;
  };

  if (quizType !== "rapide" && quizType !== "complet") {
    return NextResponse.json({ error: "invalid_quiz_type" }, { status: 400 });
  }
  if (!Array.isArray(answers) || answers.length === 0 || answers.length > 200) {
    return NextResponse.json({ error: "invalid_answers" }, { status: 400 });
  }
  if (!answers.every(isValidAnswer)) {
    return NextResponse.json({ error: "invalid_answer_shape" }, { status: 400 });
  }

  insertSubmission(quizType as QuizType, answers as UserAnswer[]);

  return NextResponse.json({ ok: true }, { status: 201 });
}
