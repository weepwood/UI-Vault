# UI-Vault 多框架项目管理与复用边界

> 状态：当前实施规范（2026-11-23）。核心原则：独立开发、独立部署、独立下载；只有稳定的设计基础按需复用。

## 1. 统一目录，不统一运行时

UI-Vault 是**登记、搜索、预览、分发入口**，不是其他项目必须安装的框架。

| 实际项目 | 归属 | UI-Vault 接入 | 下载/复用 |
| --- | --- | --- | --- |
| NOEMA、FileAtlas、Motion-Lab、其他独立 Vue/React/GPUI 仓库 | 各自 GitHub 仓库 | URL + iframe（如果允许） | GitHub 整仓源码快照、原始仓库 Clone |
| 研究用 HTML/CSS/JS Demo | UI-Vault 的 demos/ | 本地 sandbox iframe | 自包含文件直接下载；多文件在人工核实后显式声明 bundleFiles |
| Workbench React 组件 | UI-Vault 的 src/components/ | 只在主站和主站组件展厅使用 | 默认不承诺跨项目通用，不把生产业务组件作为独立库 |
| UI Foundation Kit | subprojects/ui-foundation-kit/ | 独立 Demo 和说明 | 提供框架无关的设计 Token 规范与各框架适配示例 |

**禁止**通过相对路径跨 demo 引用另一个 demo 的 JS/CSS，也禁止让 NOEMA 等独立项目运行时请求 UI-Vault 的 React Bundle。iframe 是运行时隔离，不是 JavaScript 模块依赖。

主站更新、React 版本变化、UI-Vault 站点部署不应导致其他独立项目必须重新构建。

## 2. 是否应该共享？

按变化频率、抽象稳定性和下载独立性决定：

- **值得共享**：颜色/排版/间距/圆角/动效语义 Token，通用类型定义、确定性纯逻辑、成熟且许可证明确的图标资源。
- **按框架独立实现**：React/Vue 的 Button、Dialog、Popover、Select、命令菜单；优先遵循对应框架的生态和可访问性约定。
- **不共享**：主工作台业务状态、UI-Vault 专属 ProjectRow、跨仓 iframe 的生命周期、各 Demo 的特定 Shader 或业务代码。
- **例外**：成熟组件经过测试和真正跨项目复用需求时，可发布成有版本号的 npm 包 / shadcn Registry；桌面 GPUI 通过共享 Token 文件或生成规则，而不是依赖 React。

对于真正共享的库，建议**单向依赖 + 语义化版本 + 发布后的版本锁定**。例如独立 React/Vue 项目分别声明依赖同一版本的 Token，而不是直接从其他项目源码目录 import 文件。

## 3. 独立交付协议

本地 Demo 的代码复制和完整包下载是两种不同能力：

1. \`copyable: true\`：仅允许自包含单文件 HTML；复制 HTML 就应包含所需的页面逻辑与静态资源。
2. \`bundleFiles\`：人工审核的**静态运行文件白名单**，不跨 demo、不读取整个仓库、只允许已列为 \`publish\` 的文件或 \`preview\` 本身。构建时生成 \`downloads/<asset-id>.zip\`，并通过 ZIP 内容校验。文件包应在没有 UI-Vault 主站资源的目录中运行。
3. \`sourceFiles\`：在源码弹窗中查看/逐个下载的文本文件列表，不意味着这些文件就是完整工程。
4. 外部 GitHub 仓库：提供 GitHub 的 **整仓 ZIP 快照**；可能包含多个子目录与项目，不能称为“当前资源独立包”。GitHub 仓库历史、分支、依赖及上游许可仍以原仓库为准。

本地完整 ZIP 的第一处示例为 \`notion-design-demo\`（HTML、CSS、JS 共九个运行文件）。其他大型组件图鉴、Workbench 组件展厅未自动打包，因为它们依赖其他共享构建产物或者许可证尚未单独核实。

例子：

\`\`\`json
{
  "id": "my-local-demo",
  "source": "local",
  "preview": "demos/components/my-local-demo/index.html",
  "code": "demos/components/my-local-demo/index.html",
  "copyable": false,
  "publish": [
    "demos/components/my-local-demo/demo.css",
    "demos/components/my-local-demo/demo.js"
  ],
  "bundleFiles": [
    "demos/components/my-local-demo/index.html",
    "demos/components/my-local-demo/demo.css",
    "demos/components/my-local-demo/demo.js"
  ]
}
\`\`\`

构建器将把这些文件放在 ZIP 根目录，附一份 README.txt。**请检查所有相对资源引用都能在压缩包内解析**，并确认有分发权；仅通过文件清单校验不意味着自动理解或证明所有动态依赖。

## 4. 不引入统一 Monorepo 的原因

- 独立项目可能使用不同框架、Node/Rust 版本及构建工具。
- 多项目统一依赖树使单项目升级受其他项目约束，增加锁文件、CI 和工具链复杂度。
- 整仓下载并不能自动得到一个可独立运行的子项目。
- UI-Vault 的主要价值在**编目、参考、比对与发现**，不是把所有 Demo 打包为一个 React 应用。

若未来多个子项目确实共用**同一类源代码**且需要原子化联动发布，可再评估 workspace/Monorepo。但应先确定源代码所有权、公开包接口、版本策略与依赖边界，再迁移；不先引入 Nx/Turborepo 作为目标本身。

## 5. 后续可逐项实施的增强

- 为每个独立仓库维护默认分支、commit/tag、可兼容框架、构建命令及验收链接（不要猜测）。
- 建立独立源码交付检查：ZIP 在临时目录中不依赖 UI-Vault 域名即可加载，不仅检查文件存在。
- 给真正稳定的 Foundation 包定义独立版本与发布工序；下游可选择复制/锁版本，避免运行时跨仓引用。
- 建立数据驱动的项目健康页：源码入口、CI、站点可达性、许可证、复用方式、依赖说明（外部链接状态需要实际核查，不能只看 iframe 的 load）。
- 许可证未核实的外部图片/字体、镜像素材绝不自动加入可分发 ZIP。
