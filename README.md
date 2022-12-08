## 代码提交

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
      // failOnWarning: true, // 如果设置为true的话，那么有任何警告的时候，将导致构建失败。
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



