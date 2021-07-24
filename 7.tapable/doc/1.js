function sum(a, b) {
  return a + b
}

let minus = new Function('a, b', 'return a - b')

console.log(minus(3, 1))
