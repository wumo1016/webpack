module.exports = {
  extends: 'airbnb', // 继承自airbnb的配置
  parser: 'babel-eslint', // 将源代码转换成ast语法树
  // 指定脚本的运行环境
  env: {
    browser: true,
    node: true
  },
  rules: {
    "linebreak-style": "off",
    indent: ['error', 2]
  }
}