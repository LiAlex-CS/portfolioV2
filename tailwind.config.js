/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-dark": {
          100: "#262626",
          200: "#303030",
          300: "#3E3E3E",
          400: "#434343",
        },
      },
      fontFamily: {
        body: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
