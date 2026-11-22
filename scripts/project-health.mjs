#!/usr/bin/env node
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {PROJECT_ROOT} from './lib/projects.mjs';
import {emptyProjectHealth} from '../assets/core/project-health.js';
import {collectPublicProjectHealth} from './lib/project-health.mjs';

const live=process.argv.includes('--live');
if(process.argv.length!==3||(!live&&!process.argv.includes('--offline'))){
  console.error('用法：node scripts/project-health.mjs --offline|--live');
  process.exit(2);
}
const projects=JSON.parse(await readFile(join(PROJECT_ROOT,'content/projects.json'),'utf8'));
if(!Array.isArray(projects)||projects.some(p=>!p.id||!p.repository))throw Error('Project 清单无效');
const snapshot=live
  ?await collectPublicProjectHealth(projects,{token:process.env.GH_PROJECT_HEALTH_TOKEN||''})
  :emptyProjectHealth(projects);
const output=join(PROJECT_ROOT,'dist/content/project-health.json');
await mkdir(join(PROJECT_ROOT,'dist/content'),{recursive:true});
await writeFile(output,JSON.stringify(snapshot,null,2)+'\n','utf8');
const matched=Object.values(snapshot.projects).filter(x=>x.repositoryStatus==='available').length;
console.log('Project 状态快照：'+projects.length+' 个项目，已核实公开仓库 '+matched+' 个'+(live?'（公开 GitHub API）':'（离线占位）'));
