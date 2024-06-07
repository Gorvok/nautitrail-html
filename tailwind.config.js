/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nautitrail: {
          DEFAULT: '#25ebeb',
        },
      },
    },
  },
  plugins: [],
};
