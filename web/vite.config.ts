import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    // ! Keep in sync with tsconfig.app.json
    // * Resolving depends on how deeply nested the resource is
    alias: [
      {
        find: "~/web-shared",
        replacement: resolve(__dirname, "../../../packages/web-shared/src"),
      },
      {
        find: "~",
        replacement: resolve(__dirname, "src"),
      },
    ],
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
