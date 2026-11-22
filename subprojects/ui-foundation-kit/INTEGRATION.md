# 接入新项目

## 最轻量的方式（框架无关）

在已有工程根目录安装本基础包：

```bash
# 在 UI Foundation Kit 根目录执行；目标项目目录需已存在
node scripts/install.mjs /absolute/path/to/my-project
```

生成：`my-project/ui-foundation/`，其中包含 `dist/`、`tokens/`、`styles/`。

该目录是**一次性复制的快照**，不是工作区依赖或 Git 子模块。安装后目标工程自行持有一份 Token/CSS，可以独立开发和部署；不会因 UI-Vault 的版本升级自动变化。

安装器同时生成 `INSTALL-MANIFEST.json`：包含 Kit 版本、来源和每个交付文件的 SHA-256，便于人工比较升级前后的差异。需要预览受影响文件时：

```bash
node scripts/install.mjs /absolute/path/to/my-project --dry-run
```

安装前先执行 `npm run build`；脚本需要 `dist/` 已生成。

在应用入口全局导入，顺序不要颠倒：

```css
@import './ui-foundation/dist/theme.css';
@import './ui-foundation/styles/base.css';
@import './ui-foundation/styles/components.css';
```

在 Vue / React 的 JS/TS 入口中也可以按相同顺序 `import './...'`。

- 主按钮：`<button type="button" class="ui-button">保存</button>`
- 次按钮：`<button type="button" class="ui-button ui-button--outline">取消</button>`
- 卡片：`<section class="ui-card">...</section>`
- 输入框：`<input class="ui-input" aria-label="检索" />`
- 深色模式：`document.documentElement.dataset.theme = 'dark'`
- 品牌色：`document.documentElement.dataset.accent = 'teal'`
- 紧凑模式：`document.documentElement.dataset.density = 'compact'`

组件样式只负责视觉；复杂交互与可访问性请交给目标框架的组件系统。

## 更新 Token

编辑 `tokens/foundation.json`（基础值）、`tokens/themes.json`（语义色、品牌色），执行：

```bash
node scripts/build-tokens.mjs
node scripts/check.mjs
```

再运行 `node scripts/install.mjs /absolute/path/to/my-project --force` 更新基础快照。它只覆盖 `ui-foundation` 下工具拥有的文件，并生成新的 `INSTALL-MANIFEST.json`；不会修改目标项目的 package.json、lockfile 或运行时依赖。先审查差异；如果目标项目自定义修改了快照内容，强制更新会覆盖该目录内的修改。

## 版本治理

1. 先维护核心语义 Token，再派生项目配色；不要复制相近色值到各组件。
2. 对已有项目采用增量引入，不要一次性全量替换界面。
3. 建议使用 Git tag 记录版本，破坏性 Token 变更升级 major。
4. React、Vue、GPUI 仅共享语义与规范，不共享 Web 交互实现。