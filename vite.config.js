import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
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
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  };
});