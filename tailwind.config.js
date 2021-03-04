const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      teal: colors.teal,
      gray: colors.gray,
      blue: colors.blue,
      lightBlue: colors.lightBlue,
      white: colors.white,
      gradientFirstColor: '#ACDBEE',
      gradientSecondColor: '#85CBBB',
      blueGray: colors.blueGray,
},
    extend:{},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
