
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      colors : {
        primary: '#162C9A',
        secondary: '#FAAA20',
        tetiary: '#E0F4FF',
        background: '#C9D6EA',
      },
      screens: {
        xs: '300px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
