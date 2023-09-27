/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueku': '#1E93FF',
        'yellowku': '#FCC822',
        'greyku': '#D1D1D1',
        'blackku': '#000000',
      },
    },
  },
  plugins: [],
}

