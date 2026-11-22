# 浏览器 Flags 指南：内容审查与维护

- 核对日期：2026-11-23
- 页面：`demos/experiments/browser-flags-guide/index.html`
- 目标：让建议准确，避免把已经过期的 Flag 继续当作当前浏览器可修改入口

## 证据的边界

1. Chromium 上游 `about_flags.cc` 里存在某个标识，仅证明上游源码有定义。实际 Chrome 稳定版 / Edge、不同平台和灰度策略不一定展示该功能。
2. Microsoft/Google 的官方帮助说明某项正式设置存在，但其位置、名称、是否默认开启可能变化；保留通用设置栏目入口，并提示用户在当前版本核对。
3. “待实机核对”不可写成“已移除”或“当前可用”。未在真实 Chrome/Edge 稳定版逐条核验，不能宣称全量验证通过。
4. `Default` 表示跟随当前版本、策略和设备条件，**不是**强制 Disabled。GPU/协议等效果不作性能保证。

## 本次清理的旧活动入口

| 曾使用的 Flag ID | 处理方式 | 原因 |
| --- | --- | --- |
| `windows11-mica-titlebar` | 移出列表 | Chromium 已在 M151 移除 Flag |
| `calculate-native-win-occlusion` | 移出列表 | Chromium 已移除该过期 Flag；窗口遮挡机制不因此整体消失 |
| `temporary-unexpire-flags-m130` | 移出列表 | 特定历史里程碑解锁开关，不应用于当前版本 |
| `enable-ip-protection` | 移出列表 | Chrome IP Protection 项目未继续推进；不与安全 DNS 混为同一能力 |
| `use-dns-https-svcb-alpn` | 移出列表 | 未能在当前上游 Flag 表核对旧标识，不等于 DNS HTTPS/SVCB 技术消失 |
| `https-upgrades` | 移出列表，相关建议由 HTTPS 正式设置承担 | 旧实验入口不能代表当前 HTTPS 优先保护 |
| `encrypted-client-hello` | 移出列表 | 未能核对当前可定位的 Flag；**ECH 协议本身并未因此失效** |
| `autoplay-policy` | 移出列表 | 当前上游 Flag 表无法确认旧入口；用户优先使用网站权限 |
| `edge-efficiency-mode` | 与 Edge 节能正式设置合并 | Efficiency mode / Energy saver 已是正式设置能力 |

另有 `enable-strict-origin-isolation` 修正为 Chromium 实际的 `strict-origin-isolation`；`self.crossOriginIsolated` 不代表此进程级 Flag 已开启。

## Edge 项目迁移

超级拖放、划词迷你菜单、购物、鼠标手势、视频增强这五项保留原资产 ID 和内容，但改为 `kind:'setting'`，不再生成未经确认的 `edge://flags/#...` 地址。它们提供 Edge 的通用设置栏目地址，显示“设置入口待核对”，不保证每个浏览器版本都能找到对应选项。

## 版本兼容

旧收藏 `edge-efficiency-mode` → `setting-edge-energy-saver`、`enable-strict-origin-isolation` → `strict-origin-isolation`、`https-upgrades` → `setting-https-first`。其余移除项不擅自映射到不同功能。旧详情链接在可安全对应时才跳转，新列表不再展示已过期条目。

## 核对来源

- [Chromium 上游 Flag 定义](https://chromium.googlesource.com/chromium/src/+/HEAD/chrome/browser/about_flags.cc)
- [Windows 11 Mica 功能移除记录](https://chromium.googlesource.com/chromium/src/+/597e54a1b91a5eac141894651f7ed3671ab33a17)
- [窗口遮挡 Flag 移除记录](https://chromium.googlesource.com/chromium/src/+/15bab8d98e6a5785a122156bd61c091b8f0dbd7e)
- [Chrome 性能设置](https://support.google.com/chrome/answer/12929150?hl=en)
- [Chrome 安全设置](https://support.google.com/chrome/answer/10468685)
- [Edge 性能和睡眠标签](https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge)
- [Edge Shopping 变化](https://support.microsoft.com/en-us/edge/changes-to-shopping-in-edge)
- [Edge 外观设置](https://support.microsoft.com/en-us/edge/visual-changes-to-microsoft-edge)
- [Edge 策略参考](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies)

## 后续维护约定

- 每次重要 Chromium/Edge 稳定版本更新后复查本指南；至少每 2–3 个月检查一次。
- 更新时检查：真实 ID、浏览器与平台、是否正式设置、默认策略、风险与来源；资料核对日改动必须有证据。
- 默认页只展示仍有意义的条目；过时项目保留在本文，不在界面里持续生成失效链接。
- 不使用覆盖旧内容的 `OVERRIDES` 表，直接维护条目主数据，避免建议与历史文案冲突。
- 修改后运行 `npm run check`，并在真实浏览器中确认搜索、分类、弹窗、复制与站内 iframe 交互。
