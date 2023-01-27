module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C9EEF7",
        secondary: "#DEEDC6",
        grey: "#D9D9D9",
      },
      borderWidth: {
        20: "20px",
        30: "30px",
        80: "80px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
