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
        textColorBlack: '#1E1E1E',
      },
      borderColor: {
        primary: '#007AD3',
        secondary: '#03111B',
      },
      maxWidth: {
        container: '1280px',
      },
      width: {
        container: '1280px',
        button: '60',
        authHeroLogoWidth: '80px',
      },
      height: {
        authHeroLogoHeight: '100px',
      },
    },
  },
  plugins: [],
}
