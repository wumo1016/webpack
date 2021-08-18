const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  devtool: false,
  optimization: {
    // moduleIds: 'natural',
    chunkIds: 'deterministic',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        type: 'asset/resource', // 拷贝文件
      },
      {
        test: /\.ico$/,
        type: 'asset/inline', // 生成base64字符串 相当于url-loader limit设置的比较大
      },
      {
        test: /\.txt$/,
        type: 'asset/source', // 相当于 raw-loader
      },
      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
