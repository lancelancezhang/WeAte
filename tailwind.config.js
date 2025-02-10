module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure these paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"], // Add or remove themes here
  },
};
