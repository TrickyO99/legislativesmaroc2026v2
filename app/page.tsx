"use client";

import Link from "next/link";
import { useMemo } from "react";
import { parties } from "@/data/parties";
import { quickQuestions } from "@/data/questions.quick";
import { fullQuestions } from "@/data/questions.full";
import { useDict, useLocale } from "@/lib/locale";
import { tSource } from "@/lib/content";

export default function HomePage() {
  const { locale } = useLocale();
  const dict = useDict();

  const totalQuestions = quickQuestions.length + fullQuestions.length;
  const sourceCount = useMemo(() => {
    const all = [...quickQuestions, ...fullQuestions];
    const set = new Set(all.map((q) => tSource(q, "fr")).filter(Boolean));
    return set.size;
  }, []);

  const guarantees = [
    { icon: "🔒", tone: "bg-brand-red/10 text-brand-red", title: dict.home.guarantee1Title, desc: dict.home.guarantee1Desc },
    { icon: "🚫", tone: "bg-black/[0.06] text-black/60 dark:bg-white/10 dark:text-white/60", title: dict.home.guarantee2Title, desc: dict.home.guarantee2Desc },
    { icon: "🤝", tone: "bg-brand-green/10 text-brand-green", title: dict.home.guarantee3Title, desc: dict.home.guarantee3Desc },
    { icon: "👁️", tone: "bg-amber-500/10 text-amber-700 dark:text-amber-500", title: dict.home.guarantee4Title, desc: dict.home.guarantee4Desc },
    { icon: "⚖️", tone: "bg-brand-red/10 text-brand-red", title: dict.home.guarantee5Title, desc: dict.home.guarantee5Desc },
    { icon: "🧭", tone: "bg-brand-green/10 text-brand-green", title: dict.home.guarantee6Title, desc: dict.home.guarantee6Desc },
  ];

  const steps = [
    { n: 1, title: dict.home.step1Title, desc: dict.home.step1Desc },
    { n: 2, title: dict.home.step2Title, desc: dict.home.step2Desc },
    { n: 3, title: dict.home.step3Title, desc: dict.home.step3Desc },
    { n: 4, title: dict.home.step4Title, desc: dict.home.step4Desc },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex justify-center">
        <span className="rounded-full border border-black/10 bg-surface px-3 py-1 text-xs font-medium text-black/60 dark:border-white/15 dark:text-white/60">
          {dict.home.badge}
        </span>
      </div>
      <h1 className="mt-4 text-center text-3xl sm:text-4xl font-bold tracking-tight text-brand-red-deep dark:text-white">
        {dict.home.title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-black/70 dark:text-white/70">
        {dict.home.subtitle}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <QuizCard
          href="/quiz/rapide"
          icon="⚡"
          title={dict.home.quickTitle}
          count={dict.home.quickCount}
          duration={dict.home.quickDuration}
          description={dict.home.quickDesc}
          start={dict.home.start}
          primary
        />
        <QuizCard
          href="/quiz/complet"
          icon="🎯"
          title={dict.home.fullTitle}
          count={dict.home.fullCount}
          duration={dict.home.fullDuration}
          description={dict.home.fullDesc}
          start={dict.home.start}
        />
      </div>

      <section className="mt-14 rounded-2xl border border-black/10 bg-surface p-8 text-center dark:border-white/15">
        <div className="text-2xl">📖</div>
        <h2 className="mt-2 text-lg font-semibold">{dict.home.statsHeading}</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <Stat value={parties.length} label={dict.home.statParties} />
          <Stat value={totalQuestions} label={dict.home.statQuestions} />
          <Stat value={sourceCount} label={dict.home.statSources} prefix="+" />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm text-black/60 dark:text-white/60">
          {dict.home.statsDescription}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {parties.map((p) => (
            <span
              key={p.id}
              className="rounded-full border px-3 py-1 text-xs"
              style={{ borderColor: p.colorHex + "55" }}
            >
              {p.acronym}
            </span>
          ))}
        </div>
        <Link
          href="/partis"
          className="mt-6 inline-block rounded-full bg-brand-red-deep px-6 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          {dict.home.statsCta}
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-brand-red-deep dark:text-white">
          {dict.home.guaranteesHeading}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 bg-surface p-5 dark:border-white/15"
            >
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-base ${g.tone}`}>
                {g.icon}
              </span>
              <h3 className="mt-3 font-semibold">{g.title}</h3>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-brand-red-deep dark:text-white">
          {dict.home.howHeading}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-black/10 bg-surface p-5 text-center dark:border-white/15"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red-deep text-sm font-semibold text-white">
                {s.n}
              </span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 text-center text-sm text-black/50 dark:text-white/50">
        {dict.footer}{" "}
        <Link href="/methodologie" className="underline">
          {dict.footerLink}
        </Link>
        .
      </p>
    </div>
  );
}

function Stat({ value, label, prefix = "" }: { value: number; label: string; prefix?: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-brand-red-deep dark:text-white">
        {prefix}
        {value}
      </div>
      <div className="mt-1 text-xs font-medium tracking-wide text-black/50 dark:text-white/50">
        {label}
      </div>
    </div>
  );
}

function QuizCard({
  href,
  icon,
  title,
  count,
  duration,
  description,
  start,
  primary,
}: {
  href: string;
  icon: string;
  title: string;
  count: string;
  duration: string;
  description: string;
  start: string;
  primary?: boolean;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-black/10 bg-surface p-6 text-center dark:border-white/15">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-brand-green">{count}</p>
      <span className="mt-2 rounded-full bg-black/[0.05] px-3 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60">
        {duration}
      </span>
      <p className="mt-3 text-sm text-black/70 dark:text-white/70">{description}</p>
      <Link
        href={href}
        className={
          primary
            ? "mt-5 rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium text-white hover:opacity-90"
            : "mt-5 rounded-full border border-brand-red px-6 py-2.5 text-sm font-medium text-brand-red hover:bg-brand-red/5"
        }
      >
        {start}
      </Link>
    </div>
  );
}
