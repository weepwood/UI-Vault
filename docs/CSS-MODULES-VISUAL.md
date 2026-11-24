# Workbench 组件 CSS 与浏览器视觉回归

此阶段不改变框架和既有 DOM class：`ProjectRow`、`ProjectDialog`、`PreviewToolbar` 继续被主工作台和组件展厅共同调用。

## CSS 单一来源

| 组件 | 基础样式来源 | 保留在页面级 `styles.css` 中的内容 |
| --- | --- | --- |
| ProjectRow | `assets/ui/project-row.css` | 三栏尺寸、项目列表容器滚动、项目面板局部间距、特殊密度与窄屏覆盖 |
| ProjectDialog | `assets/ui/dialog.css` | 视口宽度/高度下的 Dialog 内边距调整、深色语义变量覆盖 |
| PreviewToolbar | `assets/ui/preview-toolbar.css` | 工作台 `<main>` 布局、移动端顶部栏的重排、容器宽度断点内其它按钮排列 |

入口 `assets/styles.css` 开头按顺序加载字体与组件基线：

```css
@import url("./fonts/975-yuan.css");
@import url("./ui/controls.css");
@import url("./ui/dropdown.css");
@import url("./ui/project-row.css");
@import url("./ui/dialog.css");
@import url("./ui/preview-toolbar.css");
```

**为什么保留部分主站规则？** 整体组件抽取必须保持现有 CSS 层叠顺序与选择器优先级，尤其针对缩窄侧栏、深色模式、紧凑密度及宽度敏感的预览工具栏。纯通用的基线由组件文件维护，页面场景适配仍属于工作台布局。迁移以行为与截图等价为优先，不在一次 PR 中混入视觉重新设计。

## 真实浏览器视觉回归

`scripts/visual-regression.py` 在固定的 Linux Chromium（Playwright）环境运行。先通过本地 HTTP Server 打开构建后的 `dist`，等待项目行和字体加载后截图、采样并与**经审查提交**的 `tests/visual-baselines.json` 对照。

场景覆盖：桌面项目目录（浅/深）、项目详情 Dialog（浅/深）、顶部预览工具栏（闭合/悬停展开）、设置页、移动导航与移动弹窗。检查包括：

- 目标元素可见性、菜单真实展开、原生 Dialog 状态、项目 Emoji 无边框；
- PNG 原始截图完整保存为 `visual-output/current/*.png`，便于人工检查；
- 截图尺寸变化超过 3px、RGB 缩略图平均绝对差超过 7.5、或差异采样格超过 14%，即判定失败；
- 固定视口、DPR=1、系统浅色起始值、中文 locale、减少动画，尽量抑制非确定性因素；
- 不对 iframe 外部资源内容进行像素比较。预览工具栏悬浮层测试对 iframe 施加截图 mask。

### 本地执行

```sh
npm run build
python3 -m pip install -r scripts/requirements-visual.txt   # Windows 用 python
python3 -m playwright install chromium --with-deps
npm run visual:test
```

**基线更新必须单独审核。** 初始化基线时运行：

```sh
npm run visual:bootstrap
```

该指令同时截图已发布主站与当前构建，先验证两者差异，再打印**当前构建**的 `VISUAL_BASELINE_JSON=...` 供审核。不会自动改写仓库基线。正常 CI 只读取已提交的基线，不接受“截图变化即自动通过”。基线首次创建时已验证九种场景的缩略图 MAE 为 0，随后固定到 `tests/visual-baselines.json`。若是有意变更 UI，请审核完整 PNG 与 CI 报告，确认视觉变更后再提交新的 JSON 数据。

完整截图与 CI 上的 `ui-vault-visual-*` 构建产物可以用于观察某个变更，但缩略图对比不能替代真实用户交互测试，也不能发现所有像素级细节差异。

**初始化可靠性注意：** 截图脚本必须等到工作台项目列表加载完成后再固定 `data-theme`，否则主站初始化可能异步覆盖主题，造成错误的明暗截图对比；此类截图时序差异不能认定为 UI 变化。CI 固定使用 Ubuntu 24.04 + Playwright Chromium 1.55，避免 Linux 字体或浏览器升级导致基线漂移。
