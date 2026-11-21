/** Install reusable token/CSS assets into an existing project. */
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const flags=process.argv.slice(2).filter(x=>x.startsWith('--'));
const args=process.argv.slice(2).filter(x=>!x.startsWith('--'));
if(args.length!==1 || flags.some(x=>x!=='--force')){console.error('Usage: node scripts/install.mjs /path/to/project [--force]');process.exit(2);}
const target=path.resolve(args[0]);
if(!fs.existsSync(target)||!fs.statSync(target).isDirectory()){console.error('目标项目目录不存在: '+target);process.exit(2);}
const dest=path.join(target,'ui-foundation');
if(dest===root){console.error('拒绝覆盖 Kit 源码');process.exit(2);}
if(fs.existsSync(dest)&&!flags.includes('--force')){console.error('目标已存在，使用 --force 更新所属文件: '+dest);process.exit(1);}
if(flags.includes('--force'))for(const item of ['dist','styles','tokens','INTEGRATION.md'])fs.rmSync(path.join(dest,item),{recursive:true,force:true});
fs.mkdirSync(dest,{recursive:true});
for(const item of ['dist','styles','tokens'])fs.cpSync(path.join(root,item),path.join(dest,item),{recursive:true});
fs.copyFileSync(path.join(root,'INTEGRATION.md'),path.join(dest,'INTEGRATION.md'));
console.log('Installed UI Foundation: '+dest);
