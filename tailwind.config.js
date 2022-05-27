const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
      },
    },
  },
  plugins: [],
};
