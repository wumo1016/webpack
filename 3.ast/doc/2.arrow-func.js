const babelCore = require('@babel/core')
const ArrowFunction = require('babel-plugin-transform-es2015-arrow-functions')
const types = require('babel-types')

let sourceCode = `
const sum = (a, b) => {
  console.log(this)
  return a + b
}
`

// 插件就是一个对象 里面有一个visitor访问器
const MyArrowFunction = {
  visitor: {
    ArrowFunctionExpression(nodePath) { // key就是节点类型
      const { node } = nodePath
      // 处理this指针的问题
      hostThisFunction(nodePath)
      node.type = 'FunctionExpression'
      console.log(node);
    }
  }
}

function hostThisFunction(nodePath) {
  // 向上查找 找不到是箭头函数的函数 或 全局作用域
  const thisFn = nodePath.findParent(p => {
    return (p.isFunction && !p.isArrowFunctionExpression()) || p.isProgram()
  })

  // 找到当前作用域哪些地方用到了this
  let thisPaths = []
  // 遍历当前路径的子路径
  nodePath.traverse({
    ThisExpression(thisPath) {
      thisPaths.push(thisPath)
    }
  })
  // 先声明变量
  let thisBinding = '_this'
  // 如果子节点有调用this的 就处理
  if (thisPaths.length > 0) {
    thisFn.scope.push({ // 父作用域
      id: types.identifier(thisBinding), // 生成一个标识符 _this
      init: types.thisExpression() // 生成一个this调用
    })
    // 修改变量 this => _this
    thisPaths.forEach(thisPath => {
      let thisBindingIdenyifier = types.identifier(thisBinding)
      // 将使用了this的节点进行替换
      thisPath.replaceWith(thisBindingIdenyifier)
    })
  }
}

let targetCode = babelCore.transform(sourceCode, {
  plugins: [MyArrowFunction]
})

// let targetCode = babelCore.transform(sourceCode, { // 直接使用预设
//   presets: ['@babel/preset-env']
// })

console.log(targetCode.code);

/* 转换结果
var _this = this;

const sum = function (a, b) {
  console.log(_this);
  return a + b;
};
*/