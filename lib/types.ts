export type Locale = "fr" | "ar" | "en";

export type Category =
  | "economie"
  | "social"
  | "education"
  | "sante"
  | "agriculture"
  | "emploi"
  | "regionalisation"
  | "environnement"
  | "justice"
  | "gouvernance"
  | "migration"
  | "diaspora"
  | "droits"
  | "numerique"
  | "international";

export const CATEGORY_LABELS: Record<Category, Record<Locale, string>> = {
  economie: {
    fr: "Économie & fiscalité",
    ar: "الاقتصاد والجباية",
    en: "Economy & taxation",
  },
  social: {
    fr: "Protection sociale",
    ar: "الحماية الاجتماعية",
    en: "Social protection",
  },
  education: {
    fr: "Éducation & langues",
    ar: "التعليم واللغات",
    en: "Education & languages",
  },
  sante: { fr: "Santé", ar: "الصحة", en: "Health" },
  agriculture: {
    fr: "Agriculture & monde rural",
    ar: "الفلاحة والعالم القروي",
    en: "Agriculture & rural areas",
  },
  emploi: {
    fr: "Emploi & jeunesse",
    ar: "التشغيل والشباب",
    en: "Employment & youth",
  },
  regionalisation: {
    fr: "Régionalisation",
    ar: "الجهوية",
    en: "Regionalization",
  },
  environnement: {
    fr: "Environnement & énergie",
    ar: "البيئة والطاقة",
    en: "Environment & energy",
  },
  justice: { fr: "Justice", ar: "العدالة", en: "Justice" },
  gouvernance: {
    fr: "Gouvernance & lutte anti-corruption",
    ar: "الحكامة ومحاربة الفساد",
    en: "Governance & anti-corruption",
  },
  migration: { fr: "Migration", ar: "الهجرة", en: "Migration" },
  diaspora: {
    fr: "Marocains du monde (MRE)",
    ar: "المغاربة المقيمين بالخارج",
    en: "Moroccans abroad (MRE)",
  },
  droits: {
    fr: "Droits & société",
    ar: "الحقوق والمجتمع",
    en: "Rights & society",
  },
  numerique: {
    fr: "Numérique & administration",
    ar: "الرقمنة والإدارة",
    en: "Digital & administration",
  },
  international: {
    fr: "Politique étrangère",
    ar: "السياسة الخارجية",
    en: "Foreign policy",
  },
};

/**
 * The ideological axis a question is used to place a party on when its
 * position is drafted from a general ideology profile rather than an
 * individually-researched declaration. See lib/ideology.ts.
 */
export type Axis =
  | "econ" // -2 interventionniste/protectionniste ... +2 libéral/marché
  | "social" // -2 conservateur ... +2 progressiste
  | "decentralisation" // -2 centralisateur ... +2 régionaliste
  | "environnement" // -2 priorité économique ... +2 priorité écologique
  | "transparence" // -2 faible priorité anti-corruption ... +2 forte priorité
  | "ouverture"; // -2 restrictif ... +2 ouvert (migration/international)

/** A single quiz statement. Users react on a -2..+2 agreement scale. */
export interface Question {
  id: string;
  text: string;
  textAr: string;
  textEn: string;
  category: Category;
  explainer?: string;
  explainerAr?: string;
  explainerEn?: string;
  /** Name of a real, checkable institution, law, or program this question relates to — not a fabricated citation. */
  source?: string;
  sourceAr?: string;
  sourceEn?: string;
  /**
   * Which ideology axis and direction agreeing with this statement maps to.
   * Used to derive a party's draft position from its ideology profile.
   * Omitted only for questions whose positions are entirely hand-set.
   */
  axis?: Axis;
  axisPolarity?: 1 | -1;
}

export interface Party {
  id: string;
  name: string;
  nameAr: string;
  nameEn: string;
  /** Acronyms are conventionally kept in Latin script in Arabic text too. */
  acronym: string;
  colorHex: string;
  leader?: string;
  leaderAr?: string;
  leaderEn?: string;
  description: string;
  descriptionAr: string;
  descriptionEn: string;
  ideologyTags: string[];
  ideologyTagsAr: string[];
  ideologyTagsEn: string[];
  foundedYear?: number;
  lastElectionSeats?: number;
}

/** Position of value=0 with position undefined-in-data means "no declared position": handled by omission, not by storing 0. */
export type PositionValue = -2 | -1 | 0 | 1 | 2;

export interface PartyPosition {
  partyId: string;
  questionId: string;
  position: PositionValue;
  verified: boolean;
  source?: string;
}

export type AnswerValue = PositionValue | null;

export interface UserAnswer {
  questionId: string;
  value: AnswerValue;
  weight: 1 | 2;
}

export type QuizType = "rapide" | "complet";

export interface PartyResult {
  party: Party;
  scorePercent: number;
  answeredCount: number;
  breakdown: {
    questionId: string;
    userValue: AnswerValue;
    partyValue: PositionValue | null;
    agreement: number | null;
  }[];
}
