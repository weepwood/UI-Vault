import {build} from 'esbuild';
import {ROOT} from './lib/catalog.mjs';
import {resolve} from 'node:path';

// 只打包主站 React 组件：demos/** 和 subprojects/** 保留各自运行框架。
// 构建产物仍交给现有白名单发布器统一指纹化，兼容 GitHub Pages 子路径。
await build({
  entryPoints:[resolve(ROOT,'src/react-workbench.jsx')],
  outfile:resolve(ROOT,'assets/react-workbench.js'),
  bundle:true,
  format:'esm',
  platform:'browser',
  target:['chrome109','safari16'],
  jsx:'automatic',
  minify:true,
  legalComments:'eof',
  sourcemap:false,
  logLevel:'info'
});
console.log('React 工作台组件构建完成，已生成 assets/react-workbench.js');
