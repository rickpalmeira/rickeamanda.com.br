import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Garamond Premr Pro"', "serif"],
        cursive: ['"Alyson Signature"', "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
