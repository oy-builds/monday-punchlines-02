// Monday Morning Punchlines — make.fun entry
// Writes exactly one joke about Monday mornings to /output/entry.txt.
// Deterministic: no network, no randomness, no secrets, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Monday morning lets itself in like an uninvited houseguest, no knock, just standing in my kitchen at 6 a.m. eating the last of my weekend.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
