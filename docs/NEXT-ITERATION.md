# 2026-11-24 集中迭代交接

已核实 #96 完整 CI 45403075477 通过并合并；#97 同步 main 后 CI 45403879111 通过并合并。正式版本仍需生产部署、版本标签完整验收和 Release 证据。

## 本轮变更及范围

- 搜索：受控中英词表与双词短语，直接匹配优先，保留多词 AND、分面及明确排序；不自动猜测风格标签或批量改写资产。
- 目录：>=1000 项且 >=8 组的场景复用现有统一虚拟窗口；原有 528 项仍走既有模式。组标题可键盘折叠，焦点恢复使用稳定 ID 而非易变索引。5000 项合成浏览器夹具验证 DOM、折叠和 Home/End；未声称完整滚动恢复。
- 选型评估：TanStack Virtual（https://tanstack.com/virtual/latest/docs/api/virtualizer）支持 headless、自定义 rangeExtractor；GroupedVirtuoso（https://virtuoso.dev/react-virtuoso/api-reference/grouped-virtuoso/）支持分组与 sticky。当前复用本站已测试固定行高窗口，避免在没有锁文件更新与许可/兼容实测的情况下引入依赖；若可变行高需求明确，优先验证 TanStack Virtual。保持完整列表回退。
- 预览：超时/异常与 load 分开，提供显式重试及单独打开；不改 sandbox，不把外部 load 当作可交互验证。合作站点 ready 协议尚未实现。
- 交付：ZIP 附加入口、文件大小和 SHA-256 清单；构建校验比较完整产物。Registry 新增 Vue 既有按钮和 React 原生按钮源码快照，React happy-dom 行为测试；Vue 运行验收、完整框架工程/锁文件交付、更多独立 ZIP 仍待完成。

## 验收

CI 应执行快速检查、完整 Chromium 真实回归、ZIP 构建校验和 Windows；正式发布另需 axe/Firefox/WebKit、部署及 Release。保留原基线。未通过不合并，不自动改变精选评级或资产授权。无新增个人研究/多项目对比工作台。

首次 CI 45404342254 Linux 单元测试 321/323，两个失败均由新增压力测试 page.route 与既有隔离夹具守卫冲突造成；改为独立 context.route，不修改既有断言或基线。#96/#97 合并后的 Pages 工作流 45404104266 已成功部署；尚未发布新版本。

发布候选 v0.5.0：main 的真实版本增长触发完整 CI；仅 Pages 部署成功并核对线上 index、资产清单、Registry 与 ZIP 哈希后，由隔离的 contents:write job 创建精确提交的 Release。普通 push、PR、计划任务不创建 Release；已有同名不同提交标签拒绝覆盖。当前仅为候选，未宣称发布。

后续独立分支实施状态见 CATALOG-QUALITY-NEXT.md；不得在 v0.5.0 完整验收前合并后续功能。
