# UI Vault 设计规范

> 本文只记录**当前有效**的设计规则，不再按版本逐段追加。
> 历史决策、被替代的规则及原因见 [docs/DESIGN-HISTORY.md](docs/DESIGN-HISTORY.md)。
> 修改规则时：直接改本文对应章节，并在 DESIGN-HISTORY.md 追加一条记录。

---

## 1. 产品定位

UI Vault 是用来**查找、查看、复制、比较 UI 资产**的个人工作台，不是营销网页。

- **主站**：克制的工具型目录。优先保证搜索、分类、真实预览和来源信息。
- **各个 Demo**：可以保留自己独立的艺术风格（玻璃、暖色、极光、粗野主义等），不受主站视觉约束。

信息优先级：

1. 资源类型、分类、搜索
2. 项目名称与当前选择
3. 大面积的真实网页预览
4. 设备宽度切换、收藏、复制链接、单独打开
5. 按需查看的项目说明与源码（技术栈、可复制状态、源码路径、授权、日期）

---

## 2. 信息架构：导航 / 目录 / 预览 三栏

桌面端固定为三栏，每栏独立滚动，目录滚动不得带动预览。

| 栏 | DOM 锚点 | 宽度 | 职责 |
| --- | --- | --- | --- |
| 导航栏 | `aside#sidebar` | 208px（窄屏 190px / 168px） | Logo、搜索、资源类型、基本分类。**不放滚动的项目列表** |
| 项目栏 | `section#project-panel` | 292px（窄屏 252px / 218px） | 排序、标签筛选、项目列表、收藏按钮、当前选择态 |
| 预览栏 | `main#main` → `#preview-stage` | 剩余全部宽高 | 顶部 Topbar + 真实网页 |

- 导航栏和项目栏外层包在 `div#library-rail` 中，供移动端整体展开。
- 栏与栏之间用 1px 轻分隔线；导航栏和项目栏之间不重复搜索框、分类或无意义标题。
- **不得**把导航和项目列表重新合并成一栏，也**不得**退回卡片画廊。

### 响应式

- 宽度变窄时，先压缩导航栏和项目栏。
- 手机上，`#library-rail` 作为一个临时覆盖面板展开，用来选择目录。
- **网页预览本身永远不放进抽屉或弹窗**，无论屏幕多大。

---

## 3. 预览栏

### 3.1 Topbar

紧贴预览栏顶部只有**一条** Topbar，下方直接是最大面积的真实网页。Topbar 包含：

- 项目分类、项目名称、副标题
- 设备宽度按钮（自适应 / 390 / 768 / 1280px）
- 收藏、复制链接、单独打开
- 「项目说明 / 源码」按钮

不得为标题和设备预览各占一条工具栏。

### 3.2 预览行为

- 默认**自适应**，尽量利用空间；固定视口用 CSS `transform` 缩放 iframe，不修改 Demo 源码。
- 收藏、普通筛选、调整设置、改变窗口大小时，**不重新加载**当前 iframe；只有切换到另一个项目时才更换预览。
- 筛选导致当前项目被移出列表时，焦点要落到仍然可访问的位置。
- 支持可分享链接 `?asset=<id>`，打开时自动定位到对应资产。
- 外部参考没有在线站点时，明确显示仓库和源码入口。
- 外站有 CSP / X-Frame-Options 限制时，不尝试绕过，提供「单独打开」入口。
- 外部站点 iframe 保持沙箱限制。仅对元数据显式启用 `externalLinkBridge` 的合作站点接收外链点击消息；消息必须来自当前 iframe，且目标必须是跨站 HTTP(S) URL。主站只提示，不代替用户打开链接。未接入桥接的站点显示通用外链受限说明。

### 3.3 禁止出现的冗余信息

页面底部不固定显示「本地 Demo · 可以直接操作网页」、资源数量、说明折叠栏或其他重复状态文字。

---

## 4. 弹窗：只用于「项目说明 / 源码」

这是主站**唯一**允许的项目级弹窗。

- 点击 Topbar 的「项目说明 / 源码」打开**居中的原生 `<dialog>` 模态框**，内部可切换「项目说明」「源代码」「页面信息」三个标签页。
- 可通过 Esc 和关闭按钮退出，关闭后焦点回到触发按钮。
- 源码在用户切到「源代码」标签时才懒加载；切换项目后不得显示上一个项目异步返回的源码。
- 外部资源不复制第三方源码，只显示真实的来源链接。
- 只有登记在 `sourceFiles` 白名单中的本地文件可以查看、复制和下载。
- 「页面信息」由本地 Demo 通过 `postMessage`（`ui-vault:page-info`）提供，打开该标签时主站再请求一次。只接受来自当前预览 iframe、且路径与当前项目一致的消息；内容一律作为文本渲染，链接只允许 `https://`，颜色只允许十六进制色值。Demo 发来的数据按不可信输入处理。

**不允许**：用侧边抽屉、弹窗或浮层显示网页预览；为项目详情另开抽屉。

---

## 5. 设计变量（主站）

| 语义 | 色值 |
| --- | --- |
| 页面背景 | `#f5f6f5` |
| 操作表面 | `#ffffff` |
| 主文字 | `#20282d` |
| 正文 | `#40494d` |
| 次级信息 | `#637074` |
| 边框 | `#dfe4e5` |
| 交互强调 | `#315e80` |
| 选中背景 | `#e7eff4` |

- **字体**：系统无衬线字体与中文系统字体。
- **字号**：主标题 28–40px；区块标题 19px；资源标题 16px；正文 12–14px。
- **控件高度**：44px。
- **层次**：靠信息分组和间距建立，不使用全局装饰性阴影。
- **Token 归属**：跨项目通用的设计变量以 `subprojects/ui-foundation-kit/tokens/` 为准；主站 CSS 目前保留兼容别名。新的主题 Token 放在 `content/tokens/`，并关联到资产 JSON，不要写死进全站 CSS。

---

## 6. 图标

- 主站图标固定使用 Lucide SVG 子集：`assets/icons/lucide.svg` + `assets/core/icons.js`。
- 不新增字符图标，不重复手绘同一含义的 SVG，不通过 CDN 引入图标包。
- 装饰性图标加 `aria-hidden="true"`；控件依靠可见文字或 `aria-label` 表达含义。
- 收藏状态由 `aria-pressed` 驱动统一心形图标的填充。
- 标签文字是语义主体，图标只负责辅助。
- 新增图标前参照 [docs/ICONOGRAPHY.md](docs/ICONOGRAPHY.md)，同步修改 sprite、白名单和测试，保留来源与许可信息（Lucide ISC / Feather MIT）。
- 各独立 Demo 原有的图标系统不强制替换。

---

## 7. 动效与交互

### 7.1 动效 Token

定义在 `assets/styles.css` 开头的 `:root`。组件 CSS 引用时带回退值（如 `var(--motion-fast,120ms)`），单独加载也能工作。

| Token | 值 | 用途 |
| --- | --- | --- |
| `--motion-fast` | 120ms | 悬停、按下、颜色变化 |
| `--motion-base` | 160ms | 下拉菜单展开、箭头旋转、Toast 淡入 |
| `--motion-slow` | 220ms | 弹窗、移动端目录抽屉、选中指示条、Toast 位移 |
| `--ease-out` | `cubic-bezier(.2,.8,.2,1)` | 进入、展开、反馈（默认） |
| `--ease-in-out` | `cubic-bezier(.4,0,.2,1)` | 循环动画（加载进度条） |

不要再写 `.14s`、`.18s` 这类零散时长，也不要新增第四档。

### 7.2 状态色 Token

| Token | 用途 |
| --- | --- |
| `--hover` / `--hover-strong` | 悬停 / 按下的底色 |
| `--accent-line` | 选中、筛选生效、强调色控件的边框 |
| `--accent-line-strong` | 聚焦、展开中的边框 |

这些 Token 按主题（浅色 / 深色）和强调色（blue / teal / violet）分别取值。不要再写死带蓝色倾向的十六进制颜色，否则切换强调色后会出现色偏。

### 7.3 哪些地方有动效

| 场景 | 反馈 |
| --- | --- |
| 按钮、筛选、导航、下拉选项 | 悬停 / 按下换底色；图标按钮和主次按钮按下时缩到 0.94–0.97 |
| 项目目录 | 当前项目左侧 3px 强调条，切换时旧项收起、新项展开 |
| 收藏 | 点击后心形轻跳一次（只在点击时，切换项目不播放） |
| 下拉与设备菜单 | 从触发点方向淡入、上移 4px、从 0.98 放大 |
| 项目说明弹窗 | 打开时淡入并上移 8px，遮罩同步淡入；切换标签页时内容淡入 |
| 移动端目录 | 抽屉滑入、遮罩淡入 |
| 加载 | 目录首次加载显示占位行；切换项目后预览顶部显示 2px 进度条，加载完成或 12 秒后收起 |

### 7.4 规则

- 只对用户触发的操作和真实的加载过程给反馈。不给列表项、卡片或区块加入场动画。
- 尽量只动 `transform` / `opacity`；颜色过渡用 `--motion-fast`。
- 弹窗不用缩放入场：`ProjectDialog` 打开瞬间读取并锁定高度，缩放会让读数偏小。
- 不给预览 iframe 的尺寸和位置加过渡：拖动窗口时缩放会跟不上。
- 尊重 `prefers-reduced-motion` 和设置里的「减少动画」：全局规则把时长压到 0.01ms，循环动画（骨架屏、进度条）改为静止显示。
- 搜索和分类的选中状态用 `aria-pressed` 表达；变化时播报结果数，并提供清晰的空状态。加载中播报“正在加载项目目录”，不显示空状态。

## 8. 禁止的模板化装饰

主站不使用：

- 巨幅英文营销标题、空泛口号、随机光球、漂浮卡片
- 每个区块都叠加的大写英文眉题、箭头、胶囊标签
- 无功能的渐变光晕、倾斜装饰卡片、重复的大圆角组件
- 给所有资产配同样的抽象渐变假截图
- 虚构的统计数据或增长数字

补充说明：

- 外部资源没有可用授权封面时，显示其真实的仓库名称和来源文字，不编造截图。
- 文案按真实使用场景撰写，避免抽象形容词堆叠。
- 「去 AI 味」指减少主站的模板化设计，**不是**把所有页面改成极简灰色，也不是删除 Demo 的艺术实验。

---

## 9. 无障碍与质量门槛

所有影响主站的 UI 改动都要满足：

- **对比度**：普通文字语义色满足 WCAG AA 4.5:1（`npm run design:audit` 自动检查）。
- **键盘**：全部可键盘操作，焦点始终可见；菜单支持方向键 / Esc / Tab；弹窗关闭后恢复焦点。
- **布局**：检查桌面、平板、手机三种宽度，以及长文本、空状态。
- **动效**：检查 `prefers-reduced-motion` 下的表现。
- **颜色不是唯一的状态表达方式**。

**视觉验收的定义**：只有看过真实浏览器渲染（截图或 Chromium 视觉回归）才能称为「视觉已验收」。语法检查、构建或测试通过只能报告为「构建与测试通过」。

---

## 10. 组件体系

| 层级 | 代码来源 | 职责 |
| --- | --- | --- |
| Foundation（跨项目） | `subprojects/ui-foundation-kit/tokens/`、`styles/` | 通用 Token 和基础组件 recipes（按钮、输入、Badge、Tabs、Switch、Dialog） |
| Workbench（本站工作台） | `src/components/`、`assets/ui/`、`assets/core/`、`assets/styles.css` | 资源导航、筛选、项目条目、预览、设置 |
| 组件展厅 | `demos/components/workbench-system/` | 直接调用上面的真实实现做演示，**不是第二份源码** |

- 组件稳定后再抽取局部 CSS / JS，展厅继续引用同一实现。
- 只有出现第二个真实使用方之后，组件才能标为「跨项目通用」。
- 新组件必须具备：默认、hover、focus、pressed/selected、disabled、empty/loading 状态；配套演示、文档、测试和清单。

组件清单、可复用程度、抽取顺序和验收标准见 [docs/COMPONENT-SYSTEM.md](docs/COMPONENT-SYSTEM.md)。

---

## 11. AI 设计工作流

需求与使用场景 → 真实数据和内容 → 两三个有依据的参考 → 信息架构 → 设计变量 → 代码实现 → 桌面 / 平板 / 手机截图 → 审查文案、键盘、减少动效、可读性 → 迭代。

- 从页面的实际用途出发，而不是靠「高级感」「炫酷」这类形容词。
- 静态检查只能发现局部的模板痕迹，不等于完成视觉验收。

前端改动的逐项审查顺序（Anthropic Frontend Design → Impeccable / better-interface → better-accessibility / better-colors → Emil Kowalski remove-animations → Vercel Web Interface Guidelines）见 [docs/OPEN-SOURCE-DESIGN-WORKFLOW.md](docs/OPEN-SOURCE-DESIGN-WORKFLOW.md)。研究背景见 [docs/AI-DESIGN-RESEARCH.md](docs/AI-DESIGN-RESEARCH.md)。

这些方法只作为设计原则使用；外部 Skills 是可选的开发工具，不作为页面运行时依赖，也不复制其源码。

---

## 12. 相关文档

| 主题 | 文档 |
| --- | --- |
| 三栏工作台细节 | [docs/TWO-PANE-WORKBENCH.md](docs/TWO-PANE-WORKBENCH.md) |
| React 架构 | [docs/REACT-MIGRATION.md](docs/REACT-MIGRATION.md) |
| 组件系统 | [docs/COMPONENT-SYSTEM.md](docs/COMPONENT-SYSTEM.md)、[docs/WORKBENCH-MODULES.md](docs/WORKBENCH-MODULES.md)、[docs/CSS-MODULES-VISUAL.md](docs/CSS-MODULES-VISUAL.md) |
| 手工精选实验 | [docs/CURATED-LABS.md](docs/CURATED-LABS.md) |
| 图标 | [docs/ICONOGRAPHY.md](docs/ICONOGRAPHY.md) |
| 路线图 | [docs/ROADMAP.md](docs/ROADMAP.md) |
| 设计决策历史 | [docs/DESIGN-HISTORY.md](docs/DESIGN-HISTORY.md) |
