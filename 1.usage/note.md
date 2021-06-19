# webpack5.39.1

## 安装
  - `npm i webpack webpack-cli -D`
  - 如果想跑本地服务 需要安装`webpack-dev-server`
    - 启动命令为 `webpack serve`

## 配置
  - 如果没有配置文件
    - 默认入口文件为src/index.js
    - 默认输出 dist/main.js
  - 配置文件 `webpack.config.js`
### mode
  - `dvelopment`：开发模式 默认会开启一些开发插件
  - `production`：生产模式 默认会开启一些生产插件 (例如：压缩文件)
  - `none`：什么都不做
  - 如果没有配置mode 默认就是 production
    - `webpack serve` 启动本地服务 (需要安装插件 @webpack-cli/serve webpack-dev-server)
  - 通过命令行配置
    - `webpack --env=development` 
      - 这个篇配置的变量在模块内部和配置文件中都取不到
      - 只有当配置文件导出一个函数 函数的第一个参数env中可以才可以拿到这个变量(布尔值)
      - 如果想在模块中拿到这个变量(非配置文件) 需要使用插件 definePlugin

### loader
  - 因为webpack只能认识.js和.json文件 其他的不认识 这个时候就需要使用loader去解析

## npm run build干了什么
  - 首先找package.json下的scripts下面的build这个key 对应的命令
  - 执行webpack命令
    - 先看当前目录 node_modules/.bin/webpack.cmd是否存在 如果存在 执行它
    - 如果不存在 则会去全局安装目录下找 `npm root -g` 查看全局安装目录下的webpack.cmd 如果找到并执行
    - 如果都没有就报错

