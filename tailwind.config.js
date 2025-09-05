/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1", // primary
          600: "#4f46e5", // darker
          700: "#4338ca", // even darker
        },
        accent: {
          400: "#fbbf24",   // Amber
          500: "#f59e0b",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
