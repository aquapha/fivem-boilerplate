import TailwindBase from "@dead-horizon/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [TailwindBase],
  content: [
    ...TailwindBase.content,
    "./index.html",
    // ! Keep in sync with tsconfig.app.json
    // * Path depends on how deeply nested the resource is
    "../../../packages/web-shared/src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
};
