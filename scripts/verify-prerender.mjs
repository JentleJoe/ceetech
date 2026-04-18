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
