# Demo 参数协议 v1

首个试点仅为 `ui-foundation-kit` 的原始本地路径。资产 ID 和 preview 必须完全匹配；外站与未登记 Demo 不支持。主站不获得 same-origin 权限，不读取子文档，也不接受任意 CSS、URL 或代码。

消息字段：channel = ui-vault:demo-parameters，version = 1，assetId，action，requestId；apply 带 values。动作 read/apply/reset；子页回应 state（完整参数）或 error。父页核对当前 iframe、contentWindow、opaque origin "null"、requestId；子页核对直接父窗口与同站点 origin。由于目标子页为 opaque origin，父页发送必须使用 "*"，但只发送非敏感的白名单参数。3 秒超时允许重试。不使用消息进行导航、存储或代码执行。

`assets/core/demo-parameters.js` 是字段、校验与导出逻辑来源；单文件 Foundation Demo 内嵌同一核心，测试检测漂移。颜色只允许六位 HEX，数值必须是指定整数范围。协议通用校验预留 boolean/enum；本次实际字段为 color/number。导出 12 项变量快照，不是完整主题，不自动生成 hover 或 WCAG 保证。重置移除覆盖值。当前编辑不持久化，不改变公开资产源数据。新增资产必须显式登记并逐个验收。

## 第二批效果试点

Backdrop Studio (`aurora-field`) 9 项：42 种效果、10 套配色、强度、速度、柔化、动态/静态、颗粒、暗角、跟随。Liquid Orb (`liquid-orb`) 3 项：流速、播放、玻璃外壳。后者沿用现有渲染控制函数并尊重 reduced-motion；未纳入旧别名及外部站点。参数 JSON 是快照，不是完整渲染源码。构建及发布验收检查三项单文件 Demo 的 HTML 静态引用，不能证明动态 JS 依赖闭包。