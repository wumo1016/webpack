## webpack 工作流
  - 1. 初始化参数：从配置文件和Shell语句中读取并合并参数 得出最终的配置对象
  - 2. 用上一步得到的参数初始化Compiler对象
  - 3. 加载所有配置的插件
  - 4. 执行对象的run方法开始执行编译
  - 5. 根据配置中的entry找出入口文件
  - 6. 从入口文件出发 调用所有配置的Loader对模块进行编译
  - 7. 再找出该模块依赖的模块 再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
  - 8. 根据入口和模块之间的依赖关系 组装成一个个包含多个模块的 Chunk
  - 9. 再把每个Chunk转换成一个单独的文件加入到输出列表
  - 10. 在确定好输出内容后 根据配置确定输出的路径和文件名 把文件内容写入到文件系统

  1.初始化参数：将配置文件和shell参数进行合并 得出最终的配置对象
  2.用上面的参数初始化一个compiler对象
  3.获取所有配置的插件 并调用插件的apply方法(插件应是一个对象 有apply方法)
  4.执行compiler的run方法开始编译 run方法初始化一个complication对象 并执行complication的make方法
  5.根据配置中的entry找到入口文件 (将entry都处理成一个对象)
  6.遍历所有entry 调用所有符合的loader进行编译
  7.通过遍历语法树 找到导入语句 找到模块对应的依赖 然后遍历本模块的依赖 递归处理 知道所有依赖文件都经过loader编译
  8.再通过入口文件和依赖组成一个chunk
  9.再将每个chunk转换成一个单独的文件加入到输出列表中
  10.遍历输出列表 根据配置将文件写入到文件系统

