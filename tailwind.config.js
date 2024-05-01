/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A5DB73",
        secondary: "#F5F4EE",
        black: "#141816",
        green: "#00B360",
        orange: "#FDC639",
        white: "#FEFFFF",
      },
      backgroundColor: {
        // dark: "#FFF",
      },
    },
  },
  plugins: [],
};
