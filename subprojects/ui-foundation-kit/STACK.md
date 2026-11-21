# UI 工具栈决策记录 · 2026-11-21

## 最小可复用层（必选）

| 领域 | 选择 | 原因 |
|---|---|---|
| 设计源 | DTCG 风格 JSON + 语义 Token | 保持平台中立、可版本管理 |
| Web 变量 | 生成 CSS Custom Properties | 无框架依赖，便于应用到老仓库 |
| 字体 | 系统无衬线栈，中文自动适配 | 不强制下载字体，减少首屏抖动 |
| 图标 | Lucide（Vue: `@lucide/vue`；React: `lucide-react`） | 图标一致，按需引用，避免重复自绘 |
| 基础布局 | 原生 CSS Grid / Flex | 不引入额外布局运行时 |
| 基础交互 | CSS transitions + 原生控件 | 轻量、低维护 |
| 静态验证 | Token 色彩对比度 + JS 语法 | 交付门槛低、可离线运行 |

## 框架适配（按需）

**Vue 3 / Vite / TypeScript**：选择 Vue 3；`@lucide/vue`；需要弹窗、菜单、组合框、Tabs 时用 Reka UI。需要成套可修改源代码组件时，选 shadcn-vue；它生成/复制的是应用持有的组件代码，而不是独立不可改的皮肤包。

**React**：选择 shadcn/ui + `lucide-react`，继续使用 CSS 语义 Token；需要更复杂动效再引入 Motion React。

**Rust + GPUI / GPUI Kit**：使用 `dist/tokens.rs` 中的跨平台常量，按 GPUI API 将色值/尺寸转换为实际类型。图标应使用兼容 Lucide 的 SVG 资产或相应原生图标方案，而不是混用第三方图标风格。不可直接运行 Web 的 CSS 或 Reka 组件。

## 不默认引入的工具

- Tailwind：不是禁用，而是依项目判断。旧 SCSS 代码库不用为了设计系统强行迁移。
- Motion：普通按钮 hover 用 CSS；复杂布局移动、拖放、可中断弹簧动画才引入 `motion-v` 等。
- Style Dictionary：当导出目标增多（例如 iOS/Android/Figma 插件）后可替换本包 Node 导出脚本。当前自带脚本无需依赖即能导出 CSS/TS/Rust 常量。
- 图表、表单校验、状态库：根据业务单独选，不做「大全式」内置。

## 参考资料

- Lucide v1 改名说明：https://lucide.dev/guide/version-1
- Lucide：https://lucide.dev/
- shadcn-vue：https://www.shadcn-vue.com/
- Reka UI：https://reka-ui.com/
- shadcn/ui：https://ui.shadcn.com/
- Motion Vue：https://motion.dev/docs/vue
- Web Interface Guidelines：https://vercel.com/design/guidelines
- Style Dictionary：https://styledictionary.com/

这套基础包既没有直接依赖以上全部库，也没有复制第三方组件源代码。只有 Vue 示例项目实际声明了 Vue / Reka UI / Lucide 为依赖。