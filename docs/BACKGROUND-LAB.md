# 背景效果实验室 · Background Gallery Lab

[在线入口](https://weepwood.github.io/UI-Vault/?asset=aurora-field) · [单文件 Demo](../demos/effects/aurora-field/index.html)

原“极光背景实验”已扩展为一套可独立运行的背景效果展厅。**保留**资产 ID `aurora-field` 和 `demos/effects/aurora-field/index.html`，以兼容已有收藏、资源链接和 iframe 预览。

## 设计参考与借鉴边界

以下资料用于**选择背景类型与研究视觉组织方式**，本演示的 CSS 和交互是独立编写的，不直接复制第三方示例或引入外部素材。未来如直接复用上游代码，应先检查具体文件及项目许可证。

| 参考 | 借鉴方向 | 链接 |
| --- | --- | --- |
| React Bits · Backgrounds | Aurora、渐变、光线、文字承载方式 | https://www.reactbits.dev/c/backgrounds |
| Aceternity UI · Backgrounds | Spotlight、Dot Grid 与有节制的 Hero 背景 | https://ui.aceternity.com/background |
| Motion Backgrounds | 单文件、CSS/SVG、低依赖的背景实践 | https://github.com/kmikeym/motion-backgrounds |
| Gradient Backdrops | 渐变分类、颜色配方和参数化控制 | https://github.com/nonlineartom/gradient-backdrops |

不使用商业图库背景，不要求 WebGL 或三维引擎；这样能让页面在 UI-Vault 的沙箱 iframe 中保持独立性。


## 2026-11 · 去模板化设计迭代

本次调整遵循项目根目录的 [DESIGN.md](../DESIGN.md)，并参照公开的设计工程 Skills。使用方式为**阅读指导并落实到本项目代码**；没有引入未经审核的第三方 Skill 安装脚本，也没有将它们的源码直接打包进 Demo。

| 阅读的 Skill | 用在本页面的决策 | 来源 |
| --- | --- | --- |
| Anthropic \`frontend-design\` | 避免无意义英文眉题、编号装饰、通用中央口号与渐变主视觉；让背景预览成为主角 | https://github.com/anthropics/skills/tree/main/skills/frontend-design |
| Jakub Krehel \`better-typography\` / \`better-layout\` | 减少字号档位、提高说明文字可读性、用留白代替多重卡片边框；小屏把参数放到预览下方 | https://github.com/jakubkrehel/skills |
| Emil Kowalski \`emil-design-eng\` / \`animation-performance\` | 保留有目的的背景动画，静态纹理不强行添加动效；缩略图禁用动画；遵循系统减少动画设置 | https://github.com/emilkowalski/skills |
| Vercel \`web-design-guidelines\` | 检查可见的焦点态、按钮语义、可用的触控面积、移动端溢出与控件反馈 | https://github.com/vercel-labs/web-interface-guidelines |

设计方向：**视觉材质档案馆**，而不是营销落地页或堆叠卡片的 SaaS 工作台。纸白偏绿的编辑台底色、含蓄的植物绿操作色、短标题和大画布，是针对背景比较工具的取舍，不是通用「换皮」模板。

具体落实：

- 去除页面的装饰性英文眉题、纯展示编号、虚构 CTA、中心大口号和多层投影卡片。保留中文资源名称，英文只作为辅助检索名。
- 主预览不再默认覆盖文字：点击“文字对照”后，可检查所选配色对排版可读性的影响。
- 背景卡片采用素材图册形式，缩略图保持相近比例，便于观察差异；参数栏使用简单边界和文字分组，不再互相嵌套面板。
- 将默认配色从紫蓝科技风扩展为六组低饱和材质色：暮蓝、落日陶土、北境苔绿、亚麻、雾蓝、石墨金。
- 重新区分极光光带、Mesh 色块、Silk 折光、Horizon 光晕与静态纸张肌理的绘制方法，减少所有样式「同一种模糊径向渐变」的问题。
- “复制 CSS”只输出当前场景对应的关键帧而非全部背景动画，方便迁移到其他项目；保留手动复制回退方案。
- 新增真实 Chromium 的桌面 1280px 和移动 390px 背景实验室回归，检测分类、参数、静态/动态状态、代码内容、水平溢出与页面脚本错误，并保存截图。该检查不等同于人工审美评审。

## 12 种场景

| 类型 | 背景 | 动效 | 推荐用途 |
| --- | --- | --- | --- |
| 渐变 | Aurora Drift 流动极光 | 是 | 沉浸式 Hero |
| 渐变 | Mesh Gradient 网格渐变 | 是 | 创意产品 |
| 渐变 | Liquid Silk 丝绸流彩 | 是 | 数字艺术 |
| 光效 | Horizon 暮光地平线 | 是 | 品牌叙事 |
| 光效 | Light Beams 光束 | 是 | 发布会 |
| 渐变 | Color Mist 色彩薄雾 | 是 | 工具界面 |
| 光效 | Soft Spotlight 柔光聚焦 | 是 | 核心功能区 |
| 几何 | Contour Lines 等高线 | 否 | 数据与地图 |
| 几何 | Blueprint Grid 工程网格 | 否 | 开发者工具 |
| 几何 | Dot Matrix 点阵 | 否 | 仪表板 |
| 纹理 | Soft Paper 纸张肌理 | 否 | 编辑阅读 |
| 纹理 | Night Sky 夜空星点 | 是 | 艺术探索 |

每个效果都是同一个 `.scene[data-style="<id>"]` 容器，使用 `--base`、`--a`、`--b`、`--c`、`--ink`、`--intensity`、`--duration` CSS 变量驱动。调色板是预设组合，不代表外部参考项目的品牌 Token。

## 操作与性能约束

- 点击任意背景卡片切换主预览（默认纯背景，可开启文字对照）；通过“渐变 / 光效 / 几何 / 纹理”筛选。
- 支持六组配色、强度、动画速度、暂停与示例文案叠加；选中背景会加载适合该场景的默认配色，避免深色纸纹等不合理的初始展示。
- “查看 / 复制 CSS”打开代码对话框，输出当前背景所需的 HTML 容器、场景 CSS、动画规则和变量。若 iframe 限制剪贴板访问，保留全选和手动复制。
- 12 张缩略图始终**静态**；只有一张主预览允许 CSS 动画，页面不可见时暂停，系统启用 `prefers-reduced-motion` 时停用动画。
- 静态场景和减少动画模式禁用速度滑块，不用无效控件伪装交互。
- 页面是单文件自包含 HTML，不依赖网络字体、图片、CDN 或第三方包；UI-Vault 仍可标记 `copyable: true`。
- 布局在大屏采用预览 + 参数侧栏，小屏纵向堆叠；使用 button、range、dialog 和 aria 标签支持键盘操作。

## 验证

1. `npm run check`：校验目录、HTML/JS 基础结构、测试、构建与静态分发。
2. 桌面、平板、390px 手机尺寸验证：背景不能超出可见画布，侧栏不能压缩为不可读。
3. 依次点击 12 个场景，验证主预览与所选卡片一致；切换分类后，当前选中场景仍然保留。
4. 调整六组配色与强度；静态场景速度输入禁用，动态场景播放 / 暂停能切换。
5. 选中纸张、网格等浅色场景时，检查内容与底色对比；启用减少动画时确认动画不再运行。
6. 点击代码按钮，检查导出内容对应当前背景及当前色值，并测试 iframe 中无法调用剪贴板时的手动复制方式。

注意：自动化结构检查不能替代浏览器逐像素视觉回归和性能测量。若复杂 CSS 滤镜在低性能设备中仍有开销，优先降低强度或关闭动画，而不是同时播放全部缩略图。
