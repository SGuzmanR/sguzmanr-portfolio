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
        white: '#FAFAFF',
        gray: '#747A88',
        black: '#353535',
        blue: '#4BB7D5'
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)'],
        'birthstone': ['var(--font-birthstone)'],
      },
      backgroundImage: {
        'radial-black': 'radial-gradient(circle, rgba(53,53,53,1) 0%, rgba(0,0,0,1) 300%)',
      },
    },
  },
  plugins: [],
}