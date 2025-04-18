/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [
    {
      pattern:
        /(text|bg|border-l)-(sky|red|yellow|green)-(100|200|300|400|500|600|700|800|900)/,
      variants: ["dark"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "login-image": "url('login_wallpaper.jpg')",
      },
    },
  },
  plugins: [],
};
