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

<!-- ui-vault-research-v2:start -->
## 11 · 原始 Skill 逐项研究

原始资料为 2026-11-25 公开页面阅读记录，非固定提交快照；所有摘要、规则和原创 Skill 均为 UI Vault 归纳，不镜像第三方内容。许可证针对所列来源，不推定字体、图片或其他资产的再分发权。

| Skill 与许可 | 核心方法 | 提示结构 | 适用边界与证据 |
| --- | --- | --- | --- |
| [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)；[Apache-2.0](https://github.com/anthropics/skills/blob/main/skills/frontend-design/LICENSE.txt) | 由真实内容、用户和行业语境导出视觉方向，而非随机选取潮流效果。 | 角色与任务 → 内容和视觉线索 → 排版、色彩、布局决策 → 实现。 | 适合新界面或明确重设计；后台工具的可预测性和效率优先。（原始 SKILL.md） |
| [impeccable](https://github.com/pbakaus/impeccable/blob/main/plugin/skills/impeccable/SKILL.md)；[Apache-2.0](https://github.com/pbakaus/impeccable/blob/main/plugin/skills/impeccable/SKILL.md) | 按产品表面目标分配视觉投入；用针对性审查和真实渲染反馈精修。 | 上下文加载 → 命令/专项手册 → 实现 → 批量看截图。 | 上游 4.10.0 指令涉及启动器及可能下载的二进制；不自动执行。（原始 SKILL.md） |
| [emil-design-eng](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)；[MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 从反馈、弹出层定位、触发频率及细节累积理解交互质量。 | 设计工程原则 → 针对场景的实现建议 → 前后对比与原因。 | 适合交互精修；专门的动效和性能问题交给更窄的技能。（原始 SKILL.md） |
| [animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md)；[MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 先判断是否值得动画，再确定属性、时长、曲线与中断策略。 | 判断动画目的 → 选择实现机制 → 针对组件查示例 → 代码及体感检查。 | 参数是场景化建议；不能替代实机观察。（原始 SKILL.md） |
| [choreograph](https://github.com/emilkowalski/skills/blob/main/skills/choreograph/SKILL.md)；[MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 处理多个元素的先后、重叠与整体时序，避免重复入场和等待。 | 列出关系与频率 → 选择共同或错开时序 → 检查可立即操作。 | 高频菜单与键盘操作不应因展示效果延迟。（原始 SKILL.md） |
| [remove-animations](https://github.com/emilkowalski/skills/blob/main/skills/remove-animations/SKILL.md)；[MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 只减少不必要的动画并检查依赖动画完成的状态逻辑。 | 枚举动画 → 检查依赖 → 删除或减弱 → 回归。 | 不顺带修改缓动或卸载依赖；注意隐藏元素和卸载回调。（原始 SKILL.md） |
| [animation-performance](https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md)；[MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 按掉帧症状定位主线程、布局、绘制或合成问题。 | 性能症状 → 定位原因 → 有针对性修复 → 记录实际设备轨迹。 | transform/opacity 不是绝对性能保证；不盲目添加 will-change。（原始 SKILL.md） |
| [break-ui](https://github.com/emilkowalski/skills/blob/main/skills/break-ui/SKILL.md)；[MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 用 schema 或现实数据极值替换演示数据，定位真实破坏。 | 字段与来源 → 合理极端数据 → 开发态切换 → 先报告再修复。 | 测试通过同一数据入口；不把压力测试开关发布到生产。（原始 SKILL.md） |
| [learn-taste](https://aiforui.dev/skills/learn-taste)；[仓库 MIT；该文件待复核](https://github.com/emilkowalski/skills/blob/main/LICENSE) | 将实际设计纠正和理由转化为可复用规则。 | 收集纠正 → 归纳适用范围 → 确认理由 → DESIGN.md 或 lint 候选。 | 原始 SKILL.md 路径未成功打开；只依据作者公开说明，不宣称已读源码。（作者说明；源码待核） |
| [better-interface](https://github.com/jakubkrehel/skills/blob/main/skills/better-interface/SKILL.md)；[MIT](https://github.com/jakubkrehel/skills/blob/main/LICENSE) | 分派各专业领域审查，并按证据归并为排序后的结论。 | 确定范围 → 项目上下文 → 领域审查 → 去重及排序。 | 分清已有缺陷和新增回归；未检查领域必须明确标注。（原始 SKILL.md） |
| [better-typography](https://github.com/jakubkrehel/skills/blob/main/skills/better-typography/SKILL.md)；[MIT](https://github.com/jakubkrehel/skills/blob/main/LICENSE) | 按文本角色审查字号、字重、字形、行高、换行与数字呈现。 | 项目排版系统 → 文字渲染与字体特性 → 测量与修复。 | 某些上游阈值是其工作约定，不是普适可访问性标准；中文需另验。（原始 SKILL.md） |
| [better-colors](https://github.com/jakubkrehel/skills/blob/main/skills/better-colors/SKILL.md)；[MIT](https://github.com/jakubkrehel/skills/blob/main/LICENSE) | 根据语义角色设计色阶，计算对比度与色域而非主观估计。 | 现有 Token → 色阶与角色 → 色域与对比度 → 具体修复。 | 不强制把成熟 HEX 体系改成 OKLCH。（原始 SKILL.md） |
| [break](https://github.com/jakubkrehel/skills/blob/main/skills/break/SKILL.md)；[MIT](https://github.com/jakubkrehel/skills/blob/main/LICENSE) | 通过隔离的真实组件测试页呈现适用的边界状态。 | 单组件 → 根据 props 选场景 → 临时页面 → 浏览器可见证据。 | 不使用生产数据；没有浏览器则只交付场景清单。（原始 SKILL.md） |
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)；[许可待核：不再分发](https://github.com/vercel-labs/agent-skills/blob/main/README.md) | 基于随 Skill 固定版本的规则审查具体文件，而非每次从网络取规则。 | 读取本地规则快照 → 检查目标文件 → 文件与行号报告。 | 源码规则检查不是完整 UX 或 WCAG 验收；未核实独立许可证。（原始 SKILL.md） |
| [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md)；[MIT](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/LICENSE) | 根据设计系统、领域或技术栈检索候选规则和方案。 | 确定检索模式 → 检查匹配身份和适用性 → 有证据才持久化。 | 上游搜索脚本需审计后才运行；建议库不代替产品研究。（原始 SKILL.md） |
| [taste-skill](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)；[MIT](https://github.com/Leonxlnx/taste-skill/blob/main/LICENSE) | 以艺术指导、版面表达、内容和浏览器检查约束生成结果。 | 视觉方案 → 真实内容和实现 → 多视口检查 → 记录未通过项及假设。 | 强烈的页面节奏和视觉规则偏展示型产品；不要套用到密集工作台。（原始 SKILL.md） |
| [extract-design-md](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md)；[Apache-2.0](https://github.com/google-labs-code/stitch-skills/blob/main/LICENSE) | 从主题、Token、组件源码或页面计算样式提炼设计语言。 | 区分源码与网址模式 → 提取证据 → 归纳角色和约束 → 文档。 | 静态提取不等于真实渲染；外部服务集成需授权，不覆盖目标项目 DESIGN.md。（原始 SKILL.md） |

## 12 · 视觉设计专业知识库

规范、上游设计系统与启发式原则分开使用。每条知识包含原理、工程做法和验收方法。核对日期：2026-11-25

| 知识与来源 | 原理 | 工程方法 | 验收 |
| --- | --- | --- | --- |
| [排版与阅读](https://www.carbondesignsystem.com/building-blocks/foundations/typography/overview)；IBM Carbon；文档仅引用链接，字体许可另查 | 字号、字重、行高与字形共同建立层级；任务工具和展示内容使用不同密度。 | 先定义 title/body/label/data 四类角色；用数字等宽特性处理变化数值；检查 CJK 换行、字形回退和文本放大。 | 保留原字体与 Token，比较同一内容的宽窄屏；正文长度和字号为场景化启发，不套固定英文行长。 |
| [色彩科学与色域](https://www.w3.org/TR/2026/CRD-css-color-4-20261123/)；W3C Candidate Recommendation Draft；W3C permissive document license | OKLCH 的 L/C/H 分别描述感知明度、彩度和色相，便于构造有规律的色阶，但并非每个组合都能在目标色域显示。 | 先建立中性色与语义角色，再在目标色域检查映射；为旧浏览器保留 CSS 回退；透明表面先求合成结果。 | 不得把 OKLCH 的 L 当 WCAG 相对亮度；实际计算最终背景上的对比度并检查双主题。 |
| [对比度与可访问性](https://www.w3.org/TR/WCAG22/)；W3C Recommendation；W3C document use rules | WCAG 的文字对比度采用 (L较亮+0.05)/(L较暗+0.05)，普通文字 AA 通常 4.5:1、大文字 3:1；非文字控件等有独立条款。 | 对实际前景/背景和适用状态计算，不仅检查 Token；不要仅用颜色传达错误或选中。 | 区分规范门槛与视觉偏好，检查可见焦点、放大、键盘和读屏；例外按原条款。 |
| [视觉权重与信息层级](https://www.nngroup.com/articles/principles-visual-design/)；NN/g 著作权资料；仅链接与原创归纳 | 尺度、对比、分组与平衡改变注意力分布；权重应服务任务优先级，不是装饰数量。 | 为每屏定义主要任务、辅助任务、危险操作；调整字号、留白和强调色而非堆卡片与阴影。 | 灰度截图检查主次、实际任务路径检查入口；灰度不能替代用户研究或色彩无障碍验证。 |
| [网格、空间与对齐](https://www.carbondesignsystem.com/building-blocks/foundations/2x-grid/overview)；IBM Carbon；文档仅引用链接 | 网格的重复节奏让对齐和分组可预测。Carbon 使用 8px 基本单位；这不是所有项目都必须使用的单位。 | 优先复用本地空间尺度；将组内、组间、页面边缘的距离分别定义，使用 minmax(0,1fr) 等内容约束。 | 检查 390/768/1280px 与窄嵌入视口、长内容、放大、焦点及无意横向溢出。 |
| [材质、层次与透明表面](https://developer.apple.com/design/human-interface-guidelines/materials)；Apple HIG；保留版权，仅引用链接 | 材质表达层的语义与深度关系；透明表面受后方内容和系统设置影响。 | 先定义 base/surface/overlay 层；仅在有分层需求时使用模糊，提供不透明回退，按文字和背景组合校验。 | 核对明暗、复杂背景、减少透明设置或替代模式、滚动性能；Apple 原生材质不能等同 CSS blur。 |
| [构图、图形与视觉平衡](https://www.nngroup.com/articles/visual-design-cheat-sheet/)；NN/g 著作权资料；仅链接与原创归纳 | 对称只是平衡的一种；利用图形与背景、主次比例及聚合关系使视线回到内容。 | 选择一个焦点，避免多个同强度强调；建立图文对齐关系；品牌页与工具工作台分别使用表现性和功能性构图。 | 检查宽窄视口的视觉主次及真实内容；不以黄金比例或中心构图作为强制合格线。 |
| [Token 语义与跨工具交换](https://www.designtokens.org/TR/2025.10/format/)；DTCG Final Community Group Report；W3C FSA，非 W3C 标准 | 基础值、语义角色与组件别名可形成可追踪的引用关系。 | 在现有源文件上增加必要语义别名，检测类型匹配、悬空引用和循环；导出前明确平台与色域。 | 以实际编译结果及引用检查为准；不为了套规范重写已有 Token 工具链。 |

## 13 · UI Vault 原创 Skills

以下是 MIT 原创纯文档 Skills，兼容 Agent Skills 的基础目录结构；手工复制单个目录到目标客户端支持的项目级 Skill 路径，保留 LICENSE。不自动安装，客户端实际发现和执行尚未验证。

| Skill | 用途 | 交付 |
| --- | --- | --- |
| [ui-vault-design-review](https://github.com/weepwood/UI-Vault/tree/main/skills/ui-vault-design-review) | 审查页面、交互、视觉缺陷和设计一致性 | 证据驱动的缺陷排序与可执行修复 |
| [ui-vault-design-extract](https://github.com/weepwood/UI-Vault/tree/main/skills/ui-vault-design-extract) | 从已有源码与授权的界面提取设计规则 | 可追踪的 DESIGN.md 候选和 Token 对照 |
| [ui-vault-visual-refine](https://github.com/weepwood/UI-Vault/tree/main/skills/ui-vault-visual-refine) | 改善视觉构图、排版、色彩与密度 | 可验证的视觉方向和精修结果 |
| [ui-vault-component-handoff](https://github.com/weepwood/UI-Vault/tree/main/skills/ui-vault-component-handoff) | 跨项目移植组件、Token 和交互契约 | 可审查的交付包与隔离验收记录 |

## 14 · 跨项目交付模板

先复制所需模板至临时目录并按目标项目调整，不覆盖现有规范。Token 示例是 DTCG 风格的最小演示，不宣称完整规范验证或跨框架适配。

| 模板 | 使用说明 |
| --- | --- |
| [DESIGN.md 模板](https://github.com/weepwood/UI-Vault/blob/main/docs/ai-ui-skills/templates/DESIGN.md) | 阅读、复制到目标项目后按真实技术栈及验收要求补全。 |
| [AGENTS.md 接入片段](https://github.com/weepwood/UI-Vault/blob/main/docs/ai-ui-skills/templates/AGENTS.md) | 阅读、复制到目标项目后按真实技术栈及验收要求补全。 |
| [Skill 模板](https://github.com/weepwood/UI-Vault/blob/main/docs/ai-ui-skills/templates/skill-template/SKILL.md) | 阅读、复制到目标项目后按真实技术栈及验收要求补全。 |
| [Token 示例](https://github.com/weepwood/UI-Vault/blob/main/docs/ai-ui-skills/templates/tokens.example.json) | 阅读、复制到目标项目后按真实技术栈及验收要求补全。 |
| [组件交付清单](https://github.com/weepwood/UI-Vault/blob/main/docs/ai-ui-skills/templates/component-handoff.md) | 阅读、复制到目标项目后按真实技术栈及验收要求补全。 |

<!-- ui-vault-research-v2:end -->

## 原始来源

- https://aiforui.dev/skills
- https://github.com/emilkowalski/skills
- https://github.com/jakubkrehel/skills
- https://github.com/anthropics/skills
- https://github.com/pbakaus/impeccable
- https://vercel.com/design/guidelines

网页阅读版本：`demos/experiments/design-skill-handbook/index.html`。
