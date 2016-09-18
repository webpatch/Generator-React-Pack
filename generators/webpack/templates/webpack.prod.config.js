// "use strict";

var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  entry: [
    './src/index' // 定义程序入口文件
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 输出文件路径
    publicPath: '',
    filename: 'bundle.js' // 输出文件名
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // 通过正则匹配js,jsx文件
        exclude: /node_modules/, // 跳过 node_modules 目录
        loaders: ['babel-loader'] // 调用 babel进行es6->es5转换
      }
    ]
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ]
};