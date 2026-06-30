import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1020",
        violet: "#6E5BFF",
        peach: "#FFB17A",
        mint: "#5BE3B6",
        cream: "#FFF7EE",
        "sarthi-ink": "#0B1020",
        "sarthi-violet": "#6E5BFF",
        "sarthi-peach": "#FFB17A",
        "sarthi-mint": "#5BE3B6",
        "sarthi-cream": "#FFF7EE",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-manrope)", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(110, 91, 255, 0.45), 0 4px 18px -6px rgba(255, 177, 122, 0.35)",
        "glow-mint": "0 10px 40px -10px rgba(91, 227, 182, 0.55), 0 4px 18px -6px rgba(110, 91, 255, 0.25)",
        "glow-soft": "0 8px 32px -12px rgba(11, 16, 32, 0.18)",
      },
      keyframes: {
        "float-pulse": {
          "0%, 100%": { transform: "translateY(0px) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(-8px) scale(1.02)", opacity: "0.92" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-pulse": "float-pulse 4s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out both",
      },
      backgroundImage: {
        "gradient-shimmer":
          "linear-gradient(90deg, rgba(110,91,255,0) 0%, rgba(110,91,255,0.25) 50%, rgba(110,91,255,0) 100%)",
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(110,91,255,0.18) 0%, rgba(255,177,122,0.10) 35%, rgba(255,247,238,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
