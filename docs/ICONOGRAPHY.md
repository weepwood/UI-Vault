# UI-Vault 图标规范 · Lucide

主站统一使用 [Lucide](https://lucide.dev/) 的 SVG 线性图标（24×24 ViewBox、2px 描边、圆角端点与连接），**只引入实际使用的图标**。图标与项目数据分离：不要为了替换图标修改现有资产 ID、Demo 或收藏记录。

## 使用方式

- 所有官方图标图形集中存放在 `assets/icons/lucide.svg`，通过 SVG symbol + use 复用。
- 静态 `index.html` 使用 `<svg class="ui-icon" ...><use href="./assets/icons/lucide.svg#search"></use></svg>`；动态资产卡片使用 `assets/core/icons.js` 中的 `iconMarkup('heart')`。
- 图标必须配合可见文字或按钮自身的 `aria-label`，不在无说明时单独承担含义；纯装饰 SVG 使用 `aria-hidden="true"`、`focusable="false"`。
- 主要导航分类映射：`palette` 视觉、`component` 组件、`zap` 动效、`panels-top-left` 布局、`play` Demo、`bookmark` 参考。
- 收藏选中态使用同一个 `heart` 图标加 CSS 的 `fill: currentColor`，不再使用字符“♡/♥”混合多个字形。
- Logo 与 favicon 采用同一 `layout-grid` 图形。图标不能替代 UI Vault 独立的产品名字。
- 图标 SVG 在静态构建时由现有白名单规则发布，不访问 CDN；`npm run check` 确认 SVG sprite 与使用名称一致。
- 独立的 `demos/` 实验可能需要模仿其对应设计体系的图标，本轮**只统一 UI Vault 外壳**，不强行重写已有 Demo。

## 上游来源与许可证

来源：[lucide-icons/lucide](https://github.com/lucide-icons/lucide)；精选图标固定在 commit `c1a02a04d4f3f7049d44567d62b8b06cff0b9103` 的 SVG 文件版本。Lucide 使用 **ISC License**，其中部分继承自 Feather 的图标还适用 **MIT License**。完整许可证原文已作为 `assets/icons/lucide.svg` 的 `<metadata>` 一同发布。此处采用官方 SVG 路径，仅为了在 UI Vault 中统一显示并保留版权说明；并不代表 Lucide 对本项目提供背书。

未来新增图标请先核对 [官方名称与路径](https://lucide.dev/icons/)，更新固定版本的 sprite 与 `ICON_NAMES`，并通过测试；**不要加载整包数千个图标或自动替换各个独立 Demo 的图标**。
