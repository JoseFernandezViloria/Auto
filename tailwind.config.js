/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ffd700",
        dark: "#1a1a1a",
        "dark-secondary": "#2a2a2a",
        "gray-800": "#2d2d2d",
        "gray-700": "#404040",
        "gray-600": "#525252",
        "gray-500": "#737373",
        "gray-400": "#a3a3a3",
        "gray-300": "#d4d4d4",
        "gray-200": "#e5e5e5",
        "gray-100": "#f5f5f5",
        "gray-900": "#171717",
      },
    },
  },
  plugins: [],
};
