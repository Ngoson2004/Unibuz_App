import flowbite from "flowbite-react/tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        "clash-grotesk-semibold": [
          "ClashGrotesk-Semibold",
          ...defaultTheme.fontFamily.sans,
        ],
        "clash-grotesk-bold": [
          "ClashGrotesk-Bold",
          ...defaultTheme.fontFamily.sans,
        ],
        satoshi: ['"Satoshi-Regular"', ...defaultTheme.fontFamily.sans],
        "satoshi-md": ['"Satoshi-Medium"', ...defaultTheme.fontFamily.sans],
        "satoshi-bold": ['"Satoshi-Bold"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-lime": "linear-gradient(to right, #ECFCCB, #D9F99D)",
      },
      animation: {
        moving: "moving 15s linear infinite",
        "moving-reverse": "moving-reverse 20s linear infinite",
        "fade-in": "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        moving: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%) translateY(100%)" },
        },
        "moving-reverse": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%) translateY(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "selector",
};
