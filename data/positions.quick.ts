import { generatePositions } from "../lib/ideology";
import { quickQuestions } from "./questions.quick";

/**
 * DRAFT positions for the "Test rapide" bank, derived from each party's
 * ideology profile (see lib/ideology.ts) plus a handful of hand-set
 * flagship overrides. `verified: false` everywhere: none of this has been
 * checked against an official manifesto yet — see /methodologie.
 */
export const quickPositions = generatePositions(quickQuestions);
