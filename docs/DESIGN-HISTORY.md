# UI Vault 设计决策历史

> 本文记录设计与架构规则的演变过程。**这里的旧规则仅供追溯，不再执行。**
> 当前有效的规则只看 [DESIGN.md](../DESIGN.md) 和 [AGENTS.md](../AGENTS.md)。
> 新增记录格式：版本 / 日期 · 决定了什么 · 替代了什么 · 原因。

---

## 2026-11-22 · 同步上游 PR #43（Style Atlas 客户端组件图鉴）

- **背景**：本轮文档与代码改动基于提交 `2d5e187`，上游在此期间合并了 PR #43（`b86f2a0`）。
- **与本轮改动相关的上游变化**：
  1. 三栏宽度调整：导航栏 236 → 208px、项目栏 320 → 292px；窄屏 204/275 → 190/252px，182/245 → 168/218px。
  2. `ProjectDialog` 新增第三个标签页「页面信息」：本地 Demo 通过 `postMessage` 提供说明，主站只接受当前预览 iframe 且路径一致的消息，并校验链接与颜色。
  3. `scripts/build-react.mjs` 新增 Ant Design 与 Material Web 两个图鉴的打包入口（本轮新增的组件展厅入口追加在其后）。
- **处理**：`assets/styles.css`、`assets/ui/dialog.css` 把本轮改动重新应用到上游新版本上；DESIGN.md、COMPONENT-SYSTEM.md 中的宽度和标签页描述已同步。
- **提醒**：上游已按新宽度更新过 `tests/visual-baselines.json`；本轮的动效改动会再次改变截图，需要重新生成基线。

## 2026-11-22 · 统一动效 Token 与交互反馈（v1.1）

- **决定**：新增三档时长（120 / 160 / 220ms）、两条曲线，以及按主题和强调色取值的状态色 Token（`--hover`、`--accent-line` 等）。规则写入 [DESIGN.md §7](../DESIGN.md#7-动效与交互)。
- **替代**：各组件里零散的 `.14s` / `.15s` / `.16s` / `.18s` 和 `ease` / `ease-out`；写死的蓝灰色边框和悬停色。
- **新增反馈**：按钮按下收缩、目录选中强调条、收藏点击轻跳、弹窗与遮罩淡入、标签页内容淡入、移动端遮罩淡入、菜单从触发点放大。
- **修复的问题**：
  1. 首屏加载时项目列表显示“没有找到符合当前条件的项目”，预览区显示“左侧没有匹配项”。现在显示占位行和“正在加载项目目录”。
  2. 切换项目后 iframe 加载期间没有任何提示。现在顶部显示进度条。
  3. 切换到 teal / violet 强调色后，筛选、下拉、设备按钮的边框仍是蓝色。
  4. 深色主题下“单独打开”按钮和来源链接没有悬停反馈。
  5. 分类导航、快捷筛选、下拉选项、弹窗标签等十多处控件的悬停是瞬间跳变，没有过渡。
  6. 项目条目的键盘焦点框被滚动容器边缘裁掉。
- **视觉基线**：以上改动会改变截图，Chromium 视觉回归需要在人工确认后重新生成基线。

## 2026-11-22 · 删除 React 迁移前的原生控制器

- **决定**：删除 `assets/ui/viewport-switcher.js`、`assets/ui/project-dialog.js`、`assets/ui/mobile-navigation.js`，以及 `assets/core/dropdown.js` 的 `enhanceSelect()`、`assets/core/workbench.js` 的 `projectRowMarkup()`、`assets/core/settings.js` 的 `initSettings()`。
- **替代**：[REACT-MIGRATION.md](REACT-MIGRATION.md) 中「原生控制器继续保留作为独立适配器与测试合同」的决定。
- **原因**：组件展厅改用 React 组件后，这些代码已没有任何页面使用方，只剩测试在测它们，真正运行的 React 代码反而缺少对应检查。
- **测试处理**：原来的行为合同改为检查 React 组件；`projectRowMarkup()` 的副标题逻辑抽成纯函数 `projectRowSubtitle()`，`ProjectRow` 直接使用并单独测试。
- **顺带修复**：
  1. `closeDropdowns()` 原本只能关闭 `enhanceSelect()` 创建的菜单，React 迁移后一直是空操作。现在 `WorkbenchSelect` 展开期间通过 `trackDropdown()` 登记，切换到设置视图或打开移动端目录时会正确收起。
  2. `WorkbenchSelect` 用键盘移动选项时补上 `scrollIntoView`，标签较多时焦点不会移出可见范围（原生版本有这个行为，迁移时漏掉了）。
- **未恢复**：原生下拉支持按首字母快速定位选项，React 版本没有；标签以中文为主，暂不补。

## 2026-11-22 · 组件展厅改用主站 React 组件

- **决定**：`demos/components/workbench-system/` 改为由 `demo.jsx` 直接渲染 `src/components/` 中的 `SearchField`、`WorkbenchSelect`、`CategoryNavigation`、`ProjectList`、`ViewportSwitcher`，检索使用 `filterAssets()`。删除原生 `demo.js`。
- **替代**：展厅调用 `enhanceSelect()`、`projectRowMarkup()` 和手写按钮的旧实现。
- **原因**：展厅和主站是两套行为实现，展厅正常不能说明主站正常。
- **配套改动**：`ProjectRow`、`ProjectList`、`CategoryNavigation`、`SearchField`、`Icon` 从 `react-workbench.jsx` 拆到 `src/components/`；`ViewportSwitcher` 改为导出；展厅打包为 `assets/showcase/workbench-system.js`（IIFE，适配 sandbox iframe）；相关测试改为读取新的组件文件。

## 2026-11-22 · 组件系统文档按 v1.0 架构更新

- **决定**：[COMPONENT-SYSTEM.md](COMPONENT-SYSTEM.md) 的组件清单改为以 React 组件为主站行为实现，`assets/core/` 为共享纯函数，`assets/ui/*.css` 为共享样式。
- **替代**：原清单中「`Ctrl/⌘+K` 在 `assets/app.js`」「本地 iframe 生命周期仍在 `assets/app.js`」以及以 `enhanceSelect()`、`projectRowMarkup()` 为主站实现的描述。
- **核对结果**：
  - `⌘/Ctrl+K` 与 `/` 搜索快捷键在 `src/react-workbench.jsx` 的 `WorkbenchPortals` 中。
  - iframe 生命周期在 `src/components/PreviewFrame.jsx`（`React.memo` + `ResizeObserver`）。
  - `assets/app.js` 只检查 DOM 锚点并调用 `mountWorkbench()`。
- **新发现**：组件展厅 `demos/components/workbench-system/demo.js` 仍调用原生的 `enhanceSelect()` 和 `projectRowMarkup()`，与主站的 React 组件形成两套行为实现。处理方案记录在 COMPONENT-SYSTEM.md 第 3 节。

## 2026-11-22 · 规范文档合并

- **决定**：DESIGN.md 和 AGENTS.md 改为只描述当前有效规则；按版本追加的历史段落移到本文。
- **替代**：原先「v0.x 小节 + 后文声明优先于前文」的写法。
- **原因**：规则层层叠加后，人和 AI 都必须读完全部历史才能判断哪条有效，容易执行过期条款。
- **合并时解决的冲突**：
  1. **弹窗范围**：AGENTS.md 的 v0.6 小节禁止用 modal 显示项目详情，而 v0.7 允许用居中原生弹窗显示「项目说明 / 源码」。统一为：网页预览永远不进弹窗或抽屉；唯一允许的项目级弹窗是「项目说明 / 源码」。
  2. **布局尺寸**：DESIGN.md 开头仍写着 v0.4 的「侧栏 228px、卡片 1.52:1、3/2/1 列」，与 v0.6 双栏（330px）和 v0.8 三栏（236 / 320px）并存。统一为 v0.8 三栏（宽度已被上游 PR #43 调整为 208 / 292px，见下方同日记录）。
  3. **工作台逻辑位置**：v1.0 规定 `assets/app.js` 只做版本校验和挂载，React 层负责全部动态界面；旧的 `assets/app.js` 承担 iframe 生命周期、`Ctrl/⌘+K` 等描述作废。
- **已同步**：COMPONENT-SYSTEM.md 已按 v1.0 架构更新（见上一条）。

---

## v1.0 · React 全工作台架构

- **决定**：主站动态界面全部由 React 19 管理；`src/useWorkbench.js`（Hooks + `useReducer`）是唯一状态协调点；`src/components/` 按职责拆分；React 单根通过 Portals 挂载到原 `index.html` 三栏容器。
- **替代**：原生 JS 控制器（`assets/app.js` 中的筛选、路由、设置、iframe 逻辑）。
- **保留**：旧 DOM 锚点、CSS class、URL 参数、收藏和设置存储键；`assets/core/` 的纯函数继续复用。
- **约束**：`PreviewFrame` 保持 iframe 节点稳定；`demos/` 和 `subprojects/` 不迁移到 React。
- 细节：[REACT-MIGRATION.md](REACT-MIGRATION.md)。

## v0.9 · UI 组件体系：Workbench × Foundation

- **决定**：新增 Workbench UI 组件展厅（`?asset=workbench-components`）；区分 Foundation（跨项目 Token 和 recipes）、Workbench（本站工作台）、展厅（只做演示）三层所有权。
- **原因**：避免把主站业务样式误称为通用组件库，避免演示代码和生产代码分叉。
- 细节：[COMPONENT-SYSTEM.md](COMPONENT-SYSTEM.md)。

## v0.8 · 三栏信息架构

- **决定**：桌面端改为 导航（约 236px）/ 目录（约 320px）/ 预览（剩余空间）三栏；前两栏包在 `div#library-rail` 中，手机上合为一个临时目录面板。
- **替代**：v0.6 的双栏（左侧 330px 项目导航 + 右侧预览）。
- **原因**：用户希望资源导航和项目目录各自独立成栏。
- 细节：[TWO-PANE-WORKBENCH.md](TWO-PANE-WORKBENCH.md) 的 v0.8 小节。

## v0.7 · 顶部工具栏与按需弹窗

- **决定**：项目分类、名称、副标题、设备宽度、收藏、复制链接、单独打开、「项目说明 / 源码」全部集中在预览栏顶部一条 Topbar；「项目说明 / 源码」用居中原生弹窗，源码懒加载。
- **替代**：标题栏和设备预览栏分开的两条工具栏；页面底部固定的状态文字和说明折叠栏。
- **原因**：把最大面积留给真实网页。

## v0.6 · 常驻左右双栏（已被 v0.8 替代）

- **决定**：放弃卡片画廊，改为左侧项目目录 + 右侧常驻真实网页预览；项目详情不再用抽屉或侧边弹出层显示。
- **替代**：v0.4 的卡片画廊和详情抽屉。
- **仍然有效的部分**：网页预览永远不进抽屉或弹窗；收藏和筛选不重新加载 iframe；支持 390 / 768 / 1280px 与自适应预览；外站 iframe 受限时提供单独打开入口。
- **已失效的部分**：左栏 330px 的宽度约定（被 v0.8 三栏替代）。

## v0.4 · 设计质量检查与交互评审

- **决定**：引入 `npm run design:audit`（WCAG AA 4.5:1 对比度与基础交互规范）；资产详情支持手机 / 平板 / 桌面预览宽度；支持 `?asset=<id>` 分享链接；采用开源 UI 设计审查流程。
- **仍然有效的部分**：对比度要求、设备预览宽度、分享链接、收藏不重建列表和 iframe、只保留用户触发的动效、审查流程。
- **已失效的部分**：桌面侧栏 228px、卡片预览约 1.52:1、大屏 3 列 / 中屏 2 列 / 手机 1 列的卡片画廊、详情抽屉的布局与关闭动效。
- 审查流程：[OPEN-SOURCE-DESIGN-WORKFLOW.md](OPEN-SOURCE-DESIGN-WORKFLOW.md)。

## v0.2 · 基础架构

- 每条资产独立 JSON，自动生成前端聚合索引。
- 分类导航数据化，新增分类不改展厅源码。
- 搜索、收藏和视图渲染模块化。
- 本仓 Demo / 外部参考的创建脚本。
- 静态资源白名单构建、Node 原生测试、自动部署。
- 保持原有 Demo URL 与收藏 ID 兼容。

---

## 长期有效的原则（各版本一直保留）

- 主站是工具型工作台，不是营销网页。
- 去 AI 味针对的是主站的模板化设计，不删除 Demo 的艺术风格。
- 没有真实浏览器渲染，不称视觉已验收。
- 第三方内容先保留来源，不无许可镜像。


## 2026-11-23｜设计风格同条目多版本

同一视觉语言可以收录不同开源作者的实现，主目录仍只显示一个风格条目。Topbar 根据 `versions` 展示版本下拉；版本切换同步预览、源码、Design.md、外部来源与可分享链接 `?variant=`，但不更改资产 ID 或收藏键。风格名称与实现模板是两个层次；新风格仍注册为独立资产。初次引入 landfolio（MIT）时以固定提交归档 HTML，新增 86 个风格并附加 115 个版本。

## 2026-11-23 · 全局搜索入口与视觉结构

- 将唯一的全局搜索图标从侧栏移至预览顶栏最左侧，保持 `Ctrl/⌘ K` 和 `/` 快捷键。
- 搜索面板扩为 720px 自适应窗口，使用半透明背景和实际 `backdrop-filter`，为深浅色分别配置透光度；只搜索，不联动目录筛选。
- 搜索结果直接复用 `projectEmoji(asset.id)`，与项目列表保持一致，显示命中片段与匹配字段，保留键盘操作和减少动画设置。

### 2026-11-23 · 搜索入口位置修正

- 按截图标注将全局搜索按钮从顶栏最左端改为设备选择器右侧、竖向分隔线左侧；保持同一行并在 React 与首屏 HTML 中同步结构。

## 2026-11-23 · 设备选择器可用性重设计

- 取消经过即展开：改为点击、Escape 和方向键控制。
- 112px 轻量按钮 + 238px 信息面板，展示设备宽度、选中状态和真实缩放比例。
- 新增 320–2560px 自定义预览宽度、拖动/键盘调节、独立模式记忆，避免重建 iframe。
- 同步更新组件展厅、回归断言及视觉截图基线。

## 2026-11-24 · Phase 1 目录治理：受控标签词表与复用度筛选

- **决定**：`catalog/tag-vocabulary.json` 提供封闭词表（内容类型 38 词 + 风格视觉 59 词），validate 对词表外标签硬性拦截；372 个历史标签经 `catalog/tag-migrations.json` 显式归并，中英重复词合并，技术标签迁入 `technologies`，机器组标签（网页风格/设计语言/视觉参考/Style Atlas 等，共 1287 个实例）删除，`tags` 允许为空数组。
- **替代**：自由打标导致的 372 个零散标签与被批量组标签淹没的标签筛选下拉。
- **新增交互**：项目栏在「排序 / 标签」旁新增「复用程度」筛选（已验证 / 可安装 / 可复制 / 本地实现 / 外部项目），从既有元数据派生（`assets/core/catalog.js` 的 `reuseLevelOf`），状态协议新增 `reuse` 字段并随重置清除。
- **原因**：528 条资产中 400+ 为 Style Atlas 类批量参考，目录被参考流淹没，能拿走复用的部分（可复制/可安装/已验证）无法按需过滤；词表封闭使标签长期保持检索价值。
- **提醒**：项目栏布局变化需要重生成 Chromium 视觉基线（CI workflow_dispatch 勾选 `regenerate-baselines`，产物经人工审核后提交）。

## 2026-11-24 · 目录工具栏与组合筛选

标题行恢复独立的标题/计数，排序与筛选移至第二行，复用度不再固定占用标题行。新增技术栈、资源形式、来源项目和标签的交叉筛选及条件清除；保持主站三栏和 Topbar 对齐。

## 2026-11-24 · 独立风格与目录工作台

拆分视觉风格与内容标签，分组与排序解耦，支持本地筛选方案和未分组长列表窗口化。保留分组原生折叠和完整列表回退。
