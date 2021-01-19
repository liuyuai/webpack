const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode:"development",  //'production' 'development' 'none'
  //   Chosen mode tells webpack to use its built-in optimizations accordingly
  
  entry: '.src/index.js',  // string | object | array
  //  default ./src
  //  everything begin execute in here
  //  webpack start build
  
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, 'dist'), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    
    filename: "[name].bundle.js", // string (default)
    // the filename template for entry check
    
    publicPath: "/asset/",   //string
    //the url to the output directory resolved relative to the HTML page
    library: {
      type:'umd',
      name:'MyLibrary'
    },
    //  this is a old syntax
    
    uniqueName:'my-application', // (defaults to package.json "name")
    // unique name for this build to avoid conflicts with other builds in the same HTML
    
    name:'my-config',
    //name of the configuration, shown in output
    
  },
  module: {
    // configuration regarding modules
    rules: [
        // rules for modules (configure loaders, parse option, etc.)  etc = etcetera
      {
        
        // !!!condition
        
        test: /\.jsx?$/,  // regular expression  正则 来匹配文件
        include: [
            path.resolve(__dirname,"app")
        ],
        exclude: [
            path.resolve(__dirname,'app/demo-files')
        ],
        
        // there are matching conditions , each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (take preferrence over test and include)
        
        // Best practices
        
        // - Use RegExp only in tests and  for filename matching
        // - Use arrays fo absolute paths in include and exclude to match the full path
        // - Try to avoid exclude adn preference include
        // Each condition can also receive an object with 'and','or',or 'not' properties
        // which are an array of condition
  
        issuer:  /\.css$/,
        issuer: path.resolve(__dirname, "app"),
        issuer: { and: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { or: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { not: [ /\.css$/ ] },
        issuer: [ /\.css$/, path.resolve(__dirname, "app") ],
        // conditions for the issuer (the origin of the import)
        
        
        // Actions:
        loader: "babel-loader",
        // the loader which should be applied, it will be resolved relative to the context
        
        options:{
          presets:["es2015"]
        },
        //option for the loader

        use:[
            //apply multiple loaders and options instead
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
            
            }
          }
        ],
        type: "javascript/auto",
        //specifies the module type
      },
    ]
  },
  resolve: {
   // options for resolving module requests
   // (does not apply to resolving of loaders)
    modules: ["node_modules",path.resolve(__dirname, 'app')],
    //directories where to look for modules (in order)
    extensions:['.js','.json','.jsx','.css'],
    //extensions that are used
    alias: {
      // a list of module name aliases
      // aliases are imported relative to the current context
    }
  },
  performance: {
    hints:'warning', //enum   'warning' | 'error'  false/true
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (int bytes)
    assetFilter: function (assetFilename) {
      //Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  devtool: "source-map", //enum
  // enhance debugging by adding meta info for the browser tool
  // source-map most detailed at the expense of build speed
  
  context: __dirname, //string (absolute path!)
  // the home directory for the webpack
  // changes chunk loading behavior, available external modules
  // and generated code style
  
  devServer: {
    proxy:{ // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase:path.join(__dirname , 'public'),// boolean | string | array | static file location
    compress:true, // enable gzip compression
    historyApiFallback:true,  //true for index.html upon 404, object for multiple paths
    hot:true,// hot module replacement. depends on HotModuleReplacementPlugin
    https:false, // true for self-signed, object for cert authority
    noInfo:true, // only errors & warns on hot reload
  },
  optimization: {
  
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
    new CleanWebpackPlugin()
  ],
};
