/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '140':'140px',
      },
    },
    colors:{
      customColor: 'rgb(176 156 137)',
      customColor1: 'rgb(209,192,174)',
      customColor2: 'rgb(104,91,81)',
      customColor3: 'rgba(104,91,81,0.7)',
      customColor4: 'rgb(246,245,245)',
      textBoja: 'rgb(51,51,51)',
    },
},
  plugins: [
  ],

}


