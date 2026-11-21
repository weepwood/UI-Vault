# 跨仓库 UI 设计资源导入记录

导入日期：2026-11-21。UI-Vault 是公开资料库，资源来源均为当时可公开读取的本人 GitHub 仓库。

## 两个已转入的独立 Demo

| 资产 | 来源文件 | 本仓路径 | 复用边界 |
| --- | --- | --- | --- |
| Emboss Lab · 浮雕海报 | [weepwood/Emboss-Lab/index.html](https://github.com/weepwood/Emboss-Lab/blob/main/index.html) + [grain.svg](https://github.com/weepwood/Emboss-Lab/blob/main/assets/grain.svg) | `demos/experiments/emboss-poster-lab/` | 两文件依赖，已完整保留相对路径，禁止声称 HTML 单文件自包含 |
| Frame Lab · UI 结构实验 | [style-atlas/public/frame-lab/index.html](https://github.com/weepwood/style-atlas/blob/main/public/frame-lab/index.html) | `demos/experiments/frame-design-lab/index.html` | 自包含 HTML，外部 Figma/Dribbble 网址仅为参考链接 |

以上 Demo 直接迁自对应的公开个人仓库，未以源码形式迁入第三方组件库、商标、字体或原站截图。Emboss Lab 自述为参考视觉图重新绘制的演示，使用时请保留其来源说明；Frame Lab 中引用的 Figma、Dribbble 等资源不表示它们与此项目存在从属关系。

## 其他仓库的整合策略

- 其余 **21 条新资产**只保存项目索引：标题、用途、技术栈、分类、源码入口与可借鉴要点。
- 加上原有索引的补充说明，外部项目无需修改原仓库，未来仍可以在其原位置独立更新。
- 原生桌面、后端依赖型工作台、复杂框架型组件库都不强行塞进 `iframe`；如果有官方可直接访问的站点，详情页提供演示地址。
- 对于无授权截图的外部项目，不伪造截图；使用来源仓库名称呈现。
- Private 仓库的源码与索引**不写入公开目录**，避免公开泄露敏感工程信息或依赖。
- 任何新的导入应先检查来源、版权、资源依赖、`prefers-reduced-motion` 和浏览器兼容性。

## 可追踪的关联字段

每条资产可使用如下可选字段：
```json
{
  "originRepo": "https://github.com/weepwood/example",
  "sourceUrl": "https://github.com/weepwood/example/blob/main/src/Example.vue",
  "siteUrl": "https://example.com/",
  "reuseNotes": ["可以借鉴的 UI 技术点", "注意事项"]
}
```

- `originRepo`：原 GitHub 仓库，不可用一个相似项目冒充其上游。
- `sourceUrl`：已经核实存在的主要代码文件或设计 Token 文档。
- `siteUrl`：来源项目说明的公开演示网址，不能据此保证实时可用。
- `reuseNotes`：具体可借鉴的设计与交互原则，不能混同于授权即可复制。

## 2026-11-21 · 手工精选交互实验

依据用户后续要求，新增的不是外部仓库批量索引，而是三个独立可运行的小范围重实现：

| 独立实验 | 研究来源 | 本仓可调内容 |
| --- | --- | --- |
| [任务工作台](../demos/curated/gr8r-task-workbench/index.html) | [gr8r-studio-ui 的示例逻辑](https://github.com/weepwood/gr8r-studio-ui/blob/main/demo/demo.js) | 主题、强调色、密度、圆角，任务状态和看板 |
| [桌面 Shell](../demos/curated/desktop-shell-lab/index.html) | [Tauri DesktopShell](https://github.com/weepwood/Tauri-Desktop-Kit/blob/main/packages/shell/src/DesktopShell.vue) + [S2U 命令面板](https://github.com/weepwood/s2u/blob/master/src/components/CommandPalette.vue) | 分栏宽度、面板显隐、主题、命令菜单与键盘操作 |
| [消息动效](../demos/curated/message-motion-lab/index.html) | [Motion-Lab 的动效研究](https://github.com/weepwood/Motion-Lab/blob/main/src/motion.ts) | 消息动画、时长、缓动、手势回复和反应 |

以上页面由本轮在 UI-Vault 内独立实现；不是对原仓库 UI 的像素级复制，也未迁入其第三方依赖、真实数据或服务逻辑。每个实验以后单独精调，不自动覆盖。详见 [手工精调说明](CURATED-LABS.md)。


## 独立 React / Vue 站点嵌入试点（2026-11-21）

基于 NOEMA 的直接 iframe 预览方式，给三个**已经收录**但缺乏在线地址的 React/Vue 资源补充 `siteUrl`，不迁移应用源码和 npm 依赖。

| 资源 ID | 技术栈 | 在线站点 | 已成功的 Pages 发布工作流 |
| --- | --- | --- | --- |
| `motion-lab` | Vue 3 / Vite | https://weepwood.github.io/Motion-Lab/ | https://github.com/weepwood/Motion-Lab/actions/runs/40000590665 |
| `react-ui-atlas` | React / Vite | https://weepwood.github.io/react-ui-atlas/ | https://github.com/weepwood/react-ui-atlas/actions/runs/30005272761 |
| `weepwood-ui` | Vue 3 / Storybook | https://weepwood.github.io/weepwood-UI/ | https://github.com/weepwood/weepwood-UI/actions/runs/44559209996 |

访问主站并通过 `?asset=motion-lab`、`?asset=react-ui-atlas`、`?asset=weepwood-ui` 可直接选择三个资源；中间栏显示「在线预览」，右侧使用隔离 iframe。现有 `fluxnav-start-page`、`kumo-edge-console`、`style-atlas`、`fontfolio`、`s2u-link-workbench` 保持原有 React/Vue 在线链接，避免重复导入。

**验证边界：**上述三个仓库的构建与 Pages 发布记录均为成功；本站通过资源索引和预览 HTML 的测试确认了 URL、沙箱属性与原站回退入口，但并没有对第三方 iframe 的浏览器实际交互逐项验收。页面的 CSP / X-Frame-Options 可能限制内嵌，Storybook 等带存储或多 iframe 的站点也可能受沙箱限制。完整功能需要时通过「单独打开」访问原站。未确认已部署的 `mrr-admin`、`graphboard-workspace` 暂不添加演示地址。


## Page Mirror 镜像整合（2026-11-21）

- 来源仓库：https://github.com/weepwood/page-mirror；站点单一真源：`sites/registry.json`。
- 新增总览 `page-mirror` 与 23 个 `mirror-<slug>` 入口，均为外部资源索引。UI-Vault 不复制第三方网页代码和素材，原仓库持续独立发布。
- 镜像在线 URL 为 `https://weepwood.github.io/page-mirror/sites/<slug>/`；右侧采用原有的隔离 iframe，失败时可在 Topbar 通过「单独打开」访问。
- 截至收录时，20 个镜像为 review，3 个为 building。此状态来自源仓登记，并非 UI-Vault 的已验收证明。
- 快照路由、API、登录、字体、WebGL/WebGPU 与外部资源在 iframe 中可能受限；第三方版权、字体、商标和素材许可需要逐站确认。
- 新增镜像时需根据源仓 registry 更新 `catalog/assets/mirror-*.json`，执行 `npm run catalog:sync` 与 `npm run check`；不自动跨仓同步。
