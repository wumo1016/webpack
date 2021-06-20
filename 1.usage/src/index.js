// let title = require('./title')
// console.log(title);
// let test = require('./test.txt')
// console.log(test.default);
// console.log(process.env.NODE_ENV);

import './index.css'; // sass-loader

const test = require('../assets/test.jpg') // file-loader
let img = new Image()
// img.src = test.default
img.src = test
document.body.appendChild(img)


