import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {capture,loadSnapshot,diffSnapshots,listSnapshots,blobText} from '../scripts/lib/product-registry/core.mjs';
import {extractDeclarations,compareTokens} from '../scripts/lib/product-registry/tokens.mjs';
function fixture(t){
 const base=mkdtempSync(join(tmpdir(),'uir-test-'));t.after(()=>rmSync(base,{recursive:true,force:true}));
 const repo=join(base,'repo'),store=join(base,'store');mkdirSync(repo);mkdirSync(store);
 const git=(...args)=>execFileSync('git',['-C',repo,...args],{stdio:['ignore','pipe','pipe']}).toString().trim();
 git('init','-b','main');git('config','user.name','Test');git('config','user.email','test@example.invalid');
 const commit=content=>{writeFileSync(join(repo,'button.css'),content);git('add','button.css');git('commit','-m','test');return git('rev-parse','HEAD');};
 const old=commit('button{color:red}'),next=commit('button{color:blue}');
 const spec={id:'test',framework:'react',platform:['web'],assets:[{id:'button',kind:'component',paths:['button.css']}]};
 return {repo,store,git,old,next,spec};
}
test('真实 Git 历史、稳定身份、差异及幂等采集',t=>{
 const f=fixture(t),a=capture(f.store,f.repo,f.old,f.spec),b=capture(f.store,f.repo,f.next,f.spec);
 assert.equal(capture(f.store,f.repo,f.old,f.spec).key,a.key);
 assert.equal(listSnapshots(f.store,'test').length,2);
 assert.equal(diffSnapshots(loadSnapshot(f.store,'test',a.key),loadSnapshot(f.store,'test',b.key))[0].status,'changed');
 assert.equal(blobText(f.store,a.assets[0].files[0].sha256),'button{color:red}');
 writeFileSync(join(f.repo,'button.css'),'uncommitted');assert.equal(capture(f.store,f.repo,f.next,f.spec).key,b.key);
});
test('拒绝非法路径、重复资产、可变引用和缺失文件',t=>{
 const f=fixture(t);
 for(const path of ['../button.css','/button.css','missing.css','CON'])assert.throws(()=>capture(f.store,f.repo,f.old,{...f.spec,assets:[{...f.spec.assets[0],paths:[path]}]}));
 assert.throws(()=>capture(f.store,f.repo,'HEAD',f.spec));
 assert.throws(()=>capture(f.store,f.repo,f.old,{...f.spec,assets:[...f.spec.assets,...f.spec.assets]}));
});
test('检测内容篡改及拒绝覆盖',t=>{
 const f=fixture(t),a=capture(f.store,f.repo,f.old,f.spec);
 writeFileSync(join(f.store,'blobs',a.assets[0].files[0].sha256),'tampered');
 assert.throws(()=>loadSnapshot(f.store,'test',a.key));assert.throws(()=>capture(f.store,f.repo,f.old,f.spec));
});
test('拒绝存储目录符号链接和 Git 符号链接',t=>{
 const f=fixture(t);symlinkSync(f.repo,join(f.store,'blobs'));assert.throws(()=>capture(f.store,f.repo,f.old,f.spec));
 symlinkSync('button.css',join(f.repo,'link.css'));f.git('add','link.css');f.git('commit','-m','link');
 assert.throws(()=>capture(f.store,f.repo,f.git('rev-parse','HEAD'),{...f.spec,assets:[{...f.spec.assets[0],paths:['link.css']}]}));
});
test('Token 保留不同主题声明与别名，拒绝缺失',()=>{
 const map={'text.primary':'--text','space.small':'--gap'};
 const a=extractDeclarations(':root{--text:#fff;--gap:var(--space)} .dark{--text:#000}',map);
 assert.deepEqual(a['text.primary'].declarations,['#fff','#000']);
 assert.equal(a['space.small'].declarations[0],'var(--space)');
 const b=extractDeclarations(':root{--text:#aaa;--gap:var(--space)}',map);
 assert.equal(compareTokens(a,b).length,1);assert.throws(()=>extractDeclarations('',map));
});
test('差异支持增删及不变，禁止跨项目',()=>{
 const a={id:'a',revision:'x',files:[]},b={id:'b',revision:'y',files:[]};
 assert.deepEqual(diffSnapshots({project:'p',assets:[a]},{project:'p',assets:[b]}).map(x=>x.status),['removed','added']);
 assert.equal(diffSnapshots({project:'p',assets:[a]},{project:'p',assets:[a]})[0].status,'unchanged');
 assert.throws(()=>diffSnapshots({project:'p',assets:[a]},{project:'q',assets:[a]}));
});

test('统一目录只读叠加、历史版本展示、证据内容转义与碰撞拒绝',async t=>{
 const {readPrivateCatalog,renderPrivateRecord}=await import('../scripts/lib/product-registry/local-catalog.mjs');
 const f=fixture(t), base=join(f.store,'private');mkdirSync(base);mkdirSync(join(base,'workspace'));mkdirSync(join(base,'config'));
 const store=join(base,'workspace'), a=capture(store,f.repo,f.old,f.spec), b=capture(store,f.repo,f.next,f.spec);
 writeFileSync(join(base,'config/pilots.json'),JSON.stringify([{spec:f.spec}]));
 writeFileSync(join(store,'pilot-index.json'),JSON.stringify([{project:'test',versions:[{key:a.key,commit:a.commit},{key:b.key,commit:b.commit}]}]));
 const publicAssets=[{id:'public-asset'}],publicProjects=[{id:'public-project'}];
 const result=readPrivateCatalog(base,publicAssets,publicProjects);
 assert.equal(publicAssets.length,1);assert.equal(publicProjects.length,1);assert.equal(result.assets.length,2);
 const item=result.assets.at(-1);assert.equal(item.copyable,false);assert.equal(item.privateSnapshot,true);
 const html=renderPrivateRecord(result.records.get(item.id));assert.match(html,/button\{color:blue\}/);assert.match(html,/button\{color:red\}/);assert.match(html,/不是实时组件运行预览/);
 assert.throws(()=>readPrivateCatalog(base,[item],[]));
 writeFileSync(join(f.repo,'button.css'),'<script>alert(1)</script>');f.git('add','button.css');f.git('commit','-m','escape');
 const c=capture(store,f.repo,f.git('rev-parse','HEAD'),f.spec);
 writeFileSync(join(store,'pilot-index.json'),JSON.stringify([{project:'test',versions:[{key:c.key,commit:c.commit}]}]));
 const safe=readPrivateCatalog(base,[],[]);const escaped=renderPrivateRecord(safe.records.values().next().value);
 assert.ok(escaped.includes('&lt;script&gt;'));assert.ok(!escaped.includes('<script>'));
});

test('运行预览必须绑定资产、快照、内容哈希和验收证据',async t=>{
 const {verifiedLivePreviews}=await import('../scripts/lib/product-registry/live-preview.mjs');
 const {hash}=await import('../scripts/lib/product-registry/core.mjs');
 const {createHash}=await import('node:crypto');
 const f=fixture(t),snap=capture(f.store,f.repo,f.old,f.spec),asset=snap.assets[0];
 const records=new Map([['private-test-button',{versions:[snap]}]]);
 const root=f.store,folder=join(root,'runtime-v2','test',snap.commit);mkdirSync(folder,{recursive:true});
 const script='document.body.textContent="ok"',html='<script type="module">'+script+'</script>';
 const sha256=hash(html),path='runtime-v2/test/'+snap.commit+'/bundle-'+sha256+'.html';
 writeFileSync(join(root,path),html);
 const row={project:'test',asset:'button',snapshot:snap.key,commit:snap.commit,revision:asset.revision,path,sha256,scriptHash:createHash('sha256').update(script).digest('base64'),kind:'isolated-live-component'};
 const manifest=join(root,'runtime-v2','candidates.json');
 writeFileSync(manifest,JSON.stringify([row]));
 assert.equal(verifiedLivePreviews(root,records).size,0);
 const live=verifiedLivePreviews(root,records,{candidate:true});
 assert.equal(live.size,1);assert.match(live.values().next().value.csp,/connect-src 'none'/);
 assert.doesNotMatch(live.values().next().value.csp,/allow-same-origin/);
 writeFileSync(manifest,JSON.stringify([{...row,revision:'0'.repeat(64)}]));assert.throws(()=>verifiedLivePreviews(root,records,{candidate:true}));
 writeFileSync(manifest,JSON.stringify([row]));writeFileSync(join(root,path),'tampered');assert.throws(()=>verifiedLivePreviews(root,records,{candidate:true}));
});

test('同类研究仅返回确实存在的目录资产，私有检索保留源版本',async()=>{
 const {relatedAssets,searchPrivate}=await import('../scripts/lib/product-registry/research.mjs');
 const a={id:'private-todo-smart-select',title:'TODO 公共选择器',tags:['选择器'],technologies:['react'],privateSnapshot:true};
 const r={asset:a,assetId:'smart-select',versions:[{project:'todo',commit:'abc',assets:[{id:'smart-select',files:[]}]}]};
 const publicAssets=[{id:'workbench-components',title:'Workbench'},{id:'unrelated',title:'Other'}];
 assert.deepEqual(relatedAssets(r,[a,...publicAssets]).map(x=>x.id),['workbench-components']);
 assert.equal(searchPrivate({records:new Map([[a.id,r]]),assets:[a,...publicAssets]},'todo 选择器')[0].commit,'abc');
 assert.equal(searchPrivate({records:new Map([[a.id,r]]),assets:[a,...publicAssets]},'vue').length,0);
});

test('追加项目资产范围不重写既有快照并拒绝历史重排',async t=>{
 const {appendProjectHistory}=await import('../scripts/lib/product-registry/core.mjs');
 const f=fixture(t),old=appendProjectHistory(f.store,f.repo,[f.old],f.spec);
 writeFileSync(join(f.repo,'other.css'),'div{}');f.git('add','other.css');f.git('commit','-m','expand');const next=f.git('rev-parse','HEAD');
 const spec={...f.spec,assets:[...f.spec.assets,{id:'other',kind:'component',paths:['other.css']}]};
 const history=appendProjectHistory(f.store,f.repo,[f.old,next],spec,old);
 assert.deepEqual(history[0],old[0]);assert.equal(loadSnapshot(f.store,'test',old[0].key).assets.length,1);
 assert.equal(loadSnapshot(f.store,'test',history[1].key).assets.length,2);
 assert.throws(()=>appendProjectHistory(f.store,f.repo,[next,f.old],spec,history));
 assert.throws(()=>appendProjectHistory(f.store,f.repo,[f.old],spec,history));
});

test('私有交付使用可信源码闭包、拒绝覆盖、预检局部修改和锁篡改',async t=>{
 const {createDelivery,installDelivery,preflightDelivery,prepareMigration}=await import('../scripts/lib/product-registry/delivery.mjs');
 const {hash}=await import('../scripts/lib/product-registry/core.mjs');
 const f=fixture(t),paths=['src/components/SmartSelect.jsx','src/design-system/FieldFeedback.jsx','src/design-system/popover.js'];
 for(const path of paths){mkdirSync(join(f.repo,path.split('/').slice(0,-1).join('/')),{recursive:true});writeFileSync(join(f.repo,path),'// '+path);}
 writeFileSync(join(f.repo,'package.json'),JSON.stringify({dependencies:{react:'19','react-dom':'19','@radix-ui/react-select':'2.2.6','lucide-react':'0.5'}}));
 f.git('add','.');f.git('commit','-m','source');const commit=f.git('rev-parse','HEAD');
 const spec={id:'todo',framework:'react',platform:['web'],assets:[{id:'smart-select',kind:'component',paths:[paths[0]]}]};
 const a=capture(f.store,f.repo,commit,spec);
 writeFileSync(join(f.repo,paths[0]),'// changed');f.git('add','.');f.git('commit','-m','new');const b=capture(f.store,f.repo,f.git('rev-parse','HEAD'),spec);
 const record={asset:{id:'private-todo-smart-select'},assetId:'smart-select',versions:[a,b],declared:{repo:f.repo}};
 const live=new Map([a,b].map(s=>[record.asset.id+'/'+s.key,{row:{validation:{status:'passed'},files:Object.fromEntries(paths.map(p=>[p.slice(4),hash(execFileSync('git',['-C',f.repo,'show',s.commit+':'+p]))]))}}]));
 const delivery=createDelivery(record,a.key,live);
 const {target}=installDelivery(f.store,'trial',delivery);
 assert.throws(()=>installDelivery(f.store,'trial',delivery));
 assert.throws(()=>installDelivery(f.store,'../escape',delivery));
 const plan=preflightDelivery(f.store,'trial',record,b.key,live);
 assert.equal(plan.readyForReview,true);assert.equal(plan.changes.filter(x=>x.status==='changed').length,1);assert.equal(plan.writePerformed,false);
 const candidate=prepareMigration(f.store,'trial','new-candidate',record,b.key,live);
 assert.equal(candidate.verified,true);assert.equal(candidate.sourcePreserved,true);
 const rollback=prepareMigration(f.store,'new-candidate','old-candidate',record,a.key,live);
 assert.deepEqual(rollback.candidate.lock,delivery.lock);
 assert.throws(()=>prepareMigration(f.store,'trial','new-candidate',record,b.key,live));
 writeFileSync(join(target,paths[0]),'local modification');
 assert.equal(preflightDelivery(f.store,'trial',record,b.key,live).readyForReview,false);
 assert.throws(()=>prepareMigration(f.store,'trial','conflicted-candidate',record,b.key,live));
 writeFileSync(join(target,'UI-ASSET-LOCK.json'),JSON.stringify({...delivery.lock,commit:b.commit}));
 assert.throws(()=>preflightDelivery(f.store,'trial',record,b.key,live));
});

test('固定版本差异展示只读取登记文件，不受工作树修改影响',async t=>{
 const {revisionChanges}=await import('../scripts/lib/product-registry/research.mjs');
 const f=fixture(t),a=capture(f.store,f.repo,f.old,f.spec),b=capture(f.store,f.repo,f.next,f.spec);
 writeFileSync(join(f.repo,'button.css'),'uncommitted secret');
 const changes=revisionChanges({versions:[a,b],assetId:'button',declared:{repo:f.repo}});
 assert.equal(changes.length,1);assert.match(changes[0].patch,/button\{color:red\}/);assert.match(changes[0].patch,/button\{color:blue\}/);
 assert.doesNotMatch(changes[0].patch,/uncommitted secret/);
});

test('私有比较选项仅允许登记且哈希锁定的本地运行入口',async()=>{
 const {privateStudyOptions}=await import('../src/components/PrivateStudyPanel.jsx');
 const snapshot='a'.repeat(64);
 const make=id=>({id,title:id,privateSnapshot:true,privateViews:[{id:snapshot,label:'verified',preview:'demos/private-registry/'+id+'/live/'+snapshot+'.html'}]});
 const a=make('private-test-one'),b=make('private-test-two');
 a.relatedAssets=[{id:b.id,relationship:'同类项目资产'},{id:'public-example',relationship:'设计参考候选'}];
 a.privateProfile={composition:[{asset:a.id,snapshot},{asset:b.id,snapshot:'b'.repeat(64)}]};
 assert.equal(privateStudyOptions(a,[a,b],'compare').length,2);
 assert.equal(privateStudyOptions(a,[a,b],'composition').length,1);
 b.privateViews[0].preview='https://example.invalid/';
 assert.equal(privateStudyOptions(a,[a,b],'compare').length,1);
 assert.deepEqual(privateStudyOptions({id:'public-example'},[a,b],'compare'),[]);
});
