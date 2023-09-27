import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
    },
  },
  plugins: [],
} satisfies Config
