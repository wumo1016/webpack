module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: { // 指定解析器选项
    sourceType: "module",
    ecmaVersion: 2015
  },
  env: { // 指定脚本的运行环境
    browser: true,
  },
  // 启用的规则及其各自的错误级别
  rules: {
  }
}