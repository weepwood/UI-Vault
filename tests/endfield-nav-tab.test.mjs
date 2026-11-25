import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
test('终末地学习演示内嵌原始插画，保留激活态和独立交付边界',()=>{
 const html=readFileSync(new URL('../demos/components/endfield-nav-tab/index.html',import.meta.url),'utf8');
 const asset=JSON.parse(readFileSync(new URL('../catalog/assets/endfield-nav-tab.json',import.meta.url),'utf8'));
 const match=html.match(/url\("data:image\/png;base64,([A-Za-z0-9+/=]+)"\),linear-gradient/);
 assert.ok(match);
 const png=Buffer.from(match[1],'base64');
 assert.equal(png.length,22512);
 assert.equal(createHash('sha256').update(png).digest('hex'),'e8726f44b66a1aea6de049773149b8152f3fa15602d60d61be124f8e2afad812');
 assert.match(html,/\.tab-wrap\.is-active \.tab-art\{opacity:1\}/);
 assert.equal(asset.copyable,false);
 assert.equal(asset.bundleFiles,undefined);
 assert.match(asset.license,/许可待核实/);
});

test('历史字体内嵌保持原字节、原字体族与非组件分发边界',()=>{
 const html=readFileSync(new URL('../demos/components/endfield-nav-tab/index.html',import.meta.url),'utf8');
 const asset=JSON.parse(readFileSync(new URL('../catalog/assets/endfield-nav-tab.json',import.meta.url),'utf8'));
 const fonts=[...html.matchAll(/data:font\/woff2;base64,([A-Za-z0-9+/=]+)"\)/g)].map(m=>Buffer.from(m[1],'base64'));
 assert.deepEqual(fonts.map(b=>[b.length,createHash('sha256').update(b).digest('hex')]),[
  [101624,'830697bc5aba3e488b59aa1416e2616b7432a58dbc19eae5b6c2ea4a95696df5'],
  [101540,'ca06e9c77ae112996d4498d8c74094352f35cbe11fe980b87d177c2d8d4ef1e9']
 ]);
 assert.match(html,/font-family:"HarmonyOS_Sans_SC",system-ui/);
 assert.equal(asset.copyable,false);
 assert.equal(asset.bundleFiles,undefined);
 assert.match(asset.license,/许可待核实/);
});
