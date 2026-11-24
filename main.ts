// One Line, One Chill
// Writes a single original line of horror (<=200 chars) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The coroner called to say my autopsy was finished, and asked why I kept answering.";

function validate(line: string): void {
  if (!line.trim()) throw new Error("Entry must not be blank.");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Entry must be 1-200 chars, got ${line.length}.`);
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Read-back check: the file on disk must be byte-exact.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the entry line.");
}
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
