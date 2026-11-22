# 液态玻璃 · 单页组件演示

同一个页面展示 WebGPU 液态玻璃球和深色 Thinking 胶囊对话框，且两种视图共享同一个真实 Canvas / GPU 设备。

## 原版来源与授权说明

本演示所使用的液态玻璃球渲染效果，原版项目为 **[Liquid Orb Editor（LerSent001/orb）](https://github.com/LerSent001/orb)**，作者 **LerSent001**。

- **原版编辑器在线体验**：[lersent001.github.io/orb](https://lersent001.github.io/orb/)
- **原版技术方案**：React + WebGPU/WGSL + Toolcraft UI；提供预设、参数编辑、场景预览和 Web / SwiftUI 导出等功能。
- **原版代码许可证**：**MIT License，Copyright (c) 2026 LerSent001**。许可原文见 [原版 LICENSE](https://github.com/LerSent001/orb/blob/main/LICENSE)，本仓库保留的许可证见 [UPSTREAM_LICENSE](../demos/components/liquid-orb/UPSTREAM_LICENSE)。
- **UI-Vault 中的实现**：基于原版玻璃球渲染技术及用户提供的相关代码，制作了独立的 HTML/WebGPU 组件演示，并额外增加 Thinking 胶囊对话框、交互控制、主题切换、性能档位和自适应调度等集成功能。**这是改编的组件演示，不等同于原版完整的 React 编辑器**。
- **第三方组件说明**：原项目 README 指明其 `src/toolcraft` 代码另附 Toolcraft MIT 版权声明；原始条款见 [TOOLCRAFT_LICENSE.md](https://github.com/LerSent001/orb/blob/main/TOOLCRAFT_LICENSE.md)。UI-Vault 本页使用自身构建的控制界面，未将原版完整 Toolcraft 编辑器界面移入此单页。

如需原版全部编辑功能或研究其 WGSL/SwiftUI 输出实现，请直接访问上游项目。UI-Vault 不代表原作者发布的官方版本。

**在 UI-Vault 中查看原版来源**：选择「液态玻璃组件演示」或「液态玻璃思考对话框」，点击右上角「项目说明 / 源码」，即可在「项目说明」中看到「基于 LerSent001 / Liquid Orb Editor 改编 · MIT · 原版编辑器」及两个可点击链接。链接由主工作台渲染，在新标签页打开，不再放入受限的 WebGPU iframe 中。由于工作台预览仍采用 `sandbox="allow-scripts"`，不会为了这些外链增加 `allow-popups` 权限。独立 Demo 源代码仍包含原作者的完整 MIT 版权声明。


## 演示入口

- **统一页面**：`demos/components/liquid-orb/index.html`，默认「玻璃球」；在顶部切换「思考对话框」，或使用 `#dialog` 深链接直接进入该模式。
- **旧对话框地址**：`demos/components/liquid-orb-thinking-dialog/index.html` 保留作为兼容跳转，自动进入统一页的 `#dialog` 模式。
- **纯渲染嵌入**：`demos/components/liquid-orb/index.html?embed=1` 仍然保留，适配已有的内嵌 iframe/API。

## 尺寸与视觉

- **紧凑**：约 540 × 176 CSS px（在可用容器内缩放），适合界面中的小型状态反馈。
- **标准**：约 750 × 248 CSS px，默认展示。玻璃球直径约 172px，右侧文案约 31–60px，整体比例更接近参考图且减少无意义空白。
- **大尺寸**：约 890 × 290 CSS px，用于演示或更宽的页面，不再默认占用 1030px 以上宽度。
- 小于 620px 的视口会减小内边距、球体直径和文字尺寸，且使用椭圆胶囊适配窄屏；右侧过长文本按容器边界省略。
- 单独的可复用 `dialog.css` 也同步缩减默认尺寸至约 790px，并保留移动端样式。

## 对话框圆角与玻璃球尺寸一致性

- 使用同一套胶囊高度、内边距和半圆半径变量定位球体，**球体中心始终与胶囊左端半圆的圆心对齐**，不再单独硬编码球体宽度。
- 紧凑 / 标准 / 大尺寸随胶囊高度自动计算球体容器尺寸；WebGPU 绘制时仅在对话框模式稍微提升球体半径，独立玻璃球的原始材质和球体预设不变。
- 手机端按视口自适应胶囊高度和文字大小，长文案保持安全省略，避免挤压图像。
- 尺寸选择器使用统一深色菜单：桌面端向上展开，窄屏使用覆盖层和底部选择面板，避免遮挡上方输入框。支持鼠标、方向键、Home/End、Enter、Escape 和点击外部关闭；视觉隐藏的原生 select 保留已有脚本调用兼容。

## 页面交互

1. 点击顶部「玻璃球 / 思考对话框」切换原位布局，保留渲染状态；支持方向键在两个选项卡之间切换。
2. 思考对话框模式下可编辑文案、选择紧凑/标准/大尺寸，并点击「弹出对话框」进入原生 `<dialog>`。
3. 模态框通过 DOM 移动同一个 Canvas 实现，不会额外实例化 WebGPU；按 Esc 或点击关闭按钮后将其移回展示区。
4. WebGPU 初始化期间显示进度条与真实阶段提示；首帧 GPU 工作完成后再展示真实球体，不预先绘制假的静态圆球。
5. WebGPU 不可用或设备异常时显示错误和重试。

## 复用脚本

`demos/components/liquid-orb-thinking-dialog/dialog.js` / `dialog.css` 继续提供既有的 `window.createLiquidOrbDialog({text:'Thinking...'})` 接口，包括 show、close、setText、setState、setPlaying、retry、destroy。独立复用器通过隔离 iframe 加载 `?embed=1`；新统一展示页则直接复用现有 Canvas，减少多实例 GPU 占用。

```html
<link rel="stylesheet" href="./liquid-orb-thinking-dialog/dialog.css">
<script src="./liquid-orb-thinking-dialog/dialog.js"></script>
<script>
  const dialog = window.createLiquidOrbDialog({ text: 'Thinking...' });
  dialog.show();
  dialog.setText('Processing...');
  dialog.setState('thinking');
  // dialog.close(); dialog.destroy();
</script>
```

## 兼容与权限

UI-Vault 主站仅对这两个原有玻璃球资产的 iframe 配置 `allow="webgpu"`。仍然只使用 `sandbox="allow-scripts"`（不授予 `allow-same-origin`），独立 iframe 之间通过检查来源窗口的 `postMessage` 协作。单文件渲染器仍保留 `window.liquidOrb` 的原始命令接口。

原始 WGSL 与两组 uniform 由用户提供，已根据原版项目来源信息补充上游署名及 MIT 许可证。保留原版 MIT 版权与许可声明，不将 UI-Vault 的改编展示误认为上游原作者的官方版本。

## 自动适应画质（2026-11-22）

默认使用 **自动画质**（无需传入参数，也可显式传入 `?quality=auto`）。页面中新增「画质」选择器，允许随时切换「自动 / 节能 / 均衡 / 高质量」，**无需刷新页面**。嵌入 UI-Vault 工作台和独立复用的 Thinking 对话框也默认自动判断。

### 自动策略

1. **保守启动**：检测用户浏览器的 `saveData`、`hardwareConcurrency`、`deviceMemory`（不可用时不假定设备低端），仅作为起始档位提示。低资源或省流量模式先使用节能档，否则从均衡档启动。
2. **根据显示面积控制清晰度**：DPR 不只按设备倍率截断，还由实际 Canvas CSS 面积与像素预算共同约束。小型思考玻璃球允许更高像素密度，大型预览按总像素预算下降分辨率。
3. **适配 iframe 真实大小**：React 预览框通过 `postMessage(setDisplayScale)` 通知内部渲染器 CSS 缩放系数，避免“视觉上缩小但内部仍全尺寸渲染”。保留 `sandbox="allow-scripts"` 和 `allow="webgpu"` 边界。
4. **按真实负载自适应**：测量每次 WebGPU 队列提交到完成的延迟（并非准确 GPU timestamp），持续超预算时先减少折射复杂度或 DPR，再减少帧率；连续多个采样窗口有余量时逐步提高 DPR、目标 FPS 和材质精度。约 4 秒观察窗，并使用升级/降级冷却期，避免画面频繁抖动。
5. **高质量材质按需编译**：普通帧使用单次流体采样与轻量边缘色散；仅在自动判断有余量且渲染面积较小、或用户手动选择高质量时，异步编译并切换完整的三通道光学折射管线。无需创建第二个 WebGPU Canvas。
6. **尊重系统偏好**：`prefers-reduced-motion` 下默认不连续播放。页面离开视口、后台隐藏、对话框关闭后暂停绘制。

画质档位的初始设计预算（渲染总像素约束，不是实测帧率）：节能 20 FPS / 18 万像素、均衡 30 FPS / 50 万像素、高质量 40 FPS / 90 万像素。DPR 可随面积和性能进一步调整。这些值为目标上限，实际性能取决于设备、浏览器和 GPU。

### 手动与调试

- `?quality=eco`：固定节能材质/上限，适合指定低功耗；`?quality=balanced`：均衡；`?quality=high`：异步加载高质量材质；`?quality=auto`：允许动态升降档，默认。
- 页面选择器手动改变画质时优先遵从用户选择；切回「自动」即可恢复性能反馈调整。
- 在当前演示的开发者控制台执行 `window.liquidOrb.getPerformance()` 查看 `mode`、`quality`、`targetFps`、`renderDpr`、`displayScale`、`lastLatencyMs` 和可见状态；`window.liquidOrb.setQuality('auto')` 恢复自动选择。
- 不将队列完成延迟误称为真实 GPU 绘制时间，也不承诺所有硬件可达到目标 FPS。使用 Chrome Performance、WebGPU 真机与视觉对比判断材料质量、延迟、功耗是否符合预期。

### 回归验收

CI 增加设备提示规则、DPR 像素预算、高质量材质按需编译、背压与质量升降级断言；Chromium 检验桌面/移动端画质手动切换、恢复自动、React 沙箱预览和弹窗 Canvas 复用。CI 的 WebGPU 可用性与真实硬件不同，渲染 FPS 仍需在目标设备上对照测试。

## 高质量清晰度与页面主题（2026-11-22）

### 手动高质量恢复原始视觉精度

此前的高质量渲染档虽然开启了完整色散 Shader，但仍受 **90 万总像素预算**和 iframe 缩放系数影响，导致大画布被明显降采样，玻璃球边缘高光及流体细节偏模糊。

现在 **手动选择「高质量」** 时，画布采用初始版本的 `Math.min(devicePixelRatio || 1, 1.5)` 分辨率上限，**不再受到自动像素预算或预览缩放的额外降采样**，并使用原始三通道完整折射（不根据边缘阈值省略采样）。高质量 WGSL Pipeline 仍异步按需创建，加载完成后自动切换；在此之前会显示「加载原始光学」状态，必要时先展示兼容材质。如果浏览器编译失败，显示「高清折射不可用」，不声称已启用完整效果。

自动模式仍保留按 Canvas 面积计算的像素预算及实时反馈，这与用户主动选择的高质量模式是两个不同的性能策略。用户手动选择高质量可能产生更高 GPU 开销，必要时可随时切回自动。

### 与尺寸选择器统一的画质菜单

画质选择器现在复用尺寸下拉菜单的 `size-picker / size-trigger / size-menu` 交互与视觉样式：桌面端向上展开，移动端使用底部选择面板。支持鼠标、方向键、Home/End、Enter、Space、Escape 和外部点击关闭；原生 `select#quality-mode` 仍保留为脚本兼容值源（视觉隐藏）。

### 背景主题

页面顶部增加 4 个可切换的静态背景主题：

- **曜石灰**（默认）：克制的石墨灰与冷色高光；
- **深海蓝**：蓝绿色冷调；
- **暮光紫**：低饱和紫色调；
- **暖雾白**：浅色雾面背景、深色文本和浅色组件表面。

更换主题会同步更新背景、导航、按钮、下拉列表、输入框、胶囊对话框和模态遮罩的主题色。页面不会为换色额外创建 WebGPU Canvas 或持续播放背景动画。主题可通过 `?theme=graphite|ocean|plum|paper` 指定；正常独立页面将选择存储在浏览器本地设置中。沙箱限制本地存储时仍可在本次页面访问中切换。嵌入式 `?embed=1` 保持背景透明，避免影响宿主页面。

### 验收

- 高质量在 DPR 2 的设备上显示为 1.5×，即使内容区域大于 90 万像素或宿主预览被 CSS 缩小。
- 自动模式在大画布和宿主缩小预览时仍降低像素数。
- 画质与尺寸菜单共享布局语言，桌面及移动端选择、键盘操作和关闭行为一致。
- 4 套主题均可切换，浅色模式的文字与控件对比度可读；关闭对话框、返回玻璃球页后主题状态不丢失。

## WGSL 渲染保留约束（2026-11-22）

**设计原则：保留 LerSent001/orb 的 WebGPU/WGSL 计算路径，不使用 CSS 毛玻璃、Canvas 2D 或静态图作为等价替代。**

- **渲染核心**：单文件 Demo 的内联 `shaderSource` 仍是 WGSL；`navigator.gpu`、`createShaderModule` 与 WebGPU Render Pipeline 负责最终绘制。原项目的流场、轮廓法线、折射和玻璃光照函数必须保留。
- **高质量模式**：手动选择 `high` 时启用完整三通道色散管线与原始 1.5× DPR 上限；无法编译时必须显示“高清折射不可用”，不得把降级效果标作原始画质。
- **自动与节能模式**：允许为了性能降低帧率、DPR、采样复杂度，并暂停不可见 Canvas；不应更改高质量模式的原始光学计算。
- **组件集成**：玻璃球与 Thinking 对话框共享一个 Canvas 和 WebGPU 设备。外层 React 工作台只负责参数控制、布局及嵌入权限，避免创建第二套渲染器。
- **来源差异**：UI-Vault 使用从上游 WGSL 改编的内联着色器，包含质量分档和集成调整；**不能宣称当前 `shaderSource` 与上游 `effect.wgsl` 字节级一致**。需要做原版像素一致性比较时，应以 [上游 effect.wgsl](https://github.com/LerSent001/orb/blob/main/effect.wgsl) 及其 WebGPU 管线为基准，进行相同参数和分辨率下的实机截图对照。

回归保护：`tests/liquid-orb-wgsl-regression.test.mjs` 锁定 WebGPU/WGSL 渲染入口、核心光学函数、高质量色散路径与单 Canvas 架构；现有 `liquid-orb-performance.test.mjs` 检查自适应性能与画质策略。静态检查不能替代在不同 GPU / 浏览器上的视觉和性能验证。
