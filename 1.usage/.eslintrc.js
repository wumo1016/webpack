module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: { // 指定解析器选项
    sourceType: 'module',
    ecmaVersion: 2015
  },
  env: { // 指定脚本的运行环境
    browser: true,
  },
  rules: { // 启用的规则及其各自的错误级别(0 = off 1 = warn 2 = error)
    'quotes': [2, 'single'], // 强制使用 单引号 single('') 双引号 double("") 反引号 backtick(``)
  }
}