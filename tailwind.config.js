/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "open-menu": "url('./assets/open-menu.svg')",
        "close-menu": "url('./assets/close_menu.svg')",
        "open-menu-dark": "url('./assets/open-menu-dark.svg')",
        "close-menu-dark": "url('./assets/close_menu_dark.svg')",
      },
    },
  },
  plugins: [],
};
