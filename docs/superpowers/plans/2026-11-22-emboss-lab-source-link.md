# Emboss Lab 源仓入口实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 `executing-plans` 按步骤完成本计划。步骤使用复选框跟踪进度。

**目标：** 将 UI Vault 的 Emboss Lab 条目改为直达 `weepwood/Emboss-Lab` 的外部来源入口。

**架构：** 保留 `emboss-poster-lab` 资产 ID 和分类，将唯一元数据来源切换为外部项目记录，使用现有 PreviewFrame 外部占位入口展示 GitHub 链接。移除本地副本和其发布清单，保持 catalog 生成索引与文档同步。

**技术栈：** JSON catalog、Node.js 测试、静态白名单构建、Playwright Chromium。

---

## 文件清单

- 修改 `catalog/assets/emboss-poster-lab.json`：保留稳定 ID，将来源、仓库 URL、源码 URL 和授权说明改为外部记录。
- 生成 `content/assets.json`：由 catalog sync 更新公开索引。
- 删除 `demos/experiments/emboss-poster-lab/index.html` 与 `demos/experiments/emboss-poster-lab/assets/grain.svg`：移除过期本地副本。
- 修改 `docs/SOURCE-INTEGRATION.md` 与 `README.md`：说明 Emboss Lab 是外部源仓入口。
- 修改 `tests/demo-icons.test.mjs`：移除针对旧本地 HTML 的图标断言，改为验证外部来源元数据和无本地文件。
- 修改 `tests/visual-regression.py`：在 React 页面浏览器回归中访问 Emboss Lab 深链接，断言项目详情显示外部项目入口和源仓 URL。

## 任务 1：先锁定外部来源行为

**文件：** 修改 `tests/demo-icons.test.mjs`。

- [ ] **步骤 1：新增失败断言**

为 Emboss Lab 读取 JSON 元数据，断言 `id` 等于 `emboss-poster-lab`、`source` 等于 `external`、`url` 等于 `https://github.com/weepwood/Emboss-Lab`、`sourceUrl` 以 `/blob/main/index.html` 结尾，且目录中不再存在旧的 `index.html` 与 `assets/grain.svg`。删除并发读取旧 Emboss HTML 的断言。

- [ ] **步骤 2：运行测试确认失败**

运行：`node --test tests/demo-icons.test.mjs`

预期：Emboss Lab 的外部来源断言因当前 `source: local` 失败。

## 任务 2：切换目录并清除旧拷贝

**文件：** 修改 catalog、README、来源整合文档；删除旧 Demo 两个文件。

- [ ] **步骤 1：更新 catalog 元数据**

保留标题、`id`、`type`、标签与技术栈；设置 `source: "external"`、`url` 与 `originRepo` 为 GitHub 仓库地址、`sourceUrl` 为 `index.html` 文件链接。移除 `preview`、`code`、`publish`、`copyable`，保留可验证的项目说明和复用要点。授权字段改为“原仓库未声明许可证（仅收录项目索引）”。

- [ ] **步骤 2：更新来源说明并移除旧文件**

把 `docs/SOURCE-INTEGRATION.md` 表格中的本地路径改成 GitHub 源仓和源码链接，注明本站仅收录索引；更新 README 图标说明中 Emboss Lab 与其他本地 Demo 的区别；删除 UI Vault 旧版 `index.html` 与颗粒 SVG。

- [ ] **步骤 3：同步并检查资产**

运行：`npm run catalog:sync && node scripts/validate.mjs && node --test tests/demo-icons.test.mjs`

预期：catalog 校验通过，Emboss Lab 外部来源回归通过，生成的公开索引同步。

- [ ] **步骤 4：提交目录变更**

运行：`git add catalog/assets/emboss-poster-lab.json content/assets.json docs/SOURCE-INTEGRATION.md README.md tests/demo-icons.test.mjs demos/experiments/emboss-poster-lab && git commit -m 'feat(目录): 将 Emboss Lab 改为源仓入口'`

## 任务 3：验证真实入口和构建

**文件：** 修改 `scripts/visual-regression.py`。

- [ ] **步骤 1：为浏览器回归增加外部深链接场景**

在 `verify_react_interactions` 中导航到 `?asset=emboss-poster-lab`，等待 `#preview-title` 文本为“Emboss Lab · 浮雕海报交互”，断言 `iframe[data-preview-frame="local"]` 不存在，`#preview-stage` 展示外部项目说明，并检查源码/原始项目链接的 href。

- [ ] **步骤 2：运行完整验证**

运行：`npm run check` 和 `npm run visual:test`。

预期：资产校验、所有测试、设计审计、构建、发布目录校验和 Chromium 回归均通过。

- [ ] **步骤 3：提交浏览器回归**

运行：`git add scripts/visual-regression.py && git commit -m 'test(浏览器): 覆盖 Emboss Lab 源仓入口'`

## 自检

- 每条设计要求都有对应步骤：保留 ID 和深链接（任务 1、3）、外部 GitHub 入口与源码链接（任务 1、2、3）、不再发布旧副本（任务 1、2）、更新来源说明（任务 2）、测试与构建验证（任务 3）。
- 测试文件中验证的是生成前的 catalog 唯一来源及其实际文件是否不存在；公开索引通过官方 `catalog:sync` 生成。
- 浏览器断言只覆盖外部项目占位与直接仓库链接，不要求把 GitHub 页面加载进 iframe。
