/* 
function _next1() {
  var _fn2 = _x[2]
  _fn2(a, function () {
    _callback()
  })
}
function _next0() {
  var _fn1 = _x[1]
  _fn1(a, function () {
    _next1()
  })
}
var _fn0 = _x[0]
_fn0(a, function () {
  _next0()
})
*/

let code = ''
let onDone = '_callback()'
let cur = onDone
for (let i = 3 - 1; i >= 0; i--) {
  if (cur !== onDone) {
    code += `function _next${i}() {\n`
    code += cur
    code += '}\n'
    onDone = `_next${i}()\n`
  }
  cur = callTap(i, onDone)
}
code += cur
console.log(code)

function callTap(index, onDone) {
  let code = `var _fn${index} = _x[${index}]\n`
  code += `_fn${index}(a, function () {\n`
  code += `${onDone}\n`
  code += '})\n'
  return code
}
