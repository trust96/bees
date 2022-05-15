/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D6D4CD",
        secondary: "#B9B6AC",
        nero: "#161615",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
