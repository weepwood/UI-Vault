#!/usr/bin/env node
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {PROJECT_ROOT} from './lib/projects.mjs';
import {createOfflinePreviewSnapshot} from '../assets/core/project-operations.js';
import {collectPreviewHealth} from './lib/preview-health.mjs';
const mode=process.argv[2];
if(process.argv.length!==3||!['--live','--offline'].includes(mode))
 throw Error('用法：node scripts/preview-health.mjs --live|--offline');
const assets=JSON.parse(await readFile(join(PROJECT_ROOT,'content/assets.json'),'utf8'));
if(!Array.isArray(assets)||assets.some(a=>!a.id||!a.source))throw Error('Asset 清单格式不正确');
const snapshot=mode==='--live'?await collectPreviewHealth(assets):createOfflinePreviewSnapshot(assets);
const path=join(PROJECT_ROOT,'dist/content/preview-health.json');
await mkdir(join(PROJECT_ROOT,'dist/content'),{recursive:true});
await writeFile(path,JSON.stringify(snapshot,null,2)+'\n');
const statuses=Object.values(snapshot.assets);
console.log('预览信息：'+statuses.length+' 个资产，HTTP 可达 '+statuses.filter(x=>x.http==='reachable').length+
 '，明确禁止嵌入 '+statuses.filter(x=>x.framePolicy==='blocked').length+
 '；可达并不代表 iframe 正常');
