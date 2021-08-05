class HookCodeFactory {
  setup(hookInstance, options) {
    hookInstance._x = options.taps.map(tap => tap.fn)
  }

  // options =>{ taps, type, args}
  create(options) {
    this.init(options)
    let fn
    switch (options.type) {
      case 'sync':
        fn = new Function(this.args(), this.header() + this.content())
        break
      case 'async':
        fn = new Function(
          this.args({ after: '_callback' }),
          this.header() +
            this.content({
              onDone: () => '_callback();',
            })
        )
        break
      case 'promise':
        let tapContent = this.content({ onDone: () => '_resolve();' })
        let content = `return new Promise(function(_resolve, _reject){
          ${tapContent}
        })`
        fn = new Function(this.args(), this.header() + content)
        break
      default:
        break
    }
    return fn
  }

  init(options) {
    this.options = options
  }

  args(options = {}) {
    const { before, after } = options
    let args = this.options.args || []
    if (before) {
      args = [before, ...args]
    }
    if (after) {
      args = [...args, after]
    }
    return args.join(',')
  }

  header() {
    return 'var _x = this._x;\n'
  }

  // content
  callTapsSeries({ onDone } = { onDone: '' }) {
    const taps = this.options.taps
    if (taps.length < 1) return ''
    let code = ''
    if (onDone) {
      let current = onDone
      for (let index = taps.length - 1; index >= 0; index--) {
        const unroll = current !== onDone
        if (unroll) {
          code += `function _next${index}(){\n`
          code += current()
          code += '}\n'
          onDone = () => `_next${index}();\n`
        }
        current = () => this.callTap(index, { onDone })
      }
      code += current()
    } else {
      for (let index = 0; index < taps.length; index++) {
        let content = this.callTap(index, { onDone })
        code += content
      }
    }
    return code
  }
  // content
  callTapsParallel({ onDone }) {
    const taps = this.options.taps
    if (taps.length < 1) return ''
    let code = ''
    code += `var _counter = ${this.options.taps.length};\n`
    code += `var _done = function(){${onDone()}};\n`
    for (let index = 0; index < taps.length; index++) {
      let content = this.callTap(index, {
        onDone: () => `if (--_counter === 0) _done()`,
      })
      code += content
    }
    return code
  }

  callTap(tapIndex, { onDone }) {
    let code = ''
    code += `var _fn${tapIndex} = _x[${tapIndex}];\n`
    const typeInfo = this.options.taps[tapIndex]
    switch (typeInfo.type) {
      case 'sync':
        code += `_fn${tapIndex}(${this.args()});\n`
        break
      case 'async':
        code += `_fn${tapIndex}(${this.args({
          after: `function () {
            ${onDone()}
          }`,
        })});\n`
        break
      case 'promise':
        code += `var _promise${tapIndex} = _fn${tapIndex}(${this.args()});\n
        _promise${tapIndex}.then(function (_result${tapIndex}) {\n
          if (--_counter === 0) _done()\n
        });\n`
        break
      default:
        break
    }
    return code
  }
}

module.exports = HookCodeFactory

//
