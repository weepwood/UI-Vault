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

## WebGPU 性能优化（2026-11-22）

- **默认均衡档**：直接打开统一演示使用 `quality=balanced`，目标 30 FPS，DPR 上限 1.0；如果没有提供参数，也默认此档。
- **节能档**：`?quality=eco`，目标 20 FPS，DPR 上限 0.75。UI-Vault 工作台 iframe 和独立复用思考对话框默认使用它，以免拖慢整个工作台。
- **高质量档**：`?quality=high`，目标 40 FPS、DPR 上限 1.5，并开启原版三通道折射采样；适合独立展示、GPU 余量充足时使用。
- 普通与节能档将原来每像素三次完整流体求值改为一次主采样，并在边缘使用轻量色散近似；高质量档保留三通道玻璃折射。
- 启动仅异步编译基础玻璃渲染管线；粒子丝带管线进入相应样式时才编译。粒子实例上限根据档位限制。
- 每次渲染等待上一批 GPU 命令提交完成后再继续调度，不持续向繁忙 GPU 排队；采集 GPU 队列完成延迟并在持续超预算时自动降低 DPR，之后必要时将 FPS 降至 20/15。**该延迟不是 GPU timestamp-query 的精确耗时**。
- Canvas 不在当前视口、浏览器标签页不可见或组件关闭时停止连续绘制。重新进入视口后恢复；`pagehide` 与渲染失败时释放资源并解绑可见性观察器。
- 可通过 `window.liquidOrb.getPerformance()` 查看当前质量档、目标 FPS、实际使用的像素倍率、可见状态和 GPU 提交状态，用于 DevTools 排查。
- 质量参数在初始化时确定，修改 URL 的 `quality` 需要重新加载。未改变 `setState`、`setPlaying`、`setGlass` 等既有复用接口。

### 性能验收

分别以 `?quality=eco#dialog`、`?quality=balanced#dialog` 和 `?quality=high#dialog` 打开单页，观察交互响应、帧率、GPU 使用与首帧时间。还要对比 UI-Vault 工作台内部预览，验证项目切换或隐藏预览后 GPU 活动停止。

注意：自动降级是保守的排队完成延迟反馈策略；在设备上实际测得的 GPU 绘制耗时、浏览器硬件加速配置和多个 WebGPU 页面的资源竞争仍需用 Chrome DevTools 或其他工具验证，不能仅凭静态测试宣称达到某个 FPS。
