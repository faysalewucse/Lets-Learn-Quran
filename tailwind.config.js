/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nav: "#000013f2",
        navdark: "#000013",
        navlight: "#000000",
        golden: "#F4C079",
        goldenhover: "#ca9242",
      },
    },
    fontFamily: {
      jonota: ["Jonota"],
      sandwip: ["Sandwip"],
      arabic1: ["Arabic1"],
      arabic2: ["Arabic2"],
      arabic3: ["Arabic3"],
    },
  },
  plugins: [],
};
