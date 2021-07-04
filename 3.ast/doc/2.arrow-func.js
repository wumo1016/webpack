const babelCore = require('@babel/core')
const types = require('babel-types')
const ArrowFunction = require('babel-plugin-transform-es2015-arrow-functions')

let sourceCode = `
const sum = (a, b) => {
  console.log(this)
  return a + b
}
`
/* 转换结果
var _this = this;

const sum = function (a, b) {
  console.log(_this);
  return a + b;
};
*/

// 插件就是一个对象 里面有一个visitor访问器
const MyArrowFunction = {
  visitor: {
    ArrowFunctionExpression(nodePath) { // key就是节点类型
      const { node } = nodePath
      node.type = 'FunctionExpression'
      console.log(node);
    }
  }
}

// let targetCode = babelCore.transform(sourceCode, {
//   plugins: [MyArrowFunction]
// })

let targetCode = babelCore.transform(sourceCode, {
  presets: ['@babel/preset-env']
})

console.log(targetCode.code);