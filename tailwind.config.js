/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#061A40',
          200: '#003559',
        },
        hover: '#E0EEC6',
        bg: '#F1F7ED',
        placeholder: '#5C7A89',
      }
    },
  },
  plugins: [],
}
