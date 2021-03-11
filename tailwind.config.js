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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
