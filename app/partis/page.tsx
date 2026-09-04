"use client";

import { parties } from "@/data/parties";
import { useDict, useLocale } from "@/lib/locale";
import { tPartyDescription, tPartyLeader, tPartyName, tPartyTags } from "@/lib/content";

export default function PartisPage() {
  const { locale } = useLocale();
  const dict = useDict();
  const leaderSep = locale === "fr" ? " : " : ": ";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-brand-red-deep dark:text-white">{dict.partis.title}</h1>
      <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">
        {dict.partis.subtitle(parties.length)}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {parties.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-black/10 bg-surface p-5 dark:border-white/15"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: p.colorHex }}
              />
              <h2 className="font-semibold">
                {tPartyName(p, locale)}{" "}
                <span className="text-black/50 dark:text-white/50">
                  ({p.acronym})
                </span>
              </h2>
            </div>
            {p.leader && (
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {dict.partis.leader}
                {leaderSep}
                {tPartyLeader(p, locale)}
              </p>
            )}
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              {tPartyDescription(p, locale)}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tPartyTags(p, locale).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/[0.05] dark:bg-white/[0.08] px-2.5 py-0.5 text-xs text-black/60 dark:text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-xs text-black/40 dark:text-white/40">
              {p.foundedYear && <span>{dict.partis.founded(p.foundedYear)}</span>}
              {p.lastElectionSeats !== undefined && (
                <span>{dict.partis.seats(p.lastElectionSeats)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
