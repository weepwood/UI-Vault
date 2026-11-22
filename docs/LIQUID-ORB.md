# 液态玻璃 · 单页组件演示

同一个页面展示 WebGPU 液态玻璃球和深色 Thinking 胶囊对话框，且两种视图共享同一个真实 Canvas / GPU 设备。

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

原始 WGSL 与两组 uniform 来自用户上传文件，未明确其第三方许可；不额外宣称开放授权。

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
