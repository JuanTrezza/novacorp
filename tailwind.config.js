/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-yellow': '#fde400',
        'cyber-cyan': '#00eefc',
        'cyber-dark': '#151408',
        'cyber-gray': '#383527',
        'cyber-text': '#e8e2cf',
        'cyber-muted': '#cdc7aa',
      },
      fontFamily: {
        sans: ['"Barlow Condensed"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
