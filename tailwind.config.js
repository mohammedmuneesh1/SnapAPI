/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        '100p': '100rem',
      },
      height: {
        '128': '35rem',
      }
    },
  },
  plugins: [],
}

