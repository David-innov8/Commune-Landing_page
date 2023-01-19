/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
        'orange': "#F2F0DF"
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
        
      
    },
  },
  plugins: [],
}