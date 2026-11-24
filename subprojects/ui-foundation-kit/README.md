# UI Foundation Kit

一套面向 Vue、React、Tauri 与 Rust/GPUI 的**轻量、现代、跨项目复用**设计基础。根据 UNDEFAULT v2 设计语言重新整理，不要求使用统一的前端框架。

## 快速使用

**1. 直接查看静态 Demo**：打开 `demo/index.html`。无 npm 依赖。

**2. 构建设计 Token**（仅需 Node.js >=20）：

```sh
npm run build
npm run check
```

**3. 接入已有项目**：

```sh
node scripts/install.mjs /absolute/path/to/my-project
```

参考 [INTEGRATION.md](./INTEGRATION.md) 在应用入口导入 CSS。

**4. Vue 示例**：

```sh
cd adapters/vue
npm install
npm run dev
npm run build
```

> Vue 示例需要联网安装依赖，独立 Vue 示例目前没有锁文件；需要自行安装依赖并验证构建。Registry 适配器另有独立锁定的 React/Vue CI，不等同于该示例。

## 目录

| 路径 | 作用 |
|---|---|
| `tokens/foundation.json` | 尺寸、字号、间距、圆角和动效的源文件 |
| `tokens/themes.json` | light/dark 语义色与 4 套品牌强调色 |
| `dist/theme.css` | 自动生成的 Web 设计变量 |
| `dist/tokens.ts` | 自动生成的 TypeScript 常量 |
| `dist/tokens.rs` | 自动生成的 Rust 字符串常量 |
| `styles/` | 不依赖框架的基础 CSS 和组件 recipes |
| `demo/` | 不依赖运行时的交互式组件工作台 |
| `adapters/vue/` | Vue3 + Vite + Reka UI + @lucide/vue 的示例工程 |
| `adapters/react/` | React/shadcn/ui 接入示例 |
| `adapters/gpui/` | GPUI Token / 图标 / 交互迁移说明 |
| `scripts/install.mjs` | 将可复用基础层拷贝到已有工程 |
| `AGENTS.md` | 给 AI 编码 Agent 使用的审美与质量约束 |
| `STACK.md` | 技术选择和适用边界 |

## 设计约束

- 不使用无意义的装饰文案、伪数据和大量渐变背景。
- 普通组件先用 CSS + 语义 HTML；复杂交互使用成熟原语（Vue 用 Reka UI）。
- 默认系统字体，不绑定外部 Web Font。
- 强调色默认 Indigo；可切换 Slate / Teal / Clay。
- 保持浅深主题可用，所有主要文本和按钮的色彩对比度目标达到 WCAG AA（4.5:1）。
- icon-only 按钮提供 accessible name；尊重减少动画偏好。

设计规则见 [AGENTS.md](./AGENTS.md)，使用方式见 [INTEGRATION.md](./INTEGRATION.md)，第三方许可见 [THIRD_PARTY.md](./THIRD_PARTY.md)。

本包的源代码采用 MIT 许可证。