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

// Old WordPress URL redirects
const redirects: { path: string; target: string }[] = [
  { path: "about-us", target: "/about" },
  { path: "contact-us", target: "/contact" },
  { path: "services-2", target: "/services" },
  { path: "search-engine-optimization", target: "/services" },
  { path: "sectors", target: "/services" },
  { path: "ai-training", target: "/geo" },
  { path: "shop", target: "/" },
  { path: "category/resources", target: "/" },
  { path: "web-modernization-for-mission-driven-organizations", target: "/portfolio" },
  {
    path: "improving-identity-verification-for-organizations-that-service-the-public",
    target: "/portfolio",
  },
];

console.log(`\nCreating ${redirects.length} WordPress redirect file(s)...`);
for (const { path, target } of redirects) {
  const folder = join(dist, path);
  const file = join(folder, "index.html");
  if (existsSync(file)) {
    console.log(`  [skip] already exists: ${file}`);
    continue;
  }
  mkdirSync(folder, { recursive: true });
  console.log(`  [mkdir] ${folder}`);
  const html = `<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0;url=${target}">
<link rel="canonical" href="https://leapux.com${target}">
</head>
<body>Redirecting...</body>
</html>`;
  writeFileSync(file, html);
  console.log(`  [write] ${file} -> ${target}`);
}

console.log("Dist restructure complete.");
