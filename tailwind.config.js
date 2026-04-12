/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'ui-serif', 'serif'],
      },
      colors: {
        pearl: {
          50:  "#fdfbfd",
          100: "#f8f3f7",
          200: "#f0e6ef",
          300: "#e2cfe0",
        },
        mauve: {
          50:  "#faf4f9",
          100: "#f3e5f2",
          200: "#e4c8e3",
          300: "#cfa2ce",
          400: "#b87bb6",
          500: "#9e5a9c",
          600: "#7d5079",   /* primary */
          700: "#654062",
          800: "#4e3149",
          900: "#372236",
        },
        blush: {
          100: "#fef0f7",
          200: "#fcd8ed",
          300: "#f8b8de",
          400: "#f090c8",
          500: "#e468b0",
        },
        ink: {
          50:  "#f8f6f8",
          100: "#eeebee",
          200: "#d9d5d9",
          300: "#b5adb5",
          500: "#78707a",
          700: "#3e3540",
          900: "#1e1820",
        },
      },
      boxShadow: {
        soft:  "0 2px 16px rgba(101, 64, 98, 0.07)",
        card:  "0 4px 28px rgba(101, 64, 98, 0.10)",
        hover: "0 12px 44px rgba(101, 64, 98, 0.16)",
        glow:  "0 0 48px rgba(125, 80, 121, 0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-9px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseRing: {
          "0%,100%": { transform: "scale(1)", opacity: "0.5" },
          "50%":     { transform: "scale(1.18)", opacity: "0.15" },
        },
      },
      animation: {
        fadeUp:    "fadeUp 0.55s ease both",
        float:     "float 5s ease-in-out infinite",
        shimmer:   "shimmer 2.4s linear infinite",
        pulseRing: "pulseRing 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
