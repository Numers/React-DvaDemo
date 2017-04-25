/**
 * Created by baolicheng on 2017/4/20.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssFor = require('postcss-for');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true }), //将css从style里抽离出来
  new HtmlWebpackPlugin({
    title: 'index',
    filename: 'index.html',  //#生成html的位置
    inject: 'body',                     //#插入script在body标签里
  }),
];
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      models: path.resolve(__dirname, './src/models'),
      public: path.resolve(__dirname, './src/public'),
      routes: path.resolve(__dirname, './src/routes'),
      services: path.resolve(__dirname, './src/services'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  'plugins': plugins,
  module: {
    "loaders": [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },{
        test: /\.jpe?g$|\.svg$|\.gif$|\.png$/i,
        loader: 'url-loader?limit=10000&name=images/[hash].png'
      },]
  },
};
