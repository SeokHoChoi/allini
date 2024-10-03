const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // 추가한 부분

module.exports = {
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]", // CSS Module 클래스명 설정
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|eot|woff|ttf)$/i,
        type: "asset/resource",
      },
      {
        test: "/\\.svg$/",
        use: ["@svgr/webpack"],
      },
    ],
  },
  mode: "none",
  entry: "./src/app/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/mockServiceWorker.js", to: "." }],
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false, // Disable the overlay
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@ui": path.resolve(__dirname, "./src/shared/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/shared/assets/styles"),
      "@images": path.resolve(__dirname, "./src/shared/assets/images"),
      "@api": path.resolve(__dirname, "./src/shared/api"),
      "@contexts": path.resolve(__dirname, "./src/shared/contexts"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@layouts": path.resolve(__dirname, "./src/shared/layouts"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
    },
  },
};
