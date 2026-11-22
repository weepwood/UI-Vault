# 网页风格图鉴 · website_designs

## 来源与授权
- 上游仓库：https://github.com/chrislemke/website_designs
- 作者：Chris Lemke
- 授权：MIT；本目录保留原始 LICENSE.txt，保留原始作者署名。
- 导入范围：314 个独立 HTML（examples/*.html），图鉴导航为 UI-Vault 集成代码。
- 原始设计指南：上游 designs/<风格名>.md；每种风格均提供对应指南链接。

## 目录
- `demos/experiments/website-designs/index.html`：本地风格浏览器，目录数据来自已检查的上游 examples 文件列表。
- `demos/experiments/website-designs/examples/*.html`：原样 HTML，彼此独立，无对主站 React 代码的运行时依赖。
- `demos/experiments/website-designs/LICENSE.txt`：MIT 许可证。
- `catalog/assets/website-designs-gallery.json`：唯一项目元数据源。
- `content/assets.json`：从元数据同步生成，不直接维护。
- `tests/website-designs.test.mjs`：覆盖数量、唯一性、发布白名单、许可证。

## UI-Vault 接入
图鉴作为一个本地 style 资产，而不是 314 个主工作台资产，避免目录膨胀。静态构建通过 catalog 资产的 publish 白名单发布全部独立演示。不需要改动主站工作台的筛选、路由或内嵌机制。

图鉴仅在用户选择某种风格后加载该页面，避免数百个 iframe 同时消耗资源。外链通过原生链接打开，不尝试突破 iframe 限制。

## 更新与维护
不要在本项目运行时自动抓取上游内容。若上游更新，人工核对新增/修改的 HTML、MIT 许可与第三方资源后更新目录数据、publish 清单和测试，再执行：
```bash
npm run catalog:sync
npm run check
```
主题分类是图鉴的辅助检索分组，不等同于上游作者的正式分类。部分源 HTML 引用在线字体/图片，不能保证完全离线。
