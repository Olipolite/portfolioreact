/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  purge: [
    './src/**/*{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    screeens: {
      sm: '640px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#2c3333',
      green: '#2E4F4F',
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      white: colors.white,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [],
};
