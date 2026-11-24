# 合作预览协议 v1（现有本地实现及外站接入边界）

## 现有证据

#99 的 Chromium 通过首次请求阻塞、12 秒超时、显式重试、Foundation ready 与伪造消息拒绝。生产工作流 45406886301 的 HTTP 探测覆盖 528 项目录，记录 42 个 HTTP 可达外站、1 个明确禁止嵌入；该证据不是实际可交互证明。

## 本地握手

- 仅登记的 UI Foundation Kit 接入 `ui-vault:preview-ready` v1，主站在 load 时发送 probe（assetId + 一次性 128 位 nonce）。
- 子页只接受直接父窗口、父窗口 origin 与本地 URL origin 一致的消息，初始化完成后回传 ready。
- 主站校验当前 iframe WindowProxy、opaque origin `null`、协议版本、assetId、nonce；成功后销毁 challenge。
- 不发送用户数据、cookie、认证信息或任意代码；不启用 allow-same-origin。
- ready 仅说明合作页面声明已完成初始化，不证明所有功能、视觉、可用性或安全性。

## 外站合作（尚未启用）

必须由站点维护者明确同意，分别审查来源 URL、嵌入权限、重定向、协议版本、声明的初始化条件和响应消息。opaque sandbox 中 event.origin 为 null，WindowProxy 与 nonce 只能确认当前窗口响应，不能证明导航后的最终来源；如需来源身份保证，另行设计可信来源绑定机制，禁止通过放宽 sandbox 简单规避。未接入的外站继续显示 HTTP/响应头证据及其过期状态，不标为 ready。新增合作项必须有真实浏览器测试（重定向、错误、超时、重复与伪造消息），保持原站打开入口。
