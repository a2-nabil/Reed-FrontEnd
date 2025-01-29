module.exports = {
  content: ["./template-parts/*.{php,html,js}", "./*.{php,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary",
        primaryHover: "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        mainFont: "var(--color-main-font)",
        secondaryFont: "var(--color-secondary-font)",
      },
      fontFamily: {
        primary: "var(--font-primary)",
      },
    },
  },
  plugins: [],
};