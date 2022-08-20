module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#333333", // main texts & heading 
        "secondary-dark_gray": "#5E5E5E", // para texts
        "light-gray": "#6C6C6C", // texts on light orange backgrounds
        "secondary-light-gray": "#F5F5F5", // stroke color for white bg cards
        "orange": "#FE793D", // main orange color
        "secondary-orange": "#FFE6DB", // stroke orange color for light-orange backgrounds
        "light-orange": "#FFF0E9", // light orange color for backgrounds
        "secondary-light_orange": "#FFF9F6", // color for linear gradient
        "green": "#5BAB5E", // green color for indicators and etc.
        "dark_green": "#478c4a" //dark green for button hovers
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}