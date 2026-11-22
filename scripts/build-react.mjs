import {build} from 'esbuild';
import {ROOT} from './lib/catalog.mjs';
import {resolve} from 'node:path';

// 只打包主站 React 组件：demos/** 和 subprojects/** 保留各自运行框架。
// 构建产物仍交给现有白名单发布器统一指纹化，兼容 GitHub Pages 子路径。
const shared = {
  bundle:true,
  format:'esm',
  platform:'browser',
  target:['chrome109','safari16'],
  jsx:'automatic',
  minify:true,
  legalComments:'eof',
  sourcemap:false,
  logLevel:'info'
};

await Promise.all([
  build({
    ...shared,
    entryPoints:[resolve(ROOT,'src/react-workbench.jsx')],
    outfile:resolve(ROOT,'assets/react-workbench.js')
  }),
  build({
    ...shared,
    // The main workbench runs local demos in sandbox="allow-scripts" iframes.
    // A classic bundled script can load there without granting same-origin access;
    // an ES module would require CORS permission from the opaque iframe origin.
    format:'iife',
    entryPoints:[resolve(ROOT,'demos/experiments/atlas-client-ant/src/main.jsx')],
    outfile:resolve(ROOT,'assets/style-atlas/ant-design-demo.js')
  }),
  build({
    ...shared,
    // Material Web is bundled into the local iframe as native custom elements.
    format:'iife',
    entryPoints:[resolve(ROOT,'demos/experiments/atlas-client-material/src/main.js')],
    outfile:resolve(ROOT,'assets/style-atlas/material3-demo.js')
  })
]);
console.log('React 工作台、Ant Design 与 Material Web 图鉴构建完成。');
