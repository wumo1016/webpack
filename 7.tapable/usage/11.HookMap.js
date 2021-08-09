// const { SyncHook, HookMap } = require('tapable')
const { SyncHook, HookMap } = require('../my-tapable')

const map = new HookMap(() => new SyncHook(['name']))

map.for('key1').tap('1', name => console.log(1, name))
map.for('key1').tap('2', name => console.log(2, name))
debugger
map.get('key1').call('wyb1')

map.for('key2').tap('1', name => console.log(1, name))
map.for('key2').tap('2', name => console.log(2, name))
map.get('key2').call('wyb2')
