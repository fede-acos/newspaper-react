/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "my-columns": "3fr 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night", "business", "corporate"],
  },
};
