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

## 第三批：独立组件、交付候选与更新预检

2026-11-26，本地固定快照追加 MRR b0205fa9、TODO 64d6b33；保留既有四份项目历史快照的身份与字节，新增资产范围只作用于新快照，拒绝重排/截断历史。原 10 项扩展为 14 项逻辑资产、6 份项目快照、34 条实际存在的资产版本（不计尚未登记的早期版本）。新增 MrrDialog、MrrFilterActionButton、TimeControl、ColorControl。

### 独立预览与研究

复用同一三栏和 Topbar 的版本切换。每个新快照组件使用真实 Git 源码和当前可用宿主依赖构建独立夹具；既有 12 条展厅运行绑定保留，新增 10 条独立预览绑定。独立夹具不是产品页面或自行重画的组件；表格仍使用原 DataExamples。各入口提供实际组件支持的属性/主题/容器尺寸、禁用、加载、错误或确认回调（不是所有组件都支持全部状态）。原始组件和主题样式保持独立，夹具外壳窄屏使用 minmax(0,1fr) 及必要的局部横向滚动；未修改来源代码。

档案首屏章节导航、版本快捷定位、历史源码、同类实际截图对比、引用与复用/交付候选分区。选择器、日期/时间、弹窗、筛选工具栏、表格/分页按真实用途研究；例如 MRR 通用弹窗与 TODO 实体编辑弹窗可对比固定截图但业务语义不同。公开参考继续链接已有 Catalog ID；不是所有资产都有同类真实截图。比较新独立夹具时不将其与旧整套展厅算作视觉回归。历史截图记录实际浏览器与状态验收。

```sh
export UI_VAULT_DATA=/absolute/path/to/private-data
export MRR_NODE_MODULES=/absolute/path/to/mrr/node_modules
export TODO_NODE_MODULES=/absolute/path/to/todo/node_modules
python3 scripts/build-component-previews.py
python3 scripts/verify-component-previews.py
npm run registry:local -- compare private-mrr-dialog
npm run registry:local -- profiles
```

旧的 build-private-previews.py / verify-private-previews.py 仅复现原首两份展厅历史；不会用新资产清单重写旧快照。新独立构建内容寻址，验证索引仅在全批测试通过后更新；失败留下私有候选，不认定已通过。统一 profiles 给出项目独立语义 Token 与实际组合槽位的资产 ID、快照及修订，不等于安装计划或组合编辑器。尚无严格历史依赖重建、全量 API/动态引用分析。

### SmartSelect 私有交付候选

在来源快照、运行证据、固定白名单闭包一致时才提供交付。三份原样源码 + TypeScript 声明，运行时依赖声明、主题/门户样式适配契约、源修订和逐文件 SHA-256 统一写入 UI-ASSET-LOCK.json。不是公开 Foundation Registry 项目，不宣称 MIT、通用资产正式发布或兼容所有宿主。现有公开 Foundation 安装器保持不变，不新增中央服务。

```sh
npm run registry:local -- inspect private-todo-smart-select
# 使用 inspect 的完整 snapshot key，不能用 Git 短 SHA
npm run registry:local -- lock private-todo-smart-select <snapshot>
npm run registry:local -- deliver private-todo-smart-select <snapshot> <new-name>
npm run registry:local -- preflight private-todo-smart-select <target-snapshot> <existing-name>
```

deliver 仅在私有数据目录 deliveries 中排他创建新目录，绝不覆盖宿主。preflight 从可信历史重建旧/新版本锁，对目标文件逐项比对历史、目标和当前哈希；检查依赖声明变化、缺失/本地改动、符号链接、额外文件与篡改锁。冲突退出码 2；不写入文件、不自动升级或回滚、不安装依赖。当前 SmartSelect 6d73408 → 64d6b33 三份源码及依赖声明相同；实际预检零冲突。隔离目录人为修改一份文件后真实预检拒绝。新增自动化夹具另验证真实变更、拒绝覆盖和锁篡改。

本批使用 Book3D-Studio 5f83ddc 固定源导出副本进行第二次宿主版本试验：实际从新交付目录读取锁定 SmartSelect 与类型声明；额外从 TODO 固定源码提取 SearchField，保持原宿主业务状态、样式、React/Radix 版本与接口。TypeScript/Vite 构建、视口方向/书脊形状、合成图片批量导入、素材搜索与清除通过。此前 863a81e 试验保留，两次均为同一产品不同宿主版本，并非两种不同产品的适配。SearchField 是额外源码试验，不是 SmartSelect 交付闭包，也未登记为独立资产。试验不修改原项目。分页/日期/弹窗尚无跨产品实际宿主验证；不因隔离夹具通过就自动宣称通用。FrameSlice 仍未找到本机工作区，不用 Caption-Studio 替代。

AI-Development 继续使用既有 handoff Skill：先检索公共 Registry 和私有资产，再 compare/inspect/profiles，确认真实依赖和源版本，明确授权后 deliver，preflight，再隔离宿主运行并回收可核实证据。禁止自动发出私有源码或写原工作区；不注册独立 Agent 服务。

## 第四批：真实项目比较、独立交付及回滚候选

2026-11-26：追加 MRR b60f863b、TODO ccf1ae4 两个固定提交，并在私有数据目录 source-mirrors/FrameSlice 创建远端 a12cee0（V1.2.1）的只读取证浅层镜像，不替换原工作区。三个项目共 9 份项目快照、25 项逻辑资产、59 条实际存在的资产版本。新增 SearchField、DraftNumberField、Segmented、MrrStatusTag；FrameSlice 登记分页、媒体时间轴、字幕时间轴、播放器控制组、字幕工作台、Token 和设计规范。字幕时间轴/完整播放器/字幕工作台尚为源码档案，不冒充运行资产。

### 独立预览与比较

第四批新增 16 条独立运行绑定，累计 38 条（含 12 条早期展厅绑定）。在原 Topbar 的资产预览选择器中增加「并排运行比较」「项目资产组合」：使用既有 WorkbenchSelect、PreviewFrame 与原三栏，最多两侧独立运行，固定到登记版本的路径；用户可以切换对照资产并分别操作。原设计配方实验室和 Foundation Kit 保持不变；当前组合是固定槽位预览与配置交付，并非把任意跨技术栈组件自动编排成统一业务页面，也未完全接入既有可编辑配方模型。组合 JSON 含项目语义 Token、实际资产 ID/快照/修订，不导出源码。私有 iframe 版本切换采用重新挂载独立入口，修复 Edge 旧 opaque origin 导航失效，不改变 CSP、同源隔离或公开资产导航。历史档案新增有 256 KiB / 3 秒预算的固定提交 Git diff，只针对登记文件、禁用外部 diff 驱动；来源不可用时保留文件哈希差异。

FrameSlice 分页与媒体时间轴使用本机 Vue 3.5.45、Reka 2.11.0、Lucide Vue 1.0.0 实际运行，保留原样式及合成时间数据。Lucide 版本与来源声明 ^0.468.0 不同，不称完整历史依赖复现；完整播放器/React 字幕工作台所需依赖尚未复现。验证分页边界、缩放、键盘定位、切点回调、缩略图加载与取消回调；未处理真实媒体或执行转码。可用 MRR 已安装依赖运行隔离构建：

```sh
export UI_VAULT_DATA=/absolute/path/to/private-data
export FRAMESLICE_NODE_MODULES=/absolute/path/to/existing/vue/node_modules
python3 scripts/build-frameslice-previews.py
python3 scripts/verify-component-previews.py
```

### 八类私有交付候选

SmartSelect、SearchField、DraftNumberField、Segmented、DatePicker、TimeControl、MRR 分页及 MRR 弹窗。继续使用既有私有交付锁，不另设公开 Registry；旧 SmartSelect 锁兼容。SearchField/数值表单/分段导航共享实际 Controls.jsx 源文件，非三个重写组件。日期/时间仅提取原 domain.js 明确的单行纯辅助函数（锁记录原文件摘要与导出名），不复制整个任务业务内核；需要真实隔离运行验证。日期、时间、分页、弹窗四个实际交付目录已重新构建与浏览器验收；日期/时间夹具移除其余 JS 业务源。弹窗仍需要宿主 Element Plus 和 @ alias，实体弹窗业务专属未通用化；所有候选保留来源项目私有权限及宿主 CSS 契约。独立夹具通过不等于真实不同产品适配。

```sh
npm run registry:local -- lock <asset-id> <snapshot>
npm run registry:local -- deliver <asset-id> <snapshot> <new-name>
npm run registry:local -- preflight <asset-id> <target-snapshot> <existing-name>
npm run registry:local -- prepare <asset-id> <target-snapshot> <existing-name> <new-candidate-name>
```

prepare 首先预检旧交付；存在本地修改、篡改锁、路径异常或多余文件则拒绝。只创建新的隔离候选目录，验证候选锁并重新验证原目录。回滚使用同一流程生成历史版本新目录，绝不自动替换业务项目。实际 SmartSelect 第三批→第四批候选→第三批回滚候选，锁逐字一致、旧目录保留；该资产真实源字节未变化，新增测试夹具验证实际变更及冲突拒绝。未自动合并三方代码，也非宿主事务性升级/切换。

新增真正不同产品的试验：background-effects 556221f 固定源码副本，通过锁定 SearchField 交付叠加实际素材检索，保留原类型筛选与宿主视觉 Token；隔离补充 Lucide 0.468.0，React 19.2.6。通过真实 TypeScript/Vite 构建、36 项→1 项、空结果、清除恢复、进入效果 Studio。未合入原产品，未完成 GPU 全性能或双语文案。总计三份宿主试验记录、两个实际产品。原 Book3D 与所有产品原工作区保持不变。

累计 411 项自动化测试、11 组语义色、ESLint、公开 build/check-dist、16 项独立预览、实际交付夹具、Chromium 与 Edge 整合回归通过。Edge 曾出现旧 iframe 返回及一次选择切换异常，修复私有 iframe 入口后最终复验通过，不宣称彻底消除所有偶发情况。Firefox/WebKit 可执行文件缺失，未通过这两个引擎验收。复审并排与组合截图；尚未人工复审所有资产及状态。单次本机服务测量：目录就绪约 1117 ms，三个代表性档案 2–15 ms（仅回环 HTTP，非跨机器性能基准）。38 条绑定中最大运行包约 1.53 MB；仍有大包警告，未扩大缓存/拆包基础设施。公开目录 529 项，私有目录 25 项，110 项私有摘要排除检查通过；源镜像、截图、交付、锁、实际宿主试验均只留私有数据目录。未运行正式远端 CI、未推送合并发布。
