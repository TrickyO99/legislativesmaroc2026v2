"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LikertScale } from "./LikertScale";
import { saveAnswers } from "@/lib/storage";
import { CATEGORY_LABELS, type AnswerValue, type Question, type QuizType } from "@/lib/types";
import { useDict, useLocale } from "@/lib/locale";
import { tExplainer, tSource, tText } from "@/lib/content";

export function QuizRunner({
  questions,
  quizType,
}: {
  questions: Question[];
  quizType: QuizType;
}) {
  const router = useRouter();
  const { locale } = useLocale();
  const dict = useDict();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, { value: AnswerValue; weight: 1 | 2 }>
  >({});
  const [contextOpen, setContextOpen] = useState(false);

  const question = questions[index];
  const current = answers[question.id];
  const progress = Math.round((index / questions.length) * 100);
  const isLast = index === questions.length - 1;
  const canAdvance = current !== undefined;
  const answeredCount = Object.keys(answers).length;
  const isRapide = quizType === "rapide";

  useEffect(() => {
    setContextOpen(false);
  }, [question.id]);

  const answeredList = useMemo(
    () =>
      questions.map((q) => ({
        questionId: q.id,
        value: answers[q.id]?.value ?? null,
        weight: answers[q.id]?.weight ?? 1,
      })),
    [answers, questions],
  );

  function setValue(value: AnswerValue) {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { value, weight: prev[question.id]?.weight ?? 1 },
    }));
  }

  function toggleWeight() {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: {
        value: prev[question.id]?.value ?? null,
        weight: prev[question.id]?.weight === 2 ? 1 : 2,
      },
    }));
  }

  function goNext() {
    if (isLast) {
      saveAnswers(quizType, answeredList);
      router.push(`/resultats?type=${quizType}`);
      return;
    }
    setIndex((i) => i + 1);
  }

  function goPrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="flex items-center justify-between text-xs text-black/50 dark:text-white/50">
        <span className="font-medium">
          {isRapide ? "⚡" : "🎯"} {isRapide ? dict.home.quickTitle : dict.home.fullTitle} —{" "}
          {questions.length} {dict.home.statQuestions.toLowerCase()}
        </span>
        <span>{dict.quiz.savedCount(answeredCount)}</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs text-black/50 dark:text-white/50">
          {dict.quiz.question(index + 1, questions.length)}
        </p>
        <Link href="/" className="text-xs text-black/40 hover:text-brand-red dark:text-white/40">
          {dict.quiz.quit}
        </Link>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10">
        <div
          className="h-1.5 rounded-full bg-brand-green transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-surface p-6 dark:border-white/15">
        <span className="inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red">
          {CATEGORY_LABELS[question.category][locale]}
        </span>

        <h2 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug">
          {tText(question, locale)}
        </h2>

        {question.explainer && (
          <div className="mt-2">
            <button
              type="button"
              onClick={() => setContextOpen((o) => !o)}
              className="inline-flex items-center gap-1 text-xs text-black/50 underline decoration-dotted hover:text-brand-red dark:text-white/50"
            >
              <span>{contextOpen ? "▾" : "?"}</span> {dict.quiz.context}
            </button>
            {contextOpen && (
              <div className="mt-2 rounded-lg bg-black/[0.03] p-3 text-sm text-black/70 dark:bg-white/5 dark:text-white/70">
                <p>{tExplainer(question, locale)}</p>
                {question.source && (
                  <p className="mt-2 text-xs text-black/40 dark:text-white/40">
                    {dict.quiz.sourceLabel} {tSource(question, locale)}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-6">
          <LikertScale value={current?.value} onChange={setValue} />
        </div>

        <label className="mt-4 flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
          <input
            type="checkbox"
            checked={current?.weight === 2}
            onChange={toggleWeight}
            className="h-4 w-4 accent-brand-green"
          />
          {dict.quiz.weightLabel}
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm text-black/60 disabled:opacity-30 dark:border-white/20 dark:text-white/60"
        >
          {dict.quiz.prev}
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canAdvance}
          className="rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {isLast ? dict.quiz.finish : dict.quiz.next}
        </button>
      </div>
    </div>
  );
}
