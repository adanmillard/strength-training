/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "transparent-black": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
