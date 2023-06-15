/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        18: '4.5rem', //72px
        50: '12.5rem', // 200px
        55: '13.75rem', // 220px
        76: '19rem', // 304px
        95: '23.75rem', // 380px
        100: '25rem', // 400px
      },
      minWidth: {
        55: '13.75rem', // 220px
        95: '23.75rem', // 380px
      },
      maxWidth: {
        md: '52.5rem', // 840px
        xl: '90rem', //1440px
      },
      height: {
        0.25: '0.0625rem', // 1px
        0.5: '0.125rem', // 2px
        18: '4.5rem', //72px
      },
      margin: {
        34: '8.5rem', // 136px
      },
      padding: {
        1.5: '0.375rem', // 6px
        3.5: '0.875rem', // 14px
        8.5: '2.125rem', // 34px
        15: '3.75rem', // 60px
      },
      gap: {
        15: '3.75rem', // 60px
      },
      fontSize: {
        10: '2.5rem', // 40px
      },
      lineHeight: {
        3.5: '0.875rem', //14px
        12: '3rem', // 48px
      },
      borderRadius: {
        7.5: '1.875rem', // 30px
        5: '1.25rem', // 20px
      },
      boxShadow: {
        md: '0 4px 24px rgba(0, 0, 0, 0.03)',
      },
      zIndex: {
        51: 51,
      },
      animation: {
        fade: 'fade .3s ease-in',
        'slide-up': 'slide-up .3s ease-out',
        'slide-down': 'slide-down .3s ease-out',
        'float-zoom': 'float-zoom .3s ease-in-out',
        'zoom-in': 'zoom-in .3s ease-in',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'slide-up': {
          from: { transform: 'translateY(200px)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { transform: 'translateY(-200px)' },
          to: { transform: 'translateY(0)' },
        },
        'float-zoom': {
          from: { transform: 'translateY(500px) scale(0.3)' },
          to: { transform: 'translateY(0) scale(1)' },
        },
      },
    },
    screens: {
      xs: '30rem', // 480px
      sm: '48rem', // 768px
      md: '64rem', // 1024px
      lg: '80rem', // 1280px
      xl: '90rem', // 1440px
    },
    colors: {
      gray: '#8F97A3',
      purple: '#450332',
      black: '#0C0B0B',
      red: '#F64F4F',
      'light-black': '#313131',
      'light-gray': '#717B8C',
      silver: '#E0E4EC',
      'bg-gray': '#EDF2F6',
      'text-gray': '#4C535F',
      'dark-blue': '#16003A',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollBar: ['rounded'],
  },
}
