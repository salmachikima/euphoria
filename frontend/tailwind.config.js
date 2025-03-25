/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        deepBlue: "#0A1F44",
        purple: "#7B2CBF",
        neonPink: "#FF007F",
      },
    },
  },
  plugins: [],
};
