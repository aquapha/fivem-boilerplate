import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },

  base: "./",

  build: {
    outDir: "build",
    emptyOutDir: true,
  },

  esbuild: {
    logOverride: {
      "this-is-undefined-esm": "silent",
    },
  },
});
