# Designed to Scale 设计研究

参考：[原站](https://designed-to-scale.vercel.app/#/)。本次收录为独立学习资产，不改变主站设计规则，不导入原站源码、图片或字体；原站许可未核实；V2.1 已用真实 Chromium 核实进度面板和三类按钮的运行时参数。

| 资产 | 规范 | 演示 |
| --- | --- | --- |
| 暖纸墨线技术图册 | [DESIGN.md](../demos/experiments/designed-to-scale-atlas/DESIGN.md) | [HTML](../demos/experiments/designed-to-scale-atlas/index.html) |
| 连续开合进度面板 | [MOTION.md](../demos/effects/continuous-progress-panel/MOTION.md) | [HTML](../demos/effects/continuous-progress-panel/index.html) |

重点复用：纸面层级、墨线轮廓、语义粉彩、硬边按压反馈、轴测 SVG、共享动画时钟、原生 CSS Grid 0fr/1fr 高度裁剪与反向缩短、可中断弹簧与速度继承（增强方案）。独立参数不作为主站全局 Token；优先在实际业务组件验证后再考虑 Foundation 推广。

## 2026-11-28 · 实测修正与验证

- 原站实际高度过渡是 CSS Grid 340ms cubic-bezier(.2,.7,.2,1)，透明度 220ms ease，箭头 300ms；进度条位于裁剪层内。通过 CSSOM 核实 0fr / 1fr，而非弹簧。反向的缩短时长是 CSS Transition 机制。
- 原站主按钮为浅绿实体底座、工具按钮为暖白底座；实测按下位移约 1–1.5px、阴影缩短，无 hover 上浮。两个演示已更新，原生 Grid 成为默认，临界阻尼作为增强对照。
- 本地 React 构建、发布目录检查通过（复用相同源码基线的已生成字体）；Chromium 140.0.7339.16 实际沙箱 iframe 与 390px 独立预览通过。用 `python scripts/visual-designed-to-scale.py --browser chromium` 复验。原始测量与截图仅保留在本地私有验收目录。
- Firefox / WebKit 在锁定 Playwright 1.55.0 环境缺失对应浏览器可执行文件，未启动；不修改系统权限。真实触屏、完整站点像素级复刻及跨项目生产集成仍未验收。
