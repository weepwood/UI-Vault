# Landfolio → UI-Vault 风格整合与版本对照

## 导入范围

- 上游仓库：https://github.com/ctlsim/landfolio
- 固定上游提交：`566c8f0a97c87acd0b3ca0bcb911f53159883e63`
- MIT 许可证：`demos/experiments/landfolio/LICENSE.txt`（Copyright © 2026 ctlsim）
- 共 **201** 个独立 HTML 主题（上游 README 标明 201 个，并非泛指“200 多种”）。
- 与已有风格配对 **103** 个版本（同名 19 个，其他按明确设计语言匹配）。
- Landfolio 内部同主题归组 **12** 个版本。
- 新增风格主目录资产 **86** 个。
- 整合后 400 个风格主目录条目，设计风格类共 515 个可预览版本。

## 原始文件与导入状态

`demos/experiments/landfolio/themes/*.html` 保存 201 份原始完整 HTML；导入时与上游提交逐一比对 Git Blob SHA，结果 **201/201 一致**。将上游代码存于 UI-Vault，运行时不依赖上游仓库继续存在；部分 HTML 包含外部字体、媒体链接，离线不保证完全显示。

`demos/experiments/landfolio/designs/*.md` 是由 Landfolio 官方主题名称、描述、标签生成的 **简要归档索引**，不是上游自带的完整 Design.md（Landfolio 并无 201 份同名完整指南）。此处明确区分原始素材与本站整理，避免把索引误称原作者设计文档。

## 分类决策与复查

逐个主题的映射记录在 `catalog/imports/landfolio.json`，包含：上游文件、原标题、描述、标签、匹配模式、对应 UI-Vault 资产 ID。对照优先级：完全同名 → 明确对应的设计流派/别名 → 新增风格。**不因颜色或单一视觉标签相近就强制合并**。个别跨流派混合范例（例如 Bauhaus / De Stijl）使用主导风格归组，保留原始名称供追溯；人工审查时可以调整映射。

## 版本展示协议

单一资产保留原始 ID、标题和 V1 路径。追加 `versions` 仅存其它实现的 `id/label/preview/code/designGuidePath/description/originRepo/sourceUrl/license/projectId`。Topbar 的版本选择改变右侧 iframe、独立打开链接、源码选项和 Design.md；`?asset=...&variant=...` 可分享或通过浏览器历史返回。

## 维护规则

- 新增真实设计流派：创建新的 `catalog/assets/<id>.json`，并登记独立 Project。
- 同一流派第二种实现：在原资产 `versions[]` 追加，禁止重复添加到项目主目录。
- 登记外部模板时保留原作者与 MIT 许可证，检查依赖资源的独立授权。
- 先检查 `catalog/imports/landfolio.json` 再升级上游版本；禁止启动时自动抓取或覆盖归档文件。
- 通过 `npm run catalog:sync` 和 `npm run check` 校验生成清单、静态发布和视觉交互。
