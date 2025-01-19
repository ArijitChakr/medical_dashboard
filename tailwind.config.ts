import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7F8",
        navbar: {
          hover: "#01F0D0",
        },
        button: "#01F0D0",
      },
      fontFamily: {
        manrope: "var(--unnamed-font-family-manrope)",
      },
      gridTemplateRows: {
        "5": "0.25fr 0.25fr 0.25fr 0.25fr 0.25fr",
      },

      gridRow: {
        "3": "-3 / -1",
      },
      gridColumn: {
        "2": "4 / 5",
      },
    },
  },
  plugins: [],
} satisfies Config;
