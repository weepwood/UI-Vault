# UI Vault · 个人 UI 设计资产工作台

将喜欢的 UI 风格、组件、动效、布局和可运行 Demo 持续收藏到同一个工作台。

- [GitHub 仓库](https://github.com/weepwood/UI-Vault)
- [预期 GitHub Pages 站点](https://weepwood.github.io/UI-Vault/)（以部署结果为准）
- [新增 Demo](docs/ADDING-DEMO.md) · [框架扩展指南](docs/EXTENDING.md) · [架构](docs/ARCHITECTURE.md)
- [设计规范](DESIGN.md) · [改善 AI 生成 UI 的研究与开源项目](docs/AI-DESIGN-RESEARCH.md)

## 快速开始

需要 Node 22+；不依赖第三方 npm 包。

```bash
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

- **跨仓资源入口**：侧栏新增专属筛选，直达从其他公开 GitHub 仓库收录的设计案例与运行 Demo。每条关联源仓库与关键源码。

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


**独立 Demo 的 Lucide 图标补充**：任务工作台、Desktop Shell、消息动效、编辑器布局、暖色工作台与柔光玻璃卡片已采用内嵌官方 Lucide SVG；各 Demo 自包含，支持逐项手工调整。Frame Lab、Emboss Lab 和极光背景保持原有独立设计。详见 [图标规范](docs/ICONOGRAPHY.md)。
