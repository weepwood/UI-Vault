# 2026-11-24 后续交接

v0.5.0 已发布；#99 已合并。以下为新候选，未经 CI 不合并。

## 第一批原始指南分类

已读取 `demos/experiments/website-designs/designs/` 中 14 篇原始指南的 Overview/Visual Characteristics；对应资产原有 `designGuidePath` 即证据位置。标签只表达指南的视觉特征，不代表逐像素审查。

- `website-style-3d-immersive`：3D 空间、暗色、光效
- `website-style-70s-retro`：复古、暖色、纹理
- `website-style-8-bit`：像素、高对比、复古
- `website-style-90s-grunge`：纹理、暗色、手工感
- `website-style-ai-generative`：生成艺术、动态色彩、科技感
- `website-style-analog-warmth`：暖色、低饱和、纹理
- `website-style-art-deco`：几何、奢华、高对比
- `website-style-art-nouveau`：自然有机、手工感、优雅
- `website-style-bauhaus`：几何、网格、极简
- `website-style-bento-grid`：网格、柔和、信息密度
- `website-style-biomorphic`：自然有机、柔和、渐变
- `website-style-biophilic-design`：自然有机、宁静、留白
- `website-style-blueprint-technical`：网格、等宽、科技感
- `website-style-botanical-maximalism`：自然有机、层次、彩色

仍有 290 项无显式标签，需继续逐批审查。其他变更：同标签页会话滚动锚点；全局搜索按 60 项扩展至最多 240；JSON 参数快照导入但需明确应用；React/Vue 原生 Input/Switch；Backdrop Studio 原创单 HTML ZIP，源 HTML 未发现外部运行时 src/href、已有隔离运行测试。下一阶段补全复杂原语、完整框架验收、跨分组/页面边界、外部合作协议。未新增研究或对比工作台。

CLI：从可信本地 dist/registry 读取，核对索引、文件路径、模块依赖与内容哈希，拒绝覆盖，生成 REGISTRY-LOCK.json；不联网、不执行源码。独立框架工作流扩展 Input/Switch 的输入、键盘与双向状态测试；新增真实浏览器刷新恢复、搜索 60→120 项验收。Tabs/Dialog 暂不自研，下一阶段锁定 Radix/Reka 后再接入。
