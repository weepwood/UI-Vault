# 复用真实 Workbench 表单控件

这些文件直接来自主站，不是重写的组件。SearchField、WorkbenchSelect 需要 React 及 JSX 构建；Icon、dropdown.js 和对应 CSS 与原实现共享。保留相对目录结构（src/components、assets/core、assets/ui、assets/icons），避免修改导入路径。

- SearchField.jsx：受控 value / onChange，支持 placeholder、label、disabled、invalid、describedBy。
- WorkbenchSelect.jsx：受控 value / onChange / options，支持键盘导航和禁用/错误说明。
- Icon.jsx：默认 sprite 为 ./assets/icons/lucide.svg，相对于文档 base。不同部署路径可通过 IconSpriteContext.Provider 指定 sprite；不透明 iframe 需采用主站展厅的内嵌 sprite 方式。
- controls.css、dropdown.css：仍是主站共享样式。新增 reuse-theme.css 为可选的局部浅/深主题适配层，提供实际语义变量、基础图标和焦点规则；在宿主中用 .wb-reuse-theme 包裹控件，并切换 data-theme="light"/"dark"。data-motion="reduced" 可关闭此范围内的交互动效。基础控件 CSS 自身仍含其他工作台类名，宿主如有同名样式，应评估冲突；该适配层不保证 Shadow DOM 隔离。

实际接入示例（在 React 工程中）：

```jsx
import { useState } from 'react';
import { SearchField } from './src/components/SearchField.jsx';
import { WorkbenchSelect } from './src/components/WorkbenchSelect.jsx';
import './assets/ui/controls.css';
import './assets/ui/dropdown.css';
import './demos/components/workbench-system/reuse-theme.css';

export function FormDemo() {
  const [query, setQuery] = useState('');
  const [density, setDensity] = useState('compact');
  return <div className="wb-reuse-theme" data-theme="light">
    <SearchField id="query" label="搜索" controls="reuse-result" shortcuts={null}
      value={query} onChange={setQuery} />
    <WorkbenchSelect id="density" label="密度" value={density}
      onChange={setDensity} options={[{value:'compact',label:'紧凑'},{value:'comfortable',label:'舒展'}]} />
    <output id="reuse-result">{query} · {density}</output>
  </div>;
}
```

上述接入示例已使用八份实际发布源码与样式在独立临时 React 工程完成构建和 Chromium 键盘交互验收。它不是独立安装包；可以直接使用附带的局部主题适配，也可接入自己的设计系统。主站实际样式和依赖以仓库为准。若需要完整的独立组件项目，请使用 UI Foundation Kit 的 React/Vue Registry 交付；其安装、构建和运行由现有 CI 验收。Lucide 图标遵守原 ISC 许可。
