# UI-Vault 开源设计工程工作流

这套规则用于项目日后的每一次 UI 改动。**借鉴设计方法，不复制第三方组件或在主站强行增加 React 依赖。**

## 0. 任务类型先行

UI-Vault 主要是资料检索和预览工具（Operate / Browse），并非营销着陆页。要优化的是资源查找、查看、收藏、复制和再次打开，而不是添加抽象装饰。

## 1. 定义设计方向：Anthropic Frontend Design

来源：[anthropics/skills — frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)

用法：
- 为页面写一句设计目标，如「用户在 30 秒内找到一个适用组件，并打开 Demo 查看效果」。
- 先定义色彩、排版和布局，说明每个选择与此目标的关系。
- 对比当前 UI 的信息层级；不要默认选择 AI 训练数据里最常见的 SaaS 卡片模板。
- 保留用户确实需要的实验性 Demo 美学，而不是强行把所有资产统一成同样的风格。

交付：一份 5–10 行的简要设计决策记录。

## 2. 做诊断而非盲目美化：Impeccable

来源：[pbakaus/impeccable](https://github.com/pbakaus/impeccable)

按 Critique / Audit → Polish / Quieter → Harden 的逻辑：
1. 检查信息结构、内容真实程度、互动流程。
2. 移除重复说明和无功能装饰。
3. 对异常状态、狭窄视口、键盘和对比度进行加固。

可选：经项目所有者允许后在开发环境安装 skill，例如：

```bash
npx skills add https://github.com/pbakaus/impeccable --skill impeccable
```

它用于开发/审查时的 AI Agent，不是 UI-Vault 用户访问网站所需的运行时依赖。

## 3. 拆分审查维度：Jakub Krehel Skills

来源：[jakubkrehel/skills](https://github.com/jakubkrehel/skills)

| 专项 | 当前项目的检查 |
|---|---|
| better-interface | 是否能快速找到与打开资源 |
| better-typography | 中英文混排、行高、长标题和卡片截断 |
| better-colors | 正文对比度、交互色与边框的用途 |
| better-accessibility | 焦点、对话框、表单标签、状态播报 |
| better-layout | 390 / 768 / 1440px 下导航、搜索、画廊的阅读顺序 |
| better-writing | 收藏、无结果、复制失败等文字是否说明下一步 |
| interface-review | PR 中是否退化了原有的可访问性和布局 |

可选安装：`npx skills add jakubkrehel/skills`。

## 4. 只保留有目的的动画：Emil Kowalski Skills

来源：[emilkowalski/skills](https://github.com/emilkowalski/skills)

- **remove-animations**：排查多余加载动效、每张卡片的进场动画，以及连续弹层闪烁。
- **review-animations**：检查详情抽屉的退出/进入、响应用户操作的过渡，是否可中断。
- **animation-performance**：优先 transform 和 opacity；不持续动画宽高导致主线程重排。
- **break-ui**：对极长标题、无资源、窄屏、意外数据做压力测试。

可选安装：`npx skills@latest add emilkowalski/skills`。

## 5. 最终 Web 可用性检查：Vercel Guidelines

来源：[vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines)

必须检查：
- 所有按钮、搜索与选项具有可理解的可访问名称；搜索结果数需要可见或播报。
- 键盘可进入/退出详情、切换预览宽度，弹层关闭后焦点恢复。
- `prefers-reduced-motion` 有减弱或移除动画的实现。
- 复制、收藏、空结果、加载失败有明确反馈。
- 源码入口与外部 URL 不指向伪造的资源页面。
- 窄屏没有横向滚动溢出，浏览器可以正常缩放。

可选安装：`npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines`。

## 6. 组件和动效的独立实验

- [shadcn/ui](https://github.com/shadcn-ui/ui)：可借鉴组件组合与 Registry 的分发设计。当前 UI Vault 展厅仍然零第三方运行时依赖。
- [Motion Primitives](https://github.com/ibelick/motion-primitives)：可作为 React/Motion 风格的**独立** Demo 实现参考，不强行引入整个展厅。

## 本仓库已实施的可验证改进

- [x] Demo 详情支持自适应 / 手机 / 平板 / 桌面响应式预览。
- [x] 收藏时普通画廊不因状态变化而反复重建 iframe。
- [x] 搜索与分类的状态播报、筛选清除和收藏夹专属空状态。
- [x] 语义颜色对比度自动检查（11 组 4.5:1 目标）。
- [x] 设计质量检查纳入 GitHub Actions。
- [x] 资源详情可以复制直达链接。
- [ ] 手工浏览器截图验收：1440px / 768px / 390px。
- [ ] 独立 Demo 的多主题、性能与特殊颜色对比度人工测试。

## 每次 PR 的设计报告模板

```text
用户目标：
修改前的主要障碍：
参考了哪个规范（给出链接）：
实现内容：
保持不变的原有行为：
自动检查结果：npm run check
手工视觉检查结果：桌面 / 平板 / 手机 / 键盘 / 减少动效
当前仍存在的问题与取舍：
```

**重要边界**：本项目没有捆绑第三方 Skills 的源代码，也没有自动安装这些项目。以上链接和命令属于可选的开发工具接入说明。UI Vault 本次直接实现的是从这些项目抽取出的具体设计和可访问性原则。
