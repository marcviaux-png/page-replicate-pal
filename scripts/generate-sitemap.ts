// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://leapux.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/capabilities", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-services", changefreq: "monthly", priority: "0.9" },
  { path: "/ai-training", changefreq: "monthly", priority: "0.9" },
  { path: "/geo", changefreq: "monthly", priority: "0.9" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
  { path: "/portfolio/pspc", changefreq: "yearly", priority: "0.6" },
  { path: "/portfolio/ised", changefreq: "yearly", priority: "0.6" },
  { path: "/portfolio/st-john-ambulance", changefreq: "yearly", priority: "0.6" },
  { path: "/portfolio/ijc", changefreq: "yearly", priority: "0.6" },
  { path: "/portfolio/soldiers-helping-soldiers", changefreq: "yearly", priority: "0.6" },
  { path: "/portfolio/beneva", changefreq: "yearly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
];

const today = new Date().toISOString().split("T")[0];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
