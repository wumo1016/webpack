const babelCore = require("@babel/core");
const TransformClass = require("@babel/plugin-transform-classes");
const types = require("babel-types");

let sourceCode = `
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
`;

const MyTransformClass = {
  visitor: {
    ClassDeclaration(nodePath) {
      let { node } = nodePath
      let id = node.id // 标识符 { type: Identifier, name: Person }
      let classMethods = node.body.body
      let nodes = []
      classMethods.forEach(classMethod => {
        if (classMethod.kind === 'constructor') {
          let constructor = types.functionDeclaration(id, classMethod.params, classMethod.body)
          nodes.push(constructor)
        } else {
          // 创建赋值语句右边的赋值语句
          let functionExpression = types.functionExpression(null, classMethod.params, classMethod.body)
          // Person.prototype
          let prototypeExpression = types.memberExpression(id, types.identifier('prototype'))
          // Person.prototype.getName
          let memberExpression = types.memberExpression(prototypeExpression, classMethod.key)
          // 构造赋值语句
          let assignmentExpression = types.assignmentExpression('=', memberExpression, functionExpression)
          nodes.push(assignmentExpression)
        }
      })
      if (nodes.length === 1) {
        nodePath.replaceWith(nodes[0])
      } else {
        nodePath.replaceWithMultiple(nodes)
      }
    }
  }
}

let targetCode = babelCore.transform(sourceCode, {
  plugins: [MyTransformClass],
});
console.log(targetCode.code);

/* 模拟转换结果
function Person(name){
  this.name = name
}
Person.prototype.getName = function(){
  return this.name
}
*/

/* 真实转换结果
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
let Person = (function () {
  function Person(name) {
    _classCallCheck(this, Person);
    this.name = name;
  }
  _createClass(Person, [
    {
      key: "getName",
      value: function getName() {
        return this.name;
      },
    },
  ]);
  return Person;
})();

*/
