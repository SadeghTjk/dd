/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
        'quicksand' : ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
