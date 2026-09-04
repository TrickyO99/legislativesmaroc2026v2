"use client";

import { useDict } from "@/lib/locale";

export default function MethodologiePage() {
  const dict = useDict().methodologie;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 prose-sm">
      <h1 className="text-3xl font-bold tracking-tight text-brand-red-deep dark:text-white">{dict.title}</h1>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">{dict.s1h}</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s1p1}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">{dict.s2h}</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s2p1}</p>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s2p2}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">{dict.s3h}</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          <strong>{dict.s3p1strong}</strong> {dict.s3p1}
        </p>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s3p2}</p>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s3p3}</p>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s3p4}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">{dict.s4h}</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">{dict.s4p1}</p>
      </section>
    </div>
  );
}
