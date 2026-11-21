# Notion Design Demo · UI-Vault 子项目

基于 `Notion-DESIGN.md` 的非官方 Notion 风格演示。包括营销首页、交互组件、交互模式与设计令牌四个页面。

## 路径
- `subprojects/notion-design-demo/`：完整源码与原始设计规范
- `demos/experiments/notion-design-demo/`：白名单发布的静态资源副本
- `catalog/assets/notion-design-demo.json`：UI-Vault 资产登记

## 预览
在仓库根目录执行 `npm run dev`，然后在 UI-Vault 搜索 Notion Design Demo。
也可在本子项目目录执行 `python3 -m http.server 8080` 访问首页及三个组件演示页面。

## 技术与许可
纯 HTML、CSS、JavaScript，静态离线运行，无构建依赖；Lucide 图标资源依照 ISC 授权，详见 https://lucide.dev/license 。
设计语言为独立研究，不表示与 Notion 官方存在关联；未捆绑商业字体、图片或 Notion 产品代码。

如修改本子项目，请同步 `demos/experiments/notion-design-demo/` 对应文件，并执行 `npm run catalog:sync && npm run check`。
