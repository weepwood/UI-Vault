# 统一 UI 资产平台

UI-Vault 是唯一应用与仓库。Registry 是内部 Node 模块；Foundation 继续承担通用组件交付。真实项目源码仍由宿主维护，不自动覆盖宿主，也不生成第二套产品工作台。

## 本地完整模式

私有目录独立于所有 Git 仓库，包含 config/pilots.json（经人工批准的 Git 仓库绝对路径、固定提交、文件白名单与语义 Token 映射）和 workspace/{blobs,snapshots,pilot-index.json}。首次迁移由本地 UI-Registry V0.1 的既有提交导出这两个目录到新建私有目录；不导入 Git 历史。配置、快照、截图和研究原件均不入 UI-Vault Git。

```sh
export UI_VAULT_DATA=/absolute/path/to/private-data
npm run registry:local -- verify
npm run registry:local -- capture  # 只读取白名单固定 Git 提交；单写入者
npm run build
npm run dev:local
# 在本机浏览器打开 http://127.0.0.1:4178
```

普通 npm run dev/build 不读取私有目录。dev:local 仅读已构建 dist 与显式指定私有数据，以内存 overlay 扩充同一个资产目录。搜索“真实项目资产”或选择来源项目，打开相同三栏中的历史证据页。历史页有精确提交、快照哈希、资产修订、文件路径和哈希、原始源码和选定 Token 声明差异。来源代码只作为转义文本，不执行，不声明可安装。public catalog 与 private overlay 分离，只在本地运行时统一呈现；私有 ID 前缀保留，冲突拒绝。

安全边界：loopback + 精确 Host；拒绝跨站私有路由；无 CORS；no-store、no-referrer；私有预览 CSP 禁止脚本和网络、保持 iframe sandbox，不提供任意路径接口。仅可信本机单用户运行，不允许反向代理、LAN 监听、远程分享或公开部署。快照目录必须在 Git 之外。公开 build 不引入本地目录；私有身份拒绝进入公开构建。不要把截图、源码、项目真实数据或本地配置复制到公开目录。

## 资产分级

L1 源码/设计索引（本轮试点）；L2 实际可运行预览或截图；L3 依赖与授权闭包后的可安装候选；L4 独立运行、跨宿主验收且经人工确认的通用资产。L1 不等于 L2；现有风格变体不等于历史版本。历史快照不可变；资产身份为 project + asset，修订为文件哈希；Git 来源固定，未提交修改不采集。私有目录内可恢复历史源码，但不提供宿主自动升级或回滚。

## 验收

```sh
npm run check:fast
npm run build
node scripts/check-dist.mjs
python3 scripts/verify-local-registry.py  # 需现有 Playwright Chromium 和 UI_VAULT_DATA
```

浏览器专项使用独立 loopback 端口，验证项目深链接、原有三栏、历史证据、全局搜索、公共入口、跨站/Host 拒绝与私有对象哈希不进入 dist。截图保存到私有数据目录。源码证据不等于实际产品组件视觉验收。研究范围与复用决策见 OPEN-SOURCE-ASSET-RESEARCH.md。

隔离运行证据：可选 evidence/index.json 与固定 PNG，必须绑定项目、资产、快照、修订及来源 commit，服务端校验 PNG SHA-256，且仅以内嵌图片展示在本地档案。采用固定组件源码、合成数据及本机依赖的隔离测试不代表完整产品运行、依赖闭包或交付资格。

## 第二批：真实交互、研究关系和复用试验

在现有 Topbar 使用「选择资产预览」，可在历史源码档案与通过验证的固定提交运行展厅之间切换。复用原 MRR DataExamples（筛选/数据面板）和真实分页器、原 TODO ComponentGallery（选择、日期、公共弹窗）及 EntityDialog。固定提交、合成数据、隔离构建，既不是整个宿主应用，也不与现有视觉变体版本字段混用。MRR/TODO 组件来源均来自既有快照；FrameSlice 尚无已定位的本地工作区，不以其他仓库代替。历史证据和复用候选仍为私有。

```sh
# 使用现有宿主依赖，避免重新安装。实际路径在本地设置。
export UI_VAULT_DATA=/absolute/path/to/private-data
export MRR_NODE_MODULES=/absolute/path/to/mrr/node_modules
export TODO_NODE_MODULES=/absolute/path/to/todo/node_modules
python3 scripts/build-private-previews.py
python3 scripts/verify-private-previews.py
npm run registry:local -- search 'TODO 选择器'
npm run registry:local -- inspect private-todo-smart-select
npm run registry:local -- profiles
# 显式读取某一个已登记的快照文件（仅输出到本地 stdout）
npm run registry:local -- source <asset-id> <snapshot-hash> <registered-file-path>
```

预览构建使用独立目录、Git 固定提交的静态 import/样式递归采集及已存在的依赖安装。构建候选与验证索引分开；运行包内容寻址、固定资产/快照/修订/内容哈希；不向公开构建写入任何私有内容。运行态使用受限 iframe、精确脚本哈希 CSP、禁止网络连接、禁止表单导航及同源权限；仅通过验收的隔离运行包允许表单事件。验证候选模式仅由本地专项测试显式启用。它不是执行不可信第三方代码的通用沙箱；可信本机单用户限定仍有效。实际依赖是现有本机安装，并非重新从历史锁文件还原；静态 import 边与模板引用是候选证据，不是完整运行调用图。

同类设计研究使用既有 Catalog ID、按控件用途人工建立参考候选，点击在原目录中导航；不创建第二套目录或把参考判为兼容。设计组合通过 profiles 输出实际项目语义 Token、平台、技术栈、资产 ID，保持不同项目外观。成熟度不自动晋升。

复用试验：TODO SmartSelect 三文件原样移植到 Book3D-Studio 固定提交源码导出副本，保留宿主 SelectField API 和原样式，增加 TypeScript 声明和宿主样式类映射；实际宿主 TypeScript/Vite 构建与 Chromium 视口切换、自动厚度模式均通过。仅候选证据，原项目未改动；不构成发布、全状态兼容或正式安装授权。复现脚本 scripts/verify-reuse-host.py，输入 UI_VAULT_REUSE_HOST、UI_VAULT_TODO_REPO、UI_VAULT_REUSE_HOST_COMMIT；每个提交使用新的隔离目标，已存在时拒绝覆盖。

历史截图采用 Chromium、1100×900、DPR 1、固定时间、浅色、减少动效，比较固定首屏像素；MRR 367763 / 990000，TODO 0 / 990000。不推断全页面或全状态无变化，不以像素比例评价设计质量。截图、差异及宿主证据在本地私有目录保存并校验哈希。

AI-Development 可直接使用上述只读本地 CLI（从任意 cwd 以绝对脚本路径调用）；优先查询已有公共 Foundation/Registry，再查询私有项目证据；source 只允许确切的资产/快照/登记文件。不得把私有输出上传外部服务或自动写入其他仓库，仍需用户许可、宿主依赖检查和隔离验证。既有 ui-vault-component-handoff Skill 记录入口；没有新增中央服务或自动注册工具。
