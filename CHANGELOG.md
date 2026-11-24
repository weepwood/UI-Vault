# 变更记录

本文件只记录正式维护阶段的主要变化，不把历史文档中的阶段名称直接当作已发布版本。未发布内容应在 PR 合并后再纳入版本记录。

## Unreleased

- Chromium 视觉基线按审核后的构建重新生成（标签归并后弹窗标签收为 4 个一行、复用度下拉移入「项目目录」标题行）；`--capture-current` 把结果写入 `visual-output/visual-baselines.json`，CI 产物改为上传该文件，不再把仓库里未改写的基线当新基线交给人工审核。
- 视觉回归中的外站 iframe（Emboss Lab / Gr8r Studio）改用固定夹具，只断言本仓可控的 `src`、`sandbox`、原站与源码链接；上游改标题文案不再让与改动无关的 CI 变红，真实站点可用性仍由 `preview-health --live` 采集。
- 复用度筛选中性标签缩短为「全部复用」，避免 104px 触发器出现省略号；测试补上标签长度与触发器宽度守卫。
- `scripts/run-python.mjs` 改为复用 `scripts/lib/python.mjs` 的探测与跨平台调用，视觉回归脚本抽出 `serve_stub` / `track_page_errors` 辅助函数，去掉重复实现。
- 引入 ESLint 10 与 React Hooks 检查（eslint-plugin-react-hooks 7）：JSX 解析、浏览器/Node 全局按目录划分，空 catch 与全角文案排版为显式豁免；清理全量 dead import 与无效转义，rules-of-hooks 为 error，Compiler 语义规则先降为 warn 并列入路线图。
- 新增 React 组件行为测试基架（esbuild JSX 钩子 + happy-dom + act），10 组核心用例覆盖目录行、分组、下拉选择/键盘流、搜索清除；node --test 全量经 jsx-register 钩子运行，CI 同步。
- npm run check 分层：新增 check:fast（validate + 测试 + 设计审计 + lint，本地迭代用），check 保持完整链并接入 lint。
- 标签治理：新增受控词表（内容类型 + 风格视觉两 facet），372 个历史标签归并为 97 词；机器组标签删除，技术标签迁入 technologies，validate 对词表外标签硬性拦截；新增可选执行的历史迁移脚本与覆盖率测试。
- 新增复用程度目录筛选（已验证 / 可安装 / 可复制 / 本地实现 / 外部项目），从既有元数据派生，不增加 schema 字段；目录状态协议新增 `reuse` 筛选维度并随重置清除。
- 视觉基线重生成入口：CI workflow_dispatch 支持在 Linux 基线环境 `--bootstrap` 并以产物上传，需人工审核后提交。
- 新增 `.gitattributes` 统一换行符为 LF；清单同步比较与相关测试对 CRLF 容错，新增 EOL 卫生测试，修复 Windows 检出下的 validate 误报与测试失败。
- 字体与视觉回归脚本改用 `scripts/run-python.mjs` 探测可用 Python，Windows 本地 `npm run dev/build/check` 可直接运行，README 补充 Python 前置依赖。
- CI 新增 Windows 校验任务，覆盖元数据校验、单元测试、设计审计与 JS 语法检查。
- 根目录新增 MIT LICENSE，仅覆盖原创代码与内容；第三方素材授权边界维持 THIRD_PARTY_NOTICES.md 及各目录自带许可证。
- 资产元数据统一验证未知字段，新增受限 iframe 权限清单 `previewCapabilities`。
- 修正依赖独立图片/字体的 Demo 的单文件复制标记。
- 为构建引入 `npm ci`、npm 缓存与同分支并发控制。
- 新增定期外部站点链接巡检、第三方授权风险清单与贡献/安全说明。
- 更新当前 React 三栏工作台的架构与扩展文档。

- 收敛 React Compiler 类 ESLint 告警（29 条 → 0）：effect 内的同步 setState 改为渲染期派生或事件驱动更新（搜索面板高亮行、DesignGuide 缓存与加载态、ProjectDialog 源码面板、ViewportSwitcher 展开态与尺寸指标、项目说明弹层的上下文键）；补全 `PreviewFrame`、`ProjectDialog`、`useWorkbench` 的依赖；`title` / `data-size` 改用 `setAttribute` 写入；仍需在 effect 内直接同步挂载区 DOM 的四处按 AGENTS.md 第 9-12 条显式豁免并注明原因。
- 修复全局搜索往返查询时旧高亮复现；目录筛选与标签缓存仅依赖相关输入，增加两项 React 行为回归测试。

## 既有历史

旧版双栏到三栏、原生 DOM 到 React 工作台等设计演进记录见 `docs/DESIGN-HISTORY.md` 与仓库 Git 历史。
