/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md:'3rem',
        lg:'4rem'
      },
      colors: {
        primary: {
          DEFAULT: '#00ADB5',
          black: '#222831',
          gray: '#393E46',
          while: '#EEEEEE'
        }
      },
      
    extend: {
      animation: {
        bgColor: "bgColor 5s infinite",
      },
      Keyframes: {
        bgColor: {
          "0%": {
            transform: "translateY(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      },
    },
  },
  plugins: [],
}
