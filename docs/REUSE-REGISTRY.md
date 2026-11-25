# UI-Vault 复用 Registry（第一阶段）

只将 UI Foundation Kit 的 MIT 原创基础文件交付为静态 Registry，不复制第三方仓库，不发布主站业务组件，不建设个人研究或双预览工作台。

## 已发布站点的入口

`registry/index.json` 相对于 UI-Vault 站点根目录。每项的 `path` 相对于该索引目录。构建后可下载：

| ID | 内容 | 依赖 |
| --- | --- | --- |
| foundation-tokens | 原始 JSON、CSS、TypeScript、Rust、生成 JSON 和 LICENSE | 无 |
| foundation-base | base.css | foundation-tokens |
| foundation-components | components.css、INTEGRATION.md | foundation-base |

协议：`ui-vault-foundation-registry`，protocolVersion 1。每个 item 包含 Foundation 版本、显式依赖、许可、文件相对路径、UTF-8 内容和 SHA-256。按依赖顺序取文件，保留原始相对路径及 LICENSE。复制入目标项目后无需在线依赖 UI-Vault。此协议不是 shadcn Registry；目前提供本地安装 CLI 与独立验收的 React/Vue 源码适配器（见下文），不自动安装运行时依赖。

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

## 可复现安装验收记录

#105 原提交 04cb815a 的 CI 45414603355 实际通过：从仓库完整锁文件复制至隔离目录，执行 npm ci --ignore-scripts，cmp 锁文件无变化；React/Vue 编译、受控与非受控 Select、禁用选项、Dialog/Popover 焦点、390px 边缘碰撞均通过。目标工程依然自行安装依赖；Registry 只交付源文件和许可证，不携带 node_modules。可在本仓库以临时目录复制 tests/registry-runtime/package{,-lock}.json，再 npm ci，运行 node scripts/verify-registry-frameworks.mjs <临时目录> 与 python scripts/verify-registry-runtime.py <临时目录> 复现。主站依赖不变。

下一候选：本地 CLI 新增 `--plan`（用法：`node scripts/install-registry.mjs --plan dist/registry /path/to/project foundation-react-primitives`），仅输出依赖闭包、模块版本、运行时要求、文件哈希与目标路径，不创建目录、不执行 npm install。实际安装的 REGISTRY-LOCK.json 增加 modules/runtime，保留原协议版本和字段；不同模块对同一运行时声明不一致时保守拒绝，不尝试自动解 semver。新增测试待 CI。

## Foundation 源码工程 ZIP（候选）

`downloads/ui-foundation-kit-project.zip` 是与静态 Demo ZIP、Registry 单模块安装、外站整仓快照不同的交付物。固定白名单包含 Foundation 自有 Token 源、生成 CSS/TS/Rust/JSON、构建检查与安装脚本、静态 Demo、React/Vue/GPUI 适配器及原许可。归档带 SHA-256 清单，构建检查在临时目录解包后离线重新生成 Token 并逐字节比对。Vue 示例已随 ZIP 提供完整锁文件并执行严格 npm ci 和独立构建验收；React/GPUI 是适配源码而非完整应用。

Foundation Vue 独立构建候选：固定 Vue/Reka 为已验证版本。独立 workflow 从实际 Foundation ZIP 解包，若仓库缺锁，仅生成候选锁 Artifact；从此锁 npm ci、运行 vue-tsc/Vite 并启动静态产物做真实 Chromium 冒烟。必须将实际生成锁文件审查提交并将其纳入 ZIP 白名单，再执行严格 npm ci；未完成不得声称完整可复现。

正式锁文件候选：从真实 Artifact 14936578027 提取并逐字节核对 SHA-256/Git blob；121 依赖项全部 npm 官方源并含 integrity。ZIP 现在要求 adapters/vue/package-lock.json；独立 workflow 比对仓库与解包锁，严格 npm ci，构建后比对锁未变并运行浏览器。原候选已完成实际 Vite 7.3.8 构建与 Chromium 操作，最终锁定版待 CI。禁止无锁降级。


## 安装后的完整性复验

从可信的本地 Registry 安装后，可用相同模块列表只读核验：

```bash
node scripts/install-registry.mjs --verify dist/registry /path/to/project foundation-react-input foundation-vue-switch
```

输出 JSON 包含 verified、checked、total 和 issues（文件路径与原因：missing、modified、unsafe、unreadable、lock-mismatch）。完整一致退出码为 0，任何差异退出码为 1。以可信 Registry 的实际依赖闭包、版本、运行时要求与字节哈希为基准，而非相信安装目录中可被修改的 REGISTRY-LOCK.json。不会覆盖、修复、删除文件或安装依赖；有意修改源码也会被报告为差异。仅检查已登记交付文件及锁文件，不扫描额外工程文件，也不等于运行时/许可证合规审核。拒绝符号链接、Windows 保留文件名及大小写目录冲突；请在静止的本地目录运行，避免并发改写。当前包含 modules/runtime 的 v1 锁文件结构保持兼容；更早缺少这些字段的锁会被报告为不一致，不会自动迁移。

## 工作台模块浏览入口

打开 UI Foundation Kit → 项目说明 / 源码 → 源代码 → 浏览 Foundation Registry。仅此时读取正式静态索引，按基础 CSS、React、Vue 分类选择模块，查看安装顺序、声明的运行时依赖和模块 JSON。复制预检、安装及复验命令前，将 ./my-project 替换成已存在的目标父目录；在可信仓库根目录先运行 npm run build。浏览器只展示元数据，不运行安装、不验证实际文件哈希；CLI 仍是最终权威。开发源站未生成 Registry 时给出重试与构建提示，其他资产仍保持原有交付方式。

## 组合交付方案

构建生成 registry/profiles.json：css、react、vue 三种组合。每种由原有 planRegistryInstall 解析真实模块及依赖、文件哈希、运行时和预检/安装/复验命令。React 复用已锁定 Radix 原语，Vue 复用已锁定 Reka UI；不增加运行时，不承诺 GPUI 适配器可安装。组合仅安装源码快照，不包含 node_modules 或完整宿主工程；需要完整独立工程请使用 Foundation 源码工程 ZIP。目标父目录必须存在，不覆盖既有 ui-foundation，使用同一 requested 列表复验。
