/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        "2xl": "1536px",
      },
    },
    colors: {
      "deep-blue": "#0e1317",
      black: " #000",
      green: "#2FDA44",
      red: "#E51E1E",
      white: "#eeeef1",
      "menu-gray": "#171d22",
      gray: "#2a343e",
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }], //14px
      base: ["1rem", { lineHeight: "1.5rem" }], //16px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], //18px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], //20px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], //24 px
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }], //30px
      "3.5xl": ["2rem", { lineHeight: "2.5rem" }], //32px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], //36px
      "4.5xl": ["2.5rem", { lineHeight: "3rem" }], //40px
      "5xl": ["3rem", { lineHeight: "3.75rem" }], //48px
      "6xl": ["3.75rem", { lineHeight: "1" }], //60px
      "7xl": ["4.5rem", { lineHeight: "1" }], //72px
      "8xl": ["6rem", { lineHeight: "1" }], //96px
      "9xl": ["8rem", { lineHeight: "1" }], //128px
    },
  },
  plugins: [],
};
