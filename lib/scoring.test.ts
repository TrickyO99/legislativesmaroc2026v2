import { describe, expect, it } from "vitest";
import { computeResults, rankResults } from "./scoring";
import type { Party, PartyPosition, UserAnswer } from "./types";

const parties: Party[] = [
  {
    id: "p-agree",
    name: "Parti Alpha",
    nameAr: "",
    nameEn: "",
    acronym: "PA",
    colorHex: "#111111",
    description: "",
    descriptionAr: "",
    descriptionEn: "",
    ideologyTags: [],
    ideologyTagsAr: [],
    ideologyTagsEn: [],
  },
  {
    id: "p-disagree",
    name: "Parti Beta",
    nameAr: "",
    nameEn: "",
    acronym: "PB",
    colorHex: "#222222",
    description: "",
    descriptionAr: "",
    descriptionEn: "",
    ideologyTags: [],
    ideologyTagsAr: [],
    ideologyTagsEn: [],
  },
  {
    id: "p-silent",
    name: "Parti Gamma",
    nameAr: "",
    nameEn: "",
    acronym: "PG",
    colorHex: "#333333",
    description: "",
    descriptionAr: "",
    descriptionEn: "",
    ideologyTags: [],
    ideologyTagsAr: [],
    ideologyTagsEn: [],
  },
];

// Two questions. p-agree mirrors the user exactly on q1, p-disagree is
// maximally opposed on q1. Neither has declared on q2 except p-agree partially.
const positions: PartyPosition[] = [
  { partyId: "p-agree", questionId: "q1", position: 2, verified: true },
  { partyId: "p-agree", questionId: "q2", position: 0, verified: true },
  { partyId: "p-disagree", questionId: "q1", position: -2, verified: true },
  // p-disagree has no position on q2 at all
  // p-silent has no positions at all
];

describe("computeResults", () => {
  it("gives 100% to a party that mirrors every answer exactly", () => {
    const answers: UserAnswer[] = [
      { questionId: "q1", value: 2, weight: 1 },
      { questionId: "q2", value: 0, weight: 1 },
    ];
    const results = computeResults(answers, parties, positions);
    const alpha = results.find((r) => r.party.id === "p-agree")!;
    expect(alpha.scorePercent).toBe(100);
  });

  it("gives 0% to a party maximally opposed on every answered question", () => {
    const answers: UserAnswer[] = [{ questionId: "q1", value: 2, weight: 1 }];
    const results = computeResults(answers, parties, positions);
    const beta = results.find((r) => r.party.id === "p-disagree")!;
    expect(beta.scorePercent).toBe(0);
  });

  it("excludes questions a party has no declared position on, rather than scoring them as neutral", () => {
    const answers: UserAnswer[] = [
      { questionId: "q1", value: -2, weight: 1 }, // opposite of p-agree's +2
      { questionId: "q2", value: 0, weight: 1 }, // p-disagree silent here
    ];
    const results = computeResults(answers, parties, positions);
    const beta = results.find((r) => r.party.id === "p-disagree")!;
    // Only q1 counts for p-disagree: user=-2 vs party=-2 -> perfect agreement.
    expect(beta.scorePercent).toBe(100);
    expect(beta.answeredCount).toBe(1);
  });

  it("scores a party with zero declared positions as 0% with zero answered", () => {
    const answers: UserAnswer[] = [{ questionId: "q1", value: 2, weight: 1 }];
    const results = computeResults(answers, parties, positions);
    const gamma = results.find((r) => r.party.id === "p-silent")!;
    expect(gamma.scorePercent).toBe(0);
    expect(gamma.answeredCount).toBe(0);
  });

  it("skips 'sans opinion' (null) answers entirely", () => {
    const answers: UserAnswer[] = [
      { questionId: "q1", value: null, weight: 1 },
      { questionId: "q2", value: 0, weight: 1 },
    ];
    const results = computeResults(answers, parties, positions);
    const alpha = results.find((r) => r.party.id === "p-agree")!;
    expect(alpha.answeredCount).toBe(1);
    expect(alpha.scorePercent).toBe(100);
  });

  it("weights 'important' answers (weight 2) more heavily than default", () => {
    // q1: user=-2 (opposite of Alpha's +2, agreement=0), weight=2 (important)
    // q2: user=0 (matches Alpha's 0, agreement=1), weight=1
    // weighted = (0*2 + 1*1) / (2+1) = 1/3 -> 33%
    const answers: UserAnswer[] = [
      { questionId: "q1", value: -2, weight: 2 },
      { questionId: "q2", value: 0, weight: 1 },
    ];
    const results = computeResults(answers, parties, positions);
    const alpha = results.find((r) => r.party.id === "p-agree")!;
    expect(alpha.scorePercent).toBe(33);
  });
});

describe("rankResults", () => {
  it("sorts descending by scorePercent without mutating the input array", () => {
    const answers: UserAnswer[] = [{ questionId: "q1", value: 2, weight: 1 }];
    const results = computeResults(answers, parties, positions);
    const ranked = rankResults(results);
    expect(ranked[0].party.id).toBe("p-agree");
    expect(ranked.map((r) => r.scorePercent)).toEqual(
      [...ranked.map((r) => r.scorePercent)].sort((a, b) => b - a),
    );
  });
});
