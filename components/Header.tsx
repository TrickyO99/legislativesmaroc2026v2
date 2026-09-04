"use client";

import Link from "next/link";
import { useDict, useLocale } from "@/lib/locale";

export function Header() {
  const { locale, setLocale } = useLocale();
  const dict = useDict();

  return (
    <header>
      <div
        className="h-[3px] w-full"
        style={{
          background:
            "linear-gradient(to right, var(--brand-red), var(--brand-green))",
        }}
      />
      <div className="border-b border-black/5 bg-surface py-1.5 text-center text-[11px] tracking-wide text-black/45 dark:border-white/10 dark:text-white/40">
        {dict.topBar}
      </div>
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4"
        style={{
          background:
            "linear-gradient(to right, var(--brand-red-deep), var(--brand-red-deep-2))",
        }}
      >
        <Link href="/" className="font-semibold tracking-tight text-white">
          🗳️ Législatives<span className="text-brand-green">Maroc2026</span>
        </Link>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/partis" className="text-white/85 hover:text-white">
            {dict.nav.partis}
          </Link>
          <Link href="/methodologie" className="text-white/85 hover:text-white">
            {dict.nav.methodologie}
          </Link>
          <div className="flex overflow-hidden rounded-full border border-white/25 text-xs">
            <button
              type="button"
              onClick={() => setLocale("fr")}
              aria-pressed={locale === "fr"}
              className={`px-2.5 py-1 ${locale === "fr" ? "bg-white text-brand-red-deep" : "text-white/80"}`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`px-2.5 py-1 ${locale === "en" ? "bg-white text-brand-red-deep" : "text-white/80"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("ar")}
              aria-pressed={locale === "ar"}
              className={`px-2.5 py-1 ${locale === "ar" ? "bg-white text-brand-red-deep" : "text-white/80"}`}
            >
              ع
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
