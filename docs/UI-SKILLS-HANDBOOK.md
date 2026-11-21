# AI UI Skills 使用手册

> 2026-11-21 核对。此文是使用指南和来源索引，不镜像第三方 Skill 文件，也不等于安装。

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

## 原始来源

- https://aiforui.dev/skills
- https://github.com/emilkowalski/skills
- https://github.com/jakubkrehel/skills
- https://github.com/anthropics/skills
- https://github.com/pbakaus/impeccable
- https://vercel.com/design/guidelines

网页阅读版本：`demos/experiments/design-skill-handbook/index.html`。
