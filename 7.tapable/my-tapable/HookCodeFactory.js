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
      default:
        break
    }
    return fn
  }

  init(options) {
    this.options = options
  }

  args() {
    let args = this.options.args || []
    return args.join(',')
  }

  header() {
    return 'var _x = this._x;\n'
  }

  callTapsSeries() {
    const taps = this.options.taps
    if (taps.length < 1) return ''
    let code = ''
    for (let index = 0; index < taps.length; index++) {
      let content = this.callTap(index)
      code += content
    }
    return code
  }

  callTap(tapIndex) {
    let code = ''
    code += `var _fn${tapIndex} = _x[${tapIndex}];\n`
    const typeInfo = this.options.taps[tapIndex]
    switch (typeInfo.type) {
      case 'sync':
        code += `_fn${tapIndex}(${this.args()});\n`
        break
      default:
        break
    }
    return code
  }
}

module.exports = HookCodeFactory
