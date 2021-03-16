/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./src/config.json');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Reader', 'sans-serif'],
    },
    colors: {
      primary: '#192623',
      black: {
        DEFAULT: '#333333',
      },
      white: {
        light: '#F2F2F2',
        DEFAULT: '#FFF',
      },
    },
    extend: {
      height: {
        card: config.card.height,
      },
      width: {
        card: config.card.width,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
