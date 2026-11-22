# 网页设计风格 · website_designs

## 目录扁平化

314 个独立的 HTML 风格示例直接作为 UI-Vault 工作台的一级资产显示，统一归入「设计风格」分类，不再需要经过「网页风格图鉴」中转。每个资产保留独立的 ID、预览地址、源码入口及 Markdown 指南地址，可按名称搜索、收藏或单独打开。

- 源 HTML 位于 `demos/experiments/website-designs/examples/*.html`，未修改原作者页面。
- 目录元数据位于 `catalog/assets/website-style-*.json`，`content/assets.json` 由 catalog 同步生成。
- 每条目在「项目说明 / 源代码 / 页面信息 / Design.md」中展示源文件和对应的设计指南，支持复制及下载。
- 设计指南来自上游 `designs/<相同文件名>.md`，在访问 Design.md 标签时通过 GitHub Raw 按需加载。指南仍由原作者在线维护；离线、被拦截或上游删除时会显示错误及原始文档链接。
- 旧聚合页 `demos/experiments/website-designs/index.html` 仅保留于仓库作为导入记录，不再作为主站条目或默认发布入口。

## 来源与许可

- 上游仓库：https://github.com/chrislemke/website_designs
- 作者：Chris Lemke
- 授权：MIT（`demos/experiments/website-designs/LICENSE.txt`）
- 上游案例：`examples/*.html`
- 上游指南：`designs/*.md`

原始 HTML 可能引入第三方在线字体与图片，不保证离线完整可用。独立展示不代表 UI-Vault 获得第三方素材的重新授权。

## 维护流程

新增或更新风格时，先核查 HTML、对应指南、MIT 授权与素材引用，再登记或调整 `catalog/assets/website-style-*.json`。新增分类只修改 `content/categories.json`。

```bash
npm run catalog:sync
npm run check
```

不要在客户端启动时批量请求 314 份 Markdown；仅打开某个资源的 Design.md 标签时加载对应文件。
