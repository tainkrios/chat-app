/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {}
    },
    fontFamily: {
      Roboto: ['Roboto Mono, monospace']
    },
    boxShadow: {
      'md': '2px 4px 6px rgba(28, 6, 49, 0.1)'
    }
  },
  plugins: []
}
