const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
