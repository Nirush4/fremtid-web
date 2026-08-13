/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mustard-gold': '#D4A373',
        'warm-taupe': '#FAEDCD',
        'charcoal-slate': '#333333',
        'muted-coral': '#C84B31',
        'base-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
