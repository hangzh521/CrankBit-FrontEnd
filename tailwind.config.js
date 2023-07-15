/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        background: '#062235',
        'background-light': '#EBF1F6',
        primary: '#007AD3',
        'primary-light': '#aebfcc',
        'primary-dark': '#123956',
        success: '#0EA739',
        error: '#dc2626',
        active: '#1FDB81',
        border: '#E6E6E6',
        gray: '#CBD5E1',
        darkGray: 'rgb(165,165,165)',
        hover: '#007AD3',
        textColorBlack: '#1E1E1E',
        userContent: '#E9EFF4',
      },
      borderColor: {
        primary: '#007AD3',
        secondary: '#03111B',
        gray: '#CBD5E1',
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
