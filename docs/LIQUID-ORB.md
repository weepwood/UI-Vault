# WebGPU 液态玻璃球与 Thinking 对话框

## 入口

- 独立液态玻璃球：`demos/components/liquid-orb/index.html`
- 图片风格的 Thinking 胶囊对话框：`demos/components/liquid-orb-thinking-dialog/index.html`
- 对话框可复用源码：`demos/components/liquid-orb-thinking-dialog/dialog.js`、`dialog.css`

## 加载行为

原版使用 CSS 绘制 `.still` 球形占位，WebGPU 初始化前就会显示一个假的圆球。现已移除该占位：

1. 初始化只显示渐变条和当前阶段文字；canvas 在 GPU 就绪前保持不可见。
2. 使用实际阶段通知：检测 WebGPU、连接适配器、初始化设备、编译 WGSL、准备首帧、等待 GPU 队列。
3. 完成第一次 GPU 提交并等待 `device.queue.onSubmittedWorkDone()` 后才显示真实渲染内容。
4. WebGPU 不可用或设备异常时显示错误与“重新尝试”，不再用圆形假图冒充真实效果。
5. 阶段进度是离散工作步骤的提示，不是预测的耗时百分比；不会使用定时器虚构进度。

## 使用对话框

将 JS、CSS 和 `liquid-orb` Demo 一起部署在原有相对目录结构；以下导入路径为示例：

```html
<link rel="stylesheet" href="./liquid-orb-thinking-dialog/dialog.css">
<script src="./liquid-orb-thinking-dialog/dialog.js"></script>
<script>
  const dialog = window.createLiquidOrbDialog({ text: 'Thinking...' });
  dialog.show();
  dialog.setText('Processing...');
  dialog.setState('thinking'); // 也支持 idle
  // dialog.close(); dialog.retry(); dialog.destroy();
</script>
```

考虑到 UI-Vault 内部预览使用隔离的 iframe，组件提供经典脚本的 `window.createLiquidOrbDialog` 接口，避免从 opaque origin 导入外部 ES Module 的 CORS 问题。模块通过相对 URL 加载 `../liquid-orb/index.html?embed=1`：复用原 WGSL 和 WebGPU 渲染，不复制着色器，也不需要第三方库。对话框与 iframe 通过来源窗口限定的 `postMessage` 通信，只有真实的 `ready` 消息到达后才淡入玻璃球。

## 可访问性及性能

- 对话框支持 Escape、遮罩点击及关闭按钮；打开时聚焦关闭按钮、Tab 在可操作控件间循环，关闭后恢复焦点。
- 屏幕阅读器可感知初始化阶段和失败状态；不支持 WebGPU 时提供重试操作。
- 检测 `prefers-reduced-motion`，尊重减少动态效果设置；关闭对话框时通过控制消息暂停 WebGPU 动画。
- 与主站 React 业务无耦合，适配现有沙箱 iframe 预览。主站和对话框的玻璃球 iframe 显式使用 `allow="webgpu"` 委派图形权限，同时保留 `sandbox="allow-scripts"`，不授予 `allow-same-origin`。

## 许可证说明

玻璃球 WGSL 与 uniform 来自用户提供的文件，原始许可证未注明。对话框布局与控制代码在本仓实现；在其他项目中分发底层 WGSL 之前，应确认其原始授权。对话框为多文件组件，资产元数据设为 `copyable:false`。
