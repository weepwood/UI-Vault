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

## 框架源码快照（第二阶段）

新增 foundation-react-button 与 foundation-vue-button，依赖 foundation-components，登记目标运行时范围及源文件哈希。React 按钮采用原生 button；Vue 复用现有 Vue 3 示例的 UiButton.vue，均使用同一 Foundation CSS，不提供自研复杂交互。目标项目仍负责安装框架、构建、运行验收；不等于 shadcn CLI 安装包。ZIP 的 MANIFEST.json 列出入口、许可说明、实际文件字节数和 SHA-256（不包括清单自身）。

第二轮：`scripts/lib/registry-install.mjs` 提供依赖闭包、循环检查、文件哈希、路径冲突与排他安装；测试复制 React/Vue 文件并独立打包 React 适配器（React 运行时仍由目标项目提供）。Vue 编译及真实交互仍待验证。

独立运行验收入口：`.github/workflows/registry-runtime.yml`。仅相关文件变更触发，使用临时安装目录真实编译 React JSX 和 Vue SFC，随后 Chromium 检查原生按钮行为；不将测试站点发布为正式资产。Vue 直接依赖固定版本，传递依赖锁文件由本次运行产物留存。

#99 独立 React/Vue Button 验收 45406085215 成功；新增 Input/Switch 原生适配器待独立运行检查。复杂 Tabs/Dialog 优先采用 Radix/Reka，尚未引入未锁定依赖。

安装 CLI（在仓库根目录，先完成构建）：`node scripts/install-registry.mjs dist/registry /path/to/project foundation-react-input foundation-react-switch`。源目录必须是用户信任的本地 Registry；哈希检测内容一致性，不证明远端身份。目标目录排他创建，生成 REGISTRY-LOCK.json 固定版本、请求模块与文件哈希。Vue 对应 foundation-vue-input、foundation-vue-switch；框架依赖由目标工程安装，仍需通过独立验收。

复杂原语候选：foundation-react-primitives / foundation-vue-primitives，各包含 Tabs、Dialog、Select、Popover，分别声明 radix-ui@1.4.3 与 reka-ui@2.10.1，保留共享 Token/CSS 与各自许可证。独立 CI 安装固定直接版本并保留传递依赖锁文件；目标工程需自行安装依赖，CLI 不执行 npm install。尚待运行验收。

#105：成功运行 45411525324 的原始 package-lock.json（116 条记录，SHA256 86d9525e740fd2870db9b17c1b992efaad3139fb3040f05a43e39b68ea6dddaf）纳入 tests/registry-runtime/，Git blob 8b66c219a39fe1c0482e74dcda781eb880516912 与实际产物逐字节一致。隔离 npm ci 禁用安装脚本，验证 lock 未被修改；主站运行依赖不变。新增非受控选择与移动边缘碰撞验收，待 CI。
