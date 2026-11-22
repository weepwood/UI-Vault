# UI-Vault 贡献与维护流程

项目以 **独立资产清单 + 可运行 Demo + 受限工作台** 为核心，不因新增资源重写主站。

## 开发环境

使用 Node.js >=22.12、Python 3.12（字体与视觉测试）。在仓库根目录执行：

```bash
npm ci
npm run dev
npm run check
```

浏览器视觉回归需额外安装 `scripts/requirements-visual.txt` 并使用 `npm run visual:test`。
主站构建要求依赖锁文件与 package.json 保持一致。

## 提交内容

- 新 Demo：`npm run new:demo -- components example-button 按钮演示`
- 新外部参考：`npm run new:reference -- sample-ui https://github.com/example/sample 参考项目`
- Project 维护于 `catalog/projects/<id>.json`，Asset 维护于 `catalog/assets/<id>.json`，每条资产需有 `projectId`。`npm run catalog:sync` 同时生成两个清单，禁止直接编辑生成文件。
- 根据 `catalog/asset.schema.json` 维护字段，新增字段同步更新运行时验证与单测。
- `copyable:true` 仅适用于无附加资源、`preview===code` 的自包含单文件 HTML。其他可使用 `sourceFiles` 公开经核实可分发的源文件。
- 如需 iframe 额外权限，在 `previewCapabilities` 声明 `downloads` / `popups` / `fullscreen` / `webgpu`，并附上使用理由。禁止放宽 `allow-same-origin`。
- 任何资源引入前检查来源、许可、字体和图片的再分发权限；`license` 字段不替代正式许可文件。

## 验证和审查

一项 PR 聚焦一类问题，提交信息使用中文。PR 描述包含：目标、变更范围、运行结果、影响的资产 ID、UI 截图（若涉及视觉改动）、第三方许可说明。

`npm run check` 是本地基线；PR CI 额外执行 Chromium 视觉/交互回归。浏览器断言不能仅靠正则搜索源码替代。

修改共享组件需在真实工作台与 Workbench 组件展厅中同时确认；修改独立 Demo 应验证手机宽度、键盘导航和 `prefers-reduced-motion`。

## 规范与兼容

- 当前设计语言：`DESIGN.md`。
- 当前工程架构：`docs/ARCHITECTURE.md`。
- 增量集成和多框架边界：`docs/EXTENDING.md`。
- 不重命名稳定资产 ID、已公开 Demo URL、收藏存储键与 URL 深链接，除非提供迁移说明。
- 公开发布仅通过 `scripts/build.mjs` 白名单。
