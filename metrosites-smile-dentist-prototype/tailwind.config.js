/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        smileclinic: {
          primary: "#0ea5e9",
          secondary: "#60a5fa",
          accent: "#06b6d4",
          neutral: "#111827",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
