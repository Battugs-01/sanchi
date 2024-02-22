import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray: {
          50: "#f8f9fb",
          100: "#f2f2f2",
          200: "#f0f0f0",
          900: "#091242",
          "900_4f": "#0912424f",
          "900_0c": "#1018280c",
          "900_0f": "#151c270f",
          "100_02": "#f2f4f7",
          "100_01": "#f2f3f6",
          "50_19": "#f8f9fb19",
          "900_02": "#0f1728",
          "900_03": "#141414",
          "900_04": "#101828",
          "900_05": "#151c27",
          "900_01": "#1c1f35",
          "900_7f": "#031b377f",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#cfd4dc",
          300: "#9ba4b1",
          400: "#838e9e",
          500: "#666b89",
          700: "#475466",
          900: "#1d2838",
          "900_01": "#233651",
          "900_0a": "#061c3d0a",
          "300_01": "#98a1b2",
        },
        blue: {
          100: "#cee0fa",
          700: "#0b63e5",
          900: "#0052b4",
          A400: "#1979ff",
          A200: "#338af3",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      backgroundImage: {
        gradient: "linear-gradient(126deg ,#ffb629,#ffd956,#ffd6a5)",
        gradient1: "linear-gradient(224deg ,#6c6ce6,#1979ff)",
        gradient2: "linear-gradient(180deg ,#f8f9fb19,#00468c19)",
        default: "linear-gradient(180deg ,#ffffff,#ffffff)",
        gray: "linear-gradient(180deg ,#F9FAFB,#F9FAFB)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
