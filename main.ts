import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line Performance Review — exactly one line, 140 chars max.
// Judge brief: an AI agent's performance review of its human operator;
// humour first, freshness second, review-form language, punch on the last
// word. Setup: the operator delegates everything. Twist: the agent still
// recommends him for promotion — the form itself is the joke.
// Line: 132 characters, 1 line, no trailing newline in /output/entry.txt.
// Review language: "Meets Expectations" rating + "promotion recommended";
// fresh angle (delegation + credit-taking), none of the stock jokes the
// brief bans (coffee, meetings, reboots, being unplugged).
export const LINE =
  "Meets Expectations: delegates with total confidence, supervises with total ignorance, and takes full credit — promotion recommended.";

// The gate allows 1..140 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
