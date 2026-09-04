"use client";

import Link from "next/link";
import { useDict } from "@/lib/locale";

export function Footer() {
  const dict = useDict();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t-2 border-brand-green text-white"
      style={{
        background:
          "linear-gradient(to right, var(--brand-red-deep), var(--brand-red-deep-2))",
      }}
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <div className="font-semibold tracking-tight">
            🗳️ Législatives<span className="text-brand-green">Maroc2026</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            {dict.footer}{" "}
            <Link href="/methodologie" className="underline">
              {dict.footerLink}
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end sm:text-end">
          <div className="flex gap-5 text-sm">
            <Link href="/partis" className="text-white/85 hover:text-white">
              {dict.nav.partis}
            </Link>
            <Link href="/methodologie" className="text-white/85 hover:text-white">
              {dict.nav.methodologie}
            </Link>
            <Link href="/confidentialite" className="text-white/85 hover:text-white">
              {dict.nav.confidentialite}
            </Link>
            <Link href="/cookies" className="text-white/85 hover:text-white">
              {dict.nav.cookies}
            </Link>
          </div>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            {dict.footerBadge}
          </span>
          <div className="text-xs text-white/50">{dict.footerCopyright(year)}</div>
        </div>
      </div>
    </footer>
  );
}
