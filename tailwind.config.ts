import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    }
  },
  plugins: [],
} satisfies Config

