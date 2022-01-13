module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xl': '80em',
    },
    container: {
      center: true,
      maxWidth: { 'xl':'1200px'},
    },
    extend: {
      colors: {
        'white': '#FFF',
        'blue': {
          'DEFAULT': '#E3E8EC',
          'dark': '#262c37',
          'darkest': '#1f242d',
        },
        'grey': '#D7E1EA',
        'red': '#FF0000',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionProperty: {
        'scale': 'scale',
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