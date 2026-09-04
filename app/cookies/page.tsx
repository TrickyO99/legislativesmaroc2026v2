"use client";

import { useConsent } from "@/lib/consent";

export default function CookiesPage() {
  const { state, resetConsent } = useConsent();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 prose-sm">
      <h1 className="text-3xl font-bold tracking-tight text-brand-red-deep dark:text-white">
        Cookies &amp; stockage local
      </h1>
      <p className="mt-2 text-xs text-black/40 dark:text-white/40">
        Cette page fait foi en français uniquement, pour garantir la précision
        juridique de son contenu.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Nécessaires (toujours actifs)</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Ce site utilise le stockage local de votre navigateur (pas de
          cookie) pour retenir votre langue, vos réponses en cours de test et
          votre préférence de consentement publicitaire. Ces informations ne
          quittent jamais votre appareil.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Publicité (optionnel)</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Si vous acceptez, Google AdSense peut déposer des cookies pour
          afficher des publicités. Ces cookies ne sont posés qu&apos;après
          votre consentement explicite — jamais par défaut. Détails sur{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            policies.google.com/technologies/cookies
          </a>
          .
        </p>
        <p className="mt-4 text-sm text-black/70 dark:text-white/70">
          Votre choix actuel :{" "}
          <strong>
            {state.decided
              ? state.ads
                ? "publicités acceptées"
                : "publicités refusées"
              : "pas encore choisi"}
          </strong>
        </p>
        <button
          onClick={resetConsent}
          className="mt-3 rounded-full border border-black/15 px-4 py-2 text-sm font-medium dark:border-white/20"
        >
          Modifier mon choix
        </button>
      </section>
    </div>
  );
}
