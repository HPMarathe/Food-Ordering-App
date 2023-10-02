/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {},
};
export const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      ".no-scrollbar::-webkit-scrollbar": {
        display: "none",
      },
      " .no-scrollbar": {
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    };
    addUtilities(newUtilities);
  },
];
