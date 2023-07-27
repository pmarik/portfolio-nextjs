/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-100': '#D5FDF5',
        'color-200': '#98FAE7',
        'color-300': '#FF9900',
        'color-400': '#D64D00',
        'color-500': '#119B81',
        'color-600': '#186E5F',
        'color-700': '#164B4C',
        'light-150': '#D0FbFC'
      },
      backgroundImage: {
        'hero-img': "url('/images/hero-bg.jpg')",
        'dark-gradient': "linear-gradient(26deg, #000 0%, #2E1900 100%);",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'theme': 'linear-gradient(90deg, #F90 0%, #D64D00 100%);',
        'smudge': "url('/images/smudge.jpg')"
      },
    },
  },
  plugins: [],
}
