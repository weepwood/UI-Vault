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
