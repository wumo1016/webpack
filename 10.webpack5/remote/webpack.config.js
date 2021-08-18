const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  devtool: false,
  optimization: {
    // moduleIds: 'natural',
    chunkIds: 'deterministic'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        type: 'asset/resource' // 拷贝文件
      },
      {
        test: /\.ico$/,
        type: 'asset/inline' // 生成base64字符串 相当于url-loader limit设置的比较大
      },
      {
        test: /\.txt$/,
        type: 'asset/source' // 相当于 raw-loader
      },
      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      }
    ]
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js', // 打包出来的文件名
      name: 'remote', // 输出模块的文件名 远程引用时路径为 ${name}/${expose}
    })
  ]
}
