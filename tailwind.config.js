/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: "#F7FAFA",
          surface: "#FFFFFF",
          line: "#E2E8E7",
          ink: "#0F2027",
          sub: "#52666A",
          teal: {
            50: "#EDFBF9",
            100: "#D3F3EE",
            300: "#7FCEC2",
            500: "#0F8C7E",
            600: "#0B6E63",
            700: "#08544B",
          },
          slate: {
            100: "#EEF2F3",
            300: "#C4D0D2",
            500: "#5B6E72",
            700: "#2E3B3E",
          },
          red: "#C23B3B",
          amber: "#B6862C",
        },
      },
      fontFamily: {
        sans: ["Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
        head: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
