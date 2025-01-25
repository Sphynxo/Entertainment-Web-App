/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "serif"],
      },
      colors: {
        red: "#FC4747",
        "dark-blue": "#10141E",
        gray: "#5A698F",
        blue: "#161D2F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
