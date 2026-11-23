import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const encoded = readFileSync(join(here, "meme.png.b64"), "utf8").trim();
const png = Buffer.from(encoded, "base64");

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
writeFileSync(outPath, png);
console.log(`wrote ${outPath} (${png.length} bytes, 1024x682 PNG)`);
