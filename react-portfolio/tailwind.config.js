// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"], // Add Playfair font
      },
    },
  },
  plugins: [],
}
