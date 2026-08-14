/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F8F3EC',
        'dark-chocolate': '#51301F',
        'terra-cotta': '#E1937D',
        'cappuccino': '#AA8867',
        surface: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
