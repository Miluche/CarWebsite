module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_400: "#c8c8c8",
        gray_500: "#a49e9e",
        black_900: "#000000",
        bluegray_101: "#cccccc",
        bluegray_100: "#d9d9d9",
        red_A400: "#ff002d",
        light_blue_400: "#23aaf6",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius8: "8px",
        radius11: "11px",
        radius21: "21px",
        radius23: "23px",
        radius29: "29px",
        radius50: "50%",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
