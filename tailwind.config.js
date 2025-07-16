// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zen-maru': ['var(--zen-maru-gothic-font)', 'sans-serif'],
        'zen-kaku': ['var(--zen-kaku-gothic-new-font)', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'bold': '700',
        'black': '900',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
