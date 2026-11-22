# GitHub 仓库治理设置

以下是需要在 GitHub Web 界面完成的仓库管理配置，**提交 PR 不会自动启用这些设置**。

## main 分支规则

进入 Settings → Rules → Rulesets → New ruleset，为 `main` 创建激活状态的 Branch ruleset：

1. 禁止删除与强推 main。
2. 要求通过 Pull Request 才能合并到 main。
3. 启用 required status checks；先运行一次 `UI Vault 校验与发布`，再选择真实出现的校验检查名称 `元数据校验、测试与静态构建`。
4. 最好要求合并前分支与主分支保持最新（若使用线性历史并频繁自动合并，则评估构建成本）。
5. 单人维护时不必强制至少 1 位其他审查者；否则维护者可能无法自行推进 PR。
6. 发布部署仅允许来自 main 的已验证产物。

若仓库计划使用 squash merge，应统一提交历史与发布策略。已有 `.github/pull_request_template.md` 可作为审查清单。

## 依赖与安全

- 在 Settings → Security 中确认 Dependabot alerts 与 dependency graph 可用；`.github/dependabot.yml` 每月检查 npm 和 Actions 依赖。
- 如果 GitHub 支持仓库私密漏洞报告，可开启该功能；参考 `SECURITY.md`。
- Actions 默认只读 `contents`，Pages 部署 Job 单独赋予所需的写入权限。
- 第三方素材权属见 `THIRD_PARTY_NOTICES.md`；根 LICENSE 必须在确认授权边界后明确选型。

## CI 与分支

`deploy.yml` 在 PR 执行校验，main push 校验成功后才发布 Pages。同一 ref 的旧运行将被取消以避免重复部署。

`link-check.yml` 每周巡检外部 `siteUrl` 并上传报告。HTTP 404/410 标记为失效，权限拒绝或网络错误标记为无法确认，不会自动移除资产或阻断生产部署。
