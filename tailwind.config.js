const konstaConfig = require('konsta/config')
module.exports = konstaConfig({
  konsta: {
    colors: {
      'brand-teamdao-primary': '#2afe30',
      'brand-teamdao-secondary': '#1b8520',
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'teamdao-primary': '#2afe30',
        'teamdao-secondary': '#1b8520',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});