class HookMap {
  constructor(factory) {
    this._factory = factory
    this._map = new Map()
  }

  for(key) {
    const hook = this.get(key)
    if (hook) return hook
    this._map.set(key, this._factory())
    return this.get(key)
  }

  get(key) {
    return this._map.get(key)
  }
}

module.exports = HookMap
