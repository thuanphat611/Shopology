/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#FFFFFF",
        "primary-black": "#363738",

        "second-gray": "#F5F5F5",
        "second-wheat": "#FEFAF1",
        "second-red": "#DB4444",

        "button-green": "#47B486",
        "button-red": "#DB4444",
        "button-hover-red": "#E2B93B",
        "button-hover-blue": "#EB5757",

        "text-white": "#FAFAFA",
        "text-gray": "#7D8184",
        "text-black": "#000000",

        "background-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
