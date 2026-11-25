# UI Vault AI UI 设计研究与交付包

核对：2026-11-25。原始来源、许可、提示结构与知识证据见 [research.json](research.json) 及 [手册](../UI-SKILLS-HANDBOOK.md)。仅做公开资料归纳，没有复制上游 Skill 文件、图片、字体或执行其脚本。

## 选用原创 Skills

- [ui-vault-design-review](../../skills/ui-vault-design-review/SKILL.md)：审查页面、交互、视觉缺陷和设计一致性；证据驱动的缺陷排序与可执行修复。
- [ui-vault-design-extract](../../skills/ui-vault-design-extract/SKILL.md)：从已有源码与授权的界面提取设计规则；可追踪的 DESIGN.md 候选和 Token 对照。
- [ui-vault-visual-refine](../../skills/ui-vault-visual-refine/SKILL.md)：改善视觉构图、排版、色彩与密度；可验证的视觉方向和精修结果。
- [ui-vault-component-handoff](../../skills/ui-vault-component-handoff/SKILL.md)：跨项目移植组件、Token 和交互契约；可审查的交付包与隔离验收记录。

复制需要的整个 Skill 目录（含 LICENSE）到目标 Agent 实际支持的项目级 Skill 目录；例如 Codex 常用 .agents/skills、Claude Code 常用 .claude/skills。先核实客户端版本的官方文档，目录不保证自动发现。使用时可直接描述任务并指明 Skill 名称。没有自动安装、外部 API 或第三方脚本依赖；未实测各客户端发现及执行效果。

## 模板

- [DESIGN.md 模板](templates/DESIGN.md)
- [AGENTS.md 接入片段](templates/AGENTS.md)
- [Skill 模板](templates/skill-template/SKILL.md)
- [Token 示例](templates/tokens.example.json)
- [组件交付清单](templates/component-handoff.md)

先读取目标项目规范、确认许可、复制到临时目录；填补占位项，再审查差异并交付。Token 示例仅为结构示例。组件交付模板不是可运行组件包，实际导出需使用项目已有 Registry 或成熟框架实现。

## 更新与测试

research.json 为新增章节的机器可读来源，HTML 与 Markdown 同步，保持静态单文件演示。更新时核对原始来源、许可证、核对日期和文件路径；运行 `node --test tests/design-skill-kit.test.mjs` 和项目分级检查。链接为可变上游 main，不等于固定版本或完整许可证审计。learn-taste 仅作者说明，待核原始文件；Vercel 独立许可待核。
