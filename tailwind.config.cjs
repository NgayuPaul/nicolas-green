const { transform } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Animations
      keyframes: {
        float: {
          "0, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeZoom: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeZoom: "float 0.8s ease-out forward",
      },

      // colors
      colors: {
        primary: "#2F7D32",
        primaryDark: "#1B5E20",
        lightGreen: "#EAF5EE",
      },
    },
  },
  plugins: [],
};
