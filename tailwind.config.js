/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -3%) scale(1.06)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        'drift-slow': 'drift 28s ease-in-out infinite',
        'drift-slower': 'drift 40s ease-in-out infinite',
        shine: 'shine 1.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
