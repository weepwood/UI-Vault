# 目录质量、运行证据与交付后续

基于 #98 的候选提交独立开发；不扩大 v0.5.0 验收范围。合并前必须先收口 #98 并同步实际主分支。

- 真实目录 528 项：316 项空标签（其中 314 来自 website_designs），386 项无受控风格标签。仅 12 项名称明确的图鉴增加人工映射，所有 design-style 类型派生内容标签“风格主题”，未给其他项目猜测视觉风格。保留 ID、原许可、原版与衍生版本。
- 虚拟列表同实例的折叠、重排、密度变化按首行 ID + 偏移恢复。跨模式/跨页面滚动记忆尚未完成。5000 项 Chromium 测试增加 90 个 rAF 间隔样本及 JSON 产物，不设未经测量的硬件阈值。
- React/Vue Registry 依赖解析、循环和哈希验证、排他安装。React 源码在临时目录独立打包；Vue 源码已安装测试，未完成编译和交互验收。
- editor-shell、warm-workbench：元数据为原创示例，HTML 内嵌 Lucide ISC 声明，无外部运行时 src/href；根 MIT 仅覆盖原创代码。新增显式单文件 ZIP，保留复制 HTML，附根许可和哈希清单；现有隔离运行用例改为从真实 ZIP 解包。其他素材许可未逐项核实，不扩大打包。
- 预览：仅 Foundation 本地合作 Demo 接入一次性随机 challenge/ready，校验当前 iframe WindowProxy、opaque origin、资产 ID、版本与 nonce；第三方 HTTP 响应证据只用于工具栏提示，不声称可交互。新增阻塞首次请求、超时、显式重试、伪造消息拒绝及收藏不重建的真实 Chromium 场景；尚待 CI。未接入任何外部站点的 ready 协议。

全量 CI 未通过前不得合并。不得宣称尚未执行的真实浏览器结果。

初次 #99 CI 45405500268 单元测试通过；React Hooks immutability 拒绝对 DOM prop 直接赋值，改用原有 scrollTo DOM 方法，不降低检查门槛。#98 已完整 CI 通过并合并；真实 Chromium 5000 项 / 100 组挂载 13 行，325/325 单元测试、21 个交互场景通过。v0.5.0 正式工作流 45405533300 尚在执行。

独立框架验收新增 registry-runtime.yml：从实际 Registry 安装到临时目录，固定 Vue 3.5.24/编译器版本，编译已有 Vue SFC 与 React JSX，Chromium 在禁用外部网络条件下验证点击、Enter、禁用、加载态；临时 Vue 传递依赖锁文件作为 CI 产物保留，未修改主站依赖。该 CI 尚未完成，完整框架工程/锁文件交付仍待推进。
