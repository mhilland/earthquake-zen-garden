module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        light: '#ededed',
        DEFAULT: '#777777',
        dark: '#444444'
      },
      blue: '#0011bb',
      purple: '#6600cc'
    }
  },
  variants: {
    extend: {
      textColor: ['visited']
    }
  },
  plugins: []
}