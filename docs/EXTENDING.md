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
