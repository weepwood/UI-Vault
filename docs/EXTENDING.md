# UI-Vault 资产与多框架扩展指南

本指南针对当前 React 工作台。开始前先阅读 [当前架构](ARCHITECTURE.md)、[设计规范](../DESIGN.md) 与 [第三方授权声明](../THIRD_PARTY_NOTICES.md)。

## 新增独立 Demo

```bash
npm ci
npm run new:demo -- components magnetic-button 磁吸按钮
npm run catalog:sync
npm run check
```

脚手架创建 `demos/<类别>/<slug>/index.html` 和 `catalog/assets/<slug>.json`。Demo 应尽量独立运行，资源使用相对路径，并兼容 GitHub Pages 的 `/UI-Vault/` 子路径。

**双层数据源**：`catalog/projects/*.json` 保存来源项目，`catalog/assets/*.json` 保存独立资产。每条资产需要 `projectId`。`npm run catalog:sync` 同时生成两个 content 清单。详见 [Project 注册表](PROJECT-REGISTRY.md)。类别定义位于 `content/categories.json`；修改类别不需要更新主站导航组件。

## 新增外部设计参考

```bash
npm run new:reference -- example-ui https://github.com/example/repo 参考项目
```

外部资源需登记 `projectId` 与 `url`（脚手架可为 GitHub 来源自动创建 Project），可选 `siteUrl`（真实可访问的公开演示）、`originRepo`、`sourceUrl` 和 `reuseNotes`。源仓维护独立 React/Vue 站点时，通过 `siteUrl` 内嵌即可，不复制全部源码进入 UI-Vault。

外站可能拒绝 iframe 嵌入，或需要 File System Access、IndexedDB 等沙箱无法允许的能力。用户必须能通过原站链接获得完整体验。不要为了解除限制直接添加 `allow-same-origin`，尤其同为 `weepwood.github.io` 域名不同路径的站点。

## 预览权限白名单

默认本地 iframe 为 `sandbox="allow-scripts"`；默认外站 iframe 为 `sandbox="allow-scripts allow-forms"`。确实需要的功能，在资产元数据中声明：

```json
{
  "previewCapabilities": ["downloads"]
}
```

可用选项：

| 权限 | 适用场景 | 说明 |
| --- | --- | --- |
| `downloads` | 需要导出文件的 Demo | 允许沙箱下载，仍需要浏览器支持 |
| `popups` | 需要在新标签页打开外部资源 | 可跳出沙箱打开新页面，务必审查来源 |
| `fullscreen` | 本地全屏演示 | 仅允许本地资源 |
| `webgpu` | 本地 WebGPU 材质实验 | 仅允许本地资源，依赖设备支持 |

权限实现位于 `assets/core/preview-policy.js`，目录验证位于 `scripts/lib/catalog.mjs`。禁止自行拼接任意 sandbox 标志。新增权限必须同时更新 schema、验证逻辑和测试。

## 本地资源与源码下载

只有完整自包含、`preview===code`、且不需要 `publish` 附加文件的 HTML，才允许设置 `copyable:true`。使用外部 CSS/JS、字体或图片的 Demo 不应标为单文件可复制；可单独登记已获分发权限的 `sourceFiles`：

```json
{
  "copyable": false,
  "sourceFiles": [
    {"path": "demos/components/example/index.html", "label": "HTML"},
    {"path": "demos/components/example/demo.css", "label": "CSS"}
  ],
  "publish": [
    "demos/components/example/demo.css"
  ]
}
```

`publish` 仅列出浏览器运行所需的公开文件，路径必须位于本仓允许的 `demos/` 内；`sourceFiles` 支持多种源码扩展名，但只有经过许可核实的文件才允许登记和发布。源文件清单和编译产物不是同一回事，不能把构建后单页虚称为完整 React/Vue 源码。

个人学习与设计研究演示可以保留来源已记录、许可尚未核实的参考素材，不再仅凭待核实状态删除或禁止展示。记录原站链接、权利归属和待核实状态；不要将其自动打包成可再分发组件，也不要把个人学习用途解释为第三方授权。

## 项目独立性与分发

UI-Vault 优先作为项目索引，不强制所有 React/Vue/HTML 项目共享同一个工具链。源码弹窗对独立 GitHub 仓库提供整仓 ZIP 快照；子目录项目仍会下载整个仓库。

本地多文件 Demo 如经人工确认可独立运行及素材可分发，可增加 `bundleFiles`（完整运行文件白名单），由构建器输出可离线保存的 `downloads/<id>.zip`。`sourceFiles` 仍只代表允许浏览的文件；二者不能混同。不要将需要 UI-Vault React 业务模块或跨 Demo 相对路径依赖的页面标记为独立 ZIP。

详见 [多框架管理与独立交付规范](MULTI-FRAMEWORK.md)。

## 主站新功能应放在哪

| 需求 | 代码位置 |
| --- | --- |
| 目录筛选/检索 | `assets/core/catalog.js` |
| 状态转换/路由 | `assets/core/workbench-state.js`、`workbench-router.js` |
| 工作台状态与副作用 | `src/useWorkbench.js` |
| 具体交互控件 | `src/components/` |
| 共享 CSS | `assets/ui/`、`assets/styles.css` |
| 组件跨项目复用 | `subprojects/ui-foundation-kit/` |
| 元数据与发布协议 | `catalog/asset.schema.json`、`scripts/lib/catalog.mjs`、`scripts/build.mjs` |
| 回归测试 | `tests/`、`scripts/visual-regression.py` |

新资产可以独立维护；新业务逻辑不要写到 `assets/app.js`，它只负责启动与版本兼容性。

## 变更完成的检查清单

1. 记录来源、已知许可证及待核实状态，区分学习展示与可再分发交付。
2. 新增或修改资产 JSON 并运行 `npm run catalog:sync`。
3. 保留稳定 ID、URL、存储键与三栏 DOM 锚点。
4. 运行 `npm run check`，需要视觉确认时执行 `npm run visual:test`。
5. PR 描述中写明新权限、外部依赖和测试结果；参见 [贡献指南](../CONTRIBUTING.md)。
