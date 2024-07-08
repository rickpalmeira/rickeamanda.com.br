import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Garamond Premr Pro"', "serif"],
        cursive: ['"Alyson Signature"', "cursive"],
      },
      colors: {
        cyan: {
          700: "#2f8296",
          500: "#5a99a8",
          300: "#84afb9",
        },
        emerald: {
          700: "#71825e",
          500: "#94a285",
          300: "#b7c2ab",
        },
        rose: {
          700: "#8e2957",
          500: "#b46b8f",
          300: "#daadc6",
        },
        neutral: {
          50: "#fbfbfb",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
