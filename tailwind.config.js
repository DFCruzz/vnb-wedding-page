/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--t w-gradient-stops))',
      },
      fontFamily: {
        'vibes': ['Great Vibes', 'sans-serif'],
        'paris': ['Parisienne', 'sans-serif'],
        'ysra': ['Yrsa', 'sans-serif']
      }
    },
  },
  plugins: [],
}
