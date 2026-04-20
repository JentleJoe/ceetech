import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { prerenderRoutes } from "../prerender.routes.js";

const distDir = path.resolve(process.cwd(), "dist");

const routeToFile = (route) => {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }

  const routePath = route.replace(/^\//, "");
  return path.join(distDir, routePath, "index.html");
};

const containsRenderedRoot = (html) => /id="root">\s*<[^/]/.test(html);
const hasTitleTag = (html) => /<title>[^<]+<\/title>/i.test(html);
const hasDescriptionMeta = (html) => /name="description"/i.test(html);

const expectedCanonicalByRoute = {
  "/": "https://ceetechcrafts.com",
  "/about": "https://ceetechcrafts.com/about",
  "/furniture": "https://ceetechcrafts.com/furniture",
  "/interiors": "https://ceetechcrafts.com/interiors",
  "/academy": "https://ceetechcrafts.com/academy",
  "/contact": "https://ceetechcrafts.com/contact",
};

const routeChecks = {
  "/about": [
    "https://ceetechcrafts.com/about",
    "About Ceetech Crafts",
  ],
  "/contact": [
    "https://ceetechcrafts.com/contact",
    "Contact Ceetech Crafts",
  ],
};

const failures = [];

for (const route of prerenderRoutes) {
  const filePath = routeToFile(route);

  try {
    await access(filePath);
  } catch {
    failures.push(`${route}: missing file ${filePath}`);
    continue;
  }

  const html = await readFile(filePath, "utf8");

  if (!containsRenderedRoot(html)) {
    failures.push(`${route}: file exists but prerendered root markup was not detected`);
  }

  if (!hasTitleTag(html)) {
    failures.push(`${route}: missing <title> in prerendered output`);
  }

  if (!hasDescriptionMeta(html)) {
    failures.push(`${route}: missing meta description in prerendered output`);
  }

  const expectedCanonical = expectedCanonicalByRoute[route];
  if (expectedCanonical) {
    const canonicalPattern = new RegExp(
      `<link[^>]*rel=["']canonical["'][^>]*href=["']${expectedCanonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*>|<link[^>]*href=["']${expectedCanonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*rel=["']canonical["'][^>]*>`,
      "i",
    );

    if (!canonicalPattern.test(html)) {
      failures.push(
        `${route}: expected canonical URL not found -> ${expectedCanonical}`,
      );
    }
  }

  const checks = routeChecks[route] ?? [];
  for (const token of checks) {
    if (!html.includes(token)) {
      failures.push(`${route}: expected token not found -> ${token}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Prerender verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Prerender verification passed for routes:", prerenderRoutes.join(", "));
