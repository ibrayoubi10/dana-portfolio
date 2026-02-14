/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Arial'],
      },
      colors: {
        ink: {
          950: "#0b1220",
          900: "#0f172a",
          800: "#111c33",
        },
        slateSoft: "#94a3b8",
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: "#22c55e",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.35)",
        card: "0 12px 40px rgba(2, 6, 23, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};
