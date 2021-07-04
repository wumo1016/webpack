const esprima = require('esprima')
const estraverse = require('estraverse')
const codegen = require('escodegen')

const sourceCode = 'function ast(){}'
const astTree = esprima.parse(sourceCode)

estraverse.traverse(astTree, {
  enter(node) {
    console.log(node.type, '进入');
    if (node.type === 'FunctionDeclaration') { // 可以处理语法树
      node.id.name = 'ast1'
    }
  },
  leave(node) {
    console.log(node.type, '离开');
  }
})

const res = codegen.generate(astTree)
console.log(res);

/*
{
  "type": "Program",
  "start": 0,
  "end": 16,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "ast"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 16,
        "body": []
      }
    }
  ],
  "sourceType": "module"
}
*/