import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        serif: ['"Garamond Premr Pro"', "serif"],
        cursive: ['"Alyson Signature"', "cursive"],
      },
      backgroundPosition: {
        "top-m-100": "center -100px",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
