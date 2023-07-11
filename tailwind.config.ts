import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'monserrat': ['Montserrat', 'sans-serif'],
      'crimson': ['Crimson Text', 'serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    },
    fontSize: {
      'tt32': '32px',
      'tt24': '24px',
      'tt20': '20px',
      'pg16': '16px',
      'pg14': '14px',
    }
  },
  plugins: [],
} satisfies Config

