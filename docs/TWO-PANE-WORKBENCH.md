# 常驻双栏工作台

## 目标与操作方式

UI-Vault 的核心任务从“收藏卡片后打开侧边抽屉”变为“从左侧选中项目，在右侧直接操作其真实网页”。

**桌面：左边目录，右边预览。** 左侧可搜索中文英文、筛选分类、收藏／手工精选／跨仓资源，并依需要排序。右侧标题栏显示当前项目，下面的预览画布占满可用宽高。展开“项目说明与源码”才展示详细元数据，不遮挡已有 iframe。

**移动端：预览优先。** 点击左上角菜单暂时显示项目目录，选择后关闭目录并将焦点移回主预览。没有用于展示 Demo 的弹出详情框。

## 项目类型

- `source:local`：以隔离 iframe 加载已经发布的真实 Demo，能直接与网页交互。默认自适应；可以改为 390 / 768 / 1280px 测试布局。切换设备只调整 iframe 的显示尺寸，不刷新页面。
- `source:external` + `siteUrl`：尝试沙箱 iframe 显示已核实的站点，保留“单独打开”按钮。外部站点可能禁止嵌入（如 X-Frame-Options / CSP），不能保证在内嵌容器显示；不绕过网站安全限制。
- `source:external` 没有 `siteUrl`：只显示准确的项目来源说明、可打开的仓库链接和复用要点。禁止伪造截屏，也不将 GitHub 页面假装成实际 UI。
- 收藏不重载右侧 iframe，搜索结果为空时右侧显示对应空态。选择新项目时才切换 iframe。
- `?asset=<id>` 继续指向指定项目；浏览器前进／后退可以恢复所选项目。

## 可维护模块

| 路径 | 职责 |
| --- | --- |
| `index.html` | 布局与可访问的项目目录及预览结构 |
| `assets/styles.css` | 两栏宽度、滚动、响应式、预览面积 |
| `assets/app.js` | 状态、筛选、历史 URL、键盘、收藏与视口管理 |
| `assets/core/workbench.js` | 目录项、详情说明、iframe 实际预览的 HTML |
| `assets/core/preview.js` | 计算设备宽度及缩放、位置与高度 |
| `assets/core/render.js` | 旧卡片渲染与详情模板的兼容接口，目前不参与主站交互 |

## 验证要点

1. 在桌面（1280、1440）不出现弹出详情抽屉；右侧始终可见、可直接操作。
2. 在 768px 仍保留可用的两栏空间；在 390px 通过菜单选项目后回到真实预览。
3. 目录筛选、收藏、Ctrl/⌘+K 搜索、资源分享和浏览器前进/后退可用。
4. 预览尺寸切换不会重置正在操作的 Demo 状态；选择另一项目才重载。
5. 站点不存在、数据为空和第三方嵌入失败均有真实说明，不虚构内容。
6. 执行 `npm run check` 并确认 Pages 发布；浏览器截图及逐设备视觉验收是独立后续步骤。


## GitHub Pages HTML/JS/CSS 缓存错配修复（2026-11-21）

### 问题

页面升级到常驻左右双栏时，HTML 用到 `#sidebar` 和 `#preview-stage` 等节点，旧版 HTML 与新版 JS/CSS 经 CDN 或浏览器缓存混用后，可能出现 `Cannot set properties of null (setting 'inert')`，导致初始化中断；即使 JS 没有报错，旧 HTML + 新 CSS 也会造成布局错乱。单纯通过 CI 检查源码语法或静态 HTML 无法发现这种跨版本错配。

### 处理

- `scripts/build.mjs` 对主站 `index.html`、CSS 和全部 Web 资产计算 SHA-256 指纹，发布时写入 `assets/styles.<指纹>.css` 与 `assets/app.<指纹>.js`，并将 ES Module 的本地导入也统一加上该指纹。
- 源仓库保留稳定 `assets/app.js` 和 `assets/styles.css`，方便本地开发和兼容旧引用；发布后的新 HTML **只引用带指纹的新文件**。
- `app.js` 在运行前验证当前 HTML 是否具备全部必需的主站节点，并在 `DOMContentLoaded` 后初始化。如果缺少节点，在 UI-Vault 主站 URL 上添加一次恢复查询参数并重新请求 HTML；同版本仍异常时显示可操作的重新加载提示，绝不继续调用空节点的 `inert`。
- `scripts/check-dist.mjs` 校验发布 HTML、指纹化文件和模块依赖的版本一致性；CI 发现错误会阻止部署。
- `Permissions policy violation: unload is not allowed` 通常是外部浏览器脚本/第三方页面尝试监听 unload 引发的浏览器权限提示，与 `sidebar === null` 不是同一类错误。不要为消除提示而放宽预览 iframe 沙箱安全。

如已打开页面长期不刷新，旧 HTML 仍可能留在标签页内。使用强制刷新（Windows/Linux `Ctrl+Shift+R`，macOS `Cmd+Shift+R`）或新建标签访问带不同查询参数的同一站点即可获取新入口；此操作无需清理站点收藏。
