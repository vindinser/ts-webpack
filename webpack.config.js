// 引入path包
const path = require("path")
// 引入HTML插件
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebPackPlugin } = require("clean-webpack-plugin")

// webpack中所有的配置信息
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定打包目录
    filename: "bundle.js" // 打包后文件的文件名
  },
  // 指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/, // 规则生效文件
        use: 'ts-loader', // 要使用的loader
        exclude: /node-modules/ // 要排除的文件
      }
    ] // 指定加载规则
  },
  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: "Hello TS"
      template: "./src/index.html"
    }),
    new CleanWebPackPlugin()
  ],
  // 用来设置引用模块
  resolve: {
    extensions: [".js", ".ts"]
  }
}
