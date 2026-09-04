import type { PartyResult } from "@/lib/types";

export function ResultsChart({ results }: { results: PartyResult[] }) {
  return (
    <ol className="flex flex-col gap-3">
      {results.map((r, i) => (
        <li key={r.party.id} className="flex items-center gap-3">
          <span className="w-5 shrink-0 text-end text-xs text-black/40 dark:text-white/40 tabular-nums">
            {i + 1}
          </span>
          <div className="w-28 shrink-0 truncate text-sm font-medium">
            {r.party.acronym}
          </div>
          <div className="relative h-3 flex-1 rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
            <div
              className="h-3 rounded-full transition-[width]"
              style={{
                width: `${Math.max(r.scorePercent, 2)}%`,
                backgroundColor: r.party.colorHex,
              }}
            />
          </div>
          <span className="w-12 shrink-0 text-end text-sm tabular-nums text-black/70 dark:text-white/70">
            {r.scorePercent}%
          </span>
        </li>
      ))}
    </ol>
  );
}
