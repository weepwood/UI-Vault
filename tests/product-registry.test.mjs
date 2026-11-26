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
