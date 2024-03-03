const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    ".": "./src/home/scripts.js",
  },
  output: {
    filename: "[name]/bundle.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: "./src/home/index.html",
      inject: "head",
      favicon: "./src/assets/HC_LOGO_LIGHT_48x48.png",
      scriptLoading: "blocking",
      chunks: ["."],
    }),
  ],
  devServer: {
    client: {
      logging: "info",
    },
  },
};
