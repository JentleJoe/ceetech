# Ceetech Crafts

Furniture Website for Ceetech Crafts - Crafted to Inspire

## Build and Prerender Safety

Production prerender uses Puppeteer and is automatically skipped in Vercel build environments, where Chromium startup can fail due missing system libraries.

Vercel is explicitly configured to use `npm run build:no-prerender` in `vercel.json` for deterministic build stability.

- `npm run build`: normal production build (prerender enabled outside Vercel, skipped on Vercel)
- `npm run build:prerender`: force prerender in production builds
- `npm run build:no-prerender`: emergency fallback to force-disable prerender if build environment issues occur
- `npm run verify:prerender`: validate generated prerendered routes and key SEO tags

If you need prerender benefits in production and still want Vercel stability, build/prerender in CI and deploy prebuilt artifacts.

## Prerendered Production Deploy

This repository includes `.github/workflows/deploy-prerender-vercel.yml`, which:

- builds with prerender (`npm run build:prerender`)
- verifies prerender output (`npm run verify:prerender`)
- deploys the prerendered `dist` output to Vercel

Required GitHub repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

For deterministic production results, disable automatic Vercel Git deployments in the Vercel dashboard so this workflow is the only production deploy path.
