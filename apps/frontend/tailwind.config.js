const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        "star-wars-grey": {
          1: "#1D1E1F",
          2: "#B5B7B7",
          3: "#48494a",
        },
      },
    },
  },
  plugins: [],
};
