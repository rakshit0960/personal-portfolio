/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
      fontFamily: {
        "mono-code": ["ui-monospace", 'Cascadia Code', 'Source Code Pro', "Menlo", "Consolas", 'DejaVu Sans Mono', "monospace"],
      }
    },
  },
  plugins: [],
}

