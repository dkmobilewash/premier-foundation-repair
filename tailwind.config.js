/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#1A56DB',
        navy: '#0D1F4C',
        steel: '#3D4A5C',
        charcoal: '#1A1F2E',
      },
      fontFamily: {
        headline: ['Bebas Neue', 'Oswald', 'sans-serif'],
        subheading: ['Barlow', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
