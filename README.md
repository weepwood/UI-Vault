# UI Vault

> 我的 UI 设计、视觉风格、交互动效与可运行 Demo 的长期收藏和复用工作台。

**定位**：一个仓库，统一保存小型原创 Demo、设计规范和可复用代码；大型独立项目、第三方作品保留原仓库，仅收录索引、作者与许可证说明。

## 快速入口

- 站点（启用 GitHub Pages 且首次部署成功后）：https://weepwood.github.io/UI-Vault/
- [新增 Demo 规范](docs/ADDING-DEMO.md)
- [架构与长期路线](docs/ARCHITECTURE.md)
- [资产清单](content/assets.json)

## 一条原则：收藏不等于可复用

资产分为 **本仓 Demo (local)** 和 **外部参考 (external)**。本仓 Demo 可运行、可查看/复制源码；外部参考只展示概况并打开原项目，**不会未经授权复制第三方源码、截图或字体**。

## 内容分类

| 分类 | 内容 |
| --- | --- |
| 视觉风格 Style | 配色、排版、设计 Token、设计规范 |
| UI 组件 Component | Button、Card、Dialog、Sidebar 等 |
| 动效 Effect | Hover、Transition、Shader、Aurora 等 |
| 布局 Layout | Dashboard、Gallery、编辑器、桌面工作台 |
| 独立 Demo Demo | 可交互页面、创意实验、小型原型 |
| 外部参考 Reference | 其他 GitHub 仓库、网站、设计体系 |

## 日常工作流

1. 在 `demos/<类型>/<slug>/` 中创建独立 Demo（首选一个完整的 `index.html`），或在 `content/assets.json` 中登记外部设计。
2. 添加元数据：ID、标题、分类、标签、技术栈、预览路径、源码及授权。
3. 运行 `node scripts/validate.mjs` 验证链接、ID 和路径。
4. 提交 PR，CI 校验通过后合并，GitHub Actions 部署到 GitHub Pages。
5. 展示站提供搜索、筛选、收藏、详情、实时预览和复制本仓 Demo 代码。

## 架构目标

- **低耦合**：站点只依赖清单与公共资源路径；单个 Demo 可独立运行。
- **渐进增强**：未来引入 Vue/React/GPUI Demo 时，可预览其静态发布产物或链接 Releases。
- **Git 优先**：文件即数据库，支持代码审核、版本追踪和离线备份。
- **版权清晰**：每条资产记录来源；第三方代码单独核实许可证，不能因可访问就镜像。
- **隐私边界**：GitHub Pages 公开；不放私有笔记、访问令牌及无授权的媒体资源。

## 技术路线

初始展示壳使用原生 HTML、CSS、ES Modules（零运行时依赖，静态托管）；独立 Demo 可以使用任意技术栈，兼容的静态构建产物挂载到相应预览路径。后期有需要时可以为站点引入 Vue/Vite，但**不改变资产清单和 Demo 存储协议**。

## 开发与验证

```bash
node scripts/validate.mjs
python3 -m http.server 4173
# http://localhost:4173
```

纯静态网站不需要执行 npm 安装；网页预览建议从本地 HTTP 服务访问，而不是直接用 `file://` 打开。

## 发布

仓库包括 `.github/workflows/deploy.yml`：在 `main` push 时校验资产清单并将整个网站发布到 Pages。首次部署请进入 **Settings → Pages → Build and deployment → Source: GitHub Actions**。未完成配置和成功运行之前，以上站点地址仅为预期 URL。

## 维护原则

- 原创 Demo 优先保存可运行代码，不仅仅保存截图。
- 任何一条资产都应能追溯到源码、来源或作者。
- 用稳定的 slug 作 ID，尽可能避免改动已有链接。
- 所有 Git 提交信息和设计文档统一使用中文。
- UI-Vault 是**设计资产工作台**，不是现有组件库的无差别合并仓库。
