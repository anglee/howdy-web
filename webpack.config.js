/* global __dirname */

var path = require('path');
var webpack = require('webpack');

var main_js = path.resolve(__dirname, 'howdy.js');
var dir_public = path.resolve(__dirname, 'public');
var dir_js = path.resolve(dir_public, 'js');

module.exports = {
  devtool: 'source-map',
  entry: main_js,
  output: {
    path: dir_js,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_public,
    port: 8000
  },
  module: {
    loaders: [
      {
        test: main_js,
        loaders: ['babel'],
        exclude: 'node_modules',
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
};
