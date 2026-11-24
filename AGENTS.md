# UI Vault · AI Agent 协作约定

UI Vault 是长期维护的个人 UI 资产库，用于收藏、预览和复用原创 Demo 与外部 UI 设计参考。
**保持可扩展性和向后兼容，不要因为新增一个 Demo 而重写整个网站。**

产品范围：优先资源展示、检索、真实预览、源码交付、设计 Token 与组件复用。不建设个人资产研究工作台（评分、研究状态、笔记、智能收藏夹等）或双预览设计对比工作台；保留既有基础收藏及筛选方案。

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

1. **Project / Asset 双层数据源**：来源项目维护在 `catalog/projects/<id>.json`，独立资产维护在 `catalog/assets/<id>.json`，新资产需要已注册的 `projectId`。修改后运行 `npm run catalog:sync`。**不要**直接编辑生成的 `content/assets.json` 和 `content/projects.json`。新增字段同步更新 `catalog/asset.schema.json`、`scripts/lib/catalog.mjs` 和对应测试。
2. **向后兼容**：已有的资产 ID、预览路径（`demos/.../index.html`）、URL 参数、收藏和设置的存储键不能随意改名。
3. 新增 `originRepo` 资产时，必须能通过跨仓筛选找到，并且有真实可访问的主要源码链接和具体的复用说明。

### Demo 与复制

4. **独立 Demo**：每个 Demo 有自己的入口，尽量不依赖主站就能打开；内部资源一律用相对路径，兼容 `/UI-Vault/` 子路径。
5. **复制规则**：只有完整自包含的单文件 Demo 可以标记 `copyable: true`。多文件独立 ZIP 只能在人工核实可再分发的运行文件后登记 `bundleFiles`，必须使用同一个 Demo 目录、显式发布白名单；`sourceFiles` 仅表示源码浏览能力，不是完整工程。详见 `docs/MULTI-FRAMEWORK.md`。

### 来源与发布

6. **内容来源**：第三方项目先保留原站链接和来源说明。不得无许可镜像代码、字体、截图或商标；确实需要引用时，先核实授权边界。
7. **静态发布**：`scripts/build.mjs` 按白名单复制，不能把整个仓库部署到 Pages。不得把密钥、隐私信息和未授权素材放进公开目录。`copyable:true` 只允许不依赖独立发布文件的单文件 HTML；涉及第三方素材的演示须核实授权。
8. 不自动安装第三方设计 Skills 或组件库。如果决定使用，先检查版本、依赖和许可证。

### 架构边界

9. 主站唯一的状态协调点是 `src/useWorkbench.js`（React Hooks + `useReducer`）；组件入口是 `src/react-workbench.jsx`；界面按职责拆分在 `src/components/`。
10. `assets/app.js` 只负责静态页面版本校验和 `mountWorkbench()`。**禁止**在这里恢复项目筛选、路由、设置或 iframe 的原生 DOM 控制逻辑。
11. React 单根通过 Portals 挂载到 `index.html` 原有的三栏容器。保留旧 DOM 锚点和 CSS class；修改壳层结构时，必须同时更新快照和兼容测试。
12. `PreviewFrame` 必须保持 iframe 节点稳定：收藏、筛选、调整字体、切换设置、改变窗口大小都不应触发重新加载。
13. `demos/`、`subprojects/` 和页面镜像不需要使用 React，也不加入主站构建，继续按白名单发布各自的静态文件。不同 Demo 禁止运行时跨目录 import，独立跨仓项目不能依赖 UI-Vault 的业务 Bundle。iframe 新权限只能在资产 `previewCapabilities` 声明，并经 schema 和运行时白名单校验；不得引入 `allow-same-origin`。
14. `assets/core/` 放可测试的纯函数（检索、状态、路由、存储协议、预览计算），继续被 React 层复用。

存储可靠性：读取 `localStorage` / `sessionStorage` 对象本身也可能抛出异常，必须放在 `try` 内；不可用时保持会话可操作，写入失败不得报告已持久化。见 [docs/SETTINGS.md](docs/SETTINGS.md) 与 `tests/storage-resilience.test.mjs`。

### 布局不变式

15. 桌面端固定为 **导航 / 目录 / 预览** 三栏（`aside#sidebar`、`section#project-panel`、`main#main`），前两栏包在 `div#library-rail` 中。不得合并导航和目录，不得退回卡片画廊。
16. **网页预览永远不放进弹窗、抽屉或侧边框**。手机上只能临时覆盖**目录**。
17. 唯一允许的项目级弹窗是 Topbar「项目说明 / 源码」打开的居中原生 `<dialog>`。

### 图标

18. 主站图标只用 Lucide SVG 子集（`assets/icons/lucide.svg`、`assets/core/icons.js`），规则见 [DESIGN.md §6](DESIGN.md#6-图标) 和 [docs/ICONOGRAPHY.md](docs/ICONOGRAPHY.md)。

### 验证与提交

19. **日常迭代快速检查，高风险改动专项验证，正式发布完整验收。** 日常 PR 优先 `npm ci`（依赖未变且已安装时无需重复安装）与 `npm run check:fast`；核心交互、iframe 权限、构建、CI 或跨平台改动按风险执行专项验证；正式发布运行 `npm run check`、Chromium 回归与 Windows CI。无法运行时明确说明未验证项，禁止将跳过视为通过。main 合并后只执行资产协议校验、构建与发布目录检查，不重复常规 PR 测试。
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
- [ ] 通过对应风险等级的检查（日常 `npm run check:fast`，高风险专项，正式发布完整）；如有截图，注明视口和主题

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
npm run check:fast           # 日常迭代
npm run check                # 正式发布或构建专项检查
```

架构细节：[docs/REACT-MIGRATION.md](docs/REACT-MIGRATION.md)、[docs/TWO-PANE-WORKBENCH.md](docs/TWO-PANE-WORKBENCH.md)、[docs/COMPONENT-SYSTEM.md](docs/COMPONENT-SYSTEM.md)。

### 集中收口检查

共享主站 CSS、目录行/虚拟窗口及 Demo 参数组件均视为视觉风险；正式发布必须保留完整 Chromium 与 Windows 验收，禁止自动接受新基线。待核实第三方许可不得通过根 MIT 推定。

正式发布增加 `scripts/release-browser-audit.py`：axe JSON 报告、明确语义缺陷门禁、Firefox/WebKit 冒烟。报告中的非门禁缺陷不得视为通过；需要逐项复审。独立运行使用浏览器 context.route 拒绝外部网络，不放宽截图夹具守卫。

Frame Lab 的 12 项资产依赖主站共享 reference-shell CSS/JS，不得标记为独立单文件，除非完成实际依赖闭包和独立运行验收。来源许可不明确的资产不能仅凭同属个人 GitHub 账户推定再分发许可。

完整发布验收：独立 Chromium 场景应收集全部失败并在末尾统一报错，不因第一个场景失败而隐藏其余问题。axe 与跨浏览器报告不依赖 Chromium 交互成功，但构建、环境安装必须成功；任何验收失败仍阻断发布。涉及浏览器布局的断言等待真实几何收敛，不降低原阈值或使用固定 sleep。

响应式图标按钮必须拥有独立于可能隐藏的可见文字的可访问名称，并同时检查首屏静态 HTML 与 React 渲染；移动端 axe 报告不能通过隐藏、排除节点或降低规则门禁规避。

### 下一轮目录、预览与复用交接

见 [docs/NEXT-ITERATION.md](docs/NEXT-ITERATION.md)。大型多组窗口不得改变真实资产 ID、筛选语义或常规原生分组；不将 iframe load/timeout 视为外站可交互证明；Registry 框架源码快照不是安装包。5000 项测试必须使用隔离的合成夹具，不污染真实目录。

正式发布：仅提高根 package.json / package-lock.json 的正式版本并提交对应 docs/releases/vX.Y.Z.md 后，main push 才触发完整验收及 Release；生产文件哈希不匹配、CI 失败、同名不同提交标签均不得发布或覆盖。见 scripts/release-plan.mjs 与 scripts/verify-release.py。

下一轮交接见 [docs/CATALOG-QUALITY-NEXT.md](docs/CATALOG-QUALITY-NEXT.md)：只对明确命名/来源可证实的风格添加标签；虚拟滚动恢复使用首行 ID；Registry 安装必须校验依赖、哈希与路径且禁止覆盖；新增单文件 ZIP 必须保留 HTML 复制入口、许可证及隔离运行测试。

预览 ready 不等于全面功能验收；仅明确登记的本地 Foundation 接入 challenge/response，校验当前 iframe、opaque origin、资产 ID、协议及一次性 nonce。外部 HTTP/响应头证据不得提升为已交互；不得放宽 sandbox。

Registry 框架适配器改动必须通过独立 registry-runtime 工作流（真实复制、编译、Chromium 交互），不能以源码存在或 React 单测替代 Vue 验收。

见 [docs/GUIDE-CLASSIFICATION-NEXT.md](docs/GUIDE-CLASSIFICATION-NEXT.md)：分类按原始指南逐条记录；跨刷新锚点只在当前标签页、匹配资产 ID 时恢复；参数导入只接受白名单 JSON 且不得自动执行或应用；Registry 原生表单保留浏览器行为。

暖色布局参数：固定白名单 CSS 变量、默认视觉等价、响应式断点保留，独立 HTML 内嵌协议核心必须与主站完全一致；新增参数必须实测应用和重置，不能把快照当完整代码。

下一轮：分类依据存放 catalog/style-guide-reviews.json，执行 node scripts/audit-style-guides.mjs 获取真实文件哈希及缺口。复杂交互仅在独立 Registry 复用 Radix/Reka 原语，主站不新增运行时依赖；独立浏览器验收通过后才可合并。

实时参数候选：只在已登记资产上提供可关闭的停靠编辑区，保持原三栏及 iframe 节点；禁止并行编辑器，不自动应用导入文件。实时应用仅在显式编辑时防抖发送白名单值，支持有限历史撤销、按资产持久化预设。筛选密度入口不改变默认视觉基线。

下一候选：新增原始指南审计 14 项；参数工具栏快捷入口、滑块、撤销/重做、预设文件同资产导入导出（同名保留且不自动应用）。新增展开筛选、搜索、参数区桌面/移动真实截图与布局断言，原基线不自动更新。

后续专项：参数消息 transport 使用单在途+最新值槽位（50ms 节流，3s 超时），拒绝旧响应覆盖编辑值，异常停止自动应用并保留编辑；真实锁文件纳入 tests/registry-runtime，CI npm ci，新增边缘浮层、非受控 Select。按真实 #104 截图治理数字标签/滑块与文件入口，新增连续拖动回归。

#105 原提交完整 CI 已通过（337 单测、9 截图、26 交互、Firefox/WebKit 基础交互、8 个 axe 场景零违规），隔离 npm ci 与真实碰撞通过。后续验收需记录实际拖动 rAF、输入至最终确认延迟、响应丢失与手动恢复；预设放在字段之后，保证移动端编辑优先，不扩展研究工作台。

#106 收口：先同步与 #105 完全等价的 main 树；异常注入监听器必须在应用启动前安装，真实响应丢失期间检查请求仍在途，超时后检查空闲和手动恢复。失败保留诊断状态，不降低 3 秒运行时超时或原测试阈值。新提交待 CI，不宣称恢复已通过。

下一候选：#106 后逐篇审查 Flat Design 至 Gen Z Maximalism 共 12 项，审计累计 100 项，剩余 190 项无显式标签；继续按原始指南证据补齐，不自动提升精选等级。必须通过 #106 后才能合并后续候选。

Registry 正式化候选：--plan 只读预检、模块版本及运行时依赖清单进入 lock，拒绝冲突与文件/目录同名；不自动覆盖目标、不自动安装依赖、不承诺跨版本升级。待独立验收。

源码阅读候选：保留原选择器、复制和下载入口；新增已登记文件目录与换行切换，参数停靠区展示颜色十六进制、CSS Token 名称与数值单位。只使用原生控件，不扩大 iframe 消息权限。新截图和 Notion 多文件真实浏览器断言待 CI；暂不自研语法高亮，不将源码清单误认为完整工程。

#106 第二次 CI 45418094017 与 #107 45418831039 均在故障注入等待处失败，独立 Registry 45418831182 已通过。Playwright add_init_script 接受脚本而非回调，原箭头函数没有执行；改为立即执行函数且仅在顶层安装，导航后明确断言注入成功，2 秒内必须捕获第一条响应（早于 3 秒传输超时）。保留异常恢复与旧消息断言；待新 CI。

源码高亮候选：仅用 PrismJS tokenize，隔离 Worker、输入/输出限制和超时退回纯文本；不使用 innerHTML，不启用插件、不发外网请求。保留原始复制/下载值、白名单及默认纯文本；依赖锁和许可证随构建交付。未通过 CI 不合并。

源码高亮 UI 默认关闭，支持 HTML/SVG/CSS/JavaScript（其他语言保留纯文本）；48k 字符、6000 片段、2 秒 Worker 上限，切换文件/关闭即终止，验证字符完整性后才渲染 React span；新增单测和实际浏览器复制文本一致性检查。未验收。
