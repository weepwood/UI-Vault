// UI Vault 设计资源唯一数据源：可添加资源，不嵌入第三方代码。
// kind: skill | doc | site | tool
window.UI_VAULT_DESIGN_RESOURCES = [
  {
    "id": "aiforui-skills",
    "title": "AI for UI · Skills",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Emil Kowalski",
    "url": "https://aiforui.dev/skills",
    "summary": "按照实际 UI 问题选择动效、原型、审查和极端数据测试等 Skills。",
    "usage": "不知道该选哪个 UI Skill 时先看技能目录。",
    "tags": [
      "AI",
      "Skill",
      "设计工程"
    ],
    "badge": "推荐入口"
  },
  {
    "id": "emil-skills",
    "title": "Emil Kowalski · Skills",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Emil Kowalski",
    "url": "https://github.com/emilkowalski/skills",
    "summary": "面向设计工程师的交互细节、动效与界面质量技能库。",
    "usage": "动效评审、组件微交互、移动端和压力测试。",
    "tags": [
      "动效",
      "交互",
      "工程"
    ],
    "badge": "源码"
  },
  {
    "id": "jakub-skills",
    "title": "Jakub Krehel · Skills",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Jakub Krehel",
    "url": "https://github.com/jakubkrehel/skills",
    "summary": "字体、颜色、版式、文案、无障碍和 UI 精调等专项技能。",
    "usage": "针对页面具体缺陷逐项检查，而非盲目重做。",
    "tags": [
      "排版",
      "配色",
      "无障碍"
    ],
    "badge": "源码"
  },
  {
    "id": "anthropic-frontend",
    "title": "Anthropic · Frontend Design",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Anthropic",
    "url": "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
    "summary": "在编码前明确视觉方向、结构和组件的设计约束。",
    "usage": "从零构思页面、或重新定义已有项目的视觉方向。",
    "tags": [
      "视觉方向",
      "前端",
      "Agent"
    ],
    "badge": "官方源文件"
  },
  {
    "id": "impeccable",
    "title": "Impeccable",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Paul Bakaus",
    "url": "https://github.com/pbakaus/impeccable",
    "summary": "围绕设计语言与质量评审的设计工程工具和工作流。",
    "usage": "对已有页面开展有依据的审查、去模板化和精调。",
    "tags": [
      "审查",
      "设计语言",
      "Agent"
    ],
    "badge": "源码"
  },
  {
    "id": "web-guidelines-skill",
    "title": "Vercel · Web Design Guidelines Skill",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Vercel Labs",
    "url": "https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines",
    "summary": "把 Web 界面规范转化成可重复执行的前端评审任务。",
    "usage": "检查表单、键盘、焦点、响应式、加载和动效。",
    "tags": [
      "Web",
      "验收",
      "无障碍"
    ],
    "badge": "源码"
  },
  {
    "id": "break-ui",
    "title": "Break UI",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Emil Kowalski",
    "url": "https://aiforui.dev/skills/break-ui",
    "summary": "用极端长度、空值、异常内容和高密度数据测试组件。",
    "usage": "做完整交互后，用异常数据验证稳健性。",
    "tags": [
      "边界条件",
      "测试",
      "质量"
    ],
    "badge": "技能说明"
  },
  {
    "id": "remove-animations",
    "title": "Remove Animations",
    "kind": "skill",
    "topic": "动效",
    "source": "Emil Kowalski",
    "url": "https://aiforui.dev/skills/remove-animations",
    "summary": "判断并移除没有帮助的过渡和装饰性动效。",
    "usage": "页面动画太多、操作响应拖沓时。",
    "tags": [
      "减法",
      "性能",
      "动效"
    ],
    "badge": "技能说明"
  },
  {
    "id": "learn-taste",
    "title": "Learn Taste",
    "kind": "skill",
    "topic": "AI 工作流",
    "source": "Emil Kowalski",
    "url": "https://aiforui.dev/skills/learn-taste",
    "summary": "将审美纠正和理由沉淀为项目级设计规则。",
    "usage": "长期维护一套一致的 UI 设计语言。",
    "tags": [
      "DESIGN.md",
      "Agent",
      "规范"
    ],
    "badge": "技能说明"
  },
  {
    "id": "shadcn-skills",
    "title": "shadcn/ui · Agent Skills",
    "kind": "doc",
    "topic": "组件",
    "source": "shadcn/ui",
    "url": "https://ui.shadcn.com/docs/skills",
    "summary": "组件 registry、文档发现和 Agent 的组件检索流程。",
    "usage": "从原有组件系统出发复用，而非重新造控件。",
    "tags": [
      "React",
      "Registry",
      "Agent"
    ],
    "badge": "官方文档"
  },
  {
    "id": "web-interface-guidelines",
    "title": "Vercel · Web Interface Guidelines",
    "kind": "doc",
    "topic": "Web 质量",
    "source": "Vercel",
    "url": "https://vercel.com/design/guidelines",
    "summary": "覆盖交互细节、语义、表单、性能、可访问性和内容规范。",
    "usage": "提交 UI PR 前进行规范审查。",
    "tags": [
      "可访问性",
      "表单",
      "验收"
    ],
    "badge": "官方指南"
  },
  {
    "id": "apple-hig",
    "title": "Apple Human Interface Guidelines",
    "kind": "doc",
    "topic": "设计系统",
    "source": "Apple",
    "url": "https://developer.apple.com/design/human-interface-guidelines/",
    "summary": "Apple 平台的布局、导航、内容和组件交互设计原则。",
    "usage": "macOS、iOS 以及桌面交互原生感研究。",
    "tags": [
      "Apple",
      "平台",
      "导航"
    ],
    "badge": "官方指南"
  },
  {
    "id": "fluent-2",
    "title": "Microsoft Fluent 2",
    "kind": "doc",
    "topic": "设计系统",
    "source": "Microsoft",
    "url": "https://fluent2.microsoft.design/get-started/design",
    "summary": "Fluent 2 的 Token、布局、色彩和组件设计体系。",
    "usage": "Windows 桌面应用、WinUI 与 Web 工作台。",
    "tags": [
      "Windows",
      "Token",
      "组件"
    ],
    "badge": "官方指南"
  },
  {
    "id": "atlassian-design",
    "title": "Atlassian Design System",
    "kind": "doc",
    "topic": "设计系统",
    "source": "Atlassian",
    "url": "https://atlassian.design/design-system",
    "summary": "企业协作应用的组件、设计规范和内容设计体系。",
    "usage": "高信息密度的企业级工作台与表单。",
    "tags": [
      "协作",
      "后台",
      "规范"
    ],
    "badge": "官方指南"
  },
  {
    "id": "mdn-a11y",
    "title": "MDN · Web Accessibility",
    "kind": "doc",
    "topic": "Web 质量",
    "source": "MDN",
    "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
    "summary": "浏览器语义、ARIA、可访问性测试与实现参考。",
    "usage": "排查键盘导航、语义结构和屏幕阅读器问题。",
    "tags": [
      "A11y",
      "WCAG",
      "Web"
    ],
    "badge": "技术文档"
  },
  {
    "id": "radix-primitives",
    "title": "Radix Primitives",
    "kind": "tool",
    "topic": "组件",
    "source": "Radix UI",
    "url": "https://www.radix-ui.com/primitives/docs/overview/introduction",
    "summary": "无样式、可访问的 React UI primitives。",
    "usage": "需要完全自定主题的 React 组件实现。",
    "tags": [
      "React",
      "组件",
      "无障碍"
    ],
    "badge": "官方文档"
  },
  {
    "id": "reka-ui",
    "title": "Reka UI",
    "kind": "tool",
    "topic": "组件",
    "source": "Reka UI",
    "url": "https://reka-ui.com/docs/overview/introduction",
    "summary": "面向 Vue 的无样式 UI 组件原语。",
    "usage": "Vue 3 中复用可靠的交互与无障碍行为。",
    "tags": [
      "Vue",
      "组件",
      "无障碍"
    ],
    "badge": "官方文档"
  },
  {
    "id": "shadcn-ui",
    "title": "shadcn/ui",
    "kind": "tool",
    "topic": "组件",
    "source": "shadcn/ui",
    "url": "https://ui.shadcn.com/docs",
    "summary": "可定制的组件源代码、范例和 registry 工作流。",
    "usage": "React 组件体系搭建与组件样式变体。",
    "tags": [
      "React",
      "组件",
      "代码"
    ],
    "badge": "官方文档"
  },
  {
    "id": "lucide",
    "title": "Lucide",
    "kind": "tool",
    "topic": "图标",
    "source": "Lucide",
    "url": "https://lucide.dev/guide/",
    "summary": "统一的 SVG 图标体系和跨框架实现指南。",
    "usage": "统一项目图标语义、描边和尺寸。",
    "tags": [
      "图标",
      "SVG",
      "多框架"
    ],
    "badge": "官方文档"
  },
  {
    "id": "motion",
    "title": "Motion · Documentation",
    "kind": "tool",
    "topic": "动效",
    "source": "Motion",
    "url": "https://motion.dev/docs/quick-start",
    "summary": "围绕动效、手势和元素过渡的前端 API 文档。",
    "usage": "复杂动画，简单状态变化优先使用 CSS。",
    "tags": [
      "动效",
      "手势",
      "Web"
    ],
    "badge": "官方文档"
  },
  {
    "id": "animations-dev",
    "title": "Animations on the Web",
    "kind": "site",
    "topic": "动效",
    "source": "Emil Kowalski",
    "url": "https://animations.dev/",
    "summary": "动画设计知识、案例和教学资源。",
    "usage": "学习动画为何有效及如何优化节奏。",
    "tags": [
      "动画",
      "教程",
      "灵感"
    ],
    "badge": "设计网站"
  },
  {
    "id": "shadcn-home",
    "title": "shadcn/ui · Gallery",
    "kind": "site",
    "topic": "组件",
    "source": "shadcn/ui",
    "url": "https://ui.shadcn.com/",
    "summary": "浏览可复用的现代 UI 组件与页面示例。",
    "usage": "寻找组件组合方式而非复制默认主题。",
    "tags": [
      "组件",
      "React",
      "灵感"
    ],
    "badge": "组件网站"
  }
];
