# Ceetech Crafts

Furniture Website for Ceetech Crafts - Crafted to Inspire

## Build and Prerender Safety

Production prerender uses Puppeteer and runs by default in production builds (including Vercel).

- `npm run build`: normal production build with prerender enabled
- `npm run build:prerender`: force prerender in production builds
- `npm run build:no-prerender`: emergency fallback to force-disable prerender if build environment issues occur
- `npm run verify:prerender`: validate generated prerendered routes and key SEO tags
