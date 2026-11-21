# UI-Vault 图标规范 · Lucide

主站统一使用 [Lucide](https://lucide.dev/) 的 SVG 线性图标（24×24 ViewBox、2px 描边、圆角端点与连接），**只引入实际使用的图标**。图标与项目数据分离：不要为了替换图标修改现有资产 ID、Demo 或收藏记录。

## 使用方式

- 所有官方图标图形集中存放在 `assets/icons/lucide.svg`，通过 SVG symbol + use 复用。
- 静态 `index.html` 使用 `<svg class="ui-icon" ...><use href="./assets/icons/lucide.svg#search"></use></svg>`；动态资产卡片使用 `assets/core/icons.js` 中的 `iconMarkup('heart')`。
- 图标必须配合可见文字或按钮自身的 `aria-label`，不在无说明时单独承担含义；纯装饰 SVG 使用 `aria-hidden="true"`、`focusable="false"`。
- 主要导航分类映射：`palette` 视觉、`component` 组件、`zap` 动效、`panels-top-left` 布局、`play` Demo、`bookmark` 参考。
- 项目目录中的排序 / 标签下拉菜单使用已有精简 Lucide：`arrow-up-down`（排序）、`layers`（精选）、`calendar-days`（最新）、`bookmark`（标签）、`chevron-down`（展开）、`check`（选中）。选项图标只作辅助，文字始终可见。
- 收藏选中态使用同一个 `heart` 图标加 CSS 的 `fill: currentColor`，不再使用字符“♡/♥”混合多个字形。
- Logo 与 favicon 采用同一 `layout-grid` 图形。图标不能替代 UI Vault 独立的产品名字。
- 图标 SVG 在静态构建时由现有白名单规则发布，不访问 CDN；`npm run check` 确认 SVG sprite 与使用名称一致。
- 独立的 `demos/` 实验可能需要模仿其对应设计体系的图标，本轮**只统一 UI Vault 外壳**，不强行重写已有 Demo。

## 上游来源与许可证

来源：[lucide-icons/lucide](https://github.com/lucide-icons/lucide)；精选图标固定在 commit `c1a02a04d4f3f7049d44567d62b8b06cff0b9103` 的 SVG 文件版本。Lucide 使用 **ISC License**，其中部分继承自 Feather 的图标还适用 **MIT License**。完整许可证原文已作为 `assets/icons/lucide.svg` 的 `<metadata>` 一同发布。此处采用官方 SVG 路径，仅为了在 UI Vault 中统一显示并保留版权说明；并不代表 Lucide 对本项目提供背书。

未来新增图标请先核对 [官方名称与路径](https://lucide.dev/icons/)，更新固定版本的 sprite 与 `ICON_NAMES`，并通过测试；**不要加载整包数千个图标或自动替换各个独立 Demo 的图标**。

## 已落地的独立 Demo 图标

下列六个原本没有使用统一图标的 Demo，已逐个加入精选 Lucide **内嵌 SVG**：

| Demo | 优化范围 | 源文件 |
| --- | --- | --- |
| 任务工作台 | 工作区导航、新增、视图切换、筛选和弹窗 | `demos/curated/gr8r-task-workbench/index.html` |
| 桌面 Shell | 工作台导航、文件树、动态列表、分栏和命令面板 | `demos/curated/desktop-shell-lab/index.html` |
| 消息动效实验 | 消息发送、回复、收藏反应、切换会话及测试操作 | `demos/curated/message-motion-lab/index.html` |
| 编辑器工作台 | 活动栏、文件类型、标签与状态栏 | `demos/layouts/editor-shell/index.html` |
| 暖色工作台 | 导航、项目、日历、报告、状态标签 | `demos/layouts/warm-workbench/index.html` |
| 玻璃卡片 | 主视觉材质图标、启用及重置 | `demos/components/glass-panel/index.html` |

### 为什么子项目不直接引用主站 SVG sprite

主站使用 `assets/icons/lucide.svg` 供公共导航复用；但 UI Vault 预览的独立 Demo 使用 `iframe sandbox="allow-scripts"`，在沙箱不具备相同来源权限时，跨文档的外部 SVG `<use>` 可能无法正常显示。单文件 Demo 还需要在直接复制、离线打开时保持完整。

因此以上六个 Demo 在各自 HTML 中**内嵌官方 SVG 路径和完整 ISC/MIT 许可证说明**，保留单文件可复制性。主站不需要加载整个 Lucide 图标包或任何外部脚本。修改某个子项目的图标时，只需在那个项目中局部调整，不会覆盖其他实验。

`Frame Lab` 已经有独立的 SVG 图标体系，`Emboss Lab` 使用自身 SVG 艺术图形，两者保持原样。极光背景没有交互控件，无须人为添加装饰图标。

下一次为新 Demo 选择图标，请先确认用途再取自已固定的 Lucide 来源版本，遵循 24×24 ViewBox、统一 2px 描边，确保清晰的语义标签与选中态。
