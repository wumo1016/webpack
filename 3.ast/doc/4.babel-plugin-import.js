const babelCore = require("@babel/core");
const types = require("babel-types");

let sourceCode = `
import { flatten, concat } from  'lodash'
`;

const babelPluginImport = {
  visitor: {
    ImportDeclaration: {
      enter(nodePath, state = {}) {
        const specifiers = nodePath.node.specifiers
        const source = nodePath.node.source
        if (!types.isImportDefaultSpecifier(specifiers[0]) && state.opts.libraryName === 'lodash') {
          const tmportDeclarations = specifiers.map((specifier, index) => {
            return types.importDeclaration(
              [types.importDefaultSpecifier(specifier.local)],
              types.stringLiteral(`${source.value}/${specifier.local.name}`)
            )
          })
          nodePath.replaceWithMultiple(tmportDeclarations)
        }
      }
    }
  }
}

let targetCode = babelCore.transform(sourceCode, {
  plugins: [babelPluginImport],
});
console.log(targetCode.code);

module.exports = function () {
  return babelPluginImport
}

/* 转换结果
import flatten from 'lodash/flatten'
import concat from 'lodash/concat'
*/