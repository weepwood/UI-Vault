# UI Vault · AI Agent 协作约定

本仓库是长期的个人 UI 资产馆，目标是快速收藏、预览和复用原创 Demo 与外部 UI 设计参考。请优先保持可扩展性与兼容性，不要因新增一个 Demo 重写整个网站。

## 任务路由

- 用户让「新增 UI / Demo」：优先运行 `npm run new:demo -- <components|effects|layouts|experiments> <slug> <中文标题>`，实现独立演示并完善该条元数据。
- 用户给「网址 / GitHub 项目」要求收藏：优先运行 `npm run new:reference -- <slug> <HTTPS URL> <中文标题>`，补充设计解读、作者与许可证信息。
- 用户让「增加 UI 类别」：修改 `content/categories.json`，无需手改页面导航。
- 用户要求「统一设计规范」：在 `content/tokens/` 添加主题令牌，关联到资产 JSON；不要把 Token 硬写入全站 CSS。
- 用户要求「修改展厅功能」：按职责调整 `assets/core/`、`assets/app.js` 与测试；避免向入口文件继续堆积无关逻辑。

## 必须遵循

1. **资产元数据唯一来源**：`catalog/assets/<id>.json`。维护后执行 `npm run catalog:sync`；不要直接修改生成的 `content/assets.json`。
2. **向后兼容**：已有资产 ID、预览路径、收藏存储键不可随意更名。
3. **独立 Demo**：每个 Demo 都有自己的入口，并尽量保证不借助主站才能打开；所有内部资源必须是相对路径，兼容 `/UI-Vault/`。
4. **复制规则**：只有完整自包含的单文件 Demo 可标记为 `copyable:true`。Vue/React 多文件构建结果和 GPUI 桌面应用不能被当作单文件复制。
5. **内容来源**：第三方项目应先保留原站链接与来源说明。不得无许可镜像代码、字体、截图或商标；若确需引用，核实其对应授权边界。
6. **静态发布**：`scripts/build.mjs` 执行白名单复制，不可直接将整个仓库部署到 Pages。请勿将秘钥、隐私信息和未授权素材放入公开目录。
7. **页面质量**：有完整交互、键盘焦点、移动端适配、减少动画模式，封面尽量使用已授权 WebP。
8. **验证**：提交之前必须运行 `npm run check`，如无法运行，明确告知未验证事项。
9. **提交说明**：所有 Git commit 信息统一使用中文。

## 常用命令

```bash
npm run dev
npm run new:demo -- components gradient-button 渐变按钮
npm run new:reference -- ui-project https://github.com/example/repo 参考项目
npm run catalog:sync
npm run check
```

细节：[docs/EXTENDING.md](docs/EXTENDING.md)、[docs/ADDING-DEMO.md](docs/ADDING-DEMO.md)。

## UI 设计质量与“AI 味”审查

凡涉及 UI 设计与网页改版，必须先参考 [DESIGN.md](DESIGN.md) 和 [docs/AI-DESIGN-RESEARCH.md](docs/AI-DESIGN-RESEARCH.md)。

- UI Vault 展厅是工作台，不是营销网页。优先搜索、分类、真实预览与来源信息。
- 不能默认生成巨幅营销 Hero、大写英文眉题、无功能的渐变光晕、倾斜装饰卡片和重复大圆角组件。
- 不得编造实际项目截图；外部仓库没有可用授权封面时显示其真实来源文字。
- 按真实业务场景撰写文本，避免抽象形容词堆叠和英文空泛口号。
- 保留用户有意创建的玻璃、暖色、极光、粗野主义等 Demo 风格；减少的是主站模板化设计，不是删除艺术实验。
- 提交 UI 前检查桌面、平板、手机布局，键盘导航、可见焦点、长文本、空态和 prefers-reduced-motion。
- 不把静态语法或构建成功称为视觉验收；没有看过实际渲染时明确说明。
- 不自动安装第三方设计 Skills 或组件库；若决定使用，先检查版本、依赖和许可证。

## 开源 UI 设计审查步骤（v0.4）

对于任何会影响展厅的前端 PR，按 [docs/OPEN-SOURCE-DESIGN-WORKFLOW.md](docs/OPEN-SOURCE-DESIGN-WORKFLOW.md) 逐项自查：先以 Anthropic Frontend Design 澄清产品场景，再用 Impeccable / better-interface 评审层级与文案；随后用 better-accessibility / better-colors 处理键盘与颜色对比；最后用 Emil Kowalski 的 remove-animations 思路只保留有意义的动画，并按 Vercel Web Interface Guidelines 核对状态和错误处理。

新的 UI 改动需运行 `npm run check`（包含 `design:audit`）。若没有做实际截图，就不能声称已经视觉验收。外部 Skills 是可选开发工具，不应作为页面运行时依赖，也不应无授权复制其源码。

当新增 `originRepo` 资产时，必须保证跨仓筛选可检索，且一条资产具有真实可访问的主要源码链接和具体复用说明。

## 手工精选 UI 实验：优先级高于批量导入

用户明确要求未来一个个精调，因此涉及跨仓 UI **落实**时：
- 不要使用自动仓库抓取、批量生成、自动更新镜像的方案。
- 人工审阅源仓库具体文件，然后在 `demos/curated/<id>/` 独立实现一个实际可交互的样例；每次只处理范围明确的 UI。
- 每个实验在 CSS 顶部标记 `TUNING`，写清主题 Token/布局阈值和可用的交互，并保留来源文档。
- 仅经过人工审查的本地 Demo 可以设置 `curated:true`，并填写 `curationStage`、`tuningPoints`、`tuningGuide`。
- `draft`、`refining`、`stable` 必须由用户实际评审后变更，不能被自动构建任务升级。
- 先修改单个实验，避免全站或其他实验同步变化。详细见 [docs/CURATED-LABS.md](docs/CURATED-LABS.md)。

## 统一图标系统（Lucide）

UI Vault **主站**图标使用固定 Lucide SVG 子集：`assets/icons/lucide.svg` 和 `assets/core/icons.js`。不要新增字符图标或重复徒手绘制同一语义的 SVG，也不要通过网络 CDN 引入图标包。图标为装饰时必须 `aria-hidden=true`，控件依赖可见文字或 `aria-label`；收藏选中与否由 `aria-pressed` 驱动统一心形的 CSS 填充。图标新增前参照 [docs/ICONOGRAPHY.md](docs/ICONOGRAPHY.md) 和 Lucide ISC / Feather MIT 许可证，修改 sprite、白名单及测试，保留完整溯源。各独立 Demo 原有图标系统暂不强行替换。
