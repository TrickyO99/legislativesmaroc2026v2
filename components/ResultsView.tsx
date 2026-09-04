"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ResultsChart } from "./ResultsChart";
import { PartyResultCard } from "./PartyResultCard";
import { ShareAnswersOptIn } from "./ShareAnswersOptIn";
import { AdSlot } from "./AdSlot";
import { computeResults, rankResults } from "@/lib/scoring";
import { loadAnswers } from "@/lib/storage";
import { parties } from "@/data/parties";
import { quickQuestions } from "@/data/questions.quick";
import { quickPositions } from "@/data/positions.quick";
import { fullQuestions } from "@/data/questions.full";
import { fullPositions } from "@/data/positions.full";
import type { QuizType } from "@/lib/types";
import { useDict } from "@/lib/locale";

export function ResultsView() {
  const searchParams = useSearchParams();
  const dict = useDict();
  const typeParam = searchParams.get("type");
  const quizType: QuizType = typeParam === "complet" ? "complet" : "rapide";

  const { questions, positions } =
    quizType === "complet"
      ? { questions: fullQuestions, positions: fullPositions }
      : { questions: quickQuestions, positions: quickPositions };

  const answers = useMemo(() => loadAnswers(quizType), [quizType]);

  const questionsById = useMemo(
    () => new Map(questions.map((q) => [q.id, q])),
    [questions],
  );

  const ranked = useMemo(() => {
    if (!answers) return null;
    return rankResults(computeResults(answers, parties, positions));
  }, [answers, positions]);

  if (!answers || !ranked) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-black/70 dark:text-white/70">
          {dict.results.noAnswers}
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium text-white"
        >
          {dict.results.startCta}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-red-deep dark:text-white">
        {dict.results.title}
      </h1>
      <p className="mt-2 text-sm text-black/60 dark:text-white/60">
        {dict.results.subtitle(
          quizType === "complet" ? dict.results.fullLabel : dict.results.quickLabel,
        )}
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-surface p-6 dark:border-white/15">
        <ResultsChart results={ranked} />
      </div>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
        {dict.results.detailHeading}
      </h2>
      <div className="mt-3 flex flex-col gap-2">
        {ranked.map((r) => (
          <PartyResultCard
            key={r.party.id}
            result={r}
            questionsById={questionsById}
          />
        ))}
      </div>

      <AdSlot slot="results-inline" className="mt-8" />

      <ShareAnswersOptIn quizType={quizType} answers={answers} />

      <p className="mt-8 text-xs text-black/40 dark:text-white/40">
        {dict.results.disclaimer}{" "}
        <Link href="/methodologie" className="underline">
          {dict.results.disclaimerLink}
        </Link>
        .
      </p>
    </div>
  );
}
