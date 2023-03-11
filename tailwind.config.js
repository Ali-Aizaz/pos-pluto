/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: "#8F97A3",
      purple: "#450332",
      black: "#0C0B0B",
      "light-black": "#313131",
      "light-gray": "#717B8C",
      "bg-gray": "#EDF2F6",
      "text-gray": "#4C535F",
      "dark-blue": "#16003A",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};
