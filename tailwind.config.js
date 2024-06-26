/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-light": "#edf2f4",
        "color-dark": "#FF5733",
        "color-card-light": "#8d99ae",
        "color-card-dark": "#A2FF33",
        "color-light-hover": "#ef233c",
        "color-dark-hover": "#33FFBB",
      },
      borderColor: {
        "color-light": "#ef233c",
        "color-dark": "#4933FF",
      },
      textColor: {
        "color-light": "#000",
        "color-dark": "#FF33D4",
      },
      colors: {
        error: {
          DEFAULT: "#FF0000",
          hover: "#CC0000",
        },
        success: {
          DEFAULT: "#008000",
          hover: "#006400",
        },
        warning: {
          DEFAULT: "#FFFF00",
          hover: "#CCCC00",
        },
        blue: {
          DEFAULT: "#0000FF",
          hover: "#0000CC",
        },
      },
    },
  },
  safelist: [
    {
      pattern: /text-color-(light|dark)/,
    },
    {
      pattern: /bg-color-(light|dark)/,
    },
    {
      pattern: /bg-color-card-(light|dark)/,
    },
    {
      pattern: /bg-color-(light|dark)-hover/,
      variants: ["hover"],
    },
    {
      pattern: /border-color-(light|dark)/,
    },
  ],
  plugins: [],
};
