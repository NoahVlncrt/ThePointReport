module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {},
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
