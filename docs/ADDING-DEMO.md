# 快速新增 UI 资产

## 运行

需要 Node 22+，无外部 npm 依赖。

```bash
npm run new:demo -- components magnetic-button 磁吸按钮
npm run new:demo -- effects gradient-hover 渐变悬停
npm run new:demo -- layouts compact-dashboard 仪表盘布局
npm run new:demo -- experiments canvas-lab 画布实验
npm run new:reference -- some-ui https://github.com/example/repo 一个 UI 项目
npm run check
npm run dev
```

每次创建本仓 Demo 时，脚本会自动建立 `demos/<分类>/<slug>/index.html`、`catalog/assets/<slug>.json` 并更新 `content/assets.json`。

如果手动添加或编辑了 `catalog/assets/*.json`，运行 `npm run catalog:sync` 重新生成聚合清单。**不要直接修改 content/assets.json。**

## 必填说明

资产应有唯一 ID、标题、描述、分类、标签、技术栈、来源与许可证。只有完全自包含的单文件 Demo 才能设置 `copyable=true`；外部项目不能标记为可直接复制。

多文件 Demo、真实封面、动态分类与架构细节见 [扩展指南](EXTENDING.md)。

## PR 检查清单

- [ ] Demo 独立运行，资源路径正确
- [ ] 键盘与移动端操作可用，尊重 reduced-motion
- [ ] 来源和许可证明确，不上传私有凭据或无授权媒体
- [ ] 元数据同步且 `npm run check` 通过
- [ ] 中文提交信息，清晰描述变更

## 手工精选 Demo：不使用批量生成

当目的是从其他仓库移植一个**实际可操作**的 UI 交互，先由人选定具体设计与原始文件，不走批量仓库扫描。优先在 `demos/curated/<slug>/index.html` 中放置独立实现；标注来源与单独调参点。编辑其独立 `catalog/assets/<slug>.json`，新增 `curated:true`、`curationStage:"draft"`、`tuningPoints` 与 `tuningGuide:"docs/CURATED-LABS.md"`，再运行 `npm run catalog:sync`。

每个精调实验的修改过程记录在 [CURATED-LABS.md](CURATED-LABS.md)；不将通用手工脚手架等同于“已完成 UI 设计”。
