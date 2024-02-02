/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#7E33E0",
        "primary-dark":"#0D0E43",
        "primary-light":"#8A8FB9",
        "secondary":"#FB2E86"
      },
fontFamily:{
  Josefin:['Josefin Sans'],
  Lato:["Lato"]

},

    },
  },
  plugins: [],
}

