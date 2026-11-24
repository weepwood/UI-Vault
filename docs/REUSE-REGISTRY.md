# UI-Vault 复用 Registry（第一阶段）

只将 UI Foundation Kit 的 MIT 原创基础文件交付为静态 Registry，不复制第三方仓库，不发布主站业务组件，不建设个人研究或双预览工作台。

## 已发布站点的入口

`registry/index.json` 相对于 UI-Vault 站点根目录。每项的 `path` 相对于该索引目录。构建后可下载：

| ID | 内容 | 依赖 |
| --- | --- | --- |
| foundation-tokens | 原始 JSON、CSS、TypeScript、Rust、生成 JSON 和 LICENSE | 无 |
| foundation-base | base.css | foundation-tokens |
| foundation-components | components.css、INTEGRATION.md | foundation-base |

协议：`ui-vault-foundation-registry`，protocolVersion 1。每个 item 包含 Foundation 版本、显式依赖、许可、文件相对路径、UTF-8 内容和 SHA-256。按依赖顺序取文件，保留原始相对路径及 LICENSE。复制入目标项目后无需在线依赖 UI-Vault。此协议不是 shadcn Registry，不提供自动安装 CLI 或已验证的 React/Vue 行为组件。

`npm run build` 先执行现有 Foundation Token 生成脚本，再生成 `dist/registry/`，`node scripts/check-dist.mjs` 校验内容与源文件一致。开发时可以直接查看构建目录，普通 dev 服务器不生成 Registry。

项目说明/源码中可导出当前资产的复用清单：明确区分单 HTML、独立 ZIP、源码参考、外部项目。文件列表不等于完整工程；外部仓库快照不代表商业许可。清单使用站点根目录相对路径，不包含未登记的本地文件内容。

后续：提供可交互 Token 浏览及导出，逐项验证独立 Demo 的依赖闭包，最后再考虑经过真正跨项目验收的框架组件安装入口。
