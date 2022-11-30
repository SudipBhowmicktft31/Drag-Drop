const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "production",
  entry: "./src/app.ts",
  output: {
    // publicPath: "/dist/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
//   devtool: "none",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
