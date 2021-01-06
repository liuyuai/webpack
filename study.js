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
*       General(大体上)
*          实时更新最新版本
*
*     生产环境
*
*     开发环境
*
*
*   内容安全策略（Content Security Policies）
*
*   生产环境 vagrant
*     虚拟机(virtual machine) 在虚拟机上运行 webpack
*     Advanced Usage with nginx
*
*
*   依赖管理
*       正则表达式匹配 文件名
*       对应的 资源文件 会产生 一个序号
*
*   scaffolding 脚手架
*       1. 编写一个 涉及面广的 通用脚手架
*       2. 做一些 特殊内容的 配置
*       3. 谁会用这个脚手架
*
*   HMR(Hot Module Replacement) 热模块更新
*     用于开发环境, hot true来实现热替换  webpack-serve-dev
*
*   Tree shaking
*     按照 ES2015的语法 import  export
*     来实现 打包时候 压缩 使用到的 内容
*
*   Production 生产环境
*     使用 webpack-merge
*     来分离
*           webpack.common.js 公共配置代码   开发和生产都能用到
*
*           webpack.dev.js  开发环境，可配置 独自的设置
*              mode:'development'
*              devtool:'inline-source-map'
*
*           webpack.prod.js 生产环境，可配置 独自的设置
*              mode:'production'
*              devtool:'source-map'
*
*         自从webpack4+后，指定的mode 会 自动配置 definePlugin
*         所以你能够
*           process.env.NODE_ENV 来获取当前环境
*
*      懒加载(lazy load)
*      按需加载 (on demand)
*
*      ECMAScript 模块
*
*
*     shimming 预置依赖
*
*       shimming 是一个库, 它将新的API引入到 一个旧的环境中,而且仅靠旧的环境中已有的手段实现。
*
*
*       polyfill 就是一个用在浏览器API上的 shimming
*
*          通常 先检查当前浏览器是否支持某个API，如果 不支持  按需加载 对应的polyfill。 然后新旧浏览器 就都可以使用这个API了。
*
*          能力检查的 代码长呢  还是全部加载的 代码长呢
*
*
*     TypeScript
*        添加 ts-loader  编译
*
*     web Workers
*       webpack5 添加 新特性  new Worker  能够执行js代码在浏览器上 而不用bundle
*        可以通信
*
*     PWA(Progressive Web Application)
*          在离线时 应用程序能够正常运行, 使用了 Service Worker 技术
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
*
*
* **/

/*
*
*    开发环境(development) 和 生产环境(production)
*
*    开发环境：为了方便开发，我们需要 强壮的 source map(资源图), 本地服务器 实时加载(live reloading) 或者 HMR(Hot Module Replacement)热模块替换
*
*    生产环境： 我们需要 minified bundles(压缩 bundles), 更轻巧的(source map) 和 optimized asset(优化资源文件)  提高加载时间。
*
*
*
*
*
* **/
