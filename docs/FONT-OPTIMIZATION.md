# 霞鹜 975 圆体 · 字体加载优化

UI-Vault 主界面采用 [lxgw/975Yuan](https://github.com/lxgw/975Yuan)，源版本固定为提交 `37b753f408b25d3ab3d25cbddb5dd9dacca0289a`。许可证为 SIL OFL 1.1。按网页嵌入优化目的进行子集化与 WOFF2 格式转换，保留原始字体名称和许可证，不提供可安装的修改版字体。

## 策略

- 不向浏览器分发上游 3 个 TTF（原始每份约 14–15 MB）。
- 使用 fontTools + Brotli 将每个字重拆为 **latin / ui / common** 三份 WOFF2，总计 9 个文件；浏览器借助 `unicode-range` 只下载当前文字需要的子集和字重。
- `ui` 从入口 HTML、JS、公开元数据和资产清单自动扫描字符；项目标题变化后重新生成即可覆盖。
- `common` 从 GB2312 一级常用汉字提取，用户输入常用汉字时才按需加载；其他极少见字符由系统字体回退。
- `font-display: swap` 让文字优先显示；字体可在设置中切换为系统无衬线 / 衬线，切换后浏览器无需下载霞鹜字体。
- 页面通过同源 `assets/fonts/975-yuan.css` 引用同源 WOFF2，不再依赖外部 raw.githubusercontent.com 地址。

## 本地

先准备 Node >= 22 与 Python 3.12（建议建立 Python 虚拟环境），然后：

```bash
python3 -m pip install -r scripts/requirements-fonts.txt
npm run fonts:build        # 生成 assets/fonts/，不会提交到 Git
npm run dev
npm run check
```

`npm run dev`、`npm run build` 和 `npm run check` 均会自动调用字体生成器；第二次运行若字符与版本未变化会直接命中本地缓存。上游原版 TTF 缓存在 `.cache/fonts/975yuan/`，不会打包到站点中。

CI 会安装 Python 字体依赖，在 Node 静态构建前生成网页字体。构建检查确保包含字体 CSS、9 个 WOFF2 文件及 OFL 许可证，不允许分发原版 TTF。GitHub Pages 产物仍保留内容指纹入口。

## 验证与升级

- Network 按 `woff2` 过滤请求，首次访问只应加载当前页面使用的字重/字符分组。
- `dist/assets/fonts/manifest.json` 记录各文件字节数、字重和 glyph 数量，可用于对比体积。
- 修改上游版本需要同步修改固定提交、检查许可证和生成结果；不要直接使用未经审查的动态 master 链接。
- 本地首次生成需要下载原始 TTF；若构建环境无法访问 GitHub，构建应失败，而不是发布缺失字体的站点。

注意：字形子集是针对 **UI-Vault 工作台** 的，嵌入的其他 React/Vue/页面镜像项目有其独立样式，不会自动改变字体。
