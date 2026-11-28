# Designed to Scale 设计研究

参考：[原站](https://designed-to-scale.vercel.app/#/)。本次收录为独立学习资产，不改变主站设计规则，不导入原站源码、图片或字体；原站许可与实际动画参数未核实。

| 资产 | 规范 | 演示 |
| --- | --- | --- |
| 暖纸墨线技术图册 | [DESIGN.md](../demos/experiments/designed-to-scale-atlas/DESIGN.md) | [HTML](../demos/experiments/designed-to-scale-atlas/index.html) |
| 连续开合进度面板 | [MOTION.md](../demos/effects/continuous-progress-panel/MOTION.md) | [HTML](../demos/effects/continuous-progress-panel/index.html) |

重点复用：纸面层级、墨线轮廓、语义粉彩、硬边按压反馈、轴测 SVG、共享动画时钟、真实高度裁剪、可中断弹簧与速度继承。独立参数不作为主站全局 Token；优先在实际业务组件验证后再考虑 Foundation 推广。

原演示在 Chromium 直接载入 HTML 的验收记录见各规范；UI-Vault iframe、Safari/Firefox、真实触屏和逐帧原站对照仍需验证。
