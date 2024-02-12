/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Uistite sa, že sem pridáte cesty k súborom, kde používate Tailwind CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Pridaný Tailwind CSS Forms plugin
  ],
}