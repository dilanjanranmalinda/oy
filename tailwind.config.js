const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#143954", // Base color
          50: "#e5eef5",
          100: "#c8dced",
          200: "#a4c6e3",
          300: "#6ea5d1",
          400: "#3b85c1",
          500: "#2d6ca7", // Adjusted for contrast
          600: "#1f527e",
          700: "#143954",
          800: "#0e293b",
          900: "#091a26",
        },
        secondary: {
          DEFAULT: "#FFB74D", // Accent color derived from contrast
          50: "#fff4e1",
          100: "#ffe4b8",
          200: "#ffd389",
          300: "#ffc257",
          400: "#ffb74d",
          500: "#e69e44",
          600: "#b37c34",
          700: "#805924",
          800: "#4e370e",
          900: "#1f1605",
        },
      },
    },
  },
  plugins: [],
});
