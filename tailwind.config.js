/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF7',
          100: '#FAF6EF',
          200: '#F5EFE3',
          300: '#EBE0CC',
          400: '#DCCBB0',
        },
        coffee: {
          50: '#F7F2ED',
          100: '#E8DAD0',
          200: '#D4BFAF',
          300: '#B89880',
          400: '#9C7556',
          500: '#7A5638',
          600: '#6B4423',
          700: '#553620',
          800: '#3D2817',
          900: '#2A1B10',
        },
        amber: {
          400: '#D4A656',
          500: '#C8964F',
          600: '#B07F3D',
        },
        success: {
          500: '#5B8C5A',
          600: '#4A7349',
        },
        warning: {
          500: '#D49A3A',
          600: '#B07F2A',
        },
        error: {
          500: '#C25B4A',
          600: '#A24438',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
