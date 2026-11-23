# 网页设计风格 · website_designs

## 本仓库归档

314 个独立 HTML 设计风格直接显示在 UI-Vault 的「设计风格」分类，无二级图鉴入口。每个风格有原始 HTML 示例及对应完整 Markdown 设计指南，分别独立保存于：

- `demos/experiments/website-designs/examples/<风格名>.html`
- `demos/experiments/website-designs/designs/<风格名>.md`

所有 314 份指南均保存到 UI-Vault Git 仓库，**运行时不从上游仓库请求 Markdown**。资源元数据使用 `designGuidePath` 登记本地文件位置；静态构建将已登记的指南发布到 GitHub Pages，Design.md 标签按需使用 `resolveAsset` 从本站读取。复制和下载取自本站已加载的文档内容；不批量预加载 314 份指南，避免额外流量和渲染负载。

`catalog/assets/website-style-*.json` 是独立元数据源；`content/assets.json` 由 catalog 同步生成，禁止直接手动维护。原有 `demos/experiments/website-designs/index.html` 仅作历史导入记录，不作为主目录入口。

## 来源与完整性

- 上游项目：https://github.com/chrislemke/website_designs
- 作者：Chris Lemke
- 授权：MIT，见 `demos/experiments/website-designs/LICENSE.txt`
- 本次归档所依据的固定上游提交：`d533b7e2788d3928d5590c062e1a246d902f4365`
- 归档时将 314 份 Markdown 与上述提交逐一核对 Git Blob SHA，结果完全一致（314/314）。

保留来源链接、原作者署名和许可证。上游链接仅作归属/溯源，不影响 UI-Vault 中已有指南的展示。原始 HTML 可能引用第三方在线字体或图片，不保证 HTML 离线资源完整。

## 更新指南

后续上游更新时，不进行启动时自动抓取或覆盖。人工审核变更、许可证和依赖后，将对应 `.md` 直接更新到本仓库，再修改资产元数据（如需）并运行：

```bash
npm run catalog:sync
npm run check
```

发布验证包括：314 条数据完整、314 个本地 Markdown 存在、无外部 `designGuideUrl`、静态产物包含对应 Markdown。
