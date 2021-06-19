# webpack5.38
## npm run build干了什么
  - 首先找package.json下的scripts下面的build这个key 对应的命令
  - 执行webpack命令
    - 先看当前目录 node_modules/.bin/webpack.cmd是否存在 如果存在 执行它
    - 如果不存在 则会去全局安装目录下找 `npm root -g` 查看全局安装目录下的webpack.cmd 如果找到并执行
    - 如果都没有就报错
## mode
  - 如果没有配置mode 默认就是 production
    - `webpack serve` 启动本地服务 (需要安装插件 @webpack-cli/serve webpack-dev-server)
  - 通过命令行配置
    - `webpack --env=development` 
      - 这个篇配置的变量在模块内部和配置文件中都取不到
      - 只有当配置文件导出一个函数 函数的第一个参数env中可以才可以拿到这个变量(布尔值)
      - 如果想在模块中拿到这个变量(非配置文件) 需要使用插件 definePlugin