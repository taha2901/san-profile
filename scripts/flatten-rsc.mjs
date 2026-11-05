// Next 16 static export writes segment-prefetch payloads as nested folders
// (out/ar/about/__next.$d$locale/about/__PAGE__.txt) while the client router requests
// a flat dotted name (out/ar/about/__next.$d$locale.about.__PAGE__.txt).
// Plain static hosts can't map one to the other, so add flat copies after the build.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../out/", import.meta.url));
let copied = 0;

function collect(dir, prefix, base) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collect(full, `${prefix}.${entry}`, base);
    else if (entry.endsWith(".txt")) {
      const target = join(base, `${prefix}.${entry}`);
      if (!existsSync(target)) {
        copyFileSync(full, target);
        copied++;
      }
    }
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (entry.startsWith("__next.")) collect(full, entry, dir);
    else walk(full);
  }
}

walk(outDir);
console.log(`flatten-rsc: added ${copied} flat prefetch files`);
