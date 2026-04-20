# Ceetech Crafts

Furniture Website for Ceetech Crafts - Crafted to Inspire

## Build and Prerender Strategy

Production prerender is generated during build using React SSR (no Puppeteer), so Vercel native Git deployments can remain fully automatic.

Vercel is configured to use `npm run build` in `vercel.json`, and that command already includes prerender generation.

- `npm run build`: default production build with SSR prerender output
- `npm run build:prerender`: explicit alias for prerender build
- `npm run build:no-prerender`: fallback build without prerender
- `npm run verify:prerender`: validate generated prerendered routes, rendered root markup, and critical SEO tags (title, description, canonical)

## Optional CI Validation

The repository includes `.github/workflows/prerender-guard.yml` to validate prerender output on push/PR.

Default Vercel automatic Git deployment does not require adding GitHub secrets and includes prerendered route output.
