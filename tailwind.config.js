// @ts-nocheck

const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/preload/**/*.{vue,js,ts,jsx,tsx}',
        './src/render/**/*.{vue,js,ts,jsx,tsx}',
        './src/render/index.html'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                gray: defaultColor.coolGray
            }
        }
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [
        // Additional first-party plugins
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp')
    ]
}
