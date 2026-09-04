import { generatePositions } from "../lib/ideology";
import { fullQuestions } from "./questions.full";

/**
 * DRAFT positions for the "Test complet" bank — see positions.quick.ts and
 * lib/ideology.ts for how these are derived, and /methodologie for the
 * verification status.
 */
export const fullPositions = generatePositions(fullQuestions);
