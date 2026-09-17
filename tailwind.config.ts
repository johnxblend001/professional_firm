import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "var(--brand-dark, #063633)",
          darkHover: "var(--brand-dark-hover, #094743)",
          accent: "var(--brand-accent, #c8f8a9)",
          accentHover: "var(--brand-accent-hover, #b6f592)",
          lime: "var(--brand-accent, #c8f8a9)",
          surface: "var(--brand-surface, #f2f5f1)",
          cardBg: "var(--brand-card-bg, #ffffff)",
          charcoal: "#181818",
          muted: "var(--brand-muted, #6c6c6c)",
          border: "var(--brand-border, #e5e7eb)",
          gold: "#ffdb00",
        },
      },
      fontFamily: {
        sans: ["var(--font-onest)", "Onest", "sans-serif"],
        heading: ["var(--font-onest)", "Onest", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        box: "10px",
        img: "5px",
        card: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
