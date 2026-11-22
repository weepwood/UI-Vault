/** Copy-on-install: 仅将稳定 Token/CSS 的快照复制到目标仓库，拒绝建立运行时跨仓依赖。 */
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const flags=process.argv.slice(2).filter(x=>x.startsWith('--'));
const args=process.argv.slice(2).filter(x=>!x.startsWith('--'));
const supported=new Set(['--force','--dry-run']);
if(args.length!==1||flags.some(x=>!supported.has(x))){
  console.error('Usage: node scripts/install.mjs /path/to/project [--dry-run] [--force]');
  process.exit(2);
}
const target=path.resolve(args[0]);
if(!fs.existsSync(target)||!fs.statSync(target).isDirectory()){
  console.error('目标项目目录不存在: '+target);
  process.exit(2);
}
const dest=path.join(target,'ui-foundation');
if(dest===root||fs.existsSync(dest)&&fs.lstatSync(dest).isSymbolicLink()){
  console.error('拒绝覆盖源码或符号链接目录');
  process.exit(2);
}
const sourcePackage=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const owned=['dist','styles','tokens','INTEGRATION.md'];
for(const item of owned){
  if(!fs.existsSync(path.join(root,item))){
    console.error('基础包缺少生成文件 '+item+'：请先运行 npm run build');
    process.exit(2);
  }
}
if(fs.existsSync(dest)&&!flags.includes('--force')){
  console.error('目标已存在，使用 --force 更新工具所属文件: '+dest);
  process.exit(1);
}
if(flags.includes('--dry-run')){
  console.log('即将'+(fs.existsSync(dest)?'更新':'安装')+' UI Foundation '+sourcePackage.version+' → '+dest);
  console.log('仅涉及: '+owned.join(', ')+' 和 INSTALL-MANIFEST.json');
  process.exit(0);
}
if(flags.includes('--force')){
  for(const item of [...owned,'INSTALL-MANIFEST.json'])
    fs.rmSync(path.join(dest,item),{recursive:true,force:true});
}
fs.mkdirSync(dest,{recursive:true});
for(const item of ['dist','styles','tokens'])
  fs.cpSync(path.join(root,item),path.join(dest,item),{recursive:true});
fs.copyFileSync(path.join(root,'INTEGRATION.md'),path.join(dest,'INTEGRATION.md'));

const contents=[];
function walk(directory){
  if(fs.statSync(directory).isFile()){
    contents.push({
      path:path.relative(dest,directory).split(path.sep).join('/'),
      sha256:createHash('sha256').update(fs.readFileSync(directory)).digest('hex')
    });
    return;
  }
  for(const entry of fs.readdirSync(directory,{withFileTypes:true})){
    const full=path.join(directory,entry.name);
    if(entry.isSymbolicLink())throw Error('不允许将符号链接交付到独立项目: '+full);
    if(entry.isDirectory())walk(full);
    else if(entry.isFile()){
      contents.push({
        path:path.relative(dest,full).split(path.sep).join('/'),
        sha256:createHash('sha256').update(fs.readFileSync(full)).digest('hex')
      });
    }
  }
}
for(const item of owned)walk(path.join(dest,item));
contents.sort((a,b)=>a.path.localeCompare(b.path,'en'));
fs.writeFileSync(path.join(dest,'INSTALL-MANIFEST.json'),JSON.stringify({
  formatVersion:1,
  name:sourcePackage.name,
  version:sourcePackage.version,
  strategy:'vendored-snapshot',
  source:'https://github.com/weepwood/UI-Vault/tree/main/subprojects/ui-foundation-kit',
  files:contents
},null,2)+'\n');
console.log('Installed UI Foundation '+sourcePackage.version+' ('+contents.length+' files): '+dest);
