/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      fontFamily: {
        miriam: ["Miriam Libre", "sans-serif"],
        abandoned: ["abandoned", "sans-serif"],
      },
      colors: {
        primary: "var(--foreground-rgb)",
      },
    },
  },
  variants: {},
  // plugins: [require('@tailwindcss/typography')],
};