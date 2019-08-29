/*
 * @Author      : Jerrychan
 * @Date        : 2019-08-27 00: 19: 32
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-08-27 13: 22: 45
 * @Description : 这里填写页面信息
 */

const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
  mode     : 'development',
  devtool  : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open       : true,
    port       : 8080,
    hot        : true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry : "./src/index.ts",
  output: {
    filename: "bundle.js",
    path    : path.resolve(__dirname, '../dist')
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
  plugins:[
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ],

}