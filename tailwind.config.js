/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gmail-red': '#EA4335',
        'gmail-blue': '#4285F4',
        'gmail-green': '#34A853',
        'gmail-yellow': '#FBBC05',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
