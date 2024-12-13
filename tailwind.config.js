/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'fira-mono': ['Fira Mono', 'monospace'],
        'source-code': ['Source Code Pro', 'monospace'],
        'fira': ['Fira Code', 'monospace'],
      },
      aspectRatio: {
        '16/11': '16 / 10',
      },spacing: {
        '1': '1px',
      },
      colors: {
        'dark-bg': '#222831',
        'dark-text': '#D3D3D3',
        'dark-border-blue': '#00ADB5',
        'dark-border-teal': '#008080',
        'dark-border-green': '#BCD4A4',
        'sage-green': '#BCD4A4',
        'ghost-white': '#F8F8FF',
        'light-coral': '#F08080',
      },
      boxShadow: {
        "behind-shadow": "24px 24px 0px 0px rgba(0,0,0,1);",
        "big-shadow": "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05), 12.5px 12.5px 10px rgba(0, 0, 0, 0.042), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028), 100px 100px 80px rgba(0, 0, 0, 0.02)",

      }
    },
  },
  plugins: [],
}
