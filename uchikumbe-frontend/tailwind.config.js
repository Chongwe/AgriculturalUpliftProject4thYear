// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            goldenrod: '#A67D00',
            uchiGreen: '#428643'
        },

    },
  },
  plugins: [],
})

