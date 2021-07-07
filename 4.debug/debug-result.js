let res = {
  hash: 'c5f09dafeb2f484ab179', // 本次编译产生的hash值
  version: '5.43.0', // webpack版本
  time: 124, // 花费的时间
  builtAt: 1625658293054, // 构建时间戳
  publicPath: 'auto', // 资源文件的访问路径
  outputPath: 'e:\\wumo\\other\\webpack\\4.debug\\dist', // 输出的目录
  assetsByChunkName: { main: ['main.js'] }, // 哪个代码块产出了那个资源
  "assets": [ // 产生的资源
    {
      "type": "asset",
      "name": "index.html",
      "size": 301,
    },
    {
      "type": "asset",
      "name": "main.js",
      "size": 167,
    }
  ],
  "chunks": [ // 产出的代码块
    {
      "names": [
        "main"
      ],
      "files": [
        "main.js"
      ],
      "hash": "96059f304bd45125c9e3",
    }
  ],
  "modules": [
    {
      "type": "module",
      "moduleType": "javascript/auto",
      "layer": null,
      "size": 1,
      "sizes": {
        "javascript": 1
      },
      "built": true,
      "codeGenerated": true,
      "buildTimeExecuted": false,
      "cached": false,
      "identifier": "e:\\wumo\\other\\webpack\\4.debug\\src\\index.js",
      "name": "./src/index.js",
      "nameForCondition": "e:\\wumo\\other\\webpack\\4.debug\\src\\index.js",
      "index": 0,
      "preOrderIndex": 0,
      "index2": 0,
      "postOrderIndex": 0,
      "cacheable": true,
      "optional": false,
      "orphan": false,
      "issuer": null,
      "issuerName": null,
      "issuerPath": null,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "./src/index.js",
      "issuerId": null,
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [
        {
          "moduleIdentifier": null,
          "module": null,
          "moduleName": null,
          "resolvedModuleIdentifier": null,
          "resolvedModule": null,
          "type": "entry",
          "active": true,
          "explanation": "",
          "userRequest": "./src/index.js",
          "loc": "main",
          "moduleId": null,
          "resolvedModuleId": null
        }
      ],
      "usedExports": null,
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 0
    }
  ],
  "entrypoints": {
    "main": {
      "name": "main",
      "chunks": [
        "main"
      ],
      "assets": [
        {
          "name": "main.js",
          "size": 167
        }
      ],
    }
  },
  "namedChunkGroups": {
    "main": {
      "name": "main",
      "chunks": [
        "main"
      ],
      "assets": [
        {
          "name": "main.js",
          "size": 167
        }
      ],
    }
  },
  "errors": [],
  "errorsCount": 0,
  "warnings": [],
  "warningsCount": 0,
  "children": [
    {
      "name": "HtmlWebpackCompiler",
      "hash": "5ae662fc2a69af04766f",
      "version": "5.43.0",
      "time": 73,
      "builtAt": 1625658906228,
      "publicPath": "",
      "outputPath": "e:\\wumo\\other\\webpack\\4.debug\\dist",
      "assetsByChunkName": {},
      "assets": [],
      "chunks": [
        {
          "rendered": true,
          "initial": true,
          "entry": true,
          "recorded": false,
          "size": 1355,
          "sizes": {
            "javascript": 621,
            "runtime": 734
          },
          "names": [
            "HtmlWebpackPlugin_0-0"
          ],
          "idHints": [],
          "runtime": [
            "HtmlWebpackPlugin_0-0"
          ],
          "files": [],
          "auxiliaryFiles": [],
          "hash": "2a03941965c999871115",
          "childrenByOrder": {},
          "id": "HtmlWebpackPlugin_0-0",
          "siblings": [],
          "parents": [],
          "children": [],
          "modules": [
            {
              "type": "module",
              "moduleType": "javascript/auto",
              "layer": null,
              "size": 544,
              "sizes": {
                "javascript": 544
              },
              "built": true,
              "codeGenerated": true,
              "buildTimeExecuted": false,
              "cached": false,
              "identifier": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
              "name": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
              "nameForCondition": "e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
              "index": 1,
              "preOrderIndex": 1,
              "index2": 1,
              "postOrderIndex": 1,
              "cacheable": true,
              "optional": false,
              "orphan": false,
              "dependent": false,
              "issuer": null,
              "issuerName": null,
              "issuerPath": null,
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "id": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
              "issuerId": null,
              "chunks": [
                "HtmlWebpackPlugin_0-0"
              ],
              "assets": [],
              "reasons": [
                {
                  "moduleIdentifier": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
                  "module": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
                  "moduleName": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
                  "resolvedModuleIdentifier": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
                  "resolvedModule": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
                  "type": "cjs self exports reference",
                  "active": true,
                  "explanation": "",
                  "userRequest": null,
                  "loc": "1:118-132",
                  "moduleId": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
                  "resolvedModuleId": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html"
                },
                {
                  "moduleIdentifier": null,
                  "module": null,
                  "moduleName": null,
                  "resolvedModuleIdentifier": null,
                  "resolvedModule": null,
                  "type": "entry",
                  "active": true,
                  "explanation": "",
                  "userRequest": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
                  "loc": "HtmlWebpackPlugin_0-0",
                  "moduleId": null,
                  "resolvedModuleId": null
                },
                {
                  "moduleIdentifier": null,
                  "module": null,
                  "moduleName": null,
                  "resolvedModuleIdentifier": null,
                  "resolvedModule": null,
                  "type": null,
                  "active": true,
                  "explanation": "used as library export",
                  "userRequest": null,
                  "moduleId": null,
                  "resolvedModuleId": null
                }
              ],
              "usedExports": null,
              "providedExports": null,
              "optimizationBailout": [
                "CommonJS bailout: module.exports is used directly at 1:118-132"
              ],
              "depth": 0
            },
            {
              "type": "module",
              "moduleType": "javascript/esm",
              "layer": null,
              "size": 77,
              "sizes": {
                "javascript": 77
              },
              "built": true,
              "codeGenerated": true,
              "buildTimeExecuted": false,
              "cached": false,
              "identifier": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
              "name": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
              "nameForCondition": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
              "index": 0,
              "preOrderIndex": 0,
              "index2": 0,
              "postOrderIndex": 0,
              "cacheable": true,
              "optional": false,
              "orphan": false,
              "dependent": false,
              "issuer": null,
              "issuerName": null,
              "issuerPath": null,
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "id": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
              "issuerId": null,
              "chunks": [
                "HtmlWebpackPlugin_0-0"
              ],
              "assets": [],
              "reasons": [
                {
                  "moduleIdentifier": null,
                  "module": null,
                  "moduleName": null,
                  "resolvedModuleIdentifier": null,
                  "resolvedModule": null,
                  "type": "entry",
                  "active": true,
                  "explanation": "",
                  "userRequest": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                  "loc": "HtmlWebpackPlugin_0-0",
                  "moduleId": null,
                  "resolvedModuleId": null
                }
              ],
              "usedExports": null,
              "providedExports": [],
              "optimizationBailout": [],
              "depth": 0
            },
            {
              "type": "module",
              "moduleType": "runtime",
              "layer": null,
              "size": 88,
              "sizes": {
                "runtime": 88
              },
              "built": false,
              "codeGenerated": true,
              "buildTimeExecuted": false,
              "cached": false,
              "identifier": "webpack/runtime/hasOwnProperty shorthand",
              "name": "webpack/runtime/hasOwnProperty shorthand",
              "nameForCondition": null,
              "index": null,
              "preOrderIndex": null,
              "index2": null,
              "postOrderIndex": null,
              "optional": false,
              "orphan": false,
              "dependent": false,
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "id": "",
              "chunks": [
                "HtmlWebpackPlugin_0-0"
              ],
              "assets": [],
              "reasons": [],
              "usedExports": null,
              "providedExports": [],
              "optimizationBailout": [],
              "depth": null
            },
            {
              "type": "module",
              "moduleType": "runtime",
              "layer": null,
              "size": 274,
              "sizes": {
                "runtime": 274
              },
              "built": false,
              "codeGenerated": true,
              "buildTimeExecuted": false,
              "cached": false,
              "identifier": "webpack/runtime/make namespace object",
              "name": "webpack/runtime/make namespace object",
              "nameForCondition": null,
              "index": null,
              "preOrderIndex": null,
              "index2": null,
              "postOrderIndex": null,
              "optional": false,
              "orphan": false,
              "dependent": false,
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "id": "",
              "chunks": [
                "HtmlWebpackPlugin_0-0"
              ],
              "assets": [],
              "reasons": [],
              "usedExports": null,
              "providedExports": [],
              "optimizationBailout": [],
              "depth": null
            },
            {
              "type": "module",
              "moduleType": "runtime",
              "layer": null,
              "size": 27,
              "sizes": {
                "runtime": 27
              },
              "built": false,
              "codeGenerated": true,
              "buildTimeExecuted": false,
              "cached": false,
              "identifier": "webpack/runtime/publicPath",
              "name": "webpack/runtime/publicPath",
              "nameForCondition": null,
              "index": null,
              "preOrderIndex": null,
              "index2": null,
              "postOrderIndex": null,
              "optional": false,
              "orphan": false,
              "dependent": false,
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "id": "",
              "chunks": [
                "HtmlWebpackPlugin_0-0"
              ],
              "assets": [],
              "reasons": [],
              "usedExports": null,
              "providedExports": [],
              "optimizationBailout": [],
              "depth": null
            },
            {
              "type": "module",
              "moduleType": "runtime",
              "layer": null,
              "size": 345,
              "sizes": {
                "runtime": 345
              },
              "built": false,
              "codeGenerated": true,
              "buildTimeExecuted": false,
              "cached": false,
              "identifier": "webpack/runtime/require chunk loading",
              "name": "webpack/runtime/require chunk loading",
              "nameForCondition": null,
              "index": null,
              "preOrderIndex": null,
              "index2": null,
              "postOrderIndex": null,
              "optional": false,
              "orphan": false,
              "dependent": false,
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "id": "",
              "chunks": [
                "HtmlWebpackPlugin_0-0"
              ],
              "assets": [],
              "reasons": [],
              "usedExports": null,
              "providedExports": [],
              "optimizationBailout": [],
              "depth": null
            }
          ],
          "origins": [
            {
              "module": "",
              "moduleIdentifier": "",
              "moduleName": "",
              "loc": "HtmlWebpackPlugin_0-0",
              "request": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html"
            },
            {
              "module": "",
              "moduleIdentifier": "",
              "moduleName": "",
              "loc": "HtmlWebpackPlugin_0-0",
              "request": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;"
            }
          ]
        }
      ],
      "modules": [
        {
          "type": "module",
          "moduleType": "javascript/esm",
          "layer": null,
          "size": 77,
          "sizes": {
            "javascript": 77
          },
          "built": true,
          "codeGenerated": true,
          "buildTimeExecuted": false,
          "cached": false,
          "identifier": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
          "name": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
          "nameForCondition": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
          "index": 0,
          "preOrderIndex": 0,
          "index2": 0,
          "postOrderIndex": 0,
          "cacheable": true,
          "optional": false,
          "orphan": false,
          "issuer": null,
          "issuerName": null,
          "issuerPath": null,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
          "issuerId": null,
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "reasons": [
            {
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "resolvedModuleIdentifier": null,
              "resolvedModule": null,
              "type": "entry",
              "active": true,
              "explanation": "",
              "userRequest": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
              "loc": "HtmlWebpackPlugin_0-0",
              "moduleId": null,
              "resolvedModuleId": null
            }
          ],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": 0
        },
        {
          "type": "module",
          "moduleType": "javascript/auto",
          "layer": null,
          "size": 544,
          "sizes": {
            "javascript": 544
          },
          "built": true,
          "codeGenerated": true,
          "buildTimeExecuted": false,
          "cached": false,
          "identifier": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
          "name": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
          "nameForCondition": "e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
          "index": 1,
          "preOrderIndex": 1,
          "index2": 1,
          "postOrderIndex": 1,
          "cacheable": true,
          "optional": false,
          "orphan": false,
          "issuer": null,
          "issuerName": null,
          "issuerPath": null,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
          "issuerId": null,
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "reasons": [
            {
              "moduleIdentifier": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
              "module": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
              "moduleName": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
              "resolvedModuleIdentifier": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
              "resolvedModule": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
              "type": "cjs self exports reference",
              "active": true,
              "explanation": "",
              "userRequest": null,
              "loc": "1:118-132",
              "moduleId": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html",
              "resolvedModuleId": "./node_modules/_html-webpack-plugin@5.3.2@html-webpack-plugin/lib/loader.js!./src/index.html"
            },
            {
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "resolvedModuleIdentifier": null,
              "resolvedModule": null,
              "type": "entry",
              "active": true,
              "explanation": "",
              "userRequest": "E:\\wumo\\other\\webpack\\4.debug\\node_modules\\_html-webpack-plugin@5.3.2@html-webpack-plugin\\lib\\loader.js!e:\\wumo\\other\\webpack\\4.debug\\src\\index.html",
              "loc": "HtmlWebpackPlugin_0-0",
              "moduleId": null,
              "resolvedModuleId": null
            },
            {
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "resolvedModuleIdentifier": null,
              "resolvedModule": null,
              "type": null,
              "active": true,
              "explanation": "used as library export",
              "userRequest": null,
              "moduleId": null,
              "resolvedModuleId": null
            }
          ],
          "usedExports": null,
          "providedExports": null,
          "optimizationBailout": [
            "CommonJS bailout: module.exports is used directly at 1:118-132"
          ],
          "depth": 0
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 88,
          "sizes": {
            "runtime": 88
          },
          "built": false,
          "codeGenerated": true,
          "buildTimeExecuted": false,
          "cached": false,
          "identifier": "webpack/runtime/hasOwnProperty shorthand",
          "name": "webpack/runtime/hasOwnProperty shorthand",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 274,
          "sizes": {
            "runtime": 274
          },
          "built": false,
          "codeGenerated": true,
          "buildTimeExecuted": false,
          "cached": false,
          "identifier": "webpack/runtime/make namespace object",
          "name": "webpack/runtime/make namespace object",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 27,
          "sizes": {
            "runtime": 27
          },
          "built": false,
          "codeGenerated": true,
          "buildTimeExecuted": false,
          "cached": false,
          "identifier": "webpack/runtime/publicPath",
          "name": "webpack/runtime/publicPath",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 345,
          "sizes": {
            "runtime": 345
          },
          "built": false,
          "codeGenerated": true,
          "buildTimeExecuted": false,
          "cached": false,
          "identifier": "webpack/runtime/require chunk loading",
          "name": "webpack/runtime/require chunk loading",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        }
      ],
      "entrypoints": {
        "HtmlWebpackPlugin_0-0": {
          "name": "HtmlWebpackPlugin_0-0",
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "filteredAssets": 0,
          "assetsSize": 0,
          "auxiliaryAssets": [],
          "filteredAuxiliaryAssets": 0,
          "auxiliaryAssetsSize": 0,
          "children": {},
          "childAssets": {},
          "isOverSizeLimit": false
        }
      },
      "namedChunkGroups": {
        "HtmlWebpackPlugin_0-0": {
          "name": "HtmlWebpackPlugin_0-0",
          "chunks": [
            "HtmlWebpackPlugin_0-0"
          ],
          "assets": [],
          "filteredAssets": 0,
          "assetsSize": 0,
          "auxiliaryAssets": [],
          "filteredAuxiliaryAssets": 0,
          "auxiliaryAssetsSize": 0,
          "children": {},
          "childAssets": {},
          "isOverSizeLimit": false
        }
      },
      "errors": [],
      "errorsCount": 0,
      "warnings": [],
      "warningsCount": 0,
      "children": []
    }
  ]
}