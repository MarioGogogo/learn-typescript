/*
 * @Author      : Jerrychan
 * @Date        : 2019-08-26 23: 31: 22
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-08-27 00: 24: 44
 * @Description : 这里填写页面信息
 */
const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode     : 'development',
  devtool  : 'cheap-module-eval-source-map',
  devServer: {
      contentBase: './dist',
      open       : true,
      port       : 8080,
      hot        : true
    },
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [{
      test   : /\.tsx?$/,
      include: path.resolve(__dirname, '../src'),
      use    : [{
        loader: 'ts-loader'
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  output     : {
    path: path.resolve(__dirname, '../dist')
  }
}