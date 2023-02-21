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
    extend: {
      colors: {
        "theme-purple": "#450332",
        "theme-black": "#0C0B0B",
        "theme-light-gray": "#717B8C",
        "theme-bg-gray": "#EDF2F6",
        "theme-text-gray": "#4C535F",
      },
    },
  },
  plugins: [],
};
