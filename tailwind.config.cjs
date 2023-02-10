/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      spacing: {
        0.5: '0.12rem'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      },
      boxShadow: {
        modern: '0 1px  #9aa0b90d, 0 5px 40px #a6adc933',
        classic: '0 5px 15px #0000004d'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [require('tailwindcss-debug-screens')]
}
