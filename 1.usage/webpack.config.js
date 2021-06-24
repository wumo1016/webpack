const path = require('path')
module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: () => {
    return new Promise((r, j) => {
      r('./src/index.js')
    })
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
