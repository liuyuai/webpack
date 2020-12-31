const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  // entry: './src/index.js',
  entry: {
    index:'./src/index.js',
    print:'./src/print.js'
  },
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
    publicPath: "/",
  },
};




// module:{
//   //根据正则匹配文件
//   rules:[
//     {
//       test:/\.css$/i,
//       use:['style-loader','css-loader'],
//     },
//     {
//       test: /\.(png|svg|jpg|jpeg|gif)$/i,
//       type:'asset/resource',
//     },
//     {
//       test:/\.(woff|woff2|eot|ttf|otf)$/i,
//       type: "asset/resource",
//     },
//     {
//       test:/\.(csv|tsv)$/i,
//       use:['csv-loader'],
//     },
//     {
//       test:/\.xml$/i,
//       use:['xml-loader'],
//     },
//   ],
// },