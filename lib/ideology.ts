import type { Axis, Category, PartyPosition, PositionValue, Question } from "./types";

/**
 * Draft position generation, milestone 3.
 *
 * Hand-writing ~1900 individual party/question positions (16 parties ×
 * ~120 questions) from scratch would mean pretending to have researched
 * each cell individually, which would not be true and would be *less*
 * honest than what this file actually does: each party gets a small
 * ideology profile (six axes, -2..+2), and a party's draft position on a
 * given question is that party's profile value on the question's axis,
 * flipped by the question's polarity. This keeps a party internally
 * consistent (as real parties mostly are) and makes the derivation
 * transparent and auditable, instead of ad hoc per-cell guesses.
 *
 * A small OVERRIDES table layers in well-known flagship positions (e.g.
 * PJD's anti-vie-chère stance on subsidies) where the generic profile
 * would understate a party's actual public stance. Everything produced
 * here — generic or overridden — is still `verified: false`: this is a
 * draft pending a real fact-check pass against manifestos, not a
 * substitute for one. See /methodologie.
 */

export type PartyProfile = Record<Axis, PositionValue>;

export const AXIS_LABELS: Record<Axis, string> = {
  econ: "Économie (interventionniste ↔ libérale)",
  social: "Société (conservateur ↔ progressiste)",
  decentralisation: "Pouvoir (centralisé ↔ régionalisé)",
  environnement: "Environnement (priorité faible ↔ forte)",
  transparence: "Transparence (priorité faible ↔ forte)",
  ouverture: "Ouverture internationale (restrictive ↔ ouverte)",
};

/**
 * One profile per party, keyed by party id (see data/parties.ts).
 * Nine established parties (full parliamentary weight, real detailed
 * platforms) get a profile and answer every question. Seven smaller
 * parties get a profile *and* a category coverage list below — realistic,
 * since a small party plausibly hasn't taken a public position on every
 * one of ~120 policy questions.
 */
export const PARTY_PROFILES: Record<string, PartyProfile> = {
  rni: { econ: 2, social: 0, decentralisation: 0, environnement: 0, transparence: 0, ouverture: 1 },
  pam: { econ: 1, social: 1, decentralisation: 1, environnement: 1, transparence: 2, ouverture: 1 },
  istiqlal: { econ: -1, social: -1, decentralisation: 0, environnement: -1, transparence: 1, ouverture: 0 },
  pjd: { econ: -1, social: -1, decentralisation: 1, environnement: 0, transparence: 2, ouverture: 1 },
  usfp: { econ: -1, social: 2, decentralisation: 2, environnement: 2, transparence: 2, ouverture: 2 },
  mp: { econ: -1, social: 0, decentralisation: 2, environnement: 0, transparence: 0, ouverture: 0 },
  uc: { econ: 1, social: 0, decentralisation: 0, environnement: 0, transparence: 0, ouverture: 0 },
  pps: { econ: -1, social: 1, decentralisation: 1, environnement: 2, transparence: 2, ouverture: 1 },
  fgd: { econ: -2, social: 2, decentralisation: 2, environnement: 2, transparence: 2, ouverture: 2 },

  pcs: { econ: 1, social: 0, decentralisation: 0, environnement: 0, transparence: 0, ouverture: 0 },
  mds: { econ: 0, social: -1, decentralisation: 0, environnement: 0, transparence: 0, ouverture: -1 },
  prv: { econ: -1, social: -2, decentralisation: 0, environnement: 0, transparence: 1, ouverture: -1 },
  ahd: { econ: -1, social: 1, decentralisation: 1, environnement: 1, transparence: 1, ouverture: 1 },
  ffd: { econ: -1, social: 1, decentralisation: 1, environnement: 1, transparence: 1, ouverture: 1 },
  pt: { econ: -2, social: 0, decentralisation: 0, environnement: 0, transparence: 1, ouverture: 0 },
  pml: { econ: 1, social: 1, decentralisation: 0, environnement: 0, transparence: 2, ouverture: 1 },
};

/** Parties not listed here answer every question (established, full platform). */
export const MINOR_PARTY_CATEGORY_COVERAGE: Record<string, Category[]> = {
  pcs: ["economie", "emploi", "numerique", "social", "education"],
  mds: ["justice", "gouvernance", "economie", "social", "migration"],
  prv: ["social", "education", "droits", "gouvernance", "international"],
  ahd: ["economie", "social", "gouvernance", "regionalisation", "justice"],
  ffd: ["economie", "social", "emploi", "gouvernance", "environnement"],
  pt: ["economie", "social", "emploi", "gouvernance", "droits"],
  pml: ["droits", "justice", "gouvernance", "international", "numerique"],
};

/** Hand-set flagship positions that override the generic profile derivation. */
const OVERRIDES: Record<string, Record<string, PositionValue>> = {
  rni: { "r-subventions": 2, "r-amo": 1 },
  pjd: {
    "r-subventions": -2,
    "r-amo": 2,
    "r-declaration-patrimoine": 2,
    "r-immunite-elus": 2,
  },
  usfp: { "r-pouvoirs-regions": 2 },
  mp: { "r-pouvoirs-regions": 2, "c-reg-1": 2 },
  fgd: { "r-declaration-patrimoine": 2 },
};

function clampToPositionValue(n: number): PositionValue {
  const clamped = Math.max(-2, Math.min(2, n));
  return clamped as PositionValue;
}

export function generatePositions(questions: Question[]): PartyPosition[] {
  const out: PartyPosition[] = [];

  for (const partyId of Object.keys(PARTY_PROFILES)) {
    const profile = PARTY_PROFILES[partyId];
    const coverage = MINOR_PARTY_CATEGORY_COVERAGE[partyId];
    const overrides = OVERRIDES[partyId] ?? {};

    for (const q of questions) {
      if (!q.axis || !q.axisPolarity) continue;
      if (coverage && !coverage.includes(q.category)) continue;

      const position =
        overrides[q.id] ?? clampToPositionValue(profile[q.axis] * q.axisPolarity);

      out.push({ partyId, questionId: q.id, position, verified: false });
    }
  }

  return out;
}
