import { notFound } from "next/navigation";
import { QuizRunner } from "@/components/QuizRunner";
import { quickQuestions } from "@/data/questions.quick";
import { fullQuestions } from "@/data/questions.full";
import type { QuizType } from "@/lib/types";

const QUESTION_SETS: Record<QuizType, typeof quickQuestions> = {
  rapide: quickQuestions,
  complet: fullQuestions,
};

export function generateStaticParams() {
  return [{ type: "rapide" }, { type: "complet" }];
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (type !== "rapide" && type !== "complet") notFound();

  const questions = QUESTION_SETS[type as QuizType];

  return <QuizRunner questions={questions} quizType={type as QuizType} />;
}
