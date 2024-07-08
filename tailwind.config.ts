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
        blue: {
          300: "#2f8296",
          200: "#5a99a8",
          100: "#84afb9",
        },
        green: {
          300: "#71825e",
          200: "#94a285",
          100: "#b7c2ab",
        },
        red: {
          300: "#8e2957",
          200: "#b46b8f",
          100: "#daadc6",
        },
        neutral: {
          50: "#fbfbfb",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
