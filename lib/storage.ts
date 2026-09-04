import type { QuizType, UserAnswer } from "./types";

function storageKey(type: QuizType) {
  return `legislatives2026-answers-${type}`;
}

export function saveAnswers(type: QuizType, answers: UserAnswer[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(type), JSON.stringify(answers));
}

export function loadAnswers(type: QuizType): UserAnswer[] | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(storageKey(type));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserAnswer[];
  } catch {
    return null;
  }
}
