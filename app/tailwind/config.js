/*global module*/

module.exports = {
  purge: [],
  theme: {
    colors: {
      layout: '#F4F3EF',
      navbar: '#424242',
      white: '#FFFFFF',
      
      gray: {
        darkest: '#404040',
        dark: '#606060',
        DEFAULT: '#808080',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },

    extend:{
      gridTemplateColumns:{
        'layout': '80px minmax(900px, 1fr)'
      },
      maxHeight:{
        card: '800px'
      },
    }
  },
  variants: {},
  plugins: [],
}
