const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
// 读取.env这个文件 并且将里面的key-value写入到process.env对象中
require('dotenv').config({ path: '.env' })
// console.log(process.env.NODE_ENV2); // production2

module.exports = {
  mode: process.env.NODE_ENV,
  // devtool: 'eval', // 使用eval包裹代码
  // devtool: 'source-map', // 产生.map文件 行映射+列映射+两个sourcemap(行列用于定位 比如报错信息)
  // devtool: 'cheap-source-map', // 不包含列信息 也不包含loader的sourcemap 因为需要两步编译 源码=>es5代码=>编译后代码 这个sourcemap只包含es5代码=>编译后代码的
  // devtool: 'cheap-module-source-map', // 行+两个sourcemap
  // devtool: 'inline-source-map', // 直接将map信息内嵌到目标文件中
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/test' // 打包后文件的前缀
  },
  // externals: { // 外部依赖 
  //   jquery: 'jQuery' // 模块名: 全局变量 当再引入jquery的时候 将不再打包
  // },
  devServer: {
    port: 8080,
    // open: true, // 是否打开浏览器
    contentBase: path.resolve(__dirname, 'assets'), // 额外的静态文件内容的目录
    compress: true, // 是否启用压缩
    // publicPath: '/' // 自己优先 没有就用output的
  },
  module: {
    rules: [
      // {
      //   // test: require.resolve('lodash'),
      //   test: /lodash/,
      //   loader: 'expose-loader',
      //   options: {
      //     exposes: { // 向全局对象上也就是window._ 如果原来有就覆盖
      //       globalName: '_',
      //       override: true
      //     }
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre', // 对loader进行分类 pre normal inline post
      //   options: {
      //     fix: true // 自动修复
      //   },
      //   exclude: /node_modules/ // 排除
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties", { loose: false }],
              ]
            }
          }
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [ // 执行顺序是从后往前
          'style-loader', // 第一个返回的一定是js 因为它的结果需要给webpack用
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 // 默认是0 在引入别的css文件需要经过几个loader的处理
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader' // css 预处理器
        ]
      },
      // {
      //   test: /\.(jpg|png|svg|gif|bmp)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         esModule: false, // require之后不用使用default取值
      //         name: '[hash:10].[ext]' // 文件名 [hash:]取10位hash值 [ext]原来的扩展名
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(jpg|png|svg|gif|bmp)$/,
        use: [
          {
            loader: 'url-loader', // 功能大于file-loader 比它多limit参数
            options: {
              esModule: false, // require之后不用使用default取值
              name: '[hash:10].[ext]', // 文件名 [hash:]取10位hash值 [ext]原来的扩展名
              limit: 10 * 1024 // 8k 小于8k就是转成base64字符串
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'jquery', // 模块名
    //       entry: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
    //       global: 'jQuery', // 变量
    //     },
    //   ],
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV2': JSON.stringify('development'), // 'development' 会被当成一个变量 可以直接写成 "'production'"
    //   'NODE_ENV2': JSON.stringify('development')
    // }),
    // source-map 生产环境最佳实践
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[file].map',
    //   append: `\n//# sourceMappingURL=http://127.0.0.1:8080/[url]` // url=main.js.map 源文件映射 需要在maps文件夹下启动一个服务 能访问到
    // }),
    // new FileManagerPlugin({ // filemanager-webpack-plugin
    //   events: {
    //     onEnd: {
    //       copy: [
    //         {
    //           source: './dist/*map',
    //           destination: path.resolve('maps')
    //         }
    //       ],
    //       delete: ['./dist/*map']
    //     }
    //   }
    // }),
    // new webpack.ProvidePlugin({
    //   _: 'lodash' // 相当于 let _ = require('lodash') 然后全局(模块内)注入_
    // })
  ]
}