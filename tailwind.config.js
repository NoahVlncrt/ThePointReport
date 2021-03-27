module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {},
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
