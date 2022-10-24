/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nav: "#000013f2",
        navdark: "#000013",
        navlight: "#000000",
      },
    },
    fontFamily: {
      jonota: ["Jonota"],
      sandwip: ["Sandwip"],
    },
  },
  plugins: [],
};
