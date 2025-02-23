/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        body: {
          bg: "#2C2C2C",
        },
        navbar: {
          bg: "#121212",
        },
        orange: {
          primary: "#FF6F00",
          border: "#FF7043",
          button: "#FF7F50",
          hover: "#FF6347",
        },
        white: {
          letters: "#ffffff",
          primary: "#E0E0E0",
        },
        gray: {
          primary: "#B0B0B0",
        },
        footer: {
          bg: "#1F1F1F",
          text: "#B0B0B0",
        },
      },
    },
  },
  plugins: [],
};
