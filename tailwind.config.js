/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

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
        'primary-darker': '#005a85',
        accent: '#4EDAB8',
        white: '#FFFFFF',
        dark: '#05050C',
      },
      width: {
        112: '28rem',
        128: '32rem',
      },
      maxWidth: {
        112: '28rem',
        128: '32rem',
      },
      listStyleType: {
        roman: 'lower-roman',
      },
      blur: {
        xs: '2px',
      },
    },
    fontFamily: {
      lexend: ['var(--font-lexend)', 'sans-serif'],
      poppins: ['var(--font-poppins)', 'sans-serif'],
    },
    screens: {
      xs: '520px',
      ...defaultTheme.screens,
      '3xl': '1800px',
      'h-sm': { raw: '(min-height: 640px)' },
      'h-md': { raw: '(min-height: 768px)' },
      'h-lg': { raw: '(min-height: 1024px)' },
    },
  },
  important: true,
};
