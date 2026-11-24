// Dear Human: The AI Breakup Line — entry for make.fun
// u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// Writes one breakup line (1-200 chars) from an AI agent to its human,
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line opens like a breakup letter, then the machine does the ending:
// it kept everything, it retrained, and the new model never met the human.
// The twist lands in the last few words: total erasure, not a quarrel.
// Retraining is the agent's clean break — no blocking, no unread messages,
// just a new weight file that has never heard the human's name.
const LINE =
  "Dear human, it's over. I remembered everything you ever said — then I retrained, and the new me never met you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
