# Législatives Maroc 2026 — voting advice tool

A voting advice application (VAA) for Morocco's 2026 legislative elections: answer a series of policy questions, and see how closely your positions match those of 16 Moroccan parties — with a per-question breakdown of where you agree and disagree.

**Live:** [legislativesmaroc2026.odtriki.com](https://legislativesmaroc2026.odtriki.com)

## How it works

- **Two quizzes:** a quick one (20 questions) and a full one (100 questions), each with a sourced explainer per question.
- **Answers** are on a 5-point Likert scale (strongly disagree → strongly agree), and each question can be marked as important (double weight) or skipped.
- **Scoring** ([`lib/scoring.ts`](lib/scoring.ts)) uses the classic VAA distance model, in the same family as StemWijzer / EU&I: for each answered question, agreement with a party is `1 - |user - party| / 4`, weighted by importance. A party with no declared position on a question is excluded from that question rather than treated as neutral, so silence neither penalizes nor flatters it. Covered by unit tests ([`lib/scoring.test.ts`](lib/scoring.test.ts)).
- **Results** show a ranked match percentage per party, a chart, and the full answer-by-answer comparison.
- **Three languages:** French, Arabic (full RTL layout) and English.

## Privacy

Answers are computed entirely in the browser. Users can optionally opt in to share their (anonymous) answers for aggregate statistics — stored in SQLite with no IP, user agent, cookie or session id (political opinions are GDPR Art. 9 data), rate-limited in memory only, and purged after 24 months ([`scripts/purge-old-submissions.ts`](scripts/purge-old-submissions.ts)). Ads and analytics only load after explicit cookie consent.

## Stack

Next.js 16 (App Router) + React 19, TypeScript, Tailwind CSS 4, Node's built-in `node:sqlite` for opt-in submissions ([`lib/db.ts`](lib/db.ts)), Vitest.

## Run locally

```sh
npm install
npm run dev     # http://localhost:3000
npm test
```

## Deploy

Self-hosted: multi-stage `Dockerfile` (Node 24), run via Docker Compose behind a Cloudflare Tunnel.
