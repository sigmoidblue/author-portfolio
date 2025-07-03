/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spectral: ["Spectral", "serif"],
    },
    backgroundImage: {
      "main-grad": "linear-gradient(to top, #C7D2FE, #FECACA, #FFFFFF);",
      "main-grad-short":
        "linear-gradient(to top, rgba(254, 202, 202, 1) 0%, rgba(255, 234, 234, 1) 25%, rgba(255, 255, 255, 1) 100%)",
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
      },
      animation: {
        "horizontal-scroll": "horizontal-scroll linear 16s infinite ",
        "horizontal-scroll-2": "horizontal-scroll-2 linear 16s infinite ",
      },
      keyframes: {
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "horizontal-scroll-2": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
