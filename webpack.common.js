const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// 尝试使用环境变量，否则使用根路径
// const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    // // 这可以帮助我们在代码中安全地使用环境变量
    // new webpack.DefinePlugin({
    //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    // }),
    // 对于 CleanWebpackPlugin 的 v2 versions 以下版本，使用 new CleanWebpackPlugin(['dist/*'])
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "ASSET_PATH"
  },
};
