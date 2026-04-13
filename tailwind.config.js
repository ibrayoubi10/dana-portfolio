/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        mauve: {
          50:  "#faf4fb",
          100: "#f3e5f5",
          200: "#e4c8e8",
          300: "#cfa2d0",
          400: "#b87bb8",
          500: "#9e5a9c",
          600: "#7d5079",
          700: "#654062",
          800: "#4e3149",
          900: "#37223a",
        },
        blush: {
          50:  "#fff0f8",
          100: "#fce4f3",
          200: "#f8c6e8",
          300: "#f29fd8",
          400: "#e868c0",
          500: "#d44da8",
        },
        lilac: {
          50:  "#f5f0ff",
          100: "#ede0ff",
          200: "#dcc4ff",
          300: "#c49dff",
          400: "#a970ff",
          500: "#8b44ee",
        },
        pearl: {
          50:  "#fdfbff",
          100: "#f8f4fe",
          200: "#f1e8fd",
        },
        ink: {
          50:  "#f8f5fa",
          100: "#ede8f0",
          200: "#d5ceda",
          300: "#b0a6b8",
          500: "#6e6478",
          700: "#3a3040",
          900: "#1a1220",
        },
      },
      boxShadow: {
        glass:  "0 8px 32px rgba(125, 80, 121, 0.12), inset 0 0 0 1px rgba(255,255,255,0.5)",
        card:   "0 4px 24px rgba(101, 64, 98, 0.10)",
        glow:   "0 0 40px rgba(158, 90, 156, 0.35)",
        "glow-sm": "0 0 20px rgba(158, 90, 156, 0.25)",
        hover:  "0 16px 48px rgba(101, 64, 98, 0.20)",
        soft:   "0 2px 12px rgba(101, 64, 98, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "4px",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%,100%": { transform: "scale(1)",    opacity: "0.6" },
          "50%":     { transform: "scale(1.2)",  opacity: "0.15" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rotateBlob: {
          "0%":   { borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" },
          "50%":  { borderRadius: "45% 55% 40% 60% / 60% 40% 60% 40%" },
          "100%": { borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" },
        },
      },
      animation: {
        fadeUp:     "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        fadeIn:     "fadeIn 0.5s ease both",
        float:      "float 5s ease-in-out infinite",
        pulseRing:  "pulseRing 2.5s ease-in-out infinite",
        shimmer:    "shimmer 2.4s linear infinite",
        rotateBlob: "rotateBlob 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
