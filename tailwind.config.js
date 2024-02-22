/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#FF0000',
        white: '#FFFFFF',
        almostBlack: '#282828',
        textSecondary: '#aaa',
      },
    },
  },
  plugins: [],
}
