/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      height: {
        '720': '720px',
        '738': '738px',
      },
      width: {
        '520': '520px',
      },
    },
  },
  plugins: [], 
}

