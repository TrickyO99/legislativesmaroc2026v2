"use client";

import Link from "next/link";
import { useConsent } from "@/lib/consent";
import { useDict } from "@/lib/locale";

export function ConsentBanner() {
  const { state, acceptAds, rejectAds } = useConsent();
  const dict = useDict();

  if (state.decided) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur dark:border-white/15 dark:bg-neutral-900/95"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black/80 dark:text-white/80">
          {dict.consent.message}{" "}
          <Link href="/cookies" className="underline">
            {dict.consent.learnMore}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={rejectAds}
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium dark:border-white/20"
          >
            {dict.consent.reject}
          </button>
          <button
            onClick={acceptAds}
            className="rounded-full bg-brand-red px-4 py-2 text-sm font-medium text-white"
          >
            {dict.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
