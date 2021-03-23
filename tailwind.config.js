module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
