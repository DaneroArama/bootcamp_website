/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'malinton': ['Malinton', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        'gothic': ['Gothic A1', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}