# UI Vault · 设计资源栏目

此栏目汇集**设计网站、AI UI Skills、设计规范、组件与工具**，与已有的「视觉风格」「设计参考」不同：
- **视觉风格**：可运行的具体样机、配色与 Token。
- **设计参考**：保存外部项目及源码，研究具体产品。
- **设计资源**：可搜索的专业资料导航，以及如何使用它们的文档。

## 文件与维护
- `content/categories.json`：导航增加 `resource`，图标映射到 Lucide `book-open`。
- `catalog/assets/design-resource-library.json`：资料索引入口。
- `catalog/assets/design-skill-handbook.json`：独立 Skills 手册入口。
- `assets/design-resources/catalog.js`：**唯一资源数据源**。每条包含 `id/title/kind/topic/source/url/summary/usage/tags/badge`。
- `assets/design-resources/library.js`：无依赖前端搜索、分类和会话内收藏。
- `demos/experiments/design-resource-library/index.html`：索引页面。
- `demos/experiments/design-skill-handbook/index.html`：网页阅读版。
- `docs/UI-SKILLS-HANDBOOK.md`：可编辑 Markdown 版。

## 资源维护协议
1. 只记录 HTTPS 原始站点，不镜像第三方 CSS、JavaScript、字体、图片与页面。
2. 按实际用途写中文一句话描述和使用时机，避免空泛词汇。
3. 区分 `skill` / `site` / `doc` / `tool`，每条使用稳定、唯一小写 ID。
4. 新增 Skills 时核实作者/组织与官方文档，不随意推断 CLI 安装命令。
5. 定期检查失效链接与变更；站点只是外链，索引不能保证持续可访问。
6. 不从外部 URL 运行代码，不自动安装 Skills；外部内容与仓库的许可分别处理。
7. 运行 `npm run catalog:sync` 和 `npm run check`，验收索引搜索/筛选/空态/外链/键盘/移动端。

## 资源分类与初期收录

初期收录 **30 条**（其中 10 条设计网站），例如 AI for UI、Jakub Krehel、Vercel 指南、Mobbin、Recent、Landdding、60fps、Footer Design、Iconly 等。

## 链接
- [独立资源索引](https://weepwood.github.io/UI-Vault/?asset=design-resource-library)
- [AI UI Skills 手册](https://weepwood.github.io/UI-Vault/?asset=design-skill-handbook)
- [AI for UI](https://aiforui.dev/skills)

核对日期：2026-11-21。
