const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // 추가한 부분

const isDevelopment = process.env.NODE_ENV === "development";

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
              sourceMap: isDevelopment,
              importLoaders: 2, // postcss-loader와 sass-loader를 위한 설정
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
              importLoaders: 2, // postcss-loader와 sass-loader를 위한 설정
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|eot|woff|ttf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            use: ["@svgr/webpack"],
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
          },
          {
            type: "asset",
            resourceQuery: /url/, // *.svg?url
          },
        ],
      },
    ],
  },
  mode: process.env.NODE_ENV || "development",
  devtool: isDevelopment ? "eval-source-map" : false,
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
      "@assets": path.resolve(__dirname, "./src/shared/assets"),
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
