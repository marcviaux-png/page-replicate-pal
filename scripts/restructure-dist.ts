import { readdirSync, statSync, mkdirSync, renameSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SKIP = new Set(["index.html", "404.html"]);

function restructure(dir: string) {
  if (!existsSync(dir)) return;
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    if (!statSync(full).isFile()) continue;
    if (!entry.endsWith(".html")) continue;
    if (SKIP.has(entry)) continue;

    const name = entry.replace(/\.html$/, "");
    const folder = join(dir, name);
    mkdirSync(folder, { recursive: true });
    renameSync(full, join(folder, "index.html"));
    console.log(`Moved ${full} -> ${join(folder, "index.html")}`);
  }
}

const dist = join(process.cwd(), "dist");
restructure(dist);
restructure(join(dist, "portfolio"));

console.log("Dist restructure complete.");
