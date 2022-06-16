/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["brandon-grot-w01-light", "brandon-grot-w05-light", "sans-serif"],
      serif: ["corben, serif"],
    },
    extend: {
      colors: {
        purple: "#743448",
        tan: "#EBE0D5",
        tanDark: "#E4BFAD",
        black: "#48413F",
        brown: "#B0988E",
        brownDark: "#413A38",
        orange: "#C14735",
        orangeDark: "#7A1509",
        gradientOrange: "#E34B2B",
        gradientPurple: "#B894CB",
        buttonGradient1: "#5F5BCD",
        buttonGradient2: "#F5570D",
      },
      letterSpacing: {
        widest: "4.6px",
      },
    },
  },
  plugins: [],
};
