/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/images/bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",

          secondary: "#03B8D7",

          accent: "#03B8D7",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
