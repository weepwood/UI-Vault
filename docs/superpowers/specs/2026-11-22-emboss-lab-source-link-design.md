# Emboss Lab 嵌入 GitHub Pages 预览

## 目标

将 UI Vault 中的“Emboss Lab · 浮雕海报交互”预览切换到 `https://weepwood.github.io/Emboss-Lab/`，通过现有外部项目 iframe 模式内嵌运行。源代码仍由 `weepwood/Emboss-Lab` 维护，并通过项目详情保留源仓和 `index.html` 源码入口。不在 UI Vault 继续保留第二份可运行拷贝。

## 设计

- 保留资产 ID `emboss-poster-lab`、现有名称和“动效实验”分类，维持搜索结果及 `?asset=emboss-poster-lab` 深链接。
- 将资产改为外部来源，仓库主页作为主要入口，`index.html` 作为源码入口；保留准确描述、技术栈和可复用要点。
- 清除本地预览、源码复制和发布白名单字段，并删除不再使用的 UI Vault 演示文件，避免目录中留下过期副本。
- 更新来源整合文档和 README 对该实验的描述；通过 `catalog:sync` 更新公开资产索引。
- 增加目录回归检查，确认条目链接到目标源仓、没有本地预览文件，并通过资产校验、构建和浏览器检查。

## 替代方案

1. 保留本地副本并继续同步源仓内容：用户已选择直接链接，因此不采用双份维护。
2. 内嵌 GitHub Pages 页面：可以在 UI Vault 中直接体验实际页面；该站点响应允许 iframe，本站已有受限外站 iframe 模式，因此采用。

## 验收标准

- UI Vault 原有资产 ID 和深链接仍定位到该条目。
- 详情预览内嵌 `https://weepwood.github.io/Emboss-Lab/`，使用现有外站 iframe 沙箱；顶部“在原站查看”打开 Pages 页面，项目详情源码入口指向 GitHub `index.html`。
- 新构建不再发布旧的 `demos/experiments/emboss-poster-lab/` 副本。
- 资产校验、单元测试、构建及目标链接的浏览器检查通过。
