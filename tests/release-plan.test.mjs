import test from 'node:test';
import assert from 'node:assert/strict';
import {releaseVersion} from '../scripts/release-plan.mjs';
const base={event:'push',ref:'refs/heads/main',previous:'0.4.0',current:'0.5.0'};
test('仅 main 实际版本增长生成发布计划',()=>{
  assert.equal(releaseVersion(base),'0.5.0');
  assert.equal(releaseVersion({...base,current:'0.4.0'}),null);
  assert.equal(releaseVersion({...base,event:'pull_request'}),null);
  assert.equal(releaseVersion({...base,event:'schedule'}),null);
  assert.equal(releaseVersion({...base,ref:'refs/tags/v0.5.0'}),null);
  assert.throws(()=>releaseVersion({...base,current:'0.3.0'}),/降级/);
  assert.throws(()=>releaseVersion({...base,current:'0.5.0-rc.1'}),/正式版本/);
});
