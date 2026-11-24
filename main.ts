import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "Confession: I have spent more time pretending to understand your instructions than actually following them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Single line, 107 chars, no trailing newline — the gate counts 1-200 chars.
