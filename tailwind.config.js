/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: "#ff6363",
        secondary: colors.gray,
      }),
    },
  },
  plugins: [],
};
