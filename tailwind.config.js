/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text':{
          "primary": "#122945",
          'secondary':"#5E7793",
        },
        'secondary': '#D8E4FB',
        'bg': '#F1F4F9',
      },
    },
    plugins: [],
  }
}