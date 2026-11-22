# 玻璃材质实验室

## 当前目录入口

UI-Vault 的 `glass-panel` 资产现嵌入独立维护的 [Glass Lab 在线站点](https://weepwood.github.io/glass-lab/)，源码与发布流程位于 [weepwood/glass-lab](https://github.com/weepwood/glass-lab)。原资产 ID `glass-panel` 保留，因此旧的 UI-Vault 分享链接仍可打开：<https://weepwood.github.io/UI-Vault/?asset=glass-panel>。

Glass Lab 仓库没有声明开源许可证。UI-Vault 只链接和嵌入公开站点，不复制其源码。原本地单文件演示源码保留在 `demos/components/glass-panel/index.html` 作为归档；当前发布白名单不再将该旧版 Demo 打包进站点。

## 旧版本地演示（不作为当前预览）

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


## v2 · 视觉差异与可验证的折射

优化来自截图反馈：六卡共用柔和渐变，使背景模糊和液态折射都难以辨认；统一透明度又抹平了 Mica/Acrylic/Vibrancy 的差别。

- **统一对比 / 使用场景**：对比模式确保六种材质处于相同背景；使用场景模式用可辨认的窗口、菜单、侧栏、悬浮控件模拟承载结构。窗口内容属于演示 DOM，液态折射只针对场景背景图案，不宣称折射任意 DOM。
- **背景选择**：高对比线条、纹理、网格、渐变。线条验证镜片边缘偏移，纹理验证细节损失，柔和渐变仅用于氛围。
- **独立参数**：每个材质保存自己的模糊、着色与折射强度。Mica 没有模糊和折射参数，其他非液态材质不显示可编辑折射。
- **轮廓折射**：在 Canvas 2D 为圆角矩形生成 signed-distance field (SDF) 的渐变位移图；R/G 编码 X/Y 法向位移，中心接近中性 128/128，边缘非线性增强。该图通过 SVG feImage 传给 feDisplacementMap，只在面板尺寸变化时重新计算；滑块更新滤镜 scale。
- **独立高光**：镜面光、高光与材质染色分层。鼠标高光只更新 CSS 变量；Gel 按压时用可中断的圆角变形反馈。
- **坐标一致性**：ResizeObserver 对齐背景副本与外部场景；不再使用会让液态背景副本错位的 translate/rotate hover。纹理多层 background-size 均采用同一场景坐标。
- **源码复用**：CSS 片段仅是材质参数摘要；液态材质包含运行时 SDF 生成逻辑，使用“复制完整 HTML”才能完整复现。

运行检验：npm run check；CI 的 Chromium 测试新增桌面/移动端独立 Demo 截图、轮廓图生成、材质参数隔离、背景/场景/深色模式、横向溢出等检查。Safari、Firefox 的 SVG 滤镜表现还需单独视觉验证，不能以 Chromium 测试代替。

系统规范与实现参考：
- https://learn.microsoft.com/en-us/windows/apps/design/style/mica
- https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic
- https://developer.apple.com/design/human-interface-guidelines/materials
- https://github.com/gentpan/liquidglass
- https://github.com/nordify/css-liquid-glass

此演示使用本仓库原创代码，只借鉴设计原则，不复制外部源文件与素材。


## v3 · 液态玻璃引擎重做

从 v2 的真实 Chromium 截图观察，Lens/Gel 的玻璃内部偏白且折射对高对比网格的影响不明显。原方案通过 CSS 背景副本 + SVG feImage/feDisplacementMap 进行合成；实际各浏览器对这一组合的渲染并不稳定，也不能仅靠“生成位移图成功”证明最终像素真的弯曲。

本版改为 **Canvas 2D 像素重采样**：

- 背景首先由确定性的 Canvas 绘制（lines/grid/texture/color），同一纹理贴到六个场景，保留可比性；液态玻璃从同一份无外链、无跨域污染的像素源采样。
- 液态卡片使用 Canvas 绝对定位填充（并被卡片 border-radius 裁剪）。由圆角形状的 SDF 计算法线、距边缘的距离；轮廓附近使用平滑衰减的位移采样，中心仅轻度放大。
- 采用双线性采样减少锯齿；在边缘做轻微 RGB 通道错位、方向性亮边和暗边，不对整块卡片施加强白色雾化层。
- Pointer 事件支持在场景内拖动透镜，背景由对齐的场景图层重采样，移动过程中能够直接观察网格线的弯曲；Gel 另有圆角形变反馈。
- 画布仅在参数修改、拖动、背景/场景变更与尺寸变化时重绘，鼠标悬浮高光由 CSS 变量更新，减少持续动画计算；最大渲染倍率 1.45，防止高 DPR 设备开销过高。
- 每个液态 Canvas 标记渲染状态与有效边缘像素数，Chromium 视觉验证中既检查生成成功，也检查内部颜色变化/对比度，并保存截图。

仍属于精心制作的 Web 光学近似；不会折射任意浏览器 DOM、操作系统桌面或窗口。真正的背景捕获需要后续另行构建受控渲染管线。对比系统原生 Liquid Glass 时，不应称为像素级复刻。

- **v3 视觉复核**：默认测试背景由网格改为高对比线条；Lens/Gel 默认折射改为 35 / 43，增大轮廓内折射带。自动化从 Canvas 读取像素，比较折射值变化前后的平均颜色差异，并通过桌面指针拖动验证镜片确实随鼠标移动。
