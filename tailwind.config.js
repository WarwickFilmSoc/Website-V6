/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        primary: '#006295',
        accent: '#4EDAB8',
        white: '#FFFFFF',
        dark: '#05050C',
      },
    },
    fontFamily: {
      lexend: ['var(--font-lexend)', 'sans-serif'],
      poppins: ['var(--font-poppins)', 'sans-serif'],
    },
  },
};
