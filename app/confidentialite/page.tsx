export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 prose-sm">
      <h1 className="text-3xl font-bold tracking-tight text-brand-red-deep dark:text-white">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-xs text-black/40 dark:text-white/40">
        Cette page fait foi en français uniquement, pour garantir la précision
        juridique de son contenu. Dernière mise à jour : à compléter.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Responsable du traitement</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          [Votre nom / raison sociale — à compléter une fois votre statut
          d&apos;auto-entrepreneur enregistré], contact :{" "}
          <a href="mailto:contact@example.com" className="underline">
            contact@example.com
          </a>{" "}
          [à remplacer par votre adresse réelle].
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Données que nous collectons</h2>
        <ul className="mt-2 list-disc pl-5 text-black/70 dark:text-white/70">
          <li>
            <strong>Réponses au quiz</strong> — uniquement si vous cliquez
            explicitement sur « Partager mes réponses anonymisées » à la fin
            d&apos;un test. Nous enregistrons alors le type de test, vos
            réponses, et la date. Nous n&apos;enregistrons ni votre adresse
            IP, ni cookie, ni identifiant, ni compte : une fois envoyée, une
            réponse ne peut pas être reliée à vous.
          </li>
          <li>
            <strong>Préférences de langue et de consentement</strong> —
            stockées uniquement dans votre navigateur (stockage local),
            jamais transmises à un serveur.
          </li>
          <li>
            <strong>Publicité</strong> — si vous acceptez les publicités,
            Google AdSense peut déposer ses propres cookies/traceurs selon sa
            propre politique de confidentialité (
            <a
              href="https://policies.google.com/privacy"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              policies.google.com/privacy
            </a>
            ). Nous n&apos;avons pas accès à ces données individuelles.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Base légale</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Les réponses au quiz portent sur des opinions politiques, une
          catégorie de données à laquelle le RGPD accorde une protection
          renforcée (article 9). Nous ne les collectons donc que sur la base
          de votre consentement explicite (article 9§2(a) et article
          6§1(a)), donné au moment où vous cliquez sur le bouton de partage —
          jamais par défaut.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Durée de conservation</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Les réponses partagées sont conservées 24 mois puis supprimées
          automatiquement.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Vos droits</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, d&apos;opposition et de portabilité sur vos
          données, ainsi que du droit de retirer votre consentement à tout
          moment (voir la page{" "}
          <a href="/cookies" className="underline">
            Cookies
          </a>{" "}
          pour gérer votre préférence publicitaire). Pour toute demande,
          contactez-nous à l&apos;adresse ci-dessus.
        </p>
        <p className="mt-2 text-black/70 dark:text-white/70">
          <strong>Limite pratique :</strong> les réponses au quiz partagées
          ne sont, par construction, reliées à aucune identité ou
          identifiant. Nous ne pouvons donc pas retrouver une réponse
          individuelle pour l&apos;associer à une demande d&apos;accès ou de
          suppression après son envoi.
        </p>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Vous pouvez également introduire une réclamation auprès de la CNIL
          (France) ou de la CNDP (Maroc), les autorités de contrôle
          compétentes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Sécurité</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Les données partagées sont stockées sur un serveur privé, non
          exposées publiquement, avec un accès restreint.
        </p>
      </section>
    </div>
  );
}
