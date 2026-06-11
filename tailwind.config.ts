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
        ghana: {
          red: "#CE1126",
          gold: "#FCD116",
          green: "#006B3F",
          black: "#000000",
        },
        gnc: {
          dark: "#0D1117",
          darker: "#080C10",
          card: "#161B22",
          border: "#30363D",
          muted: "#8B949E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(0, 107, 63, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(206, 17, 38, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(252, 209, 22, 0.06) 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
