module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        Red: "hsl(0, 78%, 62%)",
        Cyan: "hsl(180, 62%, 55%)",
        Orange: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
        VeryDarkBlue: "hsl(234, 12%, 34%)",
        GrayishBlue: "hsl(229, 6%, 66%)",
        VeryLighGrey: "hsl(0, 0%, 98%)",
      },
      lineHeight: {
        12: "3rem",
      },
      maxWidth: {
        350: "350px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
