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
        'mplus1p': ['var(--mplus1p-font)', 'sans-serif'],
        'mplus1code': ['var(--mplus1code-font)', 'monospace'],
        'mplus-rounded1c': ['var(--mplus-rounded1c-font)', 'sans-serif'],
        'noto-sans-jp': ['var(--noto-sans-jp-font)', 'sans-serif'],
        'noto-serif-jp': ['var(--noto-serif-jp-font)', 'serif'],
        'mochiy-pop-one': ['var(--mochiy-pop-one-font)', 'sans-serif'],
        'dancing-script': ['var(--dancing-script-font)', 'cursive'],
        'yusei-magic': ['var(--yusei-magic-font)', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
