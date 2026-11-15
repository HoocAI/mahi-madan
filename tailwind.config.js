/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f2eee6',
        ink: '#141312',
        bronze: '#a08052',
        sand: '#dcd3c3',
        grey: '#77736b',
        'grey-light': '#a39e94',
        'line-light': '#d9d3c7',
        'line-dark': '#34322e',
        brand: {
          'velvet-veils': '#4b3038',
          'ayurvedic-magic': '#3e4a3c',
          'mahi-records': '#0d0d0c',
          'bebo-studio': '#c2b299',
          'king-international': '#2b2a28',
          'vaanipath': '#2e3a45',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

