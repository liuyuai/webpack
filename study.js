/*
*
*  npm documentation  we need to see
*
*
*  npm install **** --save   used in production
*  npm install **** --save-dev  used in  development
*
*  在配置其他域名 并且host中的解析也是 相对ip  但是页面解析不对
*
*
*   npm init -y 初始化
*   npm install webpack webpack-cli --save -dev  安装   --save-dev 保存在 开发环境
*
*   资源管理
*     webpack.config.js中   添加module 对象下 的rules 数组 下  可以根据正则来匹配 文件，然后添加相对应的 loader去解析
*
*   输出管理
*      html-webpack-plugin 来 dynamic动态 生成 html文件
*      使用  clean-webpack-plugin 中的 CleanWebpackPlugin 来清理 文件
*
*   开发环境
*       区分 开发环境和生产环境 使用不同的 插件plugin
*            devtool: 'inline-source-map'  资源图
*
*       开发工具(development Tool)
*
*         1. webpack's Watch Mode
*
*
*         2. webpack-dev-server
*            devServer:{contentBase:'./dist'}   webpack serve --open
*
*         3. webpack-dev-middleware
*             自己编写一个 server.js文件 然后在文件中 使用它的api 来实现
*
*    模块热替换(Hot Module Replacement)
*       devServer{ hot:true}
*
*    代码分割(code splitting)
*         动态引入
*
*    缓存cache
*       输出文件 [name].[contenthash].js  这也就是之前说的那种 每次布置项目的方式
*
*   构建 library
*       这个之后在做一下
*
*   环境变量
*       npx webpack --env NODE_ENV=local --env production --progress
*
*     node环境中 可以获取
*
*     构建性能(build performance)
*
*
*
* **/
