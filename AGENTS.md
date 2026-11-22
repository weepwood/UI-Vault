# UI Vault · AI Agent 协作约定

UI Vault 是长期维护的个人 UI 资产库，用于收藏、预览和复用原创 Demo 与外部 UI 设计参考。
**保持可扩展性和向后兼容，不要因为新增一个 Demo 而重写整个网站。**

## 开始之前

- 涉及 UI 或页面改版：先读 [DESIGN.md](DESIGN.md)（当前有效的设计规范）。
- 涉及新增资产：先读 [docs/EXTENDING.md](docs/EXTENDING.md) 和 [docs/ADDING-DEMO.md](docs/ADDING-DEMO.md)。
- 需要了解某条规则为什么存在、以前是什么样：查 [docs/DESIGN-HISTORY.md](docs/DESIGN-HISTORY.md)。**不要**按历史记录里已被替代的规则执行。
- 文档和代码不一致时：以代码和测试为准，并在回复中指出不一致的地方。

---

## 任务路由

| 用户要求 | 做法 |
| --- | --- |
| 新增 UI / Demo | `npm run new:demo -- <components\|effects\|layouts\|experiments> <slug> <中文标题>`，实现独立演示并补全元数据 |
| 收藏网址 / GitHub 项目 | `npm run new:reference -- <slug> <HTTPS URL> <中文标题>`，补充设计解读、作者和许可证信息 |
| 精调某个外部 UI | 在 `demos/curated/<id>/` 手工实现，见下文「手工精选实验」 |
| 增加 UI 类别 | 修改 `content/categories.json`，不需要改页面导航代码 |
| 统一设计规范 / 新增主题 | 在 `content/tokens/` 添加 Token 并关联到资产 JSON；不要写死进全站 CSS |
| 修改工作台功能 | 改 `src/components/`、`src/useWorkbench.js`、`src/react-workbench.jsx` 及对应测试 |
| 修改设计规则 | 改 `DESIGN.md` 对应章节，并在 `docs/DESIGN-HISTORY.md` 追加记录 |

---

## 硬性约束

### 数据

1. **资产元数据唯一来源**是 `catalog/assets/<id>.json`。修改后运行 `npm run catalog:sync`。**不要**直接编辑生成的 `content/assets.json`。
2. **向后兼容**：已有的资产 ID、预览路径（`demos/.../index.html`）、URL 参数、收藏和设置的存储键不能随意改名。
3. 新增 `originRepo` 资产时，必须能通过跨仓筛选找到，并且有真实可访问的主要源码链接和具体的复用说明。

### Demo 与复制

4. **独立 Demo**：每个 Demo 有自己的入口，尽量不依赖主站就能打开；内部资源一律用相对路径，兼容 `/UI-Vault/` 子路径。
5. **复制规则**：只有完整自包含的单文件 Demo 可以标记 `copyable: true`。Vue/React 多文件构建产物、GPUI 桌面应用、引用多个依赖的展示页都不能当作单文件复制。

### 来源与发布

6. **内容来源**：第三方项目先保留原站链接和来源说明。不得无许可镜像代码、字体、截图或商标；确实需要引用时，先核实授权边界。
7. **静态发布**：`scripts/build.mjs` 按白名单复制，不能把整个仓库部署到 Pages。不得把密钥、隐私信息和未授权素材放进公开目录。
8. 不自动安装第三方设计 Skills 或组件库。如果决定使用，先检查版本、依赖和许可证。

### 架构边界

9. 主站唯一的状态协调点是 `src/useWorkbench.js`（React Hooks + `useReducer`）；组件入口是 `src/react-workbench.jsx`；界面按职责拆分在 `src/components/`。
10. `assets/app.js` 只负责静态页面版本校验和 `mountWorkbench()`。**禁止**在这里恢复项目筛选、路由、设置或 iframe 的原生 DOM 控制逻辑。
11. React 单根通过 Portals 挂载到 `index.html` 原有的三栏容器。保留旧 DOM 锚点和 CSS class；修改壳层结构时，必须同时更新快照和兼容测试。
12. `PreviewFrame` 必须保持 iframe 节点稳定：收藏、筛选、调整字体、切换设置、改变窗口大小都不应触发重新加载。
13. `demos/`、`subprojects/` 和页面镜像不需要使用 React，也不加入主站构建，继续按白名单发布各自的静态文件。
14. `assets/core/` 放可测试的纯函数（检索、状态、路由、存储协议、预览计算），继续被 React 层复用。

### 布局不变式

15. 桌面端固定为 **导航 / 目录 / 预览** 三栏（`aside#sidebar`、`section#project-panel`、`main#main`），前两栏包在 `div#library-rail` 中。不得合并导航和目录，不得退回卡片画廊。
16. **网页预览永远不放进弹窗、抽屉或侧边框**。手机上只能临时覆盖**目录**。
17. 唯一允许的项目级弹窗是 Topbar「项目说明 / 源码」打开的居中原生 `<dialog>`。

### 图标

18. 主站图标只用 Lucide SVG 子集（`assets/icons/lucide.svg`、`assets/core/icons.js`），规则见 [DESIGN.md §6](DESIGN.md#6-图标) 和 [docs/ICONOGRAPHY.md](docs/ICONOGRAPHY.md)。

### 验证与提交

19. 提交前必须运行 `npm install && npm run check`（包含 `validate`、`test`、`design:audit`、`build`、`check-dist`）。无法运行时，明确说明哪些项没有验证。
20. 没有看过真实浏览器渲染（截图或 Chromium 视觉回归），不能声称「视觉已验收」，只能说「构建与测试通过」。
21. 所有 Git commit 信息使用中文。

---

## 手工精选实验（优先于批量导入）

用户要求跨仓 UI 一个一个精调，因此：

- **不要**使用自动抓取仓库、批量生成、自动更新镜像的方案。
- 人工阅读源仓库的具体文件，然后在 `demos/curated/<id>/` 独立实现一个可交互的样例；每次只处理一个范围明确的 UI。
- 每个实验在 CSS 顶部写 `TUNING` 注释，说明主题 Token、布局阈值和可调的交互，并保留来源文档。
- 只有经过人工审查的本地 Demo 才能设置 `curated: true`，并填写 `curationStage`、`tuningPoints`、`tuningGuide`。
- `draft` → `refining` → `stable` 只能在用户实际评审后修改，**不能**由自动构建或 Agent 自行升级。
- 一次只改一个实验，避免全站或其他实验跟着变化。

详见 [docs/CURATED-LABS.md](docs/CURATED-LABS.md)。

---

## UI 改动自查清单

提交任何影响主站的前端改动前，逐项确认：

- [ ] 符合 [DESIGN.md](DESIGN.md) 当前规范（三栏、Topbar、弹窗范围、设计变量）
- [ ] 没有引入 [DESIGN.md §8](DESIGN.md#8-禁止的模板化装饰) 中禁止的模板化装饰
- [ ] 保留了 Demo 原有的艺术风格（只收敛主站，不删除实验）
- [ ] 桌面 / 平板 / 手机布局都检查过
- [ ] 键盘导航、可见焦点、长文本、空状态、`prefers-reduced-motion` 都检查过
- [ ] 动态文本用 `textContent` 或经过审查的转义函数输出
- [ ] 按 [docs/OPEN-SOURCE-DESIGN-WORKFLOW.md](docs/OPEN-SOURCE-DESIGN-WORKFLOW.md) 的顺序审查过
- [ ] `npm run check` 通过；如有截图，注明视口和主题

---

## 常用命令

```bash
npm install
npm run dev                  # http://localhost:4173
npm run new:demo -- components gradient-button 渐变按钮
npm run new:reference -- ui-project https://github.com/example/repo 参考项目
npm run catalog:sync
npm run design:audit
npm run visual:test          # Chromium 视觉回归
npm run check                # 提交前完整检查
```

架构细节：[docs/REACT-MIGRATION.md](docs/REACT-MIGRATION.md)、[docs/TWO-PANE-WORKBENCH.md](docs/TWO-PANE-WORKBENCH.md)、[docs/COMPONENT-SYSTEM.md](docs/COMPONENT-SYSTEM.md)。
