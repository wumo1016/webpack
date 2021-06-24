const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    globalObject: "this",
    library: {
      name: "MyLibrary",
      type: "commonjs2",
    },
  },
};
