const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  // entry: {
  //   index:'./src/index.js',
  //   print:'./src/print.js'
  // },
  devtool: 'inline-source-map',
  devServer: {
    contentBase:'./dist',
    // disableHostCheck:true,
    // publicPath:'http://l.test.66buy.com.cn'  not recommend
  },
  plugins: [
      new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
      new HtmlWebpackPlugin({
        // title: "Output Management"
        title:'Development'
      }),
  ],
  output: {
    // filename: "main.js",
    // filename: "bundle.js",
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  // optimization:{
  //   usedExports: true,
  // },
};




