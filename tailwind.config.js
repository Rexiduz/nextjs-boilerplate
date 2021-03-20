const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './client/features/**/*.{js,ts,jsx,tsx}',
    './client/views/**/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const custom = {
        '.full': {
          width: '100%',
          height: '100%'
        },
        '.min-full': {
          minWidth: '100%',
          minHeight: '100%'
        },
        '.screen': {
          width: '100vw',
          height: '100vh'
        },
        '.min-screen': {
          minWidth: '100vw',
          minHeight: '100vh'
        },
        '.min-size-parent': {
          minWidth: 'inherit',
          minHeight: 'inherit'
        },
        '.size-parent': {
          width: 'inherit',
          height: 'inherit'
        },
        '.center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.absolute-center': {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }

      addUtilities(custom)
    })
  ]
}
