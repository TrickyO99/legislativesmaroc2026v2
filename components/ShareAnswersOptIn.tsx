"use client";

import { useState } from "react";
import { useDict } from "@/lib/locale";
import type { QuizType, UserAnswer } from "@/lib/types";

type Status = "idle" | "sending" | "sent" | "error";

export function ShareAnswersOptIn({
  quizType,
  answers,
}: {
  quizType: QuizType;
  answers: UserAnswer[];
}) {
  const dict = useDict();
  const [status, setStatus] = useState<Status>("idle");
  const copy = dict.results.shareOptIn;

  async function share() {
    setStatus("sending");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizType, answers }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-surface p-5 dark:border-white/15">
      <h3 className="text-sm font-semibold text-black/80 dark:text-white/80">
        {copy.title}
      </h3>
      <p className="mt-1.5 text-sm text-black/60 dark:text-white/60">
        {copy.description}
      </p>
      {status === "sent" ? (
        <p className="mt-3 text-sm font-medium text-brand-green">{copy.sent}</p>
      ) : (
        <button
          onClick={share}
          disabled={status === "sending"}
          className="mt-3 rounded-full border border-black/15 px-4 py-2 text-sm font-medium disabled:opacity-60 dark:border-white/20"
        >
          {status === "sending" ? copy.sending : copy.cta}
        </button>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{copy.error}</p>
      )}
    </div>
  );
}
