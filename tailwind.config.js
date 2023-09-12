/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  purge: [
    './src/**/*{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    colors: {
      princeton: '#FF9616',
      bittersweet: '#F87060',
      cactus: '#3ec582',
      asphalt: '#121212',
      svart: '#0B0B0B',
      vistablue: '#9BA2FF',
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
    extend: {
      container: {
        screens: {
          none: '100%',
          sm: '640px',
          md: '768px',
          lg: '850px',
        },
      },
    },
  },
  plugins: [],
};
