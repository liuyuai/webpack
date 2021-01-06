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
*           only understand  JS and  JSON
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
*
*
*
* **/
