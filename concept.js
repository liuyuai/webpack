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
*
*         __webpack_public_path__ = myRuntimePublicPath; // by this way can dynamically set path;
*
*
* **/


/*
*      三、Loaders
*
*         loader can transform a different language(like ts) to javascript, or load inline image as data URL;
*         also can allow you  import CSS directly from your js module
*
*        like  css-loader  ts-loader,  we can know it  (in your study framework, and the popular framework can be introduce itself)
*
*       use the Loader in 3 way
*
*       configure: specify them in your webpack.config.js
*       inline: specify them explicitly in each import  statement
*       CLI: specify them within  a shell command
*
*
*         1.configure
*             Loader are evaluated(取值)/executed(执行) from right to left (or from bottom to top);
*
*           module.exports = {
*               module:{
*                 rules:[
*                   {
*                     test: /\.css$/,
*                     use：[
*                       {loader: 'style-loader'},           finally
*                       {                                   second step
*                         loader: 'css-loader',
*                         options:{
*                           modules:true
*                         }
*                       },
*                       {loader:'sass-loader'}              first step
*                     ]
*                   }
*                 ]
*               }
*           }
*
*         2.Inline
*             use  ! to spilt  loader and path;
*             每个目录都会相对于当前目录解析
*             import Styles from 'style-loader!css-loader?modules!./styles.css'
*
*             note 3 point
*             ! will disable all configured normal loaders
*
*                eg: import Styles from '!style-loader!css-loader?modules!./styles.css';
*
*             !! will disable all configured loader(preLoaders, loaders, postLoaders)
*
*                eg: import Styles from '!!style-loader!css-loader?modules!./styles.css';
*
*             -! will disable all configured preLoader and loaders  but not postLoader
*
*                eg: import Styles from '-!style-loader!css-loader?modules!./styles.css';
*
*                 the parameter:
*                      e.g. ?key=value&foo=bar, or a JSON object,
*                      e.g. ?{"key":"value","foo":"bar"}.
*
*         3.CLI
*             webpack --module-bind pug-loader  --module-bind 'css=style-loader!css-loader'
*               use the pug-loader for .jade file, and the style-loader and css-loader for .css file;
*
*
*         Loader Features
*
*           1.loader can be chained. A chain is executed in reverse order.
*             the first loader passes its result(resource had transformed) to next one,the last loader will return the Javascript to webpackk
*
*           2.loader can sync or async
*
*           3.Loader run in Node.js and can do anything
*
*           4.loader can be configured with an 'option' Object
*
*           5.常见是通过package.json 的main 来将一个npm模块导出为loader， (behind in the Chinese doc)还可以在module.rule中使用loader字段直接引用一个模块
*
*           6.Plugin can give loaders more features
*
*           7.Loader can emit additional arbitrary files.
*
*
*         Loader follow the standard module resolution(模块解析)
*         loader are usually named xxx-loader(json-loader).
*
*
*
* **/


/*
*         四、Plugins
*
*            plugins purpose is to resolve the problem that a loader cannot do.
*
*           A webpack Plugin is Javascript object that has an 'apply' method, This 'apply' method is called by the compiler,
*         In entire compilation lifecycle can access compiler object.
*
*         (ps: in Vue, the  component )
*
*
*         Usage:
*             plugin can take arguments/options.you must pass a new instance to the plugin property in your webpack configuration.
*
*
*           eg:
*              const HtmlWebpackPlugin = require('html-webpack-plugin');
*              const webpack = require('webpack');
*              const path = require('path');
*
*              module.exports = {
*                 entry:'./path/to/my/entry/file.js',
*                 output:{
*                   filename:'[name].bundle.js',
*                   path: path.resolve(__dirname,'dist')
*                 },
*                 module:{
*                   rules:[
*                     {
*                       test: /\.(js|jsx)$/,
*                       use:'babel-loader'
*                     }
*                   ]
*                 },
*                 plugins:[
*                     new webpack.ProgressPlugin(),
*                     new HtmlWebPlugin( {template: './src/index.html'} )
*                 ]
*              }
*
*
* **/


/*
*         五、Configuration
*
*             webpack's configuration file is a Javascript file that exports webpack configuration.
*
*             webpack is follow the Node.js CommonJS standard,
*
*               1. use require() import other file
*               2. use require() get other utility  from  NPM package.
*               3. use javascript control expression.  like ?
*               4. use constants or variable to valued
*               5. write and execute functions to  generate  a part of the configuration.
*
*
*
*       Important:  The webpack configuration have many different ways to format and style.
*                   but  you and your team can understand and maintain consistent is most important.
*
*                   computer is a tool, people is the soul.
*
*
*
* **/

/*
*        六、Module
*
*            What is webpack module:
*               1. An ES2015 import statement
*               2. A CommonJS require statement
*               3. AMD  define ande require statement
*               4. An @import statement inside of a css/sass/less file
*               5. stylesheet url(...) or HTML <img src='...'>

*           Supported Module Type
*               1. ECMAScript modules
*               2. CommonJs modules
*               3. AMD modules
*               4. Assets
*               5. Web Assembly modules
*
*
*           Use the loader to added, webpack can supports more language and more preprocessor
*               1.CoffeeScript
*               2.TypeScript
*               3.ESNext(babel)
*               4.Sass
*               5.Less
*               6.Stylus
*               7.Elm
*
* **/


/*
*         七、Module Resolution
*
*            Resolving rules in webpack
*
*            Using enhanced-resolve,  webpack can resolve three kind of file paths;
*
*               1.Absolute path
*                   import '/home/me/file';
*                   import 'c:\\User\\me\\file'
*
*               2.Relative path     by current path to generate a  absolute path
*                   import '../src/file'
*                   import './file2'
*
*               3.module path
*                 import 'module';
*                 import 'module/lib/file'
*
*
*
*
*
*
* **/


/*
*         八、Module Federation  模块联盟
*
*             const OverridablesPlugin = require('webpack/lib/container/OverridablesPlugin');
*             module.exports = {
*                 plugin: [
*                     new OverridablesPlugin([
*                       {
*                         //we define an overridable module with OverridablesPlugin
*                         test1: './src/test1/js',
*                       },
*                     ]),
*                 ]，
*             };
*
*             index.js
*               __webpack_override__({
*                   //here we override test1 module
*                   test1: ()=>'I will override test1 module under src'
*               })
*
*
*
* **/


/*
*       九、Dependency Graph （依赖图）
*
*
*     One file depend on another file.  this allow webpack to take non-code assets.
*
*     HTTP1.1 : webpack's building is powerful,  the browser start a new request it can minimizes  the times for your app
*
*
*     http2 : you can also use the  code splitting  to achieve the best result.
*
*
*
*
*
* **/


/*
*       十、 Target
*
*         const path = require('path');
*         const serverConfig = {
*           target:"node",
*           output:{
*             path: path.resolve(__dirname, 'dist'),
*             filename:'lib.node.js'
*           }
*         };
*
*         const clientConfig = {
*           target:'web',   // default value is 'web'
*           output:{
*             path: path.resolve(__dirname, 'dist'),
*             filename:'lib.js'
*           }
*         }
*
*
*
*
*
* **/


/*
*       十一、Manifest
*
*       In a typical application or site built with webpack, there are three main type of code:
*
*       1. The source code you, and maybe your team ,have written
*       2. Any third-party library or 'vendor' code  your source is dependent on
*       3. A webpack runtime and manifest that conducts the interaction of all modules
*
*         manifest: 当compiler 开始 执行，解析，映射应用程序时，它会保留所有模板的详细要点，这个数据的集合称为  manifest数据
*          当完成打包并发送到浏览器时，runtime会 通过 manifest 来解析和加载模块.
*
*         which module syntax you have chosen,
*         those   ' import'or  'require' statement have become __webpack_require__ methods that point to module identifiers(模块表示符)
*         Using the data in the manifest, the runtime can by use identifier to find out ist behind modules.
*
*
*     !!!we can know the webpack how to work in its behind.
*
*         if you decide to improve performance of your project by  utilizing browser caching(浏览器缓存)
*
*
*       通过使用内容散列(content hash)作为 bundle 文件的名称，这样在文件内容修改时，会计算出新的 hash，
*       浏览器会使用新的名称加载文件，从而使缓存无效。
*
*
*
*
*
*
*
* **/

/*
*     HMR(Hot Module Replacement)
*
*
*
*
*     compiler saved,and generate new contentHash  then emit the  [hash].hot-update.js and [hash].hot-update.json
*     finally to  build the  changed module
*
*     webpack will bundle the  code in the memory
*
*     hot replacement emit a ajax request, get a [hash].hot-update.json.   for client-server(本地服务器) so the host is local path.
*
*
*
*
*
* **/


