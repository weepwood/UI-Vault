# Workbench 模块化架构（原生 JS 阶段）

> 本文记录已经完成的模块抽取，属于迁移 React 之前的第一步。UI-Vault 继续使用原生 ES Modules；不改变任何子项目的框架或独立 Demo 路径。

## 模块所有权

| 模块 | 责任 | 不应负责 |
| --- | --- | --- |
| `assets/app.js` | 启动顺序、DOM/URL 生命周期、业务事件协调、iframe 内容更新 | 各类筛选互斥规则、设备菜单内部的 hover/键盘行为 |
| `assets/core/workbench-state.js` | 工作台会话状态初始值、资产清单、过滤器转换、项目选择和预览模式 | DOM 查询、localStorage、历史记录、网络 |
| `assets/core/catalog.js` | 对资源进行检索、过滤与排序（已有） | 变更工作台状态或操作 DOM |
| `assets/core/settings.js` | 用户偏好的读取/验证/持久化/应用（已有） | 资源目录筛选或独立 Demo 内容 |
| `assets/core/preview.js` | 设备宽度常量、iframe 缩放计算（已有） | 设备菜单的键盘事件 |
| `assets/ui/viewport-switcher.js` | 当前设备标签同步、菜单展开关闭、键盘/触屏/焦点和事件清理 | 修改设备宽度或重建 iframe |
| `assets/core/dropdown.js` | 原生 select 的可访问性增强（已有） | 决定业务上哪些标签可选 |
| `assets/ui/controls.css` | 搜索、按钮、筛选按钮与 Toast 的基础样式 | 三栏尺寸、页面特定布局 |
| `assets/ui/dropdown.css` | 增强下拉的基础样式、状态和动效 | 设置页与项目工具栏的定制尺寸 |
| `assets/styles.css` | Design Tokens、工作台布局、组件的页面级覆盖与响应式 | 重复一遍基础控件样式 |

**真实组件的单一来源**：组件演示页仍加载 `assets/styles.css` 并调用真实业务模块；其 `demo.css` 只布局展示样本。不要在展厅中另写同名下拉或预览逻辑。

## 数据流

```text
catalog/assets/*.json -> content/assets.json
                    -> app.js (fetch/启动与 DOM 绑定)
                    -> workbench-state.js (会话状态与状态转换)
                    -> catalog.js (纯过滤、排序、搜索)
                    -> workbench.js (项目条目与详情 HTML)
                    -> UI DOM
                                    preview.js (iframe 尺寸计算)
                                    viewport-switcher.js (切换器交互)
settings.js -> localStorage (用户偏好)
favorites.js -> localStorage (收藏)
```

会话状态沿用 `filterAssets()` 支持的扁平字段结构，避免一次迁移中改写资源索引协议。`changeCatalogFilter` 使快捷模式互斥；`activateAsset` 在重复选中同一 ID 时返回 `false`，以保留 iframe 状态。工作台仍只有在真实资源切换时才更新 iframe HTML。

## 样式导入与兼容

`assets/styles.css` 的开头按以下顺序导入：

```css
@import url("./fonts/975-yuan.css");
@import url("./ui/controls.css");
@import url("./ui/dropdown.css");
```

随后保留主站语义 Token、工作台布局及 CSS 覆盖。**组件基础样式在导入文件中定义一次**，原来的移动端/深色/设置视图特定覆写仍在主样式表。保留相同 DOM class 和 data 属性，避免主站、UI Foundation Kit 演示页或外部 Demo 出现断裂。

目前通过浏览器 `@import` 加载两份较小的组件 CSS，会增加少量请求；将来若指标显示请求开销明显，可在构建阶段合并，但不能手动复制两份源码造成差异。

## 验收

```sh
npm run validate
npm run test
npm run design:audit
npm run check
```

新增 `tests/workbench-state.test.mjs` 验证过滤器互斥、重置和重复选择，`tests/workbench-modules.test.mjs` 验证共享 CSS 和设备组件真实事件；`tests/viewport-controls.test.mjs` 改为组件边界测试。构建后的 `scripts/check-dist.mjs` 还会校验组件文件存在、ES module 的 URL 版本和 CSS 导入。

## 后续工作

1. 优先将 `app.js` 中的项目详情 Dialog/源码加载拆成独立控制器，并补全取消请求与焦点管理。
2. 给移动端导航与设置视图建立一个独立的视图控制器，简化路由及焦点状态。
3. 再将 `assets/styles.css` 中的 Dialog、ProjectRow、PreviewToolbar 分批提取为独立 CSS recipes；每次迁移都保留主站消费方及展厅示例。
4. 等状态边界稳定且有实际需求时，再评估将**主工作台**迁移 React，所有 Demo 和 JSON 资源保持独立。

当前改动不意味着已经有跨框架组件库；跨项目通用设计基础依然由 `subprojects/ui-foundation-kit/` 维护。
