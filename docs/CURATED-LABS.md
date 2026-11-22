# 手工精选交互实验：逐个精调

UI-Vault 的**手工精选**与外部项目索引是两种不同资产：

- **外部索引**：仅提供项目入口和源码研究链接。
- **手工精选 Demo**：已经在本仓库存在实际可运行、可手工修改的 HTML/CSS/JavaScript。不会由 GitHub 自动扫描其他仓库或定期覆盖。
- **精调状态**：`draft`（待精调）→ `refining`（精调中）→ `stable`（已定稿），由人工评审明确修改，不能单靠 CI 自动变更状态。

## 为什么使用独立单文件

新一轮的 3 个实验都把主题 Token、布局、交互脚本放在自己的 `index.html` 中。这样在 GitHub UI 或编辑器里打开一个文件，即可从顶部 `/* TUNING */` 注释开始逐项修改；不需要启动源项目的 Tauri、Vue 或其他框架，也不用改动 UI Vault 主站 CSS。实验通过沙箱 iframe 预览，页面所有状态均为纯本地模拟。

所有实验是根据已经核实的本人公开仓库设计方法**独立重实现**的较小样例，不声称原项目完全迁入，不应当将它们理解为上游完整实现。

## 1. [任务工作台](../demos/curated/gr8r-task-workbench/index.html)

- 来源：[gr8r-studio-ui 的示例交互](https://github.com/weepwood/gr8r-studio-ui/blob/main/demo/demo.js)、[配色 Token](https://github.com/weepwood/gr8r-studio-ui/blob/main/src/tokens.css)
- 文件：`demos/curated/gr8r-task-workbench/index.html`
- 当前能力：新增任务、勾选完成、仅未完成筛选、标题搜索、列表/看板切换、浅/深主题、四种强调色、紧凑/标准密度、圆角调节。
- 优先精调：语义色与对比、看板在狭窄屏幕的阅读顺序、项目真实密度、键盘完成任务后的焦点状态。
- 独立源码、无后端。修改 `--accent`、`--row`、`--radius` 等变量便于快速审查视觉差异。

## 2. [多栏桌面壳](../demos/curated/desktop-shell-lab/index.html)

- 来源：[Tauri-Desktop-Kit 的 DesktopShell.vue](https://github.com/weepwood/Tauri-Desktop-Kit/blob/main/packages/shell/src/DesktopShell.vue)，交互思路参考 [s2u 的命令面板](https://github.com/weepwood/s2u/blob/master/src/components/CommandPalette.vue)
- 文件：`demos/curated/desktop-shell-lab/index.html`
- 当前能力：切换总览/文件/任务/设置页面；可拖动或键盘调整两侧面板；隐藏/显示侧栏和检查器；命令面板支持 Ctrl/⌘+K、↑↓/Enter；深浅主题、密度和圆角变化。
- 优先精调：侧栏/检查器宽度、窗口窄时的浮层行为、命令菜单和快捷键冲突、密度变化后的信息层级。
- 修改入口：`--sidebar-width`、`--inspector-width`、`--bar-height`、`--radius`。列表、指标均为明确标注的演示数据。

## 3. [消息动效实验](../demos/curated/message-motion-lab/index.html)

- 来源：[Motion-Lab 的动效研究](https://github.com/weepwood/Motion-Lab/blob/main/src/motion.ts)
- 文件：`demos/curated/message-motion-lab/index.html`
- 当前能力：消息发送飞入、会话切换、右滑回复、明确的回复按钮、表情反馈、三种曲线、100–650ms 可调时长、手动或系统减少动效。
- 优先精调：FLIP 起终点精度、复杂布局下的动画可中断、拖拽回复阈值、动画期间的可访问性反馈。
- 修改入口：`--duration`、`--ease`、`--radius` 以及滑动阈值 48px。全部使用本地模拟会话，无网络请求。

## 4. [Rare UI 启发交互精选](../demos/curated/rare-interactions/index.html)

- 来源：[Rare UI](https://github.com/swamimalode07/rare-ui) 的 Gooey Nav、Model Picker、Animated Counter、Notification Bell、Task List、Prompt Box、Delete Button 与 Toast 交互方向。
- 文件：`demos/curated/rare-interactions/index.html`，完整的 HTML、CSS 与 JavaScript 均在单文件内，使用本地 SVG 图标，无外部运行依赖。
- 已实现：八组可操作 Demo、模式选择与键盘导航、筛选、主题切换、数字变化、模拟通知、进度任务、输入与停止、危险确认和 Toast。
- 优先精调：导航指示器动态布局、下拉菜单空间、在 390px 以下的卡片排列、减少动效和多次快速交互。
- 授权边界：参考的是交互设计方向，**没有复制、移植或重新分发 Rare UI 组件源码**；页面内保留原项目显著署名。Rare UI 限制组件本身的再分发，参见其 [LICENSE](https://github.com/swamimalode07/rare-ui/blob/main/LICENSE)。
- 目前仅完成静态语法及资产检查，不将这些结果称为浏览器视觉验收。

## 5. [命令面板](../demos/curated/command-palette/index.html)

- 来源：[codedvisuals · Command Palette](https://codedvisuals.com/visuals/search/command-palette) 的视觉结构与交互方式。
- 文件：`demos/curated/command-palette/index.html`，HTML、CSS 与 JavaScript 全在单文件内，图标为内联 Lucide 路径，无外部字体与网络请求。
- 已实现：输入即时过滤（空格分词，中文别名可命中）；前缀 / 词首 / 包含 / 子序列四级评分排序，命中字符逐字高亮；高亮块在行间滑动（160ms）而非逐行淡入；键盘与指针模式分离，避免滚动时误触发悬停；↑↓/PgUp·PgDn/Ctrl+N·P 走位、回车派发 `palette:select`、Esc 先清空再失焦；⌘/Ctrl+K 聚焦、⌘/Ctrl+⇧+字母 直接执行；sessionStorage 记录最近使用；选中回执、空结果占位、深浅主题与减少动效。
- 优先精调：四级评分的排序手感、滑动高亮块与列表滚动的配合、列表 229px 定高在空结果时的留白、336px 面板与三级圆角的比例、深色下键帽与命中高亮的对比度。
- 授权边界：仅复现视觉结构与交互方式，**没有复制或移植原站源码**；原站为构建后的 React 打包产物，未引用其代码或素材。
- 目前仅完成元数据、语法与本地 Chromium 实际渲染检查，不将这些结果称为长期视觉验收。

## 精调顺序

1. 选一个资产，在 UI-Vault 详情直接打开预览。
2. 通过界面内的调节器探索样式变化，记录希望固定的参数。
3. 单独编辑该 Demo 的 HTML；不要直接覆盖其他实验或外部仓库。
4. 在原 Demo 内检查交互、响应式、可访问性、减少动画。
5. 更新 `catalog/assets/<id>.json` 中的 `tuningPoints` 和 `curationStage`。
6. 执行 `npm run catalog:sync`、`npm run check`，查看 GitHub Actions 和 GitHub Pages 实际渲染。
7. 经人工确认后才将状态改成 `stable`。

## 不采用的方式

- 不做批量仓库扫描、全自动抽取、自动合并 Demo。
- 不把所有来源项目合并为同一套 CSS。
- 不把实验成功误认为原生 App 的功能已实现。
- 不公开私有仓库代码、受限字体、云存储凭据或真实业务数据。

下一批候选可考虑 P-001 的编辑器玻璃效果、s2u 的完整命令导航或 NOEMA 的图片展开，但每次先人工定义目标，再单独制作并评审。

## 图标与单独精调

三个精选 Demo（任务工作台 / 桌面 Shell / 消息动效）已各自内嵌 Lucide SVG。图标既是可逐项精调的独立结构，也是本地可复制的 HTML 一部分，不通过主站 SVG sprite 跨 iframe 请求。以后如果改变某个实验的图标、描边或大小，只修改它的 `index.html`；无需同步或重写其他 Demo。图标替换必须保留原有按钮文字、键盘操作与可访问性属性。参见 [统一图标维护规范](ICONOGRAPHY.md)。
