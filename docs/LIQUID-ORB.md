# 液态玻璃球（Liquid Orb）

此效果源自用户提供的 WebGPU / WGSL 单文件示例，展示入口为 demos/components/liquid-orb/index.html。

## 交互与预览

- UI-Vault 中选择「界面组件 → 液态玻璃球」，或独立打开 Demo（建议使用 HTTPS 或 localhost，以满足 WebGPU 的安全上下文要求）。
- 状态：静置 / 思考；流速 0.25–2 倍；可开关玻璃外壳与播放动画。
- 页面隐藏时不持续渲染；用户暂停时停止连续 GPU 帧提交；最高约 40 FPS，渲染 DPR 上限为 1.5。
- 遵守 prefers-reduced-motion：系统偏好减少动画时默认暂停；WebGPU 不可用时显示标识明确的静态球体。

## 控制接口

window.liquidOrb.getState()
window.liquidOrb.setState('idle' | 'thinking')
window.liquidOrb.setPlaying(boolean)
window.liquidOrb.setGlass(boolean)
window.liquidOrb.setSpeed(number)
window.liquidOrb.setAudioBands({low, mid, high, all})

音频接口接收外部归一化频带；此 Demo 不申请麦克风权限。

## 集成与许可边界

Shader、原始两组 136-float uniform 数据和渲染管线来自用户所提供文件；为兼容主站 iframe 沙箱，所有代码留在单个 HTML，不需要外部 JS / CSS 网络请求。

上传源码没有附带第三方来源网址和许可证，因此元数据不将它标成 MIT 或原创开源代码。copyable=true 仅表示演示技术上是可完整复制的单文件，不代表取得额外的第三方再分发许可。
