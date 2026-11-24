import test from 'node:test';
import assert from 'node:assert/strict';
import {supportsPreviewReady,readyRequest,isReadyReply,externalPreviewEvidence} from '../assets/core/preview-ready.js';
test('合作协议只接受明确登记的本地资产及当前 opaque iframe 的挑战响应',()=>{
 const asset={id:'ui-foundation-kit',source:'local',preview:'demos/experiments/ui-foundation-kit/index.html'};
 assert.ok(supportsPreviewReady(asset));assert.ok(!supportsPreviewReady({...asset,source:'external'}));
 const frame={contentWindow:{}},challenge={assetId:asset.id,nonce:'ab'.repeat(16)};
 const event={source:frame.contentWindow,origin:'null',data:{...readyRequest(challenge.nonce,challenge.assetId),action:'ready'}};
 assert.ok(isReadyReply(event,frame,challenge));
 for(const invalid of [{...event,source:{}},{...event,origin:'https://example.com'},{...event,data:{...event.data,nonce:'0'.repeat(32)}},{...event,data:{...event.data,assetId:'different'}}])assert.ok(!isReadyReply(invalid,frame,challenge));
 assert.ok(!isReadyReply(event,frame,null));
});
test('外部 HTTP、响应头和交互证据严格区分，过期证据降级',()=>{
 assert.match(externalPreviewEvidence({http:'reachable',framePolicy:'unverified'}),/仍未知/);
 assert.match(externalPreviewEvidence({framePolicy:'blocked'}),/禁止嵌入/);
 assert.match(externalPreviewEvidence({framePolicy:'blocked',stale:true}),/未核实/);
});
