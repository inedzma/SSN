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
      customColor4: 'rgb(227,219,219)',
      customColor5: 'rgba(195,174,151,0.4)',
      customColor6: 'rgb(240, 240, 255)',
    },
},
  plugins: [
  ],

}


