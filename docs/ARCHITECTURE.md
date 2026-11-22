# UI-Vault 当前架构

更新：2026-11-23。本文描述当前主分支之后本轮工程治理 PR 中的实际设计；历史阶段说明保留在 Git 历史与 `DESIGN-HISTORY.md` 中。

## 项目定位

UI-Vault 是公开的静态 UI 资产库、交互实验室与跨仓预览工作台。主站使用 React 19 + esbuild；本地 Demo 和外部链接保留各自框架。避免为每个 Demo 增加主工作台特例。

## 运行时结构

```text
index.html  （三栏外壳、初始回退 DOM）
  └─ assets/app.js  （加载/版本错配保护）
       └─ assets/react-workbench.js  （esbuild 构建）
            ├─ src/react-workbench.jsx   React 单根 + Portals
            ├─ src/useWorkbench.js       useReducer + Effects
            ├─ src/components/          目录、预览、菜单、设置和 Dialog
            └─ assets/core/             可测试的纯函数
                 ├─ catalog.js          搜索/排序/过滤
                 ├─ workbench-state.js  状态转换
                 ├─ workbench-router.js 浏览器深链接
                 ├─ favorites.js        收藏持久化
                 ├─ settings.js         偏好持久化
                 ├─ preview-policy.js   iframe 权限白名单
                 └─ source-files.js     源码清单和下载
```

界面分成导航、项目目录、主预览三个区域。React 通过原有 DOM 锚点 Portal 挂载，保留现有 CSS、屏幕适配和 URL。主状态由 `useWorkbench` 管理，不应再把全局事件或业务状态写回 `assets/app.js`。

预览区保持 iframe 节点稳定：收藏、搜索、设置变化不应重载当前 Demo。外部页面不能被强行要求适配主站框架。

## 资产协议

```text
catalog/projects/*.json + catalog/assets/*.json + content/categories.json
               │
               ▼
scripts/lib/projects.mjs + scripts/lib/catalog.mjs  （来源与交叉引用校验）
               │
               ▼
scripts/catalog.mjs sync
               │
               ▼
content/projects.json + content/assets.json （自动生成，按 id 排序）
               │
               ▼
assets/core/catalog.js → React 工作台
               │
               ▼
scripts/build.mjs        （白名单静态发布）
               │
               ▼
dist/ → GitHub Pages
```

`catalog/project.schema.json` 与 `catalog/asset.schema.json` 分别定义 Project 和 Asset 的可接受字段；`scripts/lib/catalog.mjs` 执行运行时及跨字段验证。两个文件需要一起更新，严禁直接编辑生成的 `content/assets.json`。

`source=local` 的资源由 `preview` 指向本地 Demo HTML；`source=external` 可登记真实存在的 `siteUrl`，在 iframe 加载失败或被 CSP 拦截时保留原站链接。

`previewCapabilities` 只允许受限的 `downloads`、`popups`、`fullscreen`、`webgpu`。所有默认 iframe 都使用 opaque origin，不得附加 `allow-same-origin`。需要高权限能力的完整应用，应在原站独立运行而不是扩权内嵌。

## 源码与设计基础

- `assets/styles.css` 和 `assets/ui/*.css` 提供工作台样式；`DESIGN.md` 记录当前设计规则。
- `subprojects/ui-foundation-kit/` 提供跨项目 Token 与样式基础，不应直接与业务型 Workbench 组件混同。
- `demos/components/workbench-system/` 展示工作台真实 React 组件，避免生产组件和展示代码分叉。
- 多文件 Demo 使用 `sourceFiles` 显式列出允许查看/下载的文件；`copyable:true` 仅用于真正自包含的单文件 HTML。
- 外部网站、素材与组件来源必须保留链接和权利说明；相关登记见 `THIRD_PARTY_NOTICES.md`。

## 测试与发布

```text
npm ci
npm run check
  ├─ 资产目录验证
  ├─ Node 单元 / 协议回归
  ├─ 设计对比度审计
  ├─ React + 图鉴 + 字体构建
  └─ dist 完整性检查

.github/workflows/deploy.yml
  ├─ 上述检查
  ├─ Chromium 截图与浏览器交互回归
  └─ main push 后发布 Pages

.github/workflows/link-check.yml
  └─ 每周报告外部 siteUrl 可达性（不阻断发布）
```

主站的 `dist/` 由白名单生成，不能直接发布整个仓库。旧 Demo URL、`?asset=` 深链接与本地偏好键应保持兼容。

## 暂不引入的复杂度

不统一迁移所有 HTML/Vue/React Demo，不建立账号系统，不要求数据库，不自动抓取私有仓库，不把第三方设计参考当作已授权可安装组件。

进一步的组件行为测试、无障碍审计、性能预算和多技术栈安装支持见 `ROADMAP.md`。
