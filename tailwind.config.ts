import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        themeDark: '#121c25',
        themeLight: '#F6F5F8',
        offWhite: '#EAE8ED',
      },
      borderColor: {
        themeBorder: 'hsla(0,0%,51%,0.2)',
      },
      textColor: {
        dark: 'rgb(15 23 42)',
        graySecondary: 'rgb(148 163 184)',
        light: '#eee',
        offWhite: '#EAE8ED',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
