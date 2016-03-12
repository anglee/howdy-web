/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'public');
var main_js = path.resolve(__dirname, 'howdy.js');

module.exports = {
  entry: main_js,
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_build,
    port: 8000
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: main_js,
        exclude: 'node_modules',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: 'index.html' } // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};


module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
}