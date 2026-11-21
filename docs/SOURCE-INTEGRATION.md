# 跨仓库 UI 设计资源导入记录

导入日期：2026-11-21。UI-Vault 是公开资料库，资源来源均为当时可公开读取的本人 GitHub 仓库。

## 两个已转入的独立 Demo

| 资产 | 来源文件 | 本仓路径 | 复用边界 |
| --- | --- | --- | --- |
| Emboss Lab · 浮雕海报 | [weepwood/Emboss-Lab/index.html](https://github.com/weepwood/Emboss-Lab/blob/main/index.html) + [grain.svg](https://github.com/weepwood/Emboss-Lab/blob/main/assets/grain.svg) | `demos/experiments/emboss-poster-lab/` | 两文件依赖，已完整保留相对路径，禁止声称 HTML 单文件自包含 |
| Frame Lab · UI 结构实验 | [style-atlas/public/frame-lab/index.html](https://github.com/weepwood/style-atlas/blob/main/public/frame-lab/index.html) | `demos/experiments/frame-design-lab/index.html` | 自包含 HTML，外部 Figma/Dribbble 网址仅为参考链接 |

以上 Demo 直接迁自对应的公开个人仓库，未以源码形式迁入第三方组件库、商标、字体或原站截图。Emboss Lab 自述为参考视觉图重新绘制的演示，使用时请保留其来源说明；Frame Lab 中引用的 Figma、Dribbble 等资源不表示它们与此项目存在从属关系。

## 其他仓库的整合策略

- 其余 **21 条新资产**只保存项目索引：标题、用途、技术栈、分类、源码入口与可借鉴要点。
- 加上原有索引的补充说明，外部项目无需修改原仓库，未来仍可以在其原位置独立更新。
- 原生桌面、后端依赖型工作台、复杂框架型组件库都不强行塞进 `iframe`；如果有官方可直接访问的站点，详情页提供演示地址。
- 对于无授权截图的外部项目，不伪造截图；使用来源仓库名称呈现。
- Private 仓库的源码与索引**不写入公开目录**，避免公开泄露敏感工程信息或依赖。
- 任何新的导入应先检查来源、版权、资源依赖、`prefers-reduced-motion` 和浏览器兼容性。

## 可追踪的关联字段

每条资产可使用如下可选字段：
```json
{
  "originRepo": "https://github.com/weepwood/example",
  "sourceUrl": "https://github.com/weepwood/example/blob/main/src/Example.vue",
  "siteUrl": "https://example.com/",
  "reuseNotes": ["可以借鉴的 UI 技术点", "注意事项"]
}
```

- `originRepo`：原 GitHub 仓库，不可用一个相似项目冒充其上游。
- `sourceUrl`：已经核实存在的主要代码文件或设计 Token 文档。
- `siteUrl`：来源项目说明的公开演示网址，不能据此保证实时可用。
- `reuseNotes`：具体可借鉴的设计与交互原则，不能混同于授权即可复制。
