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
        primary: {
          200: "#cccbc8",
          300: "#d9d8d4",
          400: "#e6e4e1",
          500: "#edece8",
        },
        "secondary-dark": {
          100: "#e09a65",
          200: "#e0945a",
          300: "#e08e4f",
          400: "#e08743",
          500: "#e08138",
        },
        secondary: {
          100: "#fcb572",
          200: "#fcae65",
          300: "#fca758",
          400: "#fca14c",
          500: "#FD9B40",
        },
        typography: "#292929",
        "typography-dark": "#e8e8e8",
      },
      fontFamily: {
        body: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
