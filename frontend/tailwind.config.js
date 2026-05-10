/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        accent: '#C8A165',
        'accent-light': '#E8C98A',
        'surface': '#F8F6F2',
        'surface-dark': '#1A1E24',
        'background-light': '#F5F1E8',
        'background-dark': '#1c1916',
        'text-muted': '#7A7A7A',
        'border-light': '#E5E0D8',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
        'product': '0 4px 30px rgba(44,62,80,0.10)',
      },
    },
  },
  plugins: [],
};