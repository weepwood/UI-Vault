# Project / Asset 注册表

## 职责与边界

UI-Vault 是独立 React、Vue、Rust、HTML 等项目的目录和预览入口，不是它们共同的运行时。

- Project：来源仓库与维护单位，原始文件位于 `catalog/projects/<id>.json`，生成 `content/projects.json`。
- Asset：设计风格、组件、演示等具体资源，原始文件位于 `catalog/assets/<id>.json`，生成 `content/assets.json`。
- Asset 使用 `projectId` 引用 Project。旧资产 ID、`?asset=` 链接、收藏和 iframe 路径都保留。
- 当前整理出 33 个 Project 与 126 条 Asset，其中 Style Atlas 57 条、Page Mirror 24 条，UI-Vault 工作区 11 条。

Project `kind` 分为 `workspace`（本站工作区）、`managed`（weepwood 的独立仓库）、`reference`（第三方来源）。将本地改编作品归到上游 Project 只代表来源关系，不代表获得上游再分发许可。许可证仍需在每条 Asset 独立核实。

## 新建和维护

```json
{
  "id": "example-project",
  "name": "Example Project",
  "kind": "managed",
  "repository": "https://github.com/weepwood/example-project"
}
```

仓库 URL 必须是 GitHub 根路径，不能包含 `/tree/main`。将该 JSON 存在 `catalog/projects/example-project.json`，在相应资产中加入 `"projectId": "example-project"`。单个资产的源码文件和预览站点继续使用独立的 `sourceUrl` 和 `siteUrl`。

```bash
npm run new:demo -- components example-button 按钮演示
npm run new:reference -- example-ref https://github.com/owner/example 设计参考
npm run catalog:sync
npm run check
```

新增本地 Demo 默认归属 UI-Vault；新增 GitHub 参考自动复用已有 Project 或为真实新来源生成 Project。不要直接编辑生成的 `content/assets.json` 和 `content/projects.json`。

## 浏览与测试

默认排序仍是精选优先；选择「按项目分组」后，可折叠来源分组。资产详情展示来源仓库和关联数量。分组和搜索不得重新加载当前 iframe；`?asset=` 链接仍指向原来的资产。

每周链接巡检将 Project 的仓库 URL 与 Asset 的站点 URL 分开检查。GitHub Pages 发布构建另外生成 `content/project-health.json` 状态快照：只读取公开 GitHub API 的默认分支、归档状态、SPDX 字段、最近推送和默认分支最新 Actions 结果。该文件是运行时数据，不属于 `catalog/projects/` 的长期真相源；离线构建生成“未核实”占位，获取失败不会伪造成功。每周另一次发布任务会尝试刷新快照，不修改外部项目源码。HTTP 正常不代表 CI 成功、站点支持 iframe 或素材已授权。`defaultBranch`、项目首页等可选字段只有核实时才填写，不能猜测。

Project 关联只作用于目录与元数据，不建立跨仓编译依赖；独立应用继续自己锁定版本、构建、下载和部署。
