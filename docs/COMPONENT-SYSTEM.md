# UI-Vault 组件系统 · 清点、展示与复用规划

> 适用范围：UI-Vault 主工作台与其附属的 UI 组件展厅。更新：2026-11-21。
>
> **不要把主站已有的业务样式直接称作通用组件库。** 本文区分“目前可复用的实际模块”与“计划抽取的组件”，避免出现展示效果与生产代码分叉。

## 1. 两个层次，明确所有权

| 层级 | 代码事实来源 | 作用 | 当前状态 |
| --- | --- | --- | --- |
| Foundation（跨项目） | `subprojects/ui-foundation-kit/tokens/`、`styles/` | 通用 Token、按钮、卡片、输入、Badge、Tabs、Switch、Dialog recipes；Vue/React/GPUI 接入说明 | 已有独立项目和演示；不能自动宣称 Web/Vue/GPUI 完全一致 |
| Workbench（本仓工作台） | `assets/styles.css`、`assets/ui/`、`assets/core/*.js` | UI-Vault 资产浏览器、增强下拉、筛选、项目条目、项目预览、设置视图 | 已在主站使用；部分仍与业务 DOM 紧耦合 |
| Workbench 展示 | `demos/components/workbench-system/` | 上述真实样式和可直接调用模块的可交互示例 | 本轮新增，可从 UI-Vault“界面组件”目录打开；**不是第二份组件源码** |
| Design 说明 | `DESIGN.md`、`docs/COMPONENT-SYSTEM.md` | 设计原则、组件清单、抽取优先级、验收标准 | 规范和迭代路线 |

**原则**：跨项目的设计变量归 Foundation，UI-Vault 的资源目录和预览控制归 Workbench。不能把主站工作台的几百条全局 CSS 规则原样“复制成通用库”；组件稳定后再抽取局部 CSS 与 JS，演示应继续引用同一实现。

## 2. 组件清单（以仓库代码为准）

| 分组 | 组件/模式 | 源码 | 展示页 | 当前可复用程度 |
| --- | --- | --- | --- | --- |
| 基础 | 强调/次级/图标/禁用操作 | `assets/styles.css`：`.open-action`、`.info-action`、`.square-action` | 基础控件 | **样式可复用**；还未抽成无全局依赖的独立 recipe |
| 基础 | 标签、选中与禁用状态 | `.tag-list`、`.filter-button` | 基础控件 | 样式可复用 |
| 表单 | 搜索输入 | `.search-field` | 表单与选择 | 样式可复用；工作台 `Ctrl/⌘+K` 在 `assets/app.js` |
| 表单 | 增强下拉（排序/标签） | `assets/core/dropdown.js` 的 `enhanceSelect()` 与 `.select-*` | 表单与选择 | **JS 模块可复用**，需 `icons.js` + Lucide 资源和相应 CSS；原生 select 回退 |
| 导航 | 分类按钮和筛选条 | `.nav-button`、`.filter-button` | 导航与列表 | 样式可复用，过滤状态归工作台 |
| 导航 | emoji 项目目录条目 | `assets/core/workbench.js` 的 `projectRowMarkup()`、`projectEmoji()` | 导航与列表 | **纯函数可复用**，需 DOM 事件绑定与 CSS |
| 反馈 | 项目说明对话框 | `.project-dialog`、`.dialog-*`，工作台原生 `dialog` | 反馈与弹窗 | 原生模式可复用，内容及源码异步加载属于业务逻辑 |
| 反馈 | Toast 与空状态 | `.toast`、`.empty-list` | 反馈与弹窗 | 样式可复用；通知队列不应重复开发 |
| 预览 | 设备宽度与缩放 | `assets/core/preview.js`：`PREVIEW_WIDTHS`、`applyPreviewLayout()` | 设备预览 | **纯逻辑可复用**；本地 iframe 生命周期仍在 `assets/app.js` |
| 外观 | 主站语义颜色、字体、密度 | `assets/styles.css` 和 `assets/core/settings.js` | 设计变量 | 主站生效；跨项目应该读取 Foundation Tokens |
| 独立组件 | Buttons、Switch、Tabs、Badge、Dialog | `subprojects/ui-foundation-kit/styles/components.css` | 见现有 **UI Foundation Kit** 资源 | 独立 recipe，不能误称为本 Workbench 项目样式 |

工作台首页已存在的下拉箭头、设备悬停菜单、项目选中态与响应式规则会随着源文件更新；**展厅未展示全部边界情形，也不代表视觉自动验收**。请针对实际场景手工复核。

## 3. 演示与注册方式

- 演示入口：`demos/components/workbench-system/index.html`
- 只在演示页新增 **容器与排列样式**：`demo.css`，基础 UI CSS 从 `assets/styles.css` 加载。
- 交互入口：`demo.js`，直接导入 `enhanceSelect`、`projectRowMarkup` 与 `applyPreviewLayout`。示例项目明确标注为模拟数据。
- 资产元数据：`catalog/assets/workbench-components.json`，聚合到 `content/assets.json`，列入 `publish` 多文件白名单。
- 不允许 `copyable:true`：展示页有 HTML/CSS/JS 多个依赖，单文件复制功能会得到不完整代码。
- 首页资源搜索：“Workbench UI 组件展厅”；类别“界面组件”。
- 旧的 `UI Foundation Kit` 是另一个演示资产，二者链接并存，不应合并成一个巨大单页。

## 4. 后续代码层次（目标，而非已完成）

```text
subprojects/ui-foundation-kit/
  tokens/                 # 跨项目语义变量与主题：通用基础
  styles/                 # 基础原子组件 recipes
assets/
  core/                   # 工作台领域数据与逻辑（已有）
  ui/                     # 计划抽取的 Workbench UI 样式/交互
    primitives/           # Button / Badge / Input / IconButton
    navigation/           # Filter / ProjectRow / Dropdown
    overlays/             # Dialog / Toast / Popover
    preview/              # DeviceSwitcher / PreviewFrame
demos/components/workbench-system/
  index.html
  demo.css
  demo.js
```

### 抽取顺序与迁移契约

1. **P0（当前）｜清点与展示**：有可运行示例、真实组件依赖、资源登记、回归检查、规范；保留现有主站选择器以避免大范围重构。
2. **P1（部分完成）｜抽取无业务依赖的部分**：已把搜索、Button/Filter、Toast 的基础样式抽到 `assets/ui/controls.css`，下拉视觉与动效抽到 `assets/ui/dropdown.css`，并统一由主站 CSS 导入。Dialog、Badge、更多状态仍待分批抽取；不要一次性重写现有工作台。
3. **P2（部分完成）｜抽取复杂状态**：已抽出 `assets/core/workbench-state.js`（筛选互斥、资源选中、预览模式状态）及 `assets/ui/viewport-switcher.js`（设备菜单键盘/触屏/焦点）。下一步拆出项目 Dialog 与路由/移动导航状态，继续确保 iframe 不无谓重载。
4. **P3｜跨框架适配**：稳定组件以 Foundation 变量为桥梁接入 Vue/React；Rust/GPUI 共享视觉 Token，不照搬 DOM。只有在有第二个真实消费者后才正式标为“跨项目通用”。
5. **P4｜自动化视觉验收**：补上 Chromium 截图基准和响应式场景，覆盖明暗主题、鼠标/触屏、宽窄视口、长文本以及字体加载。构建通过不等于视觉验收通过。

## 5. 所有新增组件的验收条件

- **设计**：必要的默认、hover、focus、pressed/selected、disabled、empty/loading 状态；语义色而不是硬编码外观；优先 120–220ms 小过渡。
- **交互**：可键盘访问，图标按钮有 `aria-label`，菜单 Arrow/Escape/Tab 正常，对话框退出后恢复合理焦点。
- **响应式**：在工作台右侧 iframe 狭窄区域、移动视口及桌面宽屏都不遮盖主要内容；长名称可截断但不丢可读的语义。
- **无障碍**：文字对比度目标 WCAG AA 4.5:1；保留 `prefers-reduced-motion`；不能把颜色当作唯一状态表达。
- **维护**：真实业务使用的 CSS/JS 是单一事实来源；展厅调用它，不做第二个行为实现。新组件须补演示、文档、测试和清单，再登记进资源库。
- **来源**：图标优先 Lucide；保留字体和图标许可；外部组件使用来源链接，不把第三方设计冒充原创。
- **安全**：动态文本使用 `textContent` 或已审查的转义函数；多文件 Demo 不宣称可单文件复制；静态发布白名单只包含声明的文件。

## 6. 后续决策

- 默认 UI 语义 Token：**Foundation 为跨项目标准；Workbench CSS 当前维持兼容别名**。避免将两套主题强行统一，造成老 Demo 风格回归。
- 先整理主站正在运行的控件，而不是一次性引入大型 Storybook、复杂状态库或 Tailwind 运行时；当组件数量和消费者规模有明确证据时再评估专业文档工具。
- 用户筛选与分类属于产品状态，不属于通用组件；组件负责展示和事件合同，业务层负责持久化、导航和跨资源关联。

本阶段的具体实现与测试路径见 [WORKBENCH-MODULES.md](WORKBENCH-MODULES.md)。
