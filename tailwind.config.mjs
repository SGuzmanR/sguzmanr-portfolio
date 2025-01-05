/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: '#fafaffff',
        secondaryGray: '#747a88ff',
        secondaryGrayLight: '#8F949F',
        secondaryGrayDark: '#2f2f2fff',
        secondaryGrayDarker: '#5D626D',
      }
    },
  },
  plugins: [],
}