# AI UI Skills 使用手册

> 2026-11-25 扩充；原安装资料核对于 2026-11-21。此文是使用指南和来源索引，不镜像第三方 Skill 文件，也不等于安装。

## 选型矩阵

| 任务 | 优先参考 | 预期结果 |
| --- | --- | --- |
| UI 风格雷同，缺乏设计方向 | [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)、[Impeccable](https://github.com/pbakaus/impeccable) | 视觉决策、排版层级、信息架构 |
| 字体、颜色、间距、组件不统一 | [Jakub Krehel Skills](https://github.com/jakubkrehel/skills) 的 better-interface、better-typography、better-colors | 具体 Token 修订与原因 |
| 动画的时机、缓动和轨迹错误 | [Emil Kowalski](https://aiforui.dev/skills) 的 animate、choreograph、emil-design-eng | 具体交互时长、缓动和触发条件 |
| 无意义动画太多 | [Remove Animations](https://aiforui.dev/skills/remove-animations) | 减少不必要过渡 |
| 长文本、空态、异常内容 | [Break UI](https://aiforui.dev/skills/break-ui) | 状态覆盖和稳健性测试 |
| Web 键盘、表单、语义和加载体验 | [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) | 可执行的规范问题清单 |
| 积累团队/个人审美偏好 | [Learn Taste](https://aiforui.dev/skills/learn-taste) | 把纠正和理由沉淀到 DESIGN.md |

## 核实过的安装命令

**Emil Kowalski**
```bash
npx skills@latest add emilkowalski/skills
```

**Jakub Krehel**
```bash
npx skills add jakubkrehel/skills
```

**Vercel Web Interface Guidelines**
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

以上命令均来自上游公开资料；**执行前审阅仓库、脚本权限、依赖与 Agent 兼容性**，不能默认把第三方内容当作已审计依赖。不同环境的安装指令可能变化。

## 推荐实施顺序

1. 先确定页面用途、信息结构、现有技术栈和视觉参考。
2. 针对问题使用最小数量的 Skills，不同时运行多个会改写同一批文件的技能。
3. 约束 Agent 复用本项目的 `DESIGN.md`、语义 Token、Lucide 图标和已有组件。
4. 依据真实截图与交互检查逐项精调；不要把构建成功当成视觉回归成功。
5. 最后验证边界：长文本、空态、键盘、焦点、减少动画、390/768/1280px。
6. 写下本次实际确认有效的设计准则。

## 示例提示词

**UI 评审**

> 审查当前页面，找出信息层级、字体、配色、间距、响应式中最影响使用的五个问题。给出可复现证据，并且只修复优先级最高的项。必须保留项目已有 Token 与交互，不增加无用动画。

**动效审查**

> 列出所有会影响主要交互的动画，判断哪些真正有助于理解状态。对保留的动画注明触发条件、时间、缓动、可中断要求以及减少动画的替代行为，验证低性能设备表现。

## 05 · 新增 Skill 与工程资源

区分可安装 Skill、设计规范和工程工具。下列来源于 2026-11-25 核对公开资料；使用建议是 UI Vault 自行归纳，未安装或运行第三方工具。

| 资源 / 类型 | 解决的问题与建议产出 | 限制 |
| --- | --- | --- |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · Skill | 从产品类型、风格、配色、字体和技术栈检索设计建议；产出候选方案、Token 草案及取舍理由。 | 数据库建议不是用户研究；不把推荐色板直接覆盖已有品牌。 |
| [Taste Skill](https://github.com/Leonxlnx/taste-skill) · Skill | 用于摆脱通用模板，结合参考、视觉方向与浏览器检查；先选一个方向，再修正布局和内容。 | 偏视觉表达；专业后台应优先任务密度和可用性，不直接套营销页。 |
| [Google Stitch Skills](https://github.com/google-labs-code/stitch-skills) · Skill / MCP | 从界面或源码提炼设计语言；[extract-design-md](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md) 可参考其提取路径。 | 本地 DESIGN.md 仍为最终约束；涉及 Stitch 服务的流程需配置相应 MCP，未经授权不上传源码或截图。 |
| [Agent Skills 规范](https://agentskills.io/specification) · 开放格式 | 用 SKILL.md 的名称与描述路由任务，将参考资料和脚本按需加载；输出可跨 Agent 理解的说明。 | 规范不保证所有客户端具有相同安装目录、权限或执行机制。 |
| [DTCG Token Format 2025.10](https://www.designtokens.org/TR/2025.10/format/) · 社区规范 | 借鉴类型、值、别名和说明表示设计 Token，支持跨工具交换；先整理基础、语义、组件三层。 | 这是社区组格式，不是 W3C Recommendation；不强制迁移现有 Token 格式。 |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · W3C 标准 | 以 AA 为常用 Web 无障碍目标，按适用条款检查文本对比度、可见焦点及操作目标。 | 自动扫描不能证明整体符合标准；仍需键盘、读屏与人工检查。 |
| [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) · 交互指南 | 查询 Dialog、Tabs、Combobox、Menu 等组件的键盘与语义行为；输出状态表与焦点路径。 | 优先原生语义；APG 示例并不自动保证生产环境无障碍。 |
| [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/accessibility) · React 组件原语 | 复用复杂控件的语义、键盘与焦点管理，视觉层仍使用项目 Token。 | 先检查项目依赖、框架、许可和维护成本，不为简单原生控件引入整库。 |
| [shadcn/ui Registry](https://ui.shadcn.com/docs/registry) · 分发机制 | 将复用组件的文件、依赖和使用说明登记为可交付资产；先预检冲突，再独立构建。 | 不能仅凭文件可下载就宣称可运行；需要锁文件与隔离验收。 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) · 浏览器工具 | 帮助 Agent 根据可访问性快照导航与操作，并捕获真实截图验证视觉问题。 | 快照与截图解决不同问题；仅在授权浏览器及测试数据中运行。 |
| [Playwright 视觉比较](https://playwright.dev/docs/test-snapshots) · 回归测试 | 以固定视口、主题、字体、数据和浏览器生成基线，审核差异图。 | 不同系统可能产生像素差异；不能自动接受新基线。 |
| [Storybook Visual Tests](https://storybook.js.org/docs/writing-tests/visual-testing) · 组件测试 | 把同一组件的常见、错误、禁用及边界状态独立呈现，便于设计审查。 | 现有项目没有 Storybook 时先评估收益；不能替代完整页面及真实交互。 |
| [web.dev 动画性能指南](https://web.dev/articles/animations-guide) · 实现参考 | 优先检查动画引发的布局、绘制与合成开销，使用 DevTools 观察实际帧表现。 | transform/opacity 是优化候选，不保证所有页面都能达到目标帧率。 |

## 06 · 设计知识转化为可执行规则

以下为项目维护建议，不是上游标准的逐字复述。每条规则都应该能追溯到实际界面问题、实现位置与验收证据。

| 设计维度 | Agent 执行方法 | 检查证据 |
| --- | --- | --- |
| 信息架构 | 先确定首要任务、次要任务与危险操作，再决定分组和阅读顺序；不要从卡片数量开始设计。 | 首屏任务入口、Tab 路径、完成任务所需步骤。 |
| 排版与密度 | 区分标题、正文、数据和辅助信息；使用已有字号和行高令牌，按中文长标题和数字列检查。 | 390/768/1280px 截图，长标题换行、表格数字对齐。 |
| 颜色与层次 | 建立背景、表面、文字、边框、强调、危险等语义颜色；双主题检查每种状态。 | 按 WCAG 2.2 适用条款核对对比度：普通文字通常 4.5:1、大文字 3:1（适用例外另核）。 |
| 布局与响应式 | 使用内容约束、Grid/Flex 和可收缩区域；优先重排，不以整体缩放掩盖溢出。 | 实际滚动范围、窄屏操作可达、长文本和缩放。 |
| 组件与交互 | 列出默认、hover、focus-visible、active、disabled、loading、empty、error、success 中适用状态；优先复用原语。 | 操作后状态、焦点恢复、错误反馈、触屏和键盘路径。 |
| 动效 | 每段动效写明触发原因、属性、时长、缓动、中断方式；尊重项目已有动效 Token。 | 快速连续操作、减少动画模式、性能轨迹。 |
| 设计一致性 | 从现有源码提炼语义 Token 与组件模式；记录例外，避免将单个截图的偶然值当全局规则。 | 同类组件对照、Token 使用记录、深浅主题截图。 |
| 真实内容 | 使用代表性数据、真实字数、实际权限及错误状态；不要伪造业务数据或成功反馈。 | 长列表、空列表、失败重试及无权限路径。 |

## 07 · 按产品类型组合 Skills

一次只选择一个负责视觉方向的主 Skill；其他资料用于补齐实现或验收，不并行重写相同区域。

| 场景 | 建议组合 | 设计重点与交付 |
| --- | --- | --- |
| 品牌官网 / Landing Page | frontend-design 或 Taste → Impeccable → 浏览器复审 | 真实产品内容、鲜明但克制的视觉语言、转化路径与移动端首屏。 |
| 后台 / 数据工作台 | UI/UX Pro Max 候选 → 项目 DESIGN.md → APG / Vercel → Playwright | 信息密度、表格、筛选、批量操作、空态与权限；不强行套大标题营销风格。 |
| 桌面工具 / 编辑器 | better-interface → 原生或成熟控件 → Emil 动效原则 | 面板分区、快捷键、拖拽、焦点、工具状态与长时间操作。Web 规则须按原生平台调整。 |
| 跨框架组件库 | DTCG → Registry / 原语 → Storybook 或独立示例 | 语义 Token、组件契约、依赖清单、可访问状态与隔离构建。 |
| 既有项目精修 | 原 DESIGN.md → Impeccable 或单项 Skill → 截图对比 | 先审计五个高影响问题，限制修改范围，保留功能、状态与原有设计语言。 |

## 08 · 建立 Agent 可复用的设计上下文

建议采用分层文件，而不是把所有设计知识塞进一个巨型提示词。以下为可选结构，不会在 UI Vault 自动安装 Skill。

| 位置 | 职责 | 维护方法 |
| --- | --- | --- |
| AGENTS.md | 项目入口、任务路由、权限、验收约束。 | 指向 DESIGN.md、手册及实际测试命令。 |
| DESIGN.md | 当前有效的产品设计规则、Token、组件、布局及例外。 | 只记当前决策；历史放 DESIGN-HISTORY.md。 |
| skills/<name>/SKILL.md | 可选择的专项工作流；使用 name、description 描述触发任务。 | 按 Agent Skills 规范组织；具体发现路径以客户端为准。 |
| references/ | 按需读取的设计依据、组件文档和示例。 | 记录原始 URL、核对日期和授权范围，尽量链接而非复制。 |
| tests/ 与截图产物 | 验证交互、视觉、可访问性和性能。 | 注明提交、环境、视口、主题、数据、结果与未测试项。 |

## 09 · 设计验收与供应链边界

使用 Skill 之前、实施之后都需要可复查的证据。以下门禁按项目风险选用，不能把未运行的检查标记为通过。

| 门禁 | 核对内容 | 不得宣称 |
| --- | --- | --- |
| 来源与安全 | 核对原始仓库、明确版本/提交、许可证、依赖和脚本访问范围；先在隔离环境审阅，拒绝隐式上传和任意脚本执行。 | 仅凭热度、可安装或仓库公开就认定安全、可再分发。 |
| 结构与构建 | 运行项目已有快速检查，核对 HTML、语义、链接及发布路径。 | 构建通过等于视觉通过。 |
| 真实交互 | 键盘顺序、焦点恢复、错误状态、表单、实际数据和窄屏；记录未覆盖项。 | 只凭截图证明全部交互正常。 |
| 真实视觉 | 固定环境截图对比并人工审查差异，记录主题、视口和字体。 | 未查看截图就接受新视觉基线。 |
| 性能与无障碍 | 检查实际帧表现、布局溢出、减少动画、对比度和读屏；按风险选择跨浏览器。 | axe 零违规等于 WCAG 完全合规。 |

## 10 · 高级任务提示词

**设计系统提取**

> 读取现有 DESIGN.md、样式源码和成熟组件。整理基础、语义与组件 Token，注明变量位置、主题差异和适用范围。发现冲突时提供截图或源码证据，不自行覆盖有效规范；输出候选规则与需人工确认的例外。

**高质量 UI 精修**

> 先用真实浏览器审查主要任务路径，按影响排序最多五项缺陷。选择一个视觉 Skill，保留现有数据、组件及交互契约，优先复用成熟原语。实现后提交修改前后同视口截图、键盘路径、异常状态和实际测试结果。

**跨项目组件复用**

> 先检查项目依赖、许可证和原始组件交互契约。区分视觉参考、代码复用与独立工程；输出 Token、状态、键盘行为、依赖版本及隔离构建步骤。未经授权不复制第三方资产，不自动安装依赖。

**自定义设计 Skill**

> 基于项目 DESIGN.md 编写一个职责单一的 SKILL.md 草案：明确触发条件、必读上下文、步骤、输出格式、禁止项和验收方法。把长资料放在 references/ 并按需引用，不默认执行脚本或修改全局设置。

## 原始来源

- https://aiforui.dev/skills
- https://github.com/emilkowalski/skills
- https://github.com/jakubkrehel/skills
- https://github.com/anthropics/skills
- https://github.com/pbakaus/impeccable
- https://vercel.com/design/guidelines

网页阅读版本：`demos/experiments/design-skill-handbook/index.html`。
