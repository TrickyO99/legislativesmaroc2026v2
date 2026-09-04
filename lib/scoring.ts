import type {
  Party,
  PartyPosition,
  PartyResult,
  Question,
  UserAnswer,
} from "./types";

const MAX_DISTANCE = 4; // scale runs from -2 to +2

/**
 * Classic VAA (voting advice application) distance matching, in the same
 * family as StemWijzer/EU&I: for each question the user answered, agreement
 * with a party is 1 - (|userValue - partyValue| / maxDistance), weighted by
 * how important the user marked the question. A party only contributes to a
 * question if it has a declared position on it — silence is excluded, not
 * treated as neutral, so it neither penalizes nor flatters an undeclared party.
 */
export function computeResults(
  answers: UserAnswer[],
  parties: Party[],
  positions: PartyPosition[],
): PartyResult[] {
  const positionsByParty = new Map<string, Map<string, PartyPosition>>();
  for (const pos of positions) {
    if (!positionsByParty.has(pos.partyId)) {
      positionsByParty.set(pos.partyId, new Map());
    }
    positionsByParty.get(pos.partyId)!.set(pos.questionId, pos);
  }

  return parties.map((party) => {
    const partyPositions = positionsByParty.get(party.id) ?? new Map();
    let weightedSum = 0;
    let weightTotal = 0;
    let answeredCount = 0;

    const breakdown: PartyResult["breakdown"] = answers.map((answer) => {
      const partyPos = partyPositions.get(answer.questionId);

      if (answer.value === null || !partyPos) {
        return {
          questionId: answer.questionId,
          userValue: answer.value,
          partyValue: partyPos?.position ?? null,
          agreement: null,
        };
      }

      const distance = Math.abs(answer.value - partyPos.position);
      const agreement = 1 - distance / MAX_DISTANCE;

      weightedSum += agreement * answer.weight;
      weightTotal += answer.weight;
      answeredCount += 1;

      return {
        questionId: answer.questionId,
        userValue: answer.value,
        partyValue: partyPos.position,
        agreement,
      };
    });

    const scorePercent =
      weightTotal > 0 ? Math.round((weightedSum / weightTotal) * 100) : 0;

    return { party, scorePercent, answeredCount, breakdown };
  });
}

export function rankResults(results: PartyResult[]): PartyResult[] {
  return [...results].sort((a, b) => b.scorePercent - a.scorePercent);
}

export function questionsByCategory(
  questions: Question[],
): Map<string, Question[]> {
  const map = new Map<string, Question[]>();
  for (const q of questions) {
    if (!map.has(q.category)) map.set(q.category, []);
    map.get(q.category)!.push(q);
  }
  return map;
}
