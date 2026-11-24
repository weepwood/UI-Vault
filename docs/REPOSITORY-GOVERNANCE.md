# GitHub 仓库治理设置

以下是需要在 GitHub Web 界面完成的仓库管理配置，**提交 PR 不会自动启用这些设置**。

## main 分支规则

进入 Settings → Rules → Rulesets → New ruleset，为 `main` 创建激活状态的 Branch ruleset：

1. 禁止删除与强推 main。
2. 要求通过 Pull Request 才能合并到 main。
3. 启用 required status checks；先运行一次 `UI Vault 校验与发布`，再选择真实出现的校验检查名称 `元数据校验、测试与静态构建`。
4. 单人快速迭代不勾选 Require branches to be up to date before merging；不强制 Dismiss stale pull request approvals。合并前检查实际冲突与当前提交 CI。
5. 单人维护时不必强制至少 1 位其他审查者；否则维护者可能无法自行推进 PR。
6. 发布部署仅允许来自 main 的已验证产物。

若仓库计划使用 squash merge，应统一提交历史与发布策略。已有 `.github/pull_request_template.md` 可作为审查清单。

## 依赖与安全

- 在 Settings → Security 中确认 Dependabot alerts 与 dependency graph 可用；`.github/dependabot.yml` 每月检查 npm 和 Actions 依赖。
- 如果 GitHub 支持仓库私密漏洞报告，可开启该功能；参考 `SECURITY.md`。
- Actions 默认只读 `contents`，Pages 部署 Job 单独赋予所需的写入权限。
- 第三方素材权属见 `THIRD_PARTY_NOTICES.md`；根 LICENSE 必须在确认授权边界后明确选型。

## CI 与分支

`deploy.yml` 通过 `scripts/ci-plan.mjs` 分级：普通 PR 仅执行资产校验、Node 单测、lint、设计审计；核心交互/权限改动加 Chromium 与构建，跨平台构建改动加 Windows，CI 自身变更完整验证。main push 与定期刷新仅执行必要的资产校验、构建、dist 检查及发布，不重复完整 PR 测试。手动 `full`（默认）或 `v*` tag 执行全部验证；发布 GitHub Release 前应核对对应 tag 的完整 CI 成功。基线重生成不部署站点。推荐将稳定的 `元数据校验、测试与静态构建` 设为 required check；如需保护 Windows 专项，另选该检查（普通 PR 正常跳过）。未启用保护时应坚持通过 PR 合并，直接 push main 不会补跑完整 PR 校验。同一 ref 的普通旧运行自动取消。

`link-check.yml` 每周巡检外部 `siteUrl` 并上传报告。HTTP 404/410 标记为失效，权限拒绝或网络错误标记为无法确认，不会自动移除资产或阻断生产部署。
