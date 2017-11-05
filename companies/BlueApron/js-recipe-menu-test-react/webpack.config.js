const webpack = require('webpack');
const path = require('path');

const dir_src = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    index: './src/app.jsx',
    wine: './src/wine.jsx'
  },
  output: {
    path: './assets/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loaders: 'babel'
      }
    ]
  },
  externals: {
    jquery: '$',
    lodash: '_' // lodash should not be included in the bundle
  },
  profile: true,
  debug: true,
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
