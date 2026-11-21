# Rust / GPUI 接入

运行 `npm run build` 获得 `dist/tokens.rs`。这些是跨平台的字符串 Token，应在 GPUI 适配层转换成像素和颜色，不能直接当作 GPUI 组件。

桌面窗口、焦点、键盘交互需使用 GPUI 原生能力，视觉配色与状态规范可沿用本文档。Lucide 图标的 SVG 资源需依许可独立管理。
