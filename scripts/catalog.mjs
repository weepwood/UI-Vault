import { saveManifest, inspectCatalog } from './lib/catalog.mjs';
const command=process.argv[2] ?? 'check';
if(command==='sync') {
  try { const count=await saveManifest(); console.log('已生成 content/assets.json，共 '+count+' 条资产。'); }
  catch(e){console.error(e.message);process.exitCode=1;}
} else if(command==='check'){
  const {errors,items}=await inspectCatalog();
  if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
  else console.log('资产清单与元数据一致：'+items.length+' 条。');
} else {console.error('用法：node scripts/catalog.mjs sync|check');process.exitCode=1;}
