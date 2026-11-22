import test from 'node:test';
import assert from 'node:assert/strict';

const module = await import('../assets/core/external-link-message.js').catch(()=>null);

test('只接受当前合作站点 iframe 发来的安全外链提示',()=>{
  assert.ok(module?.getExternalLinkNotice,'外链消息解析器尚未实现');
  const contentWindow={};
  const frame={contentWindow};
  const siteUrl='https://weepwood.github.io/nimbus-demo/';
  const makeEvent=(source,data)=>({source,data});
  assert.deepEqual(module.getExternalLinkNotice(makeEvent(contentWindow,{
    type:'ui-vault:external-link-blocked',href:'https://github.com/weepwood/nimbus-demo'
  }),frame,siteUrl),{hostname:'github.com',href:'https://github.com/weepwood/nimbus-demo'});
  assert.equal(module.getExternalLinkNotice(makeEvent({}, {
    type:'ui-vault:external-link-blocked',href:'https://github.com/weepwood/nimbus-demo'
  }),frame,siteUrl),null);
  assert.equal(module.getExternalLinkNotice(makeEvent(contentWindow,{
    type:'ui-vault:external-link-blocked',href:'javascript:alert(1)'
  }),frame,siteUrl),null);
  assert.equal(module.getExternalLinkNotice(makeEvent(contentWindow,{
    type:'ui-vault:external-link-blocked',href:'https://weepwood.github.io/nimbus-demo/components/'
  }),frame,siteUrl),null);
});

test('只为显式启用桥接的外站 iframe 显示具体外链反馈',async()=>{
  const {readFile}=await import('node:fs/promises');
  const {join}=await import('node:path');
  const {ROOT}=await import('../scripts/lib/catalog.mjs');
  const [preview,host,meta]=await Promise.all([
    readFile(join(ROOT,'src/components/PreviewFrame.jsx'),'utf8'),
    readFile(join(ROOT,'src/react-workbench.jsx'),'utf8'),
    readFile(join(ROOT,'catalog/assets/nimbus-docs-ui.json'),'utf8')
  ]);
  assert.match(preview,/data-external-link-bridge/);
  assert.match(host,/getExternalLinkNotice/);
  assert.match(meta,/"externalLinkBridge":\s*true/);
});
