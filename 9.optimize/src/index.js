// import 'bootstrap'

// const title = require('./title')
// console.log(title)

// 默认查找文件
// import test from '../my-modules/test'
// console.log(test);

// console.log(VERSION);

// import moment from 'moment'
// import 'moment/locale/zh-cn' // 需要什么包 引入什么包 否则就在配置中使用函数过滤

// moment.locale('zh-cn'); // 设置语言
// console.log(moment().format('dddd'))

// 测试打包输出
// module.exports = {
//   add(a, b) {
//     return a + b
//   },
// }

// 测试tree-shaking
import { func1 } from './func'
console.log(123)

if (false) {
  console.log(12345)
}
