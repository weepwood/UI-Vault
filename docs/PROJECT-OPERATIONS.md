# Project Operations · 项目运维与预览证据

状态：2026-11-23。UI-Vault 只消费各独立项目的公开数据，**不克隆、不修改、不构建、不代替发布** React、Vue、Rust 或 HTML 仓库。

## 入口与筛选

直接访问 `?view=operations`，或点击左侧「项目状态」。管理视图显示 Project 级一行、关联 Asset 可展开；可按代码检查、部署状态、预览状态和项目/资产名称筛选，保留资源 `?asset=` 深链接。

## 三类证据，不能互相替代

| 维度 | 采集对象与证据 | 可确认的状态 | 不能推断 |
| --- | --- | --- | --- |
| 代码检查 | GitHub REST API：默认分支最近一次 Actions run | success / failure / running / no run / unknown | 不是当前所有 PR 或全部 workflow 的整体质量结论 |
| 实际部署 | GitHub Deployments production/github-pages 对应的**最新 deployment status** | success / failure / pending / unknown | Actions 成功不代表 deployment success；非 GitHub 平台未提供记录时必须显示未知 |
| Pages 构建 | GitHub Pages API 的 `status` | built / errored / building | built 表示最近一次构建结束，不自动标为部署成功 |
| iframe / 站点 | 资产的 `siteUrl`，公开 HTTPS 的 HTTP 响应头 | HTTP 404/410、明确禁止嵌入（DENY / SAMEORIGIN / CSP 'none' 或跨站 'self'）、HTTP 有响应、未核实 | HTTP 200、iframe load 都不能证明页面真正可交互、资源完整或渲染正常 |

本地 Demo 的 `local` 只说明静态文件已被白名单构建，不能当作浏览器视觉验收。

## 两份快照

- `dist/content/project-health.json`：保留已有版本号 1，项目行新增 `deployment` 数据块。仓库许可仅展示 GitHub 返回的 SPDX 字段，缺失为未知。
- `dist/content/preview-health.json`：版本号 1，以 Asset ID 存储来源类别、HTTP 状态及 iframe 限制证据。同一个 `siteUrl` 去重请求，避免多资产对同站重复探测。

静态构建统一先生成离线未知快照并校验；只有主分支 Pages 发布、通过测试和 Chromium 视觉回归后，才尝试使用 GitHub API 及 HTTPS 响应头刷新状态。GitHub API Token 只存在于 Actions 环境中，不进入页面产物。探测时如网络出错，保留未知，不阻断 UI-Vault 本身部署。快照超过 14 天在界面上视为过期，不展示为当前成功状态。

## 外部提供方边界

GitHub Deployments 对 production/github-pages 的公开部署记录可作为部署状态证据；Vercel/Netlify 若没有可核实的 GitHub Deployments 生产记录，状态保持 `unknown`。未来接入对应提供方的只读 API 必须明确鉴权来源、权限范围和公开数据脱敏，不能在浏览器暴露 Token。不要仅凭站点 HTTP 成功推断某一次部署已经成功。

iframe 的 X-Frame-Options/CSP 响应头可以在部分场景**明确证实阻止嵌入**。没有发现阻止响应头不代表可嵌入。可进一步使用受控的可信 ready postMessage 协议或 Playwright 交互回归为自有站点增加运行时证据，不能提升第三方 iframe 的沙箱权限以换取状态判断。

## 验收

~~~bash
npm run check
npm run visual:test
~~~

来源项目之间没有新增运行时依赖，管理视图仅使用 Project / Asset JSON 与两份只读快照。保留所有资产的独立 GitHub 仓库、站点和源码下载方式。
