# UI Vault · 个人 UI 设计资产工作台

将喜欢的 UI 风格、组件、动效、布局和可运行 Demo 持续收藏到同一个工作台。

- [GitHub 仓库](https://github.com/weepwood/UI-Vault)
- [Project 注册表](docs/PROJECT-REGISTRY.md)
- [预期 GitHub Pages 站点](https://weepwood.github.io/UI-Vault/)（以部署结果为准）
- [新增 Demo](docs/ADDING-DEMO.md) · [框架扩展指南](docs/EXTENDING.md) · [多框架与独立交付规范](docs/MULTI-FRAMEWORK.md) · [架构](docs/ARCHITECTURE.md)
- [设计规范](DESIGN.md) · [改善 AI 生成 UI 的研究与开源项目](docs/AI-DESIGN-RESEARCH.md) · [设计知识索引与 AI 复用协议](docs/KNOWLEDGE-INDEX.md)
- 许可：原创内容依 [LICENSE](LICENSE)（MIT）；第三方素材与其授权边界见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)

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

需要 Node 22+；主站使用 React 19 和 esbuild，先运行 `npm ci`。`npm run dev` / `npm run build` / `npm run check` 还需要 Python 3.12+ 来生成网页字体子集：`python -m pip install -r scripts/requirements-fonts.txt`（Windows 用 `python`，`python3` 通常是不可用的商店占位符；Linux/CI 用 `python3`）。

```bash
npm ci
python -m pip install -r scripts/requirements-fonts.txt
npm run dev                  # http://localhost:4173
npm run new:demo -- components magnetic-button 磁吸按钮
npm run new:reference -- ui-demo https://github.com/example/repo 参考设计
npm run catalog:sync
npm run check:fast            # 校验 + 测试 + 设计审计 + lint（本地迭代）
npm run check                 # 正式发布或构建专项（额外含构建与发布目录检查）
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

`npm run check` 会运行以上全部步骤。日常 PR 执行快速检查，高风险变更按路径升级至专项构建、Chromium 或 Windows；手动 full 和 v* tag 完整验收。main 仅校验资产协议、构建与检查发布目录后自动部署 GitHub Pages。详见 [仓库治理](docs/REPOSITORY-GOVERNANCE.md)。

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

**侧边栏与全局搜索：** 桌面浏览器鼠标悬停左上角 UI Vault 图标可收缩或展开导航，状态会在本地保存。侧栏在两种状态下都只保留固定尺寸的搜索图标；点击后居中显示 Command Palette，全局快捷键 `Ctrl/⌘ + K` 与 `/` 同样可打开。面板包含搜索结果、分组、键盘导航、最近打开及空态。**输入搜索不会修改第二栏目录的筛选、排序、列表或 iframe**，只有选中结果才打开对应项目。移动端也使用同一中央搜索面板。

## 项目状态 · 统一管理视图

从左下角「项目状态」进入 `?view=operations`，可同时筛选来源仓库的最近一次代码检查、经 GitHub Deployments 确认的实际部署状态，以及资产级 HTTP/iframe 限制证据；还能按来源项目展开每个 Demo 的证据与原预览入口。

注意：**Actions 成功不等于部署成功，Pages 构建完成不等于发布成功，HTTP 200 及 iframe load 也不等于页面可交互**。缺少部署提供方记录的 Netlify/Vercel 项目显示未核实，不伪造状态。独立仓库继续独立 CI/构建/部署，不复用 UI-Vault 运行时代码。详见 [运维与状态采集契约](docs/PROJECT-OPERATIONS.md)。

## Project / Asset 双层管理

来源 Project 与具体 Asset 分开管理，现有 528 条资产与来源项目通过 `projectId` 关联。排序菜单新增「按项目分组」，页面信息展示来源仓库和关联数量；原有链接、收藏及 iframe 不变。详见 [Project 注册表](docs/PROJECT-REGISTRY.md)。项目「页面信息」还可查看公开 GitHub 仓库的最近核验结果，默认分支、许可证字段与 Actions 状态；无数据或超过 14 天会标为未核实/过期，不能当作网页可嵌入或已发布的证明。

## 多框架独立交付

- 外部 React、Vue 等项目继续使用独立 GitHub 仓库与各自 CI，UI-Vault 仅通过受限 iframe 预览。
- 源码弹窗对 GitHub 外部项目提供**完整仓库 ZIP**入口（快照，不包括版本历史；如为子目录资源仍下载整仓）。
- 对人工确认文件完整、许可明确的本地多文件 Demo，使用 `bundleFiles` 生成**可脱离 UI-Vault 的静态 ZIP**；首个示例为 Notion Design Demo。
- `sourceFiles` 是代码浏览清单，`bundleFiles` 是独立交付清单，两者不应混淆；未确认的第三方素材不自动打包。
- 共享仅从 UI Foundation Kit 的语义 Token 开始；成熟可复用组件再按框架分别发布，独立项目不直接依赖 UI-Vault 的 React 业务组件。

完整原则与示例见 [多框架项目管理规范](docs/MULTI-FRAMEWORK.md)。

## 当前工作台结构（2026-11）

- **三栏**：导航与设置 / 项目目录 / 常驻 iframe 预览；移动端按需展开目录。
- **统一 React 运行态**：`src/useWorkbench.js` 是 UI 状态协调点，`src/components/` 负责交互组件，`assets/core/` 保存纯逻辑。
- **独立 Demo**：HTML、Vue、React 等项目保持自身技术栈；跨仓项目以受限 iframe 预览，失败时保留原站链接。
- **资产协议**：`catalog/assets/*.json` 是唯一事实来源；权限通过 `previewCapabilities` 显式声明，`copyable` 只用于自包含单文件 HTML。
- **发布**：日常 `check:fast`，按风险触发专项检查；正式发布 `check` 加 Chromium 视觉回归及 Windows 验证。

## 工程协作与维护

- [当前架构](docs/ARCHITECTURE.md) · [扩展指南](docs/EXTENDING.md) · [添加 Demo](docs/ADDING-DEMO.md)
- [贡献流程](CONTRIBUTING.md) · [安全政策](SECURITY.md) · [第三方来源与授权](THIRD_PARTY_NOTICES.md) · [变更记录](CHANGELOG.md)
- [工程路线图](docs/ROADMAP.md) · [分支治理与发布设置](docs/REPOSITORY-GOVERNANCE.md)
- `npm run link:check`：在联网环境中核查已登记的外部演示链接，结果写入 `link-report.json` 和 `link-report.md`；定期工作流仅报告，不阻止部署。

根目录没有对所有第三方素材作统一开源授权；不同资产的使用范围应以原始许可与仓库说明为准。
