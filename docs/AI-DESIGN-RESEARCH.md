# 减少 AI 生成 UI 模板感的设计工程方案

调研：2026-11-21。以下资料用于指导 UI Vault 的设计流程，不意味着直接引入其源码。

## 分析

「AI 味」不是使用 AI 本身，而是反复套用不适合产品的默认设计：大而空的营销文案、装饰渐变、统一大圆角卡片、无用动效和缺少真实数据的面板。

UI Vault 应以“资料能否找到、预览是否真实、源码能否使用”为设计标准。不要以主观所谓「去 AI 味评分」代替用户体验测试。

## 相关开源项目

| 项目 | 作用 | 适合 UI Vault 的应用 |
| --- | --- | --- |
| [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) | 识别常见的模型默认美学，要求先规划、实现再自评 | 设计方向评审 |
| [Impeccable](https://github.com/pbakaus/impeccable) | 前端设计审查、优化、精简与质量核查 | UI 设计审查词汇与审查流程 |
| [Jakub Krehel Skills](https://github.com/jakubkrehel/skills) | 布局、颜色、文案、字体、可访问性专项 | 分问题逐项验收而非全局盲目美化 |
| [Emil Kowalski Skills](https://github.com/emilkowalski/skills) | 动效时长、缓动、手势、性能与删除冗余动效 | 主站删减无意义过渡、Demo 保留有目的动画 |
| [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) | Web 操作与文案规范、语义与无障碍 | 检查页面的实际可用性 |
| [Motion Primitives](https://github.com/ibelick/motion-primitives) | 可配置动画组件，React/Motion 生态 | 独立 Demo 的动效参考，不强行安装到静态主站 |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | 可组合组件与 Registry 模式 | 未来已验证组件的分发方式参考 |

注意第三方许可证、仓库 API 和具体功能可能变化；使用前需要核对。仅收录项目链接不会自动获得转发其代码、图片和字体的权限。

## AI Agent 提示词模板

**任务：** 为具体产品设计明确的页面，而非展示模板。

**约束：** 说明用户在这里完成什么操作、所需真实内容与数据字段、技术栈、浏览器最低版本、响应式与键盘要求。

**参照：** 找出两三个真实开源项目，分别说明要借鉴的信息架构、视觉层级或动效；提供一个不希望模仿的反面参考。

**交付顺序：**
1. 先给信息结构和内容优先级。
2. 给出 4–8 个语义化设计变量和字体/间距规范。
3. 实现真实组件状态，不使用空洞宣传文案填充。
4. 展示与说明真实来源，提供可用的交互。
5. 在 1440、768、390 px 做截图验收；检查长文本、空列表、键盘、焦点、减少动效。
6. 列出仍然模板化的部分，解释其必要性或替换方案。

## 本轮具体修改

- 主站从宣传型 Hero 调整为直接检索的设计资料库。
- 从主站删除装饰性旋转卡、无目的光晕和无用大写英文标题。
- 中性的资料库外壳与富有风格的独立 Demo 分开。
- 外部项目不再用虚构界面缩略图，改用真实仓库名与来源文字。
- 主站采用有限的色彩、圆角和动效；示例 Demo 的文案改为具体操作语境。
- 用 DESIGN.md 和 AGENTS.md 固化质量约束，同时通过测试降低模板文案回归风险。

更多依据：
https://github.com/anthropics/skills
https://github.com/pbakaus/impeccable
https://github.com/jakubkrehel/skills
https://github.com/emilkowalski/skills
https://github.com/vercel-labs/web-interface-guidelines
