/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#000',
        secondary: '#001b22',
        tertiary: '#ffffff',
        accent : '#78e702',

      }
    },
  },
  plugins: [],
}

