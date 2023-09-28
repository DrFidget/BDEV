/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      smd:"590px",
      md: "750px",
      lg: "950px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        c1: "10rem",
        c2: "9rem",
        c3: "8rem",
        c4: "7rem",
        c5: "6rem",
        c6: "5rem",
        c7: "4rem",
        c8: "3rem",
        c9: "2rem",
        c10: "1rem",
        c11: "0.8rem",
        c12: "0.6rem",
        c13: "0.4rem",
        normal: "1.5rem",
        H1: "3.3rem",
      },
      colors: {
        "neon-green": "#0f0", // Replace with your desired neon green color code
      },
      width: {
        'px570': '570px',
      },
    },
    fontFamily: {
      Name: ["Roboto Condensed", "sans-serif"],
      TypeWriter: ["Courier Prime", "monospace"],
    },
  },
  plugins: [],
};
