import type { Locale, Party, Question } from "./types";

export function tText(q: Question, locale: Locale): string {
  if (locale === "ar") return q.textAr;
  if (locale === "en") return q.textEn;
  return q.text;
}

export function tExplainer(q: Question, locale: Locale): string | undefined {
  if (locale === "ar") return q.explainerAr;
  if (locale === "en") return q.explainerEn;
  return q.explainer;
}

export function tSource(q: Question, locale: Locale): string | undefined {
  if (locale === "ar") return q.sourceAr;
  if (locale === "en") return q.sourceEn;
  return q.source;
}

export function tPartyName(p: Party, locale: Locale): string {
  if (locale === "ar") return p.nameAr;
  if (locale === "en") return p.nameEn;
  return p.name;
}

export function tPartyDescription(p: Party, locale: Locale): string {
  if (locale === "ar") return p.descriptionAr;
  if (locale === "en") return p.descriptionEn;
  return p.description;
}

export function tPartyTags(p: Party, locale: Locale): string[] {
  if (locale === "ar") return p.ideologyTagsAr;
  if (locale === "en") return p.ideologyTagsEn;
  return p.ideologyTags;
}

export function tPartyLeader(p: Party, locale: Locale): string | undefined {
  if (locale === "ar") return p.leaderAr;
  if (locale === "en") return p.leaderEn;
  return p.leader;
}
