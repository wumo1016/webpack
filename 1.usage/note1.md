# webpack5.39.1

## 安装

- `webpack webpack-cli` webpack 基本插件
- `webpack-dev-server` 跑本地服务
  - 启动命令为 `webpack serve`

## 配置

- 如果没有配置文件
  - 默认入口文件为 src/index.js
  - 默认输出 dist/main.js
- 默认配置文件 `webpack.config.js`

### entry

### output

### devServer

### mode

- 参数
  - `dvelopment`：开发模式 默认会开启一些开发插件(NamedChunksPlugin 和 NamedModulesPlugin)
  - `production`：生产模式 默认会开启一些生产插件 (例如：压缩文件)
  - `none`：什么都不做
  - 如果没有配置 mode 默认就是 production
- 获取环境变量`process.env.NODE_ENV`
  - 如果没有配置 mode
    - 在模块内访问都是`production`
    - 配置文件是 undefined
  - 在命令行中指定(`webpack serve --mode=development`)
    - 在模块内输出就是指定的值
    - 配置文件是 undefined
  - 在配置文件中设置了 mode
    - 在模块内访问就是 mode 的值
    - 如果同时在命令行中配置了 那就是命令行的优先级更高
    - 配置文件是 undefined
  - 命令行加参数 `--env=development` // 传入什么对应的参数就是 true
    - 配置文件导出一个函数 函数的有两个参数(env, argv)
    - 开发坏境：env = { WEBPACK_SERVE: true, development: true }
    - 生产环境：env = { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
    - 可以通过 env 的值来动态设置 mode 例如：`mode：env.production ? 'production' : 'development'`
  - 命令行参数 `set NODE_ENV=production&webpack`
    - windows 写法 `set NODE_ENV=production&webpack`
    - mac 写法 `eport NODE_ENV=production&webpack`
    - 通用写法 `cross-env NODE_ENV=production webpack`
      - 需要安装模块 `cross-env`
    - 这样就可以在配置文件中拿到了
    - 设置 mode `mode: process.env.NODE_ENV` 但是配置文件需要是导出对象写法

### devtool

- 组合规则 [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
  - false 不生成 sourcemap 文件 也不建立关联
  - source-map: 单独在外部生成完整的 sourcemap 文件 并且在目标文件里建立关联 能提示错误代码的准确原始位置
  - inline-source-map: 以 base64 格式内联在打包后的文件中，内联构建速度更快,也能提示错误代码的准确原始位置
  - hidden-source-map: 会在外部生成 sourcemap 文件,但是在目标文件里没有建立关联,不能提示错误代码的准确原始位置
  - eval-source-map: 会为每一个模块生成一个单独的 sourcemap 文件进行内联，并使用 eval 执行
  - nosources-source-map: 也会在外部生成 sourcemap 文件,能找到源始代码文件位置，但找不到源码位置
  - cheap-source-map: 外部生成 sourcemap 文件,不包含列和 loader 的 map
  - cheap-module-source-map: 外部生成 sourcemap 文件,不包含列的信息但包含 loader 的 map
- 最佳实践
  - 开发: `devtool: cheap-source-map`
  - 生产: `devtool: false`
    - 使用插件 `new webpack.SourceMapDevToolPlugin`
    - 使用插件 `new FileManagerPlugin`
  - 线上: `devtool: hidden-source-map`
    - 使用插件 `new FileManagerPlugin`
    - 浏览器手动添加源码映射(Sources tab 中) `Add source map`

### module

- rules(loader)
  - 因为 webpack 只能认识.js 和.json 文件 其他的不认识 这个时候就需要使用 loader 去解析
  - 根据匹配规则(test)使用对应的 loader(use)
  - loader
    - raw-loader: 解析一些纯文本文件(txt 等)
    - css-loader: 处理@import 和 url
    - style-loader: 将 css 转成 js 脚本 作用就是向页面中插入一个 style 标签
    - sass-loader:
    - dart-sass: 解决报错 1 安装 node-sass 2npm install node-sass@npm:dart-sass
    - file-loader: 解决 css 等文件中的引入图片路径问题
    - url-loader: 当图片小于设置值时 会转换成 base64 编码 否则会使用 file-loader 进行拷贝
    - html-loader:
    - css 兼容性
      - postcss-loader:
      - postcss-preset-env: css 加前缀 兼容性处理
    - js 兼容性
      - babel-loader: 使用 Babel 转义 js 文件
      - @babel/core: Babel 核心包
      - @babel/preset-env: 但@babel/core 不知道转换哪些以及怎么转换 @babel/preset-env 里面就是一些配置
      - @babel/preset-react: 插件的 Babel 预设
      - @babel/plugin-proposal-decorators: 把类和对象装饰器编译成 ES5
      - @babel/plugin-proposal-class-properties: 转换静态类属性以及使用属性初始值化语法声明的属性
    - eslint 代码校验
      - eslint
      - eslint-loader
      - babel-eslint

### externals

- 第三方包 引入 cdn 在模块中引入将不再打包

### plugins

- 可以用于执行范围更广的任务 如：打包优化、资源管理、注入环境变量
- plugins
  - html-webpack-plugin: 根据 html 模板生成 hmtl 并插入脚本
  - webpack.DefinePlugin: webpack 内置插件 扩展全局变量(模块都能访问到 但配置文件中无法访问)
    - 本质就是在编译的时候 进行一个字符串的替换
  - webpack.ProvidePlugin: 注入全局变量
  - html-webpack-externals-plugin: 与 html-webpack-plugin 配合使用

## npm run build 干了什么

- 首先找 package.json 下的 scripts 下面的 build 这个 key 对应的命令
- 执行 webpack 命令
  - 先看当前目录 node_modules/.bin/webpack.cmd 是否存在 如果存在 执行它
  - 如果不存在 则会去全局安装目录下找 `npm root -g` 查看全局安装目录下的 webpack.cmd 如果找到并执行
  - 如果都没有就报错

// 读取.env 这个文件 并且将里面的 key-value 写入到 process.env 对象中
require('dotenv').config({ path: '.env' })
