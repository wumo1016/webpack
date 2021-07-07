## 调试方法

- 通过 chrome 调试 -添加脚本命令 `node --inspect-brk ./node_modules/webpack-cli/bin/cli.js`
  - 然后打开 chrome 控制台 在左上角会有一个 nodejs 图标 点击会弹出一个调试窗口
- 通过 vscode 调试
  - 点击 vscode 的调试工具 新建一个 launch.json 文件
  - 文件内容
    ```javascript
      {
        "configurations": [
          {
            "type": "node",
            "request": "launch",
            "name": "debug webpack",
            "cwd": "${workspaceFolder}",
            "skipFiles": [
              "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/node_modules/webpack-cli/bin/cli.js"
          }
        ]
      }
    ```
  - 添加一个断点 即可运行调试
