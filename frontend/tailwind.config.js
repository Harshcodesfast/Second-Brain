/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BrandColorM: {
          300: "#c7d2fe",
        },
        purple: {
          200: "#d9ddee",
          500: "#9492db",
          600: "#7164c0",
        },
      },
    },
  },
  plugins: [],
};