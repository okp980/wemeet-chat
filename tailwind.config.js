/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E94057",
      },
      fontFamily: {
        noto: ["NotoSans"],
      },
    },
  },
  plugins: [],
}
