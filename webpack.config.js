const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // 추가한 부분

module.exports = {
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/, // 해당 확장자로 끝나면 babel-loader가 처리
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // 웹팩 rebuild 시, 캐시에서 읽기시도(babel의 리트랜스파일링 필요 없도록)
          },
        },
      },
    ],
  },
  mode: "none", // none, production, development
  entry: "./src/index.tsx", // webpack 최초 진입점 경로 설정
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 번들링한 css, js 파일을 html 파일에 link태그, scripts태그로 추가
    }),
    new ForkTsCheckerWebpackPlugin(), // 추가한 부분
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // 404페이지 대신 index.html로 이동
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경사항만 갱신
  },
  resolve: {
    // import 시 확장자 생략 가능, 번들링할 파일 설정
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
