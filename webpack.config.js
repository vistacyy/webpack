let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require('webpack-chunk-hash');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: './app/common.js'
  },
  output: {
    publicPath: './',
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        // 分离css代码
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // 分离css代码
    new ExtractTextPlugin('styles.css'),

    // 指定公共 bundle 的名字。
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),

    // 压缩
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true
    // }),

    // 环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // 根据相对路径生成webpack标识符
    new webpack.HashedModuleIdsPlugin(),

    // 根据内容生成chunkHash
    new WebpackChunkHash(),

    // 记录chunkHash到文件
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest",
      // inlineManifest: true
    }),
    // 全局变量
    new webpack.ProvidePlugin({
      _: 'moment'
    }),

    // 自动生成html
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};