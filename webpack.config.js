var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var postCSSBugFixes = require('postcss-flexbugs-fixes');


var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/frontend/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: path.join(__dirname, "frontend"),
  devtool: debug ? "inline-sourcemap" : null,
  devServer: {
    inline: true,
    port: 1337
  },
  entry: "./js/client.js",
  output: {
    path: './dist',
    filename: "index_bundle.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        // loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
        include: path.resolve(__dirname, "./frontend")
      }
    ]
  },
  sassLoader:{
    includePaths: [path.resolve(__dirname, "./frontend")]
  },
  postcss: function () {
      return [autoprefixer, postCSSBugFixes];
  },
  // output: {
  //   path: __dirname + "/frontend/",
  //   filename: "client.min.js"
  // },
  plugins: debug ? [HtmlWebpackPluginConfig] : [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('./dist/style.css',{
      allChunks: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
};
