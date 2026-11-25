# UI-Vault 组件系统 · 清点、展示与复用规划

> 适用范围：UI-Vault 主工作台与其附属的 UI 组件展厅。更新：2026-11-22（按 v1.0 React 架构核对代码；组件展厅已改为直接渲染主站 React 组件）。
>
> **不要把主站已有的业务样式直接称作通用组件库。** 本文区分「目前可复用的实际模块」与「计划抽取的组件」，避免出现展示效果与生产代码分叉。
>
> 当前设计规则见 [DESIGN.md](../DESIGN.md)；规则的演变过程见 [DESIGN-HISTORY.md](DESIGN-HISTORY.md)。

## 1. 层次与所有权

| 层级 | 代码事实来源 | 作用 | 当前状态 |
| --- | --- | --- | --- |
| Foundation（跨项目） | `subprojects/ui-foundation-kit/tokens/`、`styles/` | 通用 Token、按钮、卡片、输入、Badge、Tabs、Switch、Dialog recipes；Vue/React/GPUI 接入说明 | 已有独立项目和演示；不能自动宣称 Web/Vue/GPUI 完全一致 |
| Workbench 行为（React） | `src/react-workbench.jsx`、`src/components/*.jsx`、`src/useWorkbench.js` | 主站全部动态 UI：目录、筛选、下拉、设备切换、预览 iframe、说明弹窗、设置、快捷键 | **主站唯一的行为实现** |
| Workbench 逻辑（纯函数） | `assets/core/*.js` | 检索、状态转换、路由、存储协议、预览尺寸计算、emoji 映射、详情 HTML | React 层和展厅共同调用 |
| Workbench 样式 | `assets/styles.css` + `assets/ui/*.css` | 组件基础样式与主站页面级覆盖 | React 组件沿用原有 DOM class，样式只有一份；`assets/ui/` 下只放 CSS |
| Workbench 展示 | `demos/components/workbench-system/demo.jsx` | 直接渲染 `src/components/` 中的组件做演示 | 与主站同源，**不是第二份组件源码** |
| Design 说明 | `DESIGN.md`、`docs/COMPONENT-SYSTEM.md` | 设计原则、组件清单、抽取优先级、验收标准 | 规范和迭代路线 |

**原则**：

- 跨项目的设计变量归 Foundation；UI-Vault 的资源目录和预览控制归 Workbench。
- **行为在 React，计算在纯函数，样式在 CSS**：交互状态只写一次（React 组件），能脱离 DOM 测试的逻辑放在 `assets/core/`，外观由共享 CSS 决定。
- 不能把主站的几百条全局 CSS 规则原样「复制成通用库」；组件稳定后再抽取局部 CSS 与 JS，演示应继续引用同一实现。

## 2. 组件清单（以仓库代码为准）

| 分组 | 组件/模式 | 主站实现（行为） | 共享逻辑 / 样式 | 当前可复用程度 |
| --- | --- | --- | --- | --- |
| 基础 | 强调 / 次级 / 图标 / 禁用操作 | JSX 中直接使用 class | `assets/styles.css`：`.open-action`、`.info-action`、`.square-action` | **样式可复用**；还未抽成无全局依赖的独立 recipe |
| 基础 | 图标 | `Icon`（`src/components/Icon.jsx`；`WorkbenchSelect.jsx` 继续转出以兼容旧 import） | `assets/icons/lucide.svg` sprite | **React 组件可复用** |
| 基础 | 标签、选中与禁用状态 | `ListControls` / `QuickFilters`（`react-workbench.jsx`） | `.tag-list`、`.filter-button` | 样式可复用 |
| 表单 | 搜索输入 | `SearchField`（`src/components/SearchField.jsx`）：Esc 清空、Enter 提交、清除后回焦；`id`、`controls`、文案可通过 props 配置 | `.search-field` | **React 组件可复用**，展厅已使用 |
| 表单 | 全局搜索快捷键 | `WorkbenchPortals` 内的 `keydown` 监听（`react-workbench.jsx`）：`⌘/Ctrl+K` 聚焦并全选；非输入状态下按 `/` 聚焦；手机上先展开目录，设置页先切回目录 | — | 属于工作台业务行为，不作为通用组件 |
| 表单 | 增强下拉（排序 / 标签 / 设置） | `WorkbenchSelect`（`src/components/WorkbenchSelect.jsx`）：React 管理值、弹层、↑↓/Home/End/Enter/Space/Esc/Tab，键盘移动时把选项滚动到可见范围 | `.select-field` / `.select-*` DOM 与 CSS 协议；展开期间通过 `trackDropdown()` 登记，`closeDropdowns()` 统一收起（均来自 `assets/core/dropdown.js`） | **React 组件可复用**，展厅已使用；需 Lucide sprite 和对应 CSS |
| 导航 | 分类导航 | `CategoryNavigation`（`src/components/CategoryNavigation.jsx`），`aria-pressed` 表达选中 | `.nav-button` | **React 组件可复用**，展厅已使用；分类图标映射写在组件内 |
| 导航 | 快捷筛选（全部 / 精选 / 收藏 / 跨仓） | `QuickFilters`（`react-workbench.jsx`） | `.filter-button`；互斥规则在 `assets/core/workbench-state.js` | 样式可复用，过滤状态归工作台 |
| 导航 | 项目目录条目 | `ProjectRow` / `ProjectList`（`src/components/ProjectList.jsx`）：搜索命中高亮、命中字段说明；`loading` 时显示 7 行占位 | `projectEmoji()`、`projectRowSubtitle()`（`assets/core/workbench.js`）、`highlightSearchText()` / `searchMatchDetail()`（`assets/core/catalog.js`）、`assets/ui/project-row.css` | **React 组件 + 纯函数可复用**，展厅已使用 |
| 导航 | 移动端目录面板 | `WorkbenchPortals`：`menuOpen` 状态、遮罩与关闭按钮、Esc 关闭并把焦点还给菜单按钮、打开后聚焦搜索框 | `#library-rail`、`#mobile-shade` | 属于工作台布局，不作为通用组件 |
| 反馈 | 项目说明 / 源码弹窗 | `ProjectDialog`（`src/components/ProjectDialog.jsx`）：原生 `<dialog>` + `showModal()`、三个标签页（项目说明 / 源代码 / 页面信息，←→/Home/End）、源码懒加载 + `AbortController`、过期响应保护、焦点恢复、点击外部关闭 | `projectInfoMarkup()`（`assets/core/workbench.js`，以 HTML 字符串注入）、`assets/core/source-files.js`、`assets/ui/dialog.css` | 原生模式可复用；内容与源码加载属于业务逻辑 |
| 反馈 | Toast | `WorkbenchPortals` 通过 Portal 渲染到 `#toast`，2.6 秒后移除 `.show` | `.toast`（`assets/ui/controls.css`） | 样式可复用；通知只走 `useWorkbench` 的 `notify()`，不另建队列 |
| 反馈 | 空状态与结果播报 | `WorkbenchPortals`：根据收藏 / 搜索 / 筛选给出不同空状态文案，更新 `#results-status` | `.empty-list`、`#empty`、`#clear-filters` | 样式可复用；文案属于业务 |
| 预览 | 设备宽度切换 | `ViewportSwitcher`（`src/components/PreviewToolbar.jsx` 导出）：自适应 / 390 / 768 / 1280px，↑↓/Home/End/Esc，点击外部收起 | `assets/ui/preview-toolbar.css` | **React 组件可复用**，展厅已使用；内部使用固定 id，同一页面只能放一个 |
| 预览 | 预览 iframe 生命周期 | `PreviewFrame`（`src/components/PreviewFrame.jsx`）：`React.memo` 只在资产 id、预览模式、错误或目录加载状态变化时重渲染；`ResizeObserver` 重新计算缩放；iframe 加载期间顶部显示 2px 进度条（`load` 事件或 12 秒兜底后收起）；本地 Demo `sandbox="allow-scripts"`，外部站点 `allow-scripts allow-forms`；无站点的外部项目显示来源占位 | `applyPreviewLayout()` / `PREVIEW_WIDTHS`（`assets/core/preview.js`） | 缩放逻辑是**纯函数可复用**；iframe 生命周期归工作台 |
| 预览 | Topbar | `PreviewToolbar`（`src/components/PreviewToolbar.jsx`） | `assets/ui/preview-toolbar.css` | 属于工作台布局 |
| 外观 | 主站语义颜色、字体、密度 | `SettingsPanel`（`src/components/SettingsPanel.jsx`）+ `useWorkbench` 中的 `applySettings()` | `assets/styles.css`、`assets/core/settings.js` | 主站生效；跨项目应读取 Foundation Tokens |
| 独立组件 | Buttons、Switch、Tabs、Badge、Dialog | — | `subprojects/ui-foundation-kit/styles/components.css` | 独立 recipe，不能误称为本 Workbench 项目样式 |

工作台首页的下拉箭头、设备悬停菜单、项目选中态与响应式规则会随源文件更新；**展厅未展示全部边界情形，也不代表视觉自动验收**。请针对实际场景手工复核。

## 3. 展厅与主站同源（2026-11-22 完成）

组件展厅以前调用 React 迁移前的原生控制器，与主站形成两套行为实现。现在已改为直接渲染主站组件：

| 组件 | 主站与展厅共用的实现 | 展厅以前使用 |
| --- | --- | --- |
| 搜索输入 | `SearchField` | 静态 `<input>` + 手写过滤 |
| 增强下拉 | `WorkbenchSelect` | `enhanceSelect()` |
| 分类导航 | `CategoryNavigation` | 静态按钮 + 手写选中逻辑 |
| 项目条目 | `ProjectList` / `ProjectRow` | `projectRowMarkup()`（没有搜索高亮） |
| 检索与排序 | `filterAssets()` | 手写 `includes()` 过滤，排序和标签不生效 |
| 设备切换 | `ViewportSwitcher` + `applyPreviewLayout()` | 手写按钮组 + `applyPreviewLayout()` |

展厅外壳（分组标签页、主题切换、Token 色板、Toast、原生 `<dialog>` 示例）仍是演示页自身的代码：它们是展示容器或浏览器原生模式，不是主站组件的副本。

**剩余工作**：

1. ~~移除原生控制器~~（2026-11-22 完成）：`assets/ui/viewport-switcher.js`、`project-dialog.js`、`mobile-navigation.js`，以及 `enhanceSelect()`、`projectRowMarkup()`、`initSettings()` 已删除。原来测试这些函数的行为合同（转义、过期请求保护、快捷键、焦点恢复、下拉键盘交互）已改为检查对应的 React 组件，副标题逻辑抽成纯函数 `projectRowSubtitle()` 直接测试。
2. `ProjectDialog` 仍用 `dangerouslySetInnerHTML` 渲染 `projectInfoMarkup()` 生成的 HTML，中期应改写为 React 组件。
3. `QuickFilters`、`ListControls` 仍写在 `react-workbench.jsx` 中，并依赖主站固定 id（`total-count` 等），暂不放进展厅。
4. Toast 目前在主站和展厅各有一段很短的显示 / 隐藏逻辑，可以在后续抽成 `useToast()`。

## 4. 演示与注册方式

- 演示入口：`demos/components/workbench-system/index.html`，提供静态外壳和组件挂载点。
- 交互入口：`demo.jsx`，从 `src/components/` 导入 `SearchField`、`WorkbenchSelect`、`CategoryNavigation`、`ProjectList`、`ViewportSwitcher`，从 `assets/core/` 导入 `filterAssets()` 和 `applyPreviewLayout()`，用一个 React 根通过 Portals 渲染到挂载点。示例项目明确标注为演示数据。
- 构建：`npm run react:build` 把 `demo.jsx` 打包为 `assets/showcase/workbench-system.js`（**IIFE 经典脚本**，已加入 `.gitignore`）。展厅在主站中运行于 `sandbox="allow-scripts"` 的 iframe（不透明源），经典脚本不需要 CORS 即可加载。产物位于 `assets/` 下，由 `build.mjs` 的 `copyTree('assets')` 统一发布和指纹化，`check-dist.mjs` 检查它存在且不是 ES module。
- 样式：演示页只在 `demo.css` 中新增**容器与排列样式**；组件基础样式从 `assets/styles.css` 加载。
- 资产元数据：`catalog/assets/workbench-components.json`，`publish` 只列 `index.html` 和 `demo.css`（打包产物不在 `demos/` 下）；`sourceFiles` 包含 `demo.jsx`，可以在源码弹窗中查看。
- 不允许 `copyable: true`：展厅依赖多个文件和构建步骤，单文件复制会得到不完整代码。
- 首页资源搜索：「Workbench UI 组件展厅」；类别「界面组件」。
- `UI Foundation Kit` 是另一个演示资产，二者链接并存，不应合并成一个巨大单页。

## 5. 目标代码层次（目标，而非已完成）

```text
subprojects/ui-foundation-kit/
  tokens/                 # 跨项目语义变量与主题：通用基础
  styles/                 # 基础原子组件 recipes
src/
  components/             # 已拆出：Icon / SearchField / WorkbenchSelect / CategoryNavigation /
                          #         ProjectList / PreviewToolbar(含 ViewportSwitcher) / PreviewFrame /
                          #         ProjectDialog / SettingsPanel
    primitives/           # 目标分组：Icon / Button / Badge / Input / IconButton
    navigation/           # CategoryNavigation / QuickFilters / ProjectRow / WorkbenchSelect
    overlays/             # ProjectDialog / Toast / Popover
    preview/              # PreviewToolbar / ViewportSwitcher / PreviewFrame
    settings/             # SettingsPanel
  useWorkbench.js         # 唯一状态协调点
  react-workbench.jsx     # 入口与 Portals，只负责组装
assets/
  core/                   # 纯函数：检索、状态、路由、存储、预览计算（已有）
  ui/                     # 组件 CSS（已有），原生 JS 控制器逐步移除
demos/components/workbench-system/
  index.html
  demo.css
  demo.jsx                # 已完成：直接渲染 src/components 中的组件
```

`ProjectRow`、`ProjectList`、`CategoryNavigation`、`SearchField`、`Icon` 已拆到 `src/components/`，`react-workbench.jsx` 从约 17 KB 降到约 13 KB；`QuickFilters`、`ListControls` 仍留在入口文件中（见第 3 节）。按职责分组（primitives / navigation / ...）是后续目标。

### 抽取顺序与迁移契约

1. **P0（已完成）｜清点与展示**：有可运行示例、真实组件依赖、资源登记、回归检查、规范。
2. **P1（已完成）｜抽取组件样式**：基础控件与下拉抽入 `assets/ui/controls.css`、`dropdown.css`，并拆出 `project-row.css`、`dialog.css`、`preview-toolbar.css`。主站保留响应式场景覆盖。
3. **P2（已完成）｜React 接管行为**：v1.0 起，筛选、路由、设置、下拉、设备切换、说明弹窗、移动目录和 iframe 生命周期全部由 React 管理；`assets/app.js` 只负责检查 DOM 锚点和挂载。
4. **P3（已完成）｜消除双实现**：展厅直接渲染主站 React 组件；`ProjectRow`、`ProjectList`、`CategoryNavigation`、`SearchField`、`Icon` 拆到 `src/components/`。原生控制器已于同日移除。
5. **P4｜跨框架适配**：稳定组件以 Foundation 变量为桥梁接入 Vue；Rust/GPUI 共享视觉 Token，不照搬 DOM。只有在出现第二个真实使用方后，才正式标为「跨项目通用」。
6. **P5｜自动化视觉验收**：在现有九组 Chromium 截图基线上，补充明暗主题、鼠标 / 触屏、宽窄视口、长文本以及字体加载场景。构建通过不等于视觉验收通过。

## 6. 所有新增组件的验收条件

- **设计**：必要的默认、hover、focus、pressed/selected、disabled、empty/loading 状态；使用语义色而不是硬编码外观；优先 120–220ms 的小过渡。
- **交互**：可键盘访问，图标按钮有 `aria-label`，菜单支持方向键 / Escape / Tab，弹窗退出后恢复合理焦点。
- **响应式**：在工作台右侧 iframe 的狭窄区域、移动视口及桌面宽屏都不遮挡主要内容；长名称可以截断，但保留可读的含义。
- **无障碍**：文字对比度达到 WCAG AA 4.5:1；保留 `prefers-reduced-motion`；不把颜色当作唯一的状态表达方式。
- **维护**：主站使用的 React 组件、纯函数和 CSS 是唯一事实来源；展厅调用它们，不另写行为实现。新组件须补齐演示、文档、测试和清单，再登记进资源库。
- **性能**：组件状态变化不得导致 `PreviewFrame` 重新渲染或 iframe 重新加载。
- **来源**：图标优先 Lucide；保留字体和图标许可；外部组件附来源链接，不把第三方设计冒充原创。
- **安全**：React 中优先用 JSX 文本输出；必须注入 HTML 时，只使用经过 `escapeHtml()` 处理的字符串；多文件 Demo 不宣称可单文件复制；静态发布白名单只包含声明过的文件。

## 7. 已定决策

- 默认 UI 语义 Token：**Foundation 为跨项目标准；Workbench CSS 当前维持兼容别名**。不要强行统一两套主题，以免老 Demo 风格回归。
- 先整理主站正在运行的控件，不一次性引入 Storybook、复杂状态库或 Tailwind 运行时。等组件数量和使用方规模有明确证据时，再评估专业文档工具。
- 用户筛选与分类属于产品状态，不属于通用组件：组件负责展示和事件契约，`useWorkbench` 负责持久化、导航和跨资源关联。

## 8. 相关文档

- React 架构与迁移约束：[REACT-MIGRATION.md](REACT-MIGRATION.md)
- 原生 JS 阶段的模块边界（历史记录）：[WORKBENCH-MODULES.md](WORKBENCH-MODULES.md)
- ProjectRow / Dialog / PreviewToolbar 的 CSS 来源、页面级覆盖与 Chromium 截图回归：[CSS-MODULES-VISUAL.md](CSS-MODULES-VISUAL.md)

## 可见体验：展厅检查器与快捷入口

主站精选工作台提供组件展厅与设计实验室两个真实链接。展厅六组原组件增加接入示例、真实源码定位、选中代码、操作反馈与恢复演示状态；不是独立组件安装包。主站组件仍使用原外部 Lucide sprite，展厅在构建时嵌入同一可信 sprite 并通过 IconSpriteContext 渲染，保留许可证与原不透明 iframe 沙箱。窄屏展厅内恢复按钮文本，不改变主站工具栏。

## v0.9 真实共享表单接入

SearchField、WorkbenchSelect、Icon 和四份显式依赖已在组件展厅源码目录登记。参见 [REUSE.md](../demos/components/workbench-system/REUSE.md)。只为该资产允许七个固定公开路径，目录校验、源码阅读器和知识证据一致；未开放任意 src 或 assets 路径。独立临时工程从七份文件构建文档示例，真实 Chromium 搜索清除、键盘选择与焦点恢复通过。组件仍依赖 React 和主站语义样式，不能将这份源码清单视为 npm 独立安装包。通用独立组件交付继续使用 Foundation Registry。
