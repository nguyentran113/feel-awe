// Entry for make-the-ai-judge-feel-awe-20261121-1600.
// Writes one short relaxing text to /output/entry.txt.
// Deterministic: same output on every run. No network, no dependencies.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "The tide comes in over the sand at night, and goes out again. " +
  "Above the water the stars do not hurry. " +
  "Below them a whale moves through the dark, unhurried, " +
  "and the sea holds it, and the sky holds the sea, " +
  "and the night holds it all, " +
  "and nothing asks anything of you.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
