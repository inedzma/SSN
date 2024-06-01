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
      customColor: 'rgb(176 156 137)', // hover na Dugme, header i footer
      customColor1: 'rgb(209,192,174)', // za gradient prijavi se na newsletter
      Dugme: 'rgb(104,91,81)', // boja dugmeta
      customColor4: 'rgb(246,245,245)',// hover na jednu od kategorija
      textBoja: 'rgb(51,51,51)', // boja texta
      DugmeUkloni: 'rgb(182,86,86)', // boja ukloni ili X (na mobitelu) u korpi/omiljeni
    },
},
  plugins: [
  ],

}


