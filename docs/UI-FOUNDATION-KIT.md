# UI Foundation Kit 作为 UI-Vault 子项目

完整源码：[subprojects/ui-foundation-kit](../subprojects/ui-foundation-kit/)。

预览独立入口：[`demos/experiments/ui-foundation-kit/index.html`](../demos/experiments/ui-foundation-kit/index.html)。

## 接入现有仓库

```sh
cd subprojects/ui-foundation-kit
npm run check
node scripts/install.mjs /absolute/path/to/your/project
```

脚本仅在目标项目下创建 `ui-foundation/` 目录，不修改目标项目源代码。参见 [接入说明](../subprojects/ui-foundation-kit/INTEGRATION.md)。

## 为什么采用子项目目录

- `subprojects/ui-foundation-kit/`：可独立构建、移植的源码，默认不进入 GitHub Pages 构建白名单。
- `demos/experiments/ui-foundation-kit/index.html`：UI-Vault 目录登记的可运行预览，白名单部署。
- `catalog/assets/ui-foundation-kit.json`：资产信息唯一事实来源。
- `content/assets.json`：由 catalog 自动生成的索引，不应手动维护。
- `tests/ui-foundation-kit.test.mjs`：保证构建脚本在 UI-Vault 主仓 CI 内运行。

与主站保持独立，**不会改变左侧目录 / 右侧大面积网页预览的布局**。
