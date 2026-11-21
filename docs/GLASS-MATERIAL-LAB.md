# 玻璃材质实验室 · Glass Material Lab

入口：UI-Vault 中选择「柔光玻璃卡片」，或打开 https://weepwood.github.io/UI-Vault/?asset=glass-panel 。

## 演示范围

同一个独立 HTML 文件展示六种卡片：原有 Soft Glass、Windows 11 Mica、Windows 11 Acrylic、macOS Vibrancy、Liquid Lens、Liquid Gel。

| 效果 | Web 实现 | 设计语义 | 约束 |
| --- | --- | --- | --- |
| Soft Glass | 半透明底色、backdrop-filter、边缘光 | 卡片与轻量浮层 | 保证背景上的字可读 |
| Windows Mica | 不透明染色渐变，不启用 backdrop blur | 持续存在的窗口背景 | 只近似外观，不读取真实桌面壁纸 |
| Windows Acrylic | 背景模糊、微弱细噪点、半透明染色 | 菜单、快捷设置、临时界面 | 浏览器无法调用 Acrylic Brush |
| macOS Vibrancy | 高饱和模糊与背景透光 | 侧边栏与浮层 | 不等同于 AppKit NSVisualEffectView |
| Liquid Lens | 背景副本对齐，SVG feDisplacementMap，折射与高光 | 少量悬浮操作 | 仅对本页提供的渐变场景折射 |
| Liquid Gel | 更强的位移、非均匀圆角、指针高光 | 特色交互控制 | 避免大量同时渲染 |

用户可选择彩色/网格背景、浅色/深色、模糊、材质浓度、折射强度；选中卡片可查看说明和 CSS 片段，使用复制按钮。支持键盘、屏幕阅读器播报、较小视口和 reduced-motion；不依赖 CDN、WebGL 或第三方代码包。

## 参考资料与版权

系统设计官方材料：

- Microsoft Mica：https://learn.microsoft.com/en-us/windows/apps/design/style/mica
- Microsoft Acrylic：https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic
- Apple NSVisualEffectView：https://developer.apple.com/documentation/appkit/nsvisualeffectview
- Apple Liquid Glass：https://developer.apple.com/documentation/technologyoverviews/liquid-glass

参考的开源浏览器实现（只借鉴视觉/技术思路，未复制源文件）：

- cameronrye/frostpane · MIT：https://github.com/cameronrye/frostpane
- dpawlikowski/liquid-glass · MIT：https://github.com/dpawlikowski/liquid-glass
- IshiakiZ/liquid-glass-web · MIT：https://github.com/IshiakiZ/liquid-glass-web

演示本体为原创。内嵌 Lucide/Feather 图标沿用原 Demo 完整 ISC/MIT 版权声明。系统产品名用于描述对照来源，不表示官方授权或像素级复刻。

## 工程注意事项

- 不改 glass-panel 资产 ID、预览地址、收藏键、React 工作台或部署白名单。
- 采用单文件 demos/components/glass-panel/index.html，保持复制与独立预览能力。
- 折射采用对齐的同源 CSS 渐变副本，背景可以切换，但不能直接透视任意复杂 DOM 或桌面窗口；页面明确告知限制。
- ResizeObserver 只负责重新对齐 SVG 作用的背景副本；指针高光仅使用 CSS 变量，不做重排驱动的弹性形变。
- 在不支持 backdrop-filter 的浏览器中退化为实色背景；系统设置减少动效时取消变形和 hover 位移。
- 变更后运行 npm run check 与独立 Demo 的浏览器交互测试；CI 的视觉基线不自动保证新 Demo 的视觉效果。
