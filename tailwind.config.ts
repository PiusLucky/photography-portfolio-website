import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#4A2CED",
        background: "#070708",
        customGray: "#62646C",
        customGrayAlt: "#797C86",
        customGrayAlt2: "#AFB0B6",
        customGray90: "#E4E4E6",
        lightGray: "#CACACE",
        lightPurple: "#D6D0FB",
        superGray: "#2F2F37",
        lightDark: "#1C1C21"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config