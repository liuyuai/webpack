/*
*    Directory
*
*
*
*
*
*
*    一、 Concept
*       The core concept:
*           Entry:输入
*           Output:输出
*           Loaders:
*           Plugin:插件
*           Mode:模式
*           Browser Compatibility: 浏览器兼容性
*           environment:环境        in English doc had removed
*
*
*
*
*       1.entry 入口
*           by default its value is  ./src/index.js`
*
*           module.exports = { entry: './path/to/my/entry/file.js' }
*
*       2.output 输出
*           defaults to ./dist/main.js   other generate file ./dist
*
*           const path = require('path');
*
*           module.exports = {
*               entry:'./path/to/entry/file.js',
*               output:{
*                   path:path.resolve(__dirname,'dist'),
*                   filename: 'my-first-webpack.bundle.js'
*               }
*           }
*
*       3.Loaders
*           webpack only understand  JS and  JSON
*           Loader allow webpack process other types of files transform  we can used valid module
*
*         two properties
*           test:   identify which file should be transformed ,  compare with regex (正则)
*           use:    identify which loader should be transformed
*
*           module.exports = {
*             module:{
*               rules:[
*                 {test: /\.txt$/, use:'raw-loader'}
*               ]
*             }
*           }
*
*       4.plugin
*           plugin can be leveraged to perform a winder range of task, like  bundle optimization，asset management, inject teh environment variable
*
*           use require() and  add it to  plugins array.
*
*           use the plugin  we need to   use  new  syntax  create a  instance
*
*           const HtmlWebpackPlugin = require('html-webpack-plugin');  installed via NPM
*           const webpack = require('webpack');
*
*           module.exports = {
*               module:{
*                 rules:[
*                   { test:/\.txt$/, use:'raw-loader'}
*                 ]
*               },
*               plugins:[
*                 new HtmlWebpackPlugin({ template: './src/index.html'})  plugin need new its and create instance  控制反转,
*               ]
*           }
*
*       5.mode
*          module.exports = {
*             mode:'production'
*          }
*
*        the default value is production.
*
*           development,production,none  we can set.     webpack face the  different mode to  use  its build-in optimization.
*
*       6. browser compatibility   IE8+
*
*           ES5 compliant
*
*       7. Environment
*         webpack 5 runs on Node.js version 10.13.0+;
*
*
*
* **/



/*
*
*     一、entry point 入口
*
*         1.single entry syntax
*
*           module.exports = {                                      module.exports ={
*             entry:'/path/to/file.js'        =>                      entry:{ main: '/path/to/file.js' }
*           }                                                       }
*
*
*           multi-main-entry
*
*           module.exports = {
*               entry:[
*                 './src/file_1.js',
*                 './src/file_2.js'
*               ],
*               output:{
*                 filename:'bundle.js'
*               }
*           }
*
*         benefit:  quickly setup a webpack config when use one entry point(a library)
*         bad    :  not  flexibility
*
*
*
*         2.object syntax
*
*           module.exports = {
*             entry: {
*               app:'./src/app.js',
*               adminApp: './src/adminApp.js'
*             }
*           }
*
*       !!!In practice
*
*          separate App and vendor(第三方库) Entries
*
*           module.exports = {
*             entry:{
*               main: './src/app.js',
*               vendor: './src/vendor.js'  打包第三方库， 在浏览器上缓存，这样只要第三方库不更新，那么可以一直使用缓存 来达到 加速渲染的情况
*             }
*           }
*           In webpack 4, use the  optimization.splitChunks  to split main.js and vendor.js
*
*           In production:
*             output:{
*               filename:'[name].[contenthash].bundle.js'
*             }
*
*           In development
*             output:{
*               filename: '[name].bundle.js'
*             }
*
*
*         MPA (multi page application)
*
*           module.exports = {
*               entry: {
*                 pageOne: 'src/pageOne/index.js',
*                 pageTwo: 'src/pageTWo/index.js',
*                 pageThree: 'src/page/index.js'
*               }
*           }
*
*         As a rule fo thumb: One entry point   on HTML document
*
*
* **/


/*
*     二、output
*
*       Tell webpack how to write the compiled file to disk.
*
*       can be multiple entry points, only one output configuration is specified.
*
*        1.Simple usage:
*         module.exports = {
*           output:{
*             filename:'bundle.js',
*           }
*         }
*
*        2.Multiple Entry points
*
*         module.exports = {
*           entry: {
*             app: './src/app.js',
*             search: './src/search.js'
*           },
*           output:{
*             filename: '[name].js',
*             path: __dirname + '/dist'
*           }
*         }
*
*       3. using in CDN adn hashes
*
*         module.exports ={
*           //...
*           output:{
*             path:'/home/pro/cdn/assets/[fullhash]',
*             publicPath: 'https://cdn.example.com/assets/[fullhash]'
*           }
*         }
*
*           we can set dynamically at runtime
*           on the top of entry point file;
*         __webpack_public_path__ = myRuntimePublicPath;
*
*
*
*
*
*
*
*
*
*
*
*
* **/
