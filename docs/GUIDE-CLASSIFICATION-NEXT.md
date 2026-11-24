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

CI 45407378059 首轮单测的搜索键盘回归失败：过严输入框事件过滤拦截已有键盘导航委托。修复为只保留实际可聚焦按钮的原生按键行为，原有搜索导航测试不变。

独立布局候选：warm-workbench 的 7 项色彩与布局参数接入相同安全消息协议，CSS/JSON 快照导出；初始 CSS 默认值与原版一致，新增 Chromium 应用与重置检查。外站合作协议文档见 PREVIEW-COOPERATION.md。此分支基于 #100，需先验收 #100 后同步主分支。

#100 两套 CI 已通过并合并：331/331 单测、23 个 Chromium 场景、9 个截图。同标签页刷新恢复通过，5000 项 P95 17ms。#101 首轮 332 单测、9 截图通过，布局测试误开源码标签页，修正为页面信息标签页；不降低测试门槛。已核对 #100 squash 树与原候选完全一致并同步主分支。

#102 候选：逐篇读取 22 项原始指南，分类证据及审计脚本入库，剩余 268 项无显式标签；Radix/Reka 原语 Registry 扩展（四类 × 双框架），固定直接依赖并新增独立键盘/焦点/选择验收。以 #101 修复提交为基线，不先于 #101 合并。

#101 修复后 332/332 单测、9 截图、24 交互全部通过，暖色参数应用/重置/iframe 稳定性通过并合并。#102 首次独立框架构建发现 Vue Select 渲染括号语法错误，改为分层 slot 渲染并同步等价 squash 主分支，保留测试断言。

#102 第二轮独立构建通过，真实 React Dialog 关闭后即时焦点断言失败；改用 Playwright 等待真实焦点恢复（5 秒上限），仍严格要求焦点返回触发按钮，不删测试或固定 sleep。

#102 第三轮独立运行已通过 React Dialog 实际焦点恢复及 Select 选择，Popover 精确文本定位失败（内容为文本节点，与关闭按钮共同位于浮层）。为测试内容提供独立元素，明确断言展开状态、内容可见、Escape 关闭和焦点返回。尚需实机确认。

#102 45411161667 React 全部原语通过，Vue Select 选择后的即时文本断言失败。改为受控值及事件结果与真实可见标签双重断言，新增禁用选项语义测试，等待 Vue 渲染收敛。
