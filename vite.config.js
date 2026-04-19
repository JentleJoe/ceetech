import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import path from "path";
import { createRequire } from "module";
import { prerenderRoutes } from "./prerender.routes";

const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender");
const Renderer = vitePrerender.PuppeteerRenderer;
const isEnabled = (value) => value === "1" || value === "true";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const runningOnVercel = isEnabled(process.env.VERCEL);
  const forcePrerender = isEnabled(process.env.FORCE_PRERENDER);
  const disablePrerender = isEnabled(process.env.DISABLE_PRERENDER);

  // Vercel build containers commonly fail to launch Puppeteer Chromium.
  // Keep Vercel builds stable; run prerender in controlled environments.
  const shouldPrerender =
    isProduction && !disablePrerender && (forcePrerender || !runningOnVercel);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      target: "es2019",
    },
    plugins: [
      react(),
      imagetools(),
      shouldPrerender &&
        vitePrerender({
          staticDir: path.resolve(import.meta.dirname, "dist"),
          routes: prerenderRoutes,
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            removeComments: true,
            sortAttributes: true,
          },
          renderer: new Renderer({
            maxConcurrentRoutes: 1,
            skipThirdPartyRequests: true,
            navigationOptions: {
              waitUntil: "domcontentloaded",
              timeout: 120000,
            },
            renderAfterTime: 1500,
          }),
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  };
});