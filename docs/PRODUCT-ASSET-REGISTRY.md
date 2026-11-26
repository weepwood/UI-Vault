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
