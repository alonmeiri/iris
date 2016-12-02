var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var fs = require('fs');


// Webpack settings for React Docs

module.exports = {
  entry: './docs/main.jsx',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist-styleguide'),
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]___[hash:base64:5]!postcss-loader') }
    ]
  },

  node: {
    fs: "empty"
  },

  postcss: [
    require('autoprefixer')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('css/modules.css', { allChunks: true })
  ]
};
