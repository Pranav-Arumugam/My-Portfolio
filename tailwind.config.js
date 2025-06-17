/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
        },
        accent: {
          DEFAULT: "#14B8A6",
          light: "#2DD4BF",
        },
      },
    },
  },
  plugins: [],
}
