/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
    "./app/**/*.ts",
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./components/**/*.tsx",
    "./components/**/*.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
    },
  },
},
  plugins: [],
}
