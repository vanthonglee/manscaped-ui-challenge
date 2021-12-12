module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['arial'],
    },
    extend: {
      colors: {
        'gray-scale': {
          200: '#D1D1D1',
          400: '#757575',
          500: '#5A5A5A',
          600: '#1D1D1D',
        },
      },
    },
  },
  plugins: [],
}
