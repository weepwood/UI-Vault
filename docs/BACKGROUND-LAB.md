# 背景效果实验室 · Backdrop Studio

[在线入口](https://weepwood.github.io/UI-Vault/?asset=aurora-field) · [单文件 Demo](../demos/effects/aurora-field/index.html)

实验室以用户提供的 Backdrop Studio HTML 为基础，保留独立 Demo 的实现方式，并替换原有 12 种背景画廊。资产 ID `aurora-field` 和路径 `demos/effects/aurora-field/index.html` 不变，因此已有收藏、资源链接和 iframe 预览继续兼容。附件中的浏览器注入主题样式已移除；页面没有外链脚本、字体、图片或运行时依赖。

## 工作台能力

- 42 种背景效果，按实时渲染、渐变、光效、几何和纹理分类；支持中文与英文名称搜索。
- 主画布支持动态/静态切换、配色、强度、速度、柔化、颗粒、暗角和追光控制。
- 可切换落地页、登录卡片、仪表盘等内容模板，也可在桌面与手机画布之间切换。
- 支持 5 种工作台外观、随机组合、前后切换、全屏和参数重置；状态尽可能保存到浏览器本地存储。
- 导出当前背景的 HTML、CSS 与渲染脚本，也可下载为独立 HTML。
- Canvas 2D 与 WebGL 效果都在当前主画布渲染；缩略图按可见性按需绘制，渲染分辨率和帧率设有上限，WebGL 故障时回退到兼容绘制。

## 可访问性与性能

- 控件使用按钮、搜索框和 range 输入；主要操作提供可见焦点、名称和键盘快捷键。
- 监听 `prefers-reduced-motion` 与页面可见状态，在减少动画或后台标签页时停止连续动画。
- 页面宽度不足时隐藏次要工具或压缩布局，背景列表保持独立滚动。
- WebGL 由浏览器能力决定；不支持时会尝试 Canvas 兼容渲染。较复杂效果在低性能设备上可能降低帧率。

## 维护与验证

背景效果均位于单文件 Demo 内。新增或修改效果时，应同步检查分类筛选、搜索、动态/静态状态、配色、代码导出和移动布局。目录资产的唯一事实来源仍是 `catalog/assets/aurora-field.json`；修改元数据后运行 `npm run catalog:sync`。

验证包含项目 `npm run check` 中的 HTML/脚本结构、资产契约、测试、设计审计和构建检查。浏览器视觉回归由 `npm run visual:test` 单独运行；自动截图不替代人工视觉审阅。
