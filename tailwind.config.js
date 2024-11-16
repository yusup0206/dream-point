/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4270B7",
          200: "#2E3A4C",
        },
      },
    },
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
    },
  },
  plugins: [],
};
