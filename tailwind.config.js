/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px",
      

    },
    extend: {},
    fontFamily:{
      PlayfairDisplay:[ "Playfair Display", "serif"],
     Urbanist:["Urbanist", "sans-serif"],
     OpenSans:["Open Sans", "sans-serif"],

    },
    container:{
      center:true,
      padding:{
        DEFAULT:"12px",
        md:"32px",
      }


    },
  },
  plugins: [],
}