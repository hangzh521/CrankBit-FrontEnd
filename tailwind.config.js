/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        background: '#03111B',
        primary: '#007AD3',
        active: '#1FDB81',
        border: '#E6E6E6',
        gray: '#CBD5E1',
        hover: '#007AD3',
      },
      borderColor: {},
      maxWidth: {
        container: '1280px',
      },
      width: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
