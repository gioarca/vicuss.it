const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    require("@tailwindcss/postcss"),
    require("autoprefixer"),
    // eventuali altri plugin PostCSS (autoprefixer, cssnano, ecc.)
  ],
};
