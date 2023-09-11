const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}', './src/renderer/index.html'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
      },
      colors: {
        gray: colors.slate,
        primary: {
          50: '#f0f7ff',
          100: '#dfeeff',
          200: '#b9defe',
          300: '#7bc5fe',
          400: '#35a7fb',
          500: '#0a8ced',
          600: '#006eca',
          700: '#0057a4',
          800: '#054e8d',
          900: '#0a3e70',
          950: '#07274a',
        },
        secondary: {
          50: '#fff8ed',
          100: '#feefd6',
          200: '#fcdbac',
          300: '#fac177',
          400: '#f79b40',
          500: '#f58220',
          600: '#e66410',
          700: '#bf4b0f',
          800: '#973c15',
          900: '#7a3314',
          950: '#421808',
        },
        accent: {
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffb070',
          400: '#ff8437',
          500: '#ff6210',
          600: '#eb4506',
          700: '#c73207',
          800: '#9e280e',
          900: '#7f240f',
          950: '#450f05',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    iconsPlugin({
      collections: getIconCollections(['heroicons', 'ph']),
    }),
  ],
}
