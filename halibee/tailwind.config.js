
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      colors : {
        primary: '#0000FF',
        secondary: '#FAAA20',
        tetiary: '#E0F4FF',
        darkMode: '#162C9A',
        background: '#C9D6EA',
      },
      screens: {
        xs: '300px',
        smx: {'max': '639px'},
        mdx: {'max': '767px'},
        lgx: {'max': '1023px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
