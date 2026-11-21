# UI Vault 框架扩展指南 v0.2

## 核心规则

- **资产源数据**：每条资产一个 `catalog/assets/<id>.json` 文件。
- **公开聚合索引**：`content/assets.json` 是生成物，不能手动编辑。
- **分类注册表**：`content/categories.json`，导航会自动生成；新增分类不改 JS 或 HTML。
- **Demo 目录**：`demos/components|effects|layouts|experiments/<slug>/`。
- **独立实现**：小型 Demo 直接保存完整 HTML；大型项目仅保存引用，或将经过构建的静态产物按需登记。
- **构建安全**：只复制声明需要的静态文件，不将脚本、测试、目录索引和私有源码整体发布。

## 数据流

```text
catalog/assets/*.json + content/categories.json
             │
     scripts/lib/catalog.mjs 校验
             │
     scripts/catalog.mjs sync
             │
      content/assets.json
             │
 assets/app.js → core/catalog.js（检索）
               core/render.js（预览/详情）
               core/favorites.js（收藏）
             │
      scripts/build.mjs
             │
        dist → Pages
```

## 新建 Demo

```bash
npm run new:demo -- components magnetic-button 磁吸按钮
npm run check
```

会新建 `demos/components/magnetic-button/index.html`、`catalog/assets/magnetic-button.json`，并重新生成索引。

## 收藏外部参考

```bash
npm run new:reference -- cool-ui https://github.com/example/repo 喜欢的 UI
```

外部参考仅存链接、设计说明与来源，不能未经核实就复制第三方源码、字体或截图。

## 添加分类

在 `content/categories.json` 追加：

```json
{ "id": "navigation", "label": "导航组件", "symbol": "↗" }
```

随后可在资产 JSON 中使用 `"type":"navigation"`；运行 `npm run catalog:sync` 和 `npm run check`。稳定 ID 不要随意改动。

## 添加可复用封面

将得到授权的 PNG/WebP/SVG 放入 `media/`，在资产 JSON 中设置 `"coverImage":"media/covers/demo.webp"`。展厅自动优先展示真实封面，不用改 CSS。

## 多文件 Demo

对于 Vue/React 等构建产物，`preview` 指向打包后的 HTML，`code` 指向源代码文件，并设置 `"copyable":false`；如有静态 JS/CSS 依赖，明确列入 `publish`，例如：

```json
{
  "preview": "demos/components/example/dist/index.html",
  "code": "demos/components/example/src/App.vue",
  "copyable": false,
  "publish": ["demos/components/example/dist/assets/index.js", "demos/components/example/dist/assets/index.css"]
}
```

`publish` 是文件列表，不是 glob。哈希产物很多时应增加专门构建适配器，不要直接公开源码目录。必须使用相对地址，以兼容 GitHub Pages 的 `/UI-Vault/` 子路径。

## 扩展边界

| 模块 | 职责 |
|---|---|
| `assets/core/catalog.js` | 搜索、筛选、标签与排序 |
| `assets/core/render.js` | 卡片、详情、iframe / 图片预览 |
| `assets/core/favorites.js` | 浏览器本地收藏 |
| `assets/app.js` | DOM 事件、侧栏、弹窗、异步加载 |
| `scripts/lib/catalog.mjs` | 元数据契约、目录与路径校验 |
| `scripts/build.mjs` | 静态产物白名单 |
| `tests/` | 纯函数与构建协议回归测试 |

保持已有 `id` 与 `preview` 地址，避免破坏旧收藏和直接访问路径。新增字段尽可能可选并提供默认行为。

## 自测

```bash
npm run validate
npm run test
npm run build
node scripts/check-dist.mjs
```

`npm run check` 组合上述全部步骤。只依赖 Node 22+，无需安装 npm 第三方依赖。发布仍由 GitHub Actions 在 main 上自动执行。

## 外部 GitHub Pages 项目直接内嵌（NOEMA 试点）

UI-Vault 不需要把 NOEMA 的整份静态源码复制到本仓库；只需在 `catalog/assets/noema.json` 中保留独立来源 `url`，另填入实际的公开演示地址：

```json
{
  "id": "noema",
  "source": "external",
  "url": "https://github.com/weepwood/NOEMA",
  "siteUrl": "https://weepwood.github.io/NOEMA/"
}
```

完成后运行 `npm run catalog:sync`，在 UI-Vault 右侧通过 `projectPreviewMarkup()` 自动渲染实际 iframe，而不是 GitHub 仓库说明。用户通过 `?asset=noema` 可以直达这一资源；顶部“单独打开”仍指向 NOEMA 的完整网页。

当前 iframe 的 `sandbox="allow-scripts allow-forms"` 隔离运行，不为同一 GitHub Pages 主域名上的项目额外添加 `allow-same-origin`。因此磁贴的基础拖拽、缩放和展开可尝试，但 IndexedDB、Web Worker、文件系统授权及跨页面通信等可能受限或退化；完整文件夹与缓存操作建议在原站进行。特别注意 GitHub Pages 的不同项目路径仍可能同属 `weepwood.github.io` 这一浏览器 origin，不能将不同路径视为安全隔离域。若将来需要高权限的完整嵌入，优先使用**独立域名**托管子项目，并进行单独的安全评估，不能无条件组合 `allow-scripts` 与 `allow-same-origin`。

外部网站还可能通过 CSP 的 `frame-ancestors` 或 `X-Frame-Options` 拒绝嵌入。这种情况不能绕过，应保留原站链接并展示明确的失败说明。NOEMA 的这次接入属于独立站点预览试点，不等于将源码转移到 UI-Vault。


## React / Vue 直接内嵌项目（无需迁移源码）

对于已经独立部署的 React 或 Vue 项目，在 `catalog/assets/<id>.json` 的 `source:"external"` 条目中登记经过核实的 `siteUrl`，即可在 UI-Vault 右侧显示网页。例如，`motion-lab` 的实际配置包含：

```json
{
  "id": "motion-lab",
  "source": "external",
  "url": "https://github.com/weepwood/Motion-Lab",
  "siteUrl": "https://weepwood.github.io/Motion-Lab/"
}
```

示例仅包含嵌入相关字段，实际 JSON 还需满足原有资源协议。更新后执行 `npm run catalog:sync` 与 `npm run check`。不需要安装 React/Vue 依赖或复制构建产物；主站通过带沙箱的 iframe 访问其他部署站点。若项目没有可靠的公开预览网址，则只保留 GitHub 仓库索引，不猜测 URL。

为安全隔离，默认保留 `sandbox="allow-scripts allow-forms"`；不要为了本地存储或文件夹访问而直接追加 `allow-same-origin`。完整应用、特别是嵌套 iframe 的 Storybook 或浏览器本地文件类项目，可以使用顶部「单独打开」在原站使用。
