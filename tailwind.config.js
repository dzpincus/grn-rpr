/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#743448",
  "base-100": "#FFF7EC",
  "base-200": "#EBE0D5",
  "base-300": "#E4BFAD",
  "base-content": "#4D4745",
  secondary: "#C14735",
  "secondary-focus": "#7A1509",
  info: "#B0988E",
  gradientPrimary: "#B894CB",
  gradientSecondary: "#E34B2B",
  neutral: "#546A7B",
  "neutral-focus": "#546A7B",
  accent: "#247BA0",
};

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
      colors: colors,
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: colors,
      },
    ],
  },
  plugins: [require("daisyui")],
};
