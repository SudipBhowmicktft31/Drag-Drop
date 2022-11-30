const path = require("path");
module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "development",
  entry: "./src/app.ts",
  output: {
    publicPath: "/dist/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
