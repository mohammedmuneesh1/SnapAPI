/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        '1000': '100rem',
      }
    },
  },
  plugins: [],
}

