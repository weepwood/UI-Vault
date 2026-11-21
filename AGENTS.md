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
