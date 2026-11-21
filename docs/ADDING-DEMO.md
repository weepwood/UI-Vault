# 如何向 UI Vault 添加设计与 Demo

## 新增本仓 Demo（推荐）

1. 使用小写英文 slug，例如 `liquid-nav`、`soft-card`、`dashboard-shell`。
2. 在 `demos/components/<slug>/index.html`、`demos/effects/<slug>/index.html` 或其他目录创建可运行入口。
3. 尽量让 HTML/CSS/JS 自包含，不要隐式依赖另一个 Demo 的样式。大型应用可以独立构建，并提交可发布的静态预览产物。
4. 在 `content/assets.json` 新增条目，填写 `source: "local"`、`preview`、`code` 和 `license`。
5. 运行 `node scripts/validate.mjs`，本地启动 `python3 -m http.server 4173` 检查。
6. 用中文 Git 提交并通过 PR 合并。

**Demo 质量门槛**：有独立入口、清晰描述、不依赖私密数据、可追溯许可、移动端不严重溢出、可用键盘操作的控件、必要时支持 `prefers-reduced-motion`。

## 新增外部项目或设计灵感

只在 `content/assets.json` 新增 `source: "external"`、`url`、标题、分类、标签、技术栈及许可说明。原项目可能有截图、字体、产品资源等独立版权；**没有许可前不要直接复制**。

示例：

```json
{
  "id": "project-example",
  "title": "示例设计",
  "subtitle": "External reference",
  "description": "适用场景及值得学习的实现",
  "type": "reference",
  "source": "external",
  "tags": ["SaaS", "Navigation"],
  "technologies": ["Vue"],
  "url": "https://github.com/example/project",
  "license": "以源仓库为准",
  "cover": "native",
  "featured": false,
  "created": "2026-11-21"
}
```

## 日后如何保存一套完整设计风格

在 `content/tokens/` 保存 JSON/CSS Token，在 `docs/styles/` 保存设计文档；为其建立独立风格条目或关联 Demo。建议记录：主色/文本/表面色、字体等级、间距与圆角、典型布局、动效曲线、适用场景、反例、上游出处和版本。

## 推荐工作流

发现灵感 → 收藏外部资源 → 设计拆解 → 原创实现最小 Demo → 交互与性能验证 → 收录为本仓资产 → 可选抽取到独立组件包。

不把概念稿、视觉展示和可安装组件混为一类，也不在演示页面未经核实地标记“生产可用”。
