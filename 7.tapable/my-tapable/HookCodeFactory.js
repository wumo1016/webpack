class HookCodeFactory {
  setup(hookInstance, options) {
    hookInstance._x = options.taps.map(tap => tap.fn)
  }

  create(options) {
    this.init(options)
    let fn
    switch (options.type) {
      case 'sync':
        fn = new Function(this.args(options), this.header() + this.content())
        break
      default:
        break
    }
  }

  init() {
    this.options = options
  }

  args(options) {
    // options =>{ taps, type, args}
    let args = options.args || []
    return args.join(',')
  }

  header() {
    return 'var _x = this._x'
  }

  callTapsSeries() {
    const taps = this.options.taps
    if (taps.length < 1) return ''
    let code = ''
  }
}

module.exports = HookCodeFactory