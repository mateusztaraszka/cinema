module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        'blue': {
          'DEFAULT': '#2894ff',
          'dark': '#262c37',
          'darkest': '#1f242d',
        }
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionDelay: {
        '250': '250ms',
        '750': '750ms',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}