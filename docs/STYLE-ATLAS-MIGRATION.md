# Style Atlas → UI Vault：拆分迁移清单

源仓库：[weepwood/style-atlas](https://github.com/weepwood/style-atlas)，原网站 [Style Atlas](https://weepwood.github.io/style-atlas/)。

## 已迁入的三组资产

| 类型 | 数量 | 资源 ID | 预览 | 设计资料 |
| --- | ---: | --- | --- | --- |
| 独立视觉主题 | 30 | `atlas-<theme-id>` | `demos/experiments/atlas-*/index.html` | `content/tokens/style-atlas/<id>.json` |
| 客户端设计参考 | 14 | `atlas-client-<id>` | `demos/experiments/atlas-client-*/index.html` | `content/tokens/style-atlas/client-<id>.json` |
| Frame Lab 样例 | 12 | `atlas-frame-<id>` | `demos/experiments/atlas-frame-*/index.html` | `content/tokens/style-atlas/frame-<id>.json` |

总计 **56 个独立条目**，通过 `?asset=atlas-glass` 等链接接入 UI Vault 三栏工作台；不影响已有 ID 和收藏数据。

每个条目的元数据独立保存在 `catalog/assets/<id>.json`，修改时执行 `npm run catalog:sync`；聚合清单 `content/assets.json` 为自动生成产物。三组资产分别保留原色值、名称、用途与来源；主题样机依照源项目 JSX 和 CSS 做静态化转换，客户端案例继续使用源项目样式与原创模拟布局，Frame Lab 案例提供轻量可操作的独立 Dashboard 示例。

## 维护、授权与已知边界

- CSS 位于 `assets/style-atlas/`，由构建白名单按既有规则发布；30 套原主题及 14 个客户端案例是多文件 Demo，标记 `copyable:false`，不将单独 HTML 误作完整源码。12 套 Frame Lab 新页面 CSS/JS 内置，可以直接复制单页。
- 独立条目均可以直接在 `/UI-Vault/demos/experiments/<id>/index.html` 打开；路径均为相对路径。
- 原有 `catalog/assets/style-atlas.json` 外部入口和 `frame-design-lab.json` 本地实验均保留，便于对照原完整体验。
- 源仓库未包含明确的通用 LICENSE；迁移仅在原作者自身资源库内使用，**不得据此推断所有资源均为 MIT 授权**。
- 客户端案例是原作者学习示例，不是第三方产品的原始源码、官方截图或精确复刻。官方规范链接仅作为资料来源。
- 原网页的复杂全站主题切换、动态比较功能仍保留在原项目中；独立页面针对单个风格做局部预览，不宣称完全等价。
- 建议通过 `npm run check` 验证目录、构建和静态测试，并以实际浏览器进行后续逐页视觉确认。
