/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mars: {
          base: "#8A3636",
          light: "#AF7F6B",
          lighter: "#D8B997",
          white: "#FBFDFC",
          gray: "#B0ADA8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
