# 变更记录

本文件只记录正式维护阶段的主要变化，不把历史文档中的阶段名称直接当作已发布版本。未发布内容应在 PR 合并后再纳入版本记录。

## Unreleased

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

## 既有历史

旧版双栏到三栏、原生 DOM 到 React 工作台等设计演进记录见 `docs/DESIGN-HISTORY.md` 与仓库 Git 历史。
