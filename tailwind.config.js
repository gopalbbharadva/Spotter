module.exports = {
  content: ["./src/**/*.{js,jsx,,ts,tsx}"],
  theme: {
    fontFamily: {
      lobster: "Lobster Two,cursive",
      roboto: "Roboto,sans-serif",
    },
    screens: {
      xs: "440px",
      // => @media (min-width: 540px) { ... }
      sm: "540px",
      // => @media (min-width: 540px) { ... }

      md: "668px",
      // => @media (min-width: 668px) { ... }

      lg: "924px",
      // => @media (min-width: 924px) { ... }

      xl: "1180px",
      // => @media (min-width: 1180px) { ... }

      "2xl": "1436px",
      // => @media (min-width: 1436px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
