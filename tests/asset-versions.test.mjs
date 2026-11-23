import test from 'node:test';
import assert from 'node:assert/strict';
import {resolveVersionId,selectAssetVersion} from '../assets/core/asset-versions.js';
const src={id:'alpha',title:'Bauhaus',preview:'demos/a.html',code:'demos/a.html',description:'old',projectId:'old',source:'local',sourceFiles:[{path:'demos/a.html'}],designGuidePath:'demos/a.md',versions:[{id:'landfolio-bauhaus',label:'Landfolio · Bauhaus',preview:'demos/b.html',code:'demos/b.html',description:'new',projectId:'ref-ctlsim-landfolio',designGuidePath:'demos/b.md',sourceUrl:'https://github.com/ctlsim/landfolio/blob/main/themes/bauhaus.html',originRepo:'https://github.com/ctlsim/landfolio',license:'MIT'}]};
test('版本无效时回退 V1，原资源保持不变',()=>{
 assert.equal(resolveVersionId(src,'unknown'),'original');
 assert.equal(selectAssetVersion(src,'unknown'),src);
 assert.equal(src.preview,'demos/a.html');
});
test('选择 V2 后切换预览和源码且不更换主条目 ID',()=>{
 const next=selectAssetVersion(src,'landfolio-bauhaus');
 assert.equal(next.id,src.id);
 assert.equal(next.preview,'demos/b.html');
 assert.equal(next.sourceFiles[0].path,'demos/b.html');
 assert.equal(next.designGuidePath,'demos/b.md');
 assert.equal(next.projectId,'ref-ctlsim-landfolio');
 assert.equal(src.preview,'demos/a.html');
});
