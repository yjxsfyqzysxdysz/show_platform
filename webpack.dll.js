'use strict'

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  entry: {
    vue: ['vue', 'vuex', 'vue-router', 'vue/dist/vue.esm.js'],
    core: ['core-js'],
    axios: ['axios'],
    lodash: ['lodash'],
    moment: ['moment'],
    viewDesign: ['view-design'],
    elementUi: ['element-ui'],
    echarts: ['echarts']
  },
  output: {
    filename: '[name].dll.js',
    path: resolve('dll'),
    library: '[name]' // 把文件里的内容通过全局变量暴露出来，变量的名字叫vendors
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]', // 对library这个库进行dllplugin的分析
      path: resolve('dll/[name].manifest.json')
    })
  ]
}
