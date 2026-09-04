"use client";

import type { AnswerValue, PositionValue } from "@/lib/types";
import { useDict } from "@/lib/locale";

// Rendered strongest-agree to strongest-disagree, top to bottom.
const VALUES: PositionValue[] = [2, 1, 0, -1, -2];
const ICONS = ["✅", "👍", "↔️", "👎", "❌"];
const TONES = [
  "text-brand-green",
  "text-brand-green",
  "text-black/50 dark:text-white/50",
  "text-amber-600 dark:text-amber-500",
  "text-brand-red",
];

export function LikertScale({
  value,
  onChange,
}: {
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const dict = useDict();
  // dict.quiz.likert is ordered [-2..2]; map to our [2..-2] render order.
  const labelFor = (v: PositionValue) => dict.quiz.likert[v + 2];

  return (
    <div className="flex flex-col gap-2">
      {VALUES.map((v, i) => (
        <button
          key={String(v)}
          type="button"
          onClick={() => onChange(v)}
          aria-pressed={value === v}
          className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-start text-sm transition ${
            value === v
              ? "border-brand-red bg-brand-red/5"
              : "border-black/10 hover:border-brand-red/50 dark:border-white/15"
          }`}
        >
          <span className={`text-base ${TONES[i]}`}>{ICONS[i]}</span>
          <span>{labelFor(v)}</span>
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        className={`flex items-center gap-3 rounded-xl border border-dashed px-4 py-3 text-start text-sm transition ${
          value === null
            ? "border-brand-red bg-brand-red/5 text-brand-red"
            : "border-black/20 text-black/50 hover:border-brand-red/50 dark:border-white/25 dark:text-white/50"
        }`}
      >
        <span className="text-base">❓</span>
        <span>{dict.quiz.noOpinion}</span>
      </button>
    </div>
  );
}
