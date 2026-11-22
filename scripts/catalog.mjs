import { saveManifest, inspectCatalog } from './lib/catalog.mjs';
import {saveProjectManifest} from './lib/projects.mjs';
const command=process.argv[2] ?? 'check';
if(command==='sync') {
  try { const projects=await saveProjectManifest(); const count=await saveManifest(); console.log('已生成 '+projects+' 条 Project 与 '+count+' 条 Asset。'); }
  catch(e){console.error(e.message);process.exitCode=1;}
} else if(command==='check'){
  const {errors,items}=await inspectCatalog();
  if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
  else console.log('项目与资产清单一致：'+items.length+' 条资产。');
} else {console.error('用法：node scripts/catalog.mjs sync|check');process.exitCode=1;}
