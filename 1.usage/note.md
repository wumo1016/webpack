# webpack5.39.1

## 安装
  - `webpack webpack-cli -D` webpack基本插件
  - `webpack-dev-server` 跑本地服务 需要安装
    - 启动命令为 `webpack serve`

## 配置
  - 如果没有配置文件
    - 默认入口文件为src/index.js
    - 默认输出 dist/main.js
  - 默认配置文件 `webpack.config.js`

### entry

### output

### devServer
  - 

### mode
  - 参数
    - `dvelopment`：开发模式 默认会开启一些开发插件(NamedChunksPlugin和NamedModulesPlugin)
    - `production`：生产模式 默认会开启一些生产插件 (例如：压缩文件)
    - `none`：什么都不做
    - 如果没有配置mode 默认就是 production
  - 获取环境变量`process.env.NODE_ENV`
    - 如果没有配置mode
      - 在模块内访问都是`production`
      - 配置文件是undefined
    - 在命令行中指定(`webpack serve --mode=development`)
      - 在模块内输出就是指定的值
      - 配置文件是undefined
    - 在配置文件中设置了mode
      - 在模块内访问就是mode的值
      - 如果同时在命令行中配置了 那就是命令行的优先级更高
      - 配置文件是undefined
    - 命令行加参数 `--env=development` // 传入什么对应的参数就是true
      - 配置文件导出一个函数 函数的有两个参数(env, argv)
      - 开发坏境：env = { WEBPACK_SERVE: true, development: true }
      - 生产环境：env = { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
      - 可以通过env的值来动态设置mode 例如：`mode：env.production ? 'production' : 'development'`
    - 命令行参数 `set NODE_ENV=production&webpack`
      - windows写法 `set NODE_ENV=production&webpack`
      - mac写法 `eport NODE_ENV=production&webpack`
      - 通用写法 `cross-env NODE_ENV=production webpack`
        - 需要安装模块 `cross-env`
      - 这样就可以在配置文件中拿到了
      - 设置mode `mode: process.env.NODE_ENV` 但是配置文件需要是导出对象写法


### module
  - rules(loader)
    - 因为webpack只能认识.js和.json文件 其他的不认识 这个时候就需要使用loader去解析
    - 根据匹配规则(test)使用对应的loader(use)
    - loader
      - raw-loader: 解析一些纯文本文件(txt等)
      - css-loader: 处理@import和url
      - style-loader: 将css转成js脚本 作用就是向页面中插入一个style标签
      - sass-loader: 
      - dart-sass: 解决报错 1安装node-sass 2npm install node-sass@npm:dart-sass
      - file-loader: 解决css等文件中的引入图片路径问题
      - url-loader: 当图片小于设置值时 会转换成base64编码 否则会使用file-loader进行拷贝
      - html-loader: 
      - postcss-loader: 
      - postcss-preset-env: css加前缀 兼容性处理

### plugins
  - 可以用于执行范围更广的任务 如：打包优化、资源管理、注入环境变量
  - plugins
    - html-webpack-plugin: 根据html模板生成hmtl 并插入脚本
    - webpack.DefinePlugin: webpack内置插件 扩展全局变量(模块都能访问到 但配置文件中无法访问)
      - 本质就是在编译的时候 进行一个字符串的替换

## npm run build干了什么
  - 首先找package.json下的scripts下面的build这个key 对应的命令
  - 执行webpack命令
    - 先看当前目录 node_modules/.bin/webpack.cmd是否存在 如果存在 执行它
    - 如果不存在 则会去全局安装目录下找 `npm root -g` 查看全局安装目录下的webpack.cmd 如果找到并执行
    - 如果都没有就报错

