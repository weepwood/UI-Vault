# Rare UI 全量组件学习展厅设计

## 目标

将 UI-Vault 现有资产 `rare-interactions`（“交互组件精选 · Rare UI 设计参考”）改为 Rare UI 全部 32 个组件的本地交互学习展厅，保留资产 ID 与预览入口，让主工作台原有收藏和链接继续有效。

本次工作按用户指示使用 Rare UI 源码。目标仓库目前公开，因此拷入的上游组件源码与编译产物只保留在用户本地学习副本；不推送到 GitHub、不部署到 GitHub Pages。Rare UI 的 LICENSE 明确要求署名和保留版权声明，并禁止单独、打包或移植后再分发组件本身。

## 信息架构与交互

- 继续使用一个 UI-Vault 资产入口，在其预览中提供组件浏览器，而不是把工作台改成 32 条目录资产。
- 组件浏览器分为 Display、AI kit、Navigation、Inputs、Feedback 五组；提供名称搜索、分类筛选和键盘可达的组件列表。
- 初次只挂载当前选中组件，避免所有动画和观察器同时运行；选择后显示组件、简短用途、上游源文件链接和必要的示例参数。
- 沿用 `rare-interactions` ID 与 `demos/curated/rare-interactions/index.html` 入口；更新标题、描述、技术栈和复用说明；将 `copyable` 设为 `false`。
- 页面保留 Rare UI 与作者的可见链接，并在本地源文件副本中包含完整上游 LICENSE 与各组件原有版权声明。

## 组件清单（32 项）

- Display：Folder component、Code Block、Gravity Letters、GitHub activity、Step player、Animated counter、Voice note、FAQ。
- AI kit：Fluid Orb、Grid Reveal、Matrix orb、Web Search、Inline AI Status、AI Prompt Box、Streaming Response、Model Picker。
- Navigation：Bounce sidebar、Hook Sidebar、Proximity Sidebar、Scroll Progress、Rail TOC、Gooey nav。
- Inputs：Duration Picker、OTP Input、Password input、Theme selector、Delete button、Task list。
- Feedback：Toast、Emoji reaction、Notification bell。
- Family drawer：作为导航 / Inputs 中的附属演示，保留其单独视图和交互，不遗漏源仓库中该第 32 个组件。

注：组件分类沿用 Rare UI 页面分组；Family drawer 在公开目录未列入五组，因此作为附属项目单独列出。

## 实现边界

- 将 32 个上游 TSX 源文件原样保存在本地学习副本中，保留版权头；本地包装层只补齐组件目录、示例数据、Next 导航兼容 shim 和 `@/lib/utils` 别名。
- 使用 UI-Vault 已有 React / esbuild 构建链打包本地展厅；Rare UI 组件所需运行时依赖限定在学习 Demo，不扩展主工作台的 React 状态或全站 UI。
- 无服务端请求与真实破坏性操作：Web Search、GitHub activity、AI、语音录制、通知、删除与异步状态均使用清晰标记的本地示例或模拟交互。
- 尊重 `prefers-reduced-motion`；检查键盘焦点、弹层关闭、窄屏布局与长内容。
- 在 CSS 顶部保留 `TUNING` 调整入口，并更新 `docs/CURATED-LABS.md` 的来源与精调记录。

## 元数据和发布边界

- 资产的唯一元数据仍是 `catalog/assets/rare-interactions.json`；同步生成的 `content/assets.json` 不直接手改。
- 资产文案注明“本地个人学习副本 / 不可再分发”，上游来源链接指向 Rare UI；源码链接指向组件目录。
- 资产保持现有 ID、入口路径和收藏兼容性；不添加 32 个主站资产条目。
- 不运行公开部署，不推送本地提交。因目标仓库公开，任何将这些复制后的源文件或 bundle 发到远端的后续操作都需先移除上游组件源码或取得 Rare UI 作者许可。

## 验收范围

- 32 项均能在本地目录中定位并呈现；来源链接可打开。
- 目录搜索、分组筛选、组件切换与键盘浏览可用。
- 组件视图按选择惰性挂载，示例操作均为本地模拟。
- 资产 ID、预览 URL 与 UI-Vault 工作台兼容。
- 按当前会话指示，不添加或运行测试；本次不做远端发布。
