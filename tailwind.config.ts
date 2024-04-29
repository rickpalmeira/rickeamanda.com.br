import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      sky: {
        700: "#2f8296",
        500: "#5a99a8",
        300: "#84afb9",
      },
      green: {
        700: "#71825e",
        500: "#94a285",
        300: "#b7c2ab",
      },
      rose: {
        700: "#8e2957",
        500: "#b46b8f",
        300: "#daadc6",
      },
      amber: {
        700: "#a34925",
        500: "#d86b39",
        300: "#ff8d51",
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
