# 进度面板 · 连续布局动效规范

> V2 · 2026-11-28 · 原站计算样式、CSSOM 属性与逐帧实测已取得；独立实现，不复制原站源码或素材。

## 01. 实测证据与边界

参考：[Designed to Scale](https://designed-to-scale.vercel.app/#/)，最初的用户截图及本轮 macOS Chromium 140.0.7339.16（Playwright 1.55.0，1440×900 CSS viewport）。通过浏览器计算样式、CSSOM 的目标属性、CSSTransition 对象和 requestAnimationFrame 采样观测。仅测量实际进度面板及三种按钮；未审计完整站点的源码、许可、引擎或其他动画。原始逐帧记录和截图保留在本地私有验收目录，不进入公开仓库。

| 观测项 | 原站实测 |
| --- | --- |
| 展开机制 | CSS Grid 单行，0fr → 1fr；收起反向 |
| 高度 | 340ms cubic-bezier(.2,.7,.2,1) |
| 内容透明度 | 220ms ease |
| 箭头 | 300ms cubic-bezier(.2,.7,.2,1)，展开旋转 90° |
| 内容层 | overflow:hidden，进度条与列表一并裁剪 |
| 锚定 | 底边固定；开合采样底部约 887.95px |
| 几何 | 本次缩放环境的实际 rect 高度约 41.61 → 279.27px，行程 237.66px |
| 反向 | 在约 106ms 再次点击，浏览器将 grid 过渡有效时长缩短至约 267.23ms |
| 面板 | 暖色 #f7efe4，边界 #ddd3c5，圆角 12px，水平内边距 16px |

几何数据取自 getBoundingClientRect，受到页面实际缩放影响，不直接作为 CSS 高度 Token。原站自然高度不通过 JS 定时测算驱动；本次 CSSOM 已核实 0fr/1fr 目标，动画对象类型为 CSSTransition。不能将该机制称为物理弹簧，亦不保证反向瞬间速度连续。

## 02. 默认复刻 · 原生 CSS Grid

推荐用于普通折叠区、浮动工具面板、列表详情。由父级布局维持底部锚定；常驻标题与可折叠内容分离，进度条也随列表隐藏。内层保持自然尺寸，避免 scaleY、固定 max-height 与高度猜测。示例独立宽度 264px，真实内容可自适应。

最小可迁移结构：button + fold(grid) + clip + content。以下为独立通用配方，参数来自测量，不是原站源码。

```css
.fold {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms cubic-bezier(.2,.7,.2,1);
}
.fold[data-open="true"] { grid-template-rows: 1fr; }
.clip {
  min-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 220ms ease;
}
.fold[data-open="true"] .clip { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .fold, .clip, .chevron { transition: none; }
}
```

箭头另用 300ms 相同曲线，收起时朝右、展开时朝上。状态更新只切换目标，不销毁 DOM 或重启过渡。CSS Transitions 自带反向缩短规则；连续点击可从当前位置反向，但它并不具有严格速度继承。内容改变由 Grid 自然布局接纳；不承诺已经打开的 1fr 区域内部所有内容高度变化均自动过渡。

## 03. 增强方案 · 临界阻尼弹簧

适用于连续拖动、复杂面板、可改变目标的尺寸运动；这部分为独立设计而非原站参数。质量 1、ω=21/s、k=441/s²、c=42/s。使用自然内容高度 H（ResizeObserver），目标高度为 H 或 0。精确步进：

- d=h-target，b=v+ωd，e=exp(-ωdt)；
- h'=target+(d+b·dt)e，v'=(v-ωb·dt)e；
- 仅更新目标时保留 h、v；零高度边界截断；误差小于 0.08px 且速度小于 0.8px/s 时归位停止。
- 高度归一化 p=h/H 驱动裁剪层 opacity、内部 5px 位移与 90° 箭头旋转。不缩放字体与边框。

生产组件仅在目标变化时启动 RAF，收敛即停，销毁时取消 RAF 和 ResizeObserver。若采用 Motion 等成熟库，仍需验证中断、内容重测、组件卸载与 reduced-motion。不要将这个独立 JS 实验自动提升为 Foundation 全局动画引擎。

## 04. 交互与验收

- 原生 button + aria-expanded + aria-controls；折叠内容 inert；若焦点在折叠内容中，收起前回到按钮。
- 默认原站式 Grid，可切换增强弹簧、慢动作与锚点。切换算法时先收敛到当前目标（教学对照，不是无缝算法切换）。
- 动画期间 RAF 只监测 CSS 高度（默认模式），不驱动 CSS Grid；弹簧模式则由 RAF 驱动。监测曲线最多在稳定后继续滚动 1.5 秒，然后停止。减少动态效果立即收敛且停止采样。
- 高度动画涉及布局，不宣称完全 GPU 合成；实际业务移除测量曲线，避免长期逐帧读取布局。
- 勾选分类是演示交互，不是原站课程进度。演示宽度、字体回退与深浅主题并非原站逐像素一致。

验收命令：在项目构建 dist 后，使用已有 Playwright 环境执行 `python scripts/visual-designed-to-scale.py --browser chromium`。当前实测包括 UI-Vault 受限 iframe、CSS Grid 实际过渡参数/反向缩短、弹簧反向位置与速度连续、底边稳定、键盘、进度语义、减少动态效果、停止调度及 390px 独立布局。Firefox 和 WebKit 因本机锁定 Playwright 所需浏览器版本不完整未启动；真实触屏、原站逐帧跨设备对照仍未完成。
