# Style Atlas → UI Vault：视觉主题迁移

- 源仓库：https://github.com/weepwood/style-atlas
- 本批次：30 套视觉主题，完整保留名称、说明、适用范围、风险、五色配色与 Token。
- 资产：`catalog/assets/atlas-*.json`（唯一权威目录元数据）。
- 独立页面：`demos/experiments/atlas-*/index.html`，可通过 `?asset=atlas-glass` 等直接在 UI Vault 预览。
- 独立设计资料：`content/tokens/style-atlas/*.json`；页面包含复制色值和导出 JSON 功能。
- 原始预览样式：`assets/style-atlas/` 中按原 CSS 文件保留，主题可以独立维护样机和元数据，但共享这些只读展示样式，因此 `copyable:false`。
- 仍保留 `style-atlas` 原有外部仓库登记与原始网站入口，不删除历史内容。
- 官方产品、平台设计不等于官方授权样式：参考案例仅为原作者教学模拟；真实第三方 Logo/素材不做镜像。
- 授权：源仓库未含 LICENSE，不能推断为 MIT；保持来源说明。
- 范围：本批次迁移主视觉主题。客户端案例与 Frame Lab 案例计划在后续单独拆分为不同资产，避免与主题混淆。
