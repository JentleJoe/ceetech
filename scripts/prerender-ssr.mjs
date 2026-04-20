import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { prerenderRoutes } from "../prerender.routes.js";

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

const DIST_DIR = path.resolve(process.cwd(), "dist");
const SERVER_DIR = path.join(DIST_DIR, "server");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");

const routeMeta = {
  "/": {
    title: "Best Furniture & Interior Design in Benin City | Ceetech Crafts Academy & Services",
    description:
      "Crafted to Inspire - We don't just design interiors, we craft experiences. #1 Furniture maker in Benin City. Custom furniture, interior design & academy. Serving all Benin City areas.",
    canonical: "https://ceetechcrafts.com",
  },
  "/about": {
    title: "About Ceetech Crafts | Furniture & Interior Company in Benin City",
    description:
      "Learn about Ceetech Crafts, a Benin City furniture manufacturer and interior design company delivering custom furniture, installations, and professional training.",
    canonical: "https://ceetechcrafts.com/about",
  },
  "/furniture": {
    title: "Furniture Maker in Benin City | Custom & Ready-Made Furniture | Ceetech Crafts",
    description:
      "Looking for furniture in Benin? Ceetech Crafts is a trusted furniture maker and furniture company in Benin City, offering custom manufacturing and ready-made showroom furniture.",
    canonical: "https://ceetechcrafts.com/furniture",
  },
  "/interiors": {
    title: "Interior Designer in Benin City | Interiors & Finishing | Ceetech Crafts",
    description:
      "Interior design and finishing services in Benin City — POP work, painting, tiling, window treatments, and complete interior projects for homes and businesses.",
    canonical: "https://ceetechcrafts.com/interiors",
  },
  "/academy": {
    title: "Furniture Academy in Benin City | Professional Furniture Training | Ceetech Crafts",
    description:
      "Join Ceetech Crafts Furniture Academy in Benin City for practical furniture making training. Learn from master craftsmen through beginner and advanced programs.",
    canonical: "https://ceetechcrafts.com/academy",
  },
  "/contact": {
    title: "Contact Ceetech Crafts | Furniture & Interior Services in Benin City",
    description:
      "Contact Ceetech Crafts for custom furniture, interior design, installation, and training inquiries in Benin City, Edo State. Call, WhatsApp, or visit our showroom.",
    canonical: "https://ceetechcrafts.com/contact",
  },
  "/404": {
    title: "Page Not Found | Ceetech Crafts",
    description:
      "The page you are looking for could not be found. Explore Ceetech Crafts furniture and interior design services in Benin City.",
    canonical: "https://ceetechcrafts.com/404",
  },
};

const upsertTag = (html, matcher, tagMarkup) => {
  if (matcher.test(html)) {
    return html.replace(matcher, tagMarkup);
  }

  return html.replace("</head>", `${tagMarkup}\n  </head>`);
};

const applyRouteMeta = (html, route) => {
  const meta = routeMeta[route];
  if (!meta) {
    return html;
  }

  let next = html;

  next = upsertTag(next, /<title>[^<]*<\/title>/i, `<title>${meta.title}</title>`);
  next = upsertTag(
    next,
    /<meta[^>]*name=["']description["'][^>]*>/i,
    `<meta name="description" content="${meta.description}" />`,
  );
  next = upsertTag(
    next,
    /<link[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${meta.canonical}" />`,
  );

  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${meta.title}" />`,
  );
  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${meta.description}" />`,
  );
  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${meta.canonical}" />`,
  );

  next = upsertTag(
    next,
    /<meta[^>]*property=["']twitter:title["'][^>]*>/i,
    `<meta property="twitter:title" content="${meta.title}" />`,
  );
  next = upsertTag(
    next,
    /<meta[^>]*property=["']twitter:description["'][^>]*>/i,
    `<meta property="twitter:description" content="${meta.description}" />`,
  );
  next = upsertTag(
    next,
    /<meta[^>]*property=["']twitter:url["'][^>]*>/i,
    `<meta property="twitter:url" content="${meta.canonical}" />`,
  );

  return next;
};

const routeToPath = (route) => {
  if (route === "/") {
    return path.join(DIST_DIR, "index.html");
  }

  return path.join(DIST_DIR, route.replace(/^\//, ""), "index.html");
};

const loadServerEntry = async () => {
  const candidates = [
    path.join(SERVER_DIR, "entry-server.js"),
    path.join(SERVER_DIR, "entry-server.mjs"),
  ];

  for (const candidate of candidates) {
    try {
      await readFile(candidate, "utf8");
      const moduleUrl = `${pathToFileURL(candidate).href}?v=${Date.now()}`;
      return await import(moduleUrl);
    } catch {
      // Try the next candidate.
    }
  }

  throw new Error("Could not find built SSR entry. Expected dist/server/entry-server.js or .mjs");
};

const renderAllRoutes = async () => {
  const template = await readFile(TEMPLATE_PATH, "utf8");
  const serverEntry = await loadServerEntry();

  if (typeof serverEntry.render !== "function") {
    throw new Error("SSR entry does not export a render(url) function");
  }

  for (const route of prerenderRoutes) {
    const { appHtml } = await serverEntry.render(route);

    if (!appHtml || typeof appHtml !== "string") {
      throw new Error(`SSR render returned invalid HTML for route ${route}`);
    }

    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    if (html === template) {
      html = template.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${appHtml}</div>`);
    }

    html = applyRouteMeta(html, route);

    const outPath = routeToPath(route);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
  }

  await rm(SERVER_DIR, { recursive: true, force: true });

  console.log(`SSR prerender completed for routes: ${prerenderRoutes.join(", ")}`);
};

await renderAllRoutes();
