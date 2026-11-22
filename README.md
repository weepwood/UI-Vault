# UI Vault · 个人 UI 设计资产工作台

将喜欢的 UI 风格、组件、动效、布局和可运行 Demo 持续收藏到同一个工作台。

- [GitHub 仓库](https://github.com/weepwood/UI-Vault)
- [预期 GitHub Pages 站点](https://weepwood.github.io/UI-Vault/)（以部署结果为准）
- [新增 Demo](docs/ADDING-DEMO.md) · [框架扩展指南](docs/EXTENDING.md) · [架构](docs/ARCHITECTURE.md)
- [设计规范](DESIGN.md) · [改善 AI 生成 UI 的研究与开源项目](docs/AI-DESIGN-RESEARCH.md)

## React 工作台（统一 Hooks）

当前主工作台由 React 19 管理全部动态界面：项目目录、分类、搜索、排序、收藏、预览工具栏、设备切换、项目详情 Dialog、两栏设置中心与真实 iframe。状态和副作用通过 `src/useWorkbench.js` 统一管理；`assets/app.js` 仅做启动与缓存版本保护。

- 真实组件和统一 React Root：`src/react-workbench.jsx`、`src/components/`
- 资源过滤、状态纯函数、收藏和设置存储协议继续复用 `assets/core/`
- 主站 CSS、Lucide、静态构建白名单及 9 组 Chromium 视觉基线保持兼容
- **各独立 Demo 不迁移**：HTML/Vue/React/网页镜像继续按原路径运行并经 iframe 展示

具体约束和后续优化见 [React 工作台架构说明](docs/REACT-MIGRATION.md)。[共享组件 CSS 与视觉回归](docs/CSS-MODULES-VISUAL.md)。

## 背景效果实验室

- [在 UI Vault 中打开](https://weepwood.github.io/UI-Vault/?asset=aurora-field)：升级为 Backdrop Studio，提供 42 种背景、实时渲染、分类搜索、配色调参、场景模板与独立代码导出。
- [设计参考与维护说明](docs/BACKGROUND-LAB.md) · [可独立打开的单文件 Demo](demos/effects/aurora-field/index.html)。
- 缩略图默认静止，悬停或开启缩略图动效时才播放；尊重系统减少动画设置和页面可见性。

## Workbench UI 组件展厅

- [在 UI-Vault 中打开组件展厅](https://weepwood.github.io/UI-Vault/?asset=workbench-components)：直接预览、点击并检查工作台原有组件。
- [组件来源、分级与统一规划](docs/COMPONENT-SYSTEM.md)：Workbench 与 UI Foundation Kit 的所有权边界、组件清单、抽取次序及交互验收标准。
- [演示代码](demos/components/workbench-system/)：六组组件示例，`demo.jsx` 直接渲染主站 `src/components/` 中的 React 组件，样式来自 `assets/styles.css`。
- 不将多文件组件演示伪装成单文件可复制代码；实际通用化由 `subprojects/ui-foundation-kit/` 继续承担。

## 子项目 · UI Foundation Kit

- [可复用设计工具栈源码](subprojects/ui-foundation-kit/)：设计 Token、CSS 组件、Vue 示例及 React / GPUI 迁移说明。
- [在线演示](https://weepwood.github.io/UI-Vault/?asset=ui-foundation-kit)：在 UI Vault 双栏工作台中直接预览。
- [独立 HTML](demos/experiments/ui-foundation-kit/index.html)：自包含 Demo，可离线打开。
- 从仓库根目录运行 `node --test tests/ui-foundation-kit.test.mjs` 检查 Token 构建；项目根目录 `npm run check` 也包含此项测试。

## 设计资源栏目

- [设计网站与规范索引](https://weepwood.github.io/UI-Vault/?asset=design-resource-library)：分类、搜索和跳转至原站，收录 30 条资料。
- [AI UI Skills 使用手册](https://weepwood.github.io/UI-Vault/?asset=design-skill-handbook)：Skills 使用场景、官方安装命令和 Prompt 模板。
- [Chrome / Edge Flags 设置指南](https://weepwood.github.io/UI-Vault/?asset=browser-flags-guide)：按浏览器查阅实验开关、正式设置与风险说明，支持搜索、复制内部地址与配置清单。
- [Flags 指南核对记录](docs/BROWSER-FLAGS-AUDIT.md)：整理历史 Flag、有效的正式设置和仍需在实际浏览器确认的入口。
- [栏目维护说明](docs/DESIGN-RESOURCES.md) · [Skills Markdown 手册](docs/UI-SKILLS-HANDBOOK.md)。
- 资源统一维护于 `assets/design-resources/catalog.js`，不复制第三方站点素材。

## 快速开始

需要 Node 22+；主站使用 React 19 和 esbuild，先运行 `npm install`。

```bash
npm install
npm run dev                  # http://localhost:4173
npm run new:demo -- components magnetic-button 磁吸按钮
npm run new:reference -- ui-demo https://github.com/example/repo 参考设计
npm run catalog:sync
npm run check
```

## 架构原则

- `catalog/assets/<id>.json`：每条资源独立维护，**唯一事实来源**
- `content/assets.json`：自动生成的公开资产索引，不再手动编辑
- `content/categories.json`：动态注册导航与类别
- `demos/`：独立可运行页面，支持不同 UI 技术栈
- `media/`：可授权的静态封面
- `assets/core/`：检索、渲染和收藏模块
- `scripts/`：Demo 生成、结构校验、目录构建
- `tests/`：纯函数与资产契约回归测试

小型原创 Demo 直接保存可运行代码；大型独立项目只保存引用与说明。**只有单文件自包含 Demo 才提供一键复制；不能复制第三方代码后冒充原创。**

## 检查与构建

```bash
npm run validate
npm run test
npm run build
node scripts/check-dist.mjs
```

`npm run check` 会运行以上全部步骤。GitHub Actions 在 PR 执行检查，在 main 自动部署 GitHub Pages。

构建产物为 `dist/`，使用发布白名单，避免公开 `catalog/`、`scripts/`、`tests/` 等内部目录。保持资产 ID、原有 `demos/.../index.html` 路径和浏览器收藏兼容。

首次 Pages 启用如未完成，请在 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。

## 设计质量检查（v0.4）

在 Impeccable、Jakub Krehel Skills、Emil Kowalski Skills、Anthropic Frontend Design 和 Vercel Web Interface Guidelines 的原则下，补充了响应式 Demo 预览、收藏交互稳定性及颜色对比度检查。

```bash
npm run design:audit    # 自动检查语义色对比度与基础交互规范
npm run check           # 完整 CI 等价检查
```

新增加的资产详情支持手机 / 平板 / 桌面预览宽度以及直达资源链接。详见 [开源设计工程工作流](docs/OPEN-SOURCE-DESIGN-WORKFLOW.md)。

这些方法已直接落实到仓库代码与审查规范，但没有将第三方 Skills 源码打包进产品。

- **跨仓资源入口**：侧栏新增专属筛选，收录公开 GitHub 仓库的设计案例与运行 Demo。暖色扁平组件体系内嵌 [Gr8r Studio 展示站](https://weepwood.github.io/gr8r-studio-ui/)，并保留其源仓与关键源码链接。

## 手工精选 · 可逐个精调的 UI 实验

侧栏“手工精调”只显示已经在 UI-Vault 本地落地、带有明确调参目标的独立实验；这和批量收录外部仓库链接不同。

首批新增：
- **任务工作台**：从 gr8r-studio-ui 提炼任务列表/看板、密度、主题与状态反馈。
- **桌面 Shell**：参考 Tauri-Desktop-Kit（分栏）和 s2u（键盘命令面板），实现可拖动检查器与工作区。
- **消息动效实验**：参考 Motion-Lab 实现消息飞入、手势回复、表情反馈、时间曲线与减少动画。

均为独立原生 HTML/CSS/JS，可以单独打开和手动修改。每项具有 `curationStage`、`tuningPoints` 和关键源码来源；不会自动扫描仓库、自动同步或覆盖你已经打磨的 UI。

[逐项精调指南](docs/CURATED-LABS.md) · [在仓库中查看实验目录](demos/curated/)

## 图标系统

主站使用 [Lucide](https://lucide.dev/) 本地 SVG sprite，不通过 CDN 加载，也不依赖第三方 npm 包。侧栏、搜索、收藏、详情预览、操作按钮及站点标识使用一致的线性图标；已独立实现的 Demo 保留各自设计风格。参见 [图标规范与许可](docs/ICONOGRAPHY.md)。


**独立 Demo 的 Lucide 图标补充**：任务工作台、Desktop Shell、消息动效、编辑器布局、暖色工作台与旧版玻璃卡片 Demo 使用内嵌官方 Lucide SVG；UI Vault 当前的玻璃材质入口链接至独立维护的 [Glass Lab](https://github.com/weepwood/glass-lab)。Frame Lab 和极光背景保留在本站独立运行；[Emboss Lab](https://github.com/weepwood/Emboss-Lab) 由源仓维护，本站内嵌其 [GitHub Pages 页面](https://weepwood.github.io/Emboss-Lab/)，并保留源代码链接。详见 [图标规范](docs/ICONOGRAPHY.md)。

## 常驻双栏预览（v0.6）

主站已从“卡片画廊 + 弹出详情侧栏”改成**左侧项目目录、右侧实时预览**的两栏工作台：

- 左侧固定 330px 左右，放置搜索、手工精调／跨仓／收藏筛选、分类、标签、项目目录及排序。
- 右侧占满余下宽高，点击项目时直接切换可交互网页。项目说明与源码收在下方可展开区域，不再遮挡预览。
- 预览设备：自适应、390px 手机、768px 平板、1280px 桌面；通过宽度模拟与缩放实现，支持页面直接交互。
- 外部仓库若有经核实的 `siteUrl`，尝试在右侧嵌入，保留原站链接以处理跨域嵌入限制；无可嵌入网页时展示真实的源码与仓库来源，不伪造效果图。
- 收藏、分类与搜索不要求重建右侧 iframe；资源链接 `?asset=<id>` 继续有效；移动端通过目录按钮切换，无弹出式详情抽屉。
- 仍为纯静态项目；手工精调 Demo 完全独立，入口 URL 与单文件复制逻辑不变。

[双栏工作台技术说明](docs/TWO-PANE-WORKBENCH.md)。


### GitHub Pages 资源缓存与错配防护

静态构建自动为主站 CSS、JS 入口生成一致的内容指纹，并为 JS 模块依赖附加相同版本；避免旧 HTML、新 CSS 和新 JavaScript 混用造成的初始化异常。运行时也会检查双栏工作台所需节点，发现旧版缓存时只触发一次受控恢复。详情见 [双栏工作台缓存兼容说明](docs/TWO-PANE-WORKBENCH.md)。


**顶部工具栏精简（v0.7）**：项目信息和设备模式集中在同一个 Topbar；右侧画布下面不再显示项目说明或统计文字。项目说明与源码通过 Topbar 的按钮打开带“说明／源代码”标签的居中弹窗，预览本身始终常驻右侧。


**三栏工作台（v0.8）**：导航菜单（236px）／独立项目列表（320px）／主预览画布（剩余宽度）。在宽屏上三栏常驻，在手机上左两栏一起展开；各资源仍可在中间选中后于右侧实时交互，不重写任何独立 Demo。
