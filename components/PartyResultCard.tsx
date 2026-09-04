"use client";

import { useState } from "react";
import type { PartyResult, Question } from "@/lib/types";
import { useDict, useLocale } from "@/lib/locale";
import type { DICT } from "@/lib/dictionary";
import { tPartyDescription, tPartyName, tText } from "@/lib/content";

function agreementLabel(agreement: number | null, r: (typeof DICT)["fr"]["results"]) {
  if (agreement === null) return { label: r.noData, tone: "text-black/40 dark:text-white/40" };
  if (agreement >= 0.75) return { label: r.strong, tone: "text-brand-green" };
  if (agreement >= 0.5) return { label: r.partial, tone: "text-brand-green/70" };
  if (agreement > 0.25)
    return { label: r.partialDisagree, tone: "text-amber-700 dark:text-amber-500" };
  return { label: r.disagree, tone: "text-brand-red" };
}

export function PartyResultCard({
  result,
  questionsById,
}: {
  result: PartyResult;
  questionsById: Map<string, Question>;
}) {
  const [open, setOpen] = useState(false);
  const { locale } = useLocale();
  const dict = useDict();

  return (
    <div className="rounded-xl border border-black/10 bg-surface overflow-hidden dark:border-white/15">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-start"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="h-3 w-3 shrink-0 rounded-full"
            style={{ backgroundColor: result.party.colorHex }}
          />
          <span className="truncate font-medium">
            {tPartyName(result.party, locale)} ({result.party.acronym})
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm tabular-nums text-black/70 dark:text-white/70">
            {result.scorePercent}%
          </span>
          <span className="text-xs text-black/40 dark:text-white/40">
            {open ? "▲" : "▼"}
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-black/10 dark:border-white/15 px-4 py-4">
          <p className="text-sm text-black/70 dark:text-white/70">
            {tPartyDescription(result.party, locale)}
          </p>
          <p className="mt-2 text-xs text-black/40 dark:text-white/40">
            {dict.results.basedOn(result.answeredCount)}
          </p>

          <ul className="mt-4 flex flex-col gap-2">
            {result.breakdown.map((b) => {
              const question = questionsById.get(b.questionId);
              if (!question) return null;
              const { label, tone } = agreementLabel(b.agreement, dict.results);
              return (
                <li
                  key={b.questionId}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="text-black/70 dark:text-white/70">
                    {tText(question, locale)}
                  </span>
                  <span className={`shrink-0 whitespace-nowrap ${tone}`}>
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
