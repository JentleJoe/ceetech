# Ceetech Crafts

Furniture Website for Ceetech Crafts - Crafted to Inspire

## Build and Prerender Safety

Production prerender uses Puppeteer and is automatically disabled on Vercel builds to avoid Chromium system-library failures in that environment.

- `npm run build`: normal production build (prerender runs outside Vercel, skipped on Vercel)
- `npm run build:prerender`: force prerender in production builds
- `npm run build:no-prerender`: force-disable prerender
- `npm run verify:prerender`: validate generated prerendered routes and key SEO tags
