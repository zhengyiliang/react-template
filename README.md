# 使用webpack5搭建的 react 项目模板

## 代码提交

`.commitlintrc.js`

- feat: 新功能
- fix: 修复 Bug
- docs: 文档修改
- perf: 性能优化
- revert: 版本回退
- ci: CICD 集成相关
- test: 添加测试代码
- refactor: 代码重构
- build: 影响项目构建或依赖修改
- style: 不影响程序逻辑的代码修改
- chore: 不属于以上类型的其他类型(日常事务)

## 保存自动格式化

- 项目下载 `prettier` 依赖

- 创建 `.prettierrc` 文件

- vscode 下载 `Prettier - Code formatter` 工具

- 打开vscode的 `settings-> default formatter` 勾选咱们的 `prettier` 工作区和用户区都要选择哦。

```json
  // vscode 保存格式化配置
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 为javascript语言指定格式化工具为prettier
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true // 保存时是否自动 stylelint 修复
  }
```

## eslint 在控制台报错

```javascript
   new EslintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitError: true,
      emitWarning: true,
      // context: path.resolve(__dirname, '../src'),
      // exclude: 'node_modules',
      // cache: true,
      // failOnError: true, // 默认 false 如果设置为true的话，那么当触发任何错误的时候，将导致构建失败。
      // failOnWarning: true, // 如果设置为true的话, 那么有任何警告的时候，将导致构建失败。
      // cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
```

## EditorConfig

专注于统一编辑器编码风格配置

## Prettier

专注于检查并自动更正代码风格，美化代码 (代码格式化-配合vscode `Prettier - Code formatter` 插件使用)

## Eslint

专注于 JavaScript 代码质量检查, 编码风格约束等

## husky


## 别名 ctrl 不生效
- webpack 中设置别名
- `jsconfig.json` 中设置 `paths` 属性
- 如果 `jsconfig.json` 与 `tsconfig.json` 同在，则  `tsconfig.json` 中设置 `paths` 属性 和 `allowJs = true` (`jsconfig.json` 中可不设置)
- 如果不生效，记得重启vscode

## jsconfig.json

目录中存在jsconfig.json文件表示该目录是JavaScript项目的根目录。jsconfig.json文件指定根文件和JavaScript语言服务提供的功能选项。

**为什么我需要一个jsconfig.json文件？**

- Visual Studio Code的JavaScript支持可以在两种不同的模式下运行：

- 文件范围 - 没有jsconfig.json：在此模式下，在Visual Studio Code中打开的JavaScript文件被视为独立单元。 只要文件a.js没有显式引用文件b.ts（使用///引用指令或CommonJS模块），两个文件之间就没有共同的项目上下文。
- 显式项目 - 使用jsconfig.json：JavaScript项目是通过jsconfig.json文件定义的。 目录中存在此类文件表示该目录是JavaScript项目的根目录。 文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项（见下文）。

- 当您在工作空间中有一个定义项目上下文的jsconfig.json文件时，JavaScript体验会得到改进。 因此，当您在新工作空间中打开JavaScript文件时，我们提供了一个创建jsconfig.json文件的提示。

## pretty-quick/lint-staged

`pretty-quick` 会只格式化 `git add .` 暂存之后的文件
