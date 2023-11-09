/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-bg': '#222831',
      'dark-text': '#F8F8FF',
      'dark-border-teal': '#008080',
      'dark-border-green': '#BCD4A4',
      'sage-green': '#BCD4A4',
      'ghost-white': '#F8F8FF'
    },
    extend: {
      aspectRatio: {
        '16/11': '16 / 10',
      },
    },
  },
  plugins: [],
}

