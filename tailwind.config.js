/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      a: ["Vollkorn", "serif"],
      b: ["Play", "sans-serif"],
      c: ["Exo 2", "sans-serif"],
      d: ["Playwrite AU TAS", "cursive"],
      e: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
}

