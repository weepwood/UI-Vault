# React 接入

React 项目建议使用 shadcn/ui 和 Radix primitives 实现复杂可访问性交互。复制本包的 `dist/theme.css`、`styles/` 和语义 Token，在 React 入口按顺序导入。不要把 Vue 运行时代码带入 React。

图标统一使用 `lucide-react`；复杂动画按需使用 Motion。
