// 可选本地性能基准（不作为日常 CI 时间门槛）：node scripts/benchmark-search.mjs
import {readFileSync} from 'node:fs';
import {performance} from 'node:perf_hooks';
import {filterAssets,catalogFacetOptions,createCatalogFacetMatcher} from '../assets/core/catalog.js';

const source=JSON.parse(readFileSync(new URL('../content/assets.json',import.meta.url),'utf8'));
const categories=JSON.parse(readFileSync(new URL('../content/categories.json',import.meta.url),'utf8'));
const labels=Object.fromEntries(categories.map(item=>[item.id,item.label]));
const queries=['glass','液态','react webgpu','组件','layout','vue3','unknown-xyz',''];
function measure(assets){
  const timings=[],facetTimings=[];
  const started=performance.now();
  for(const query of queries)filterAssets(assets,{query,labels});
  const cold=performance.now()-started;
  for(let round=0;round<5;round++){
    for(const query of queries){
      const start=performance.now();
      const matches=filterAssets(assets,{query,labels});
      timings.push(performance.now()-start);
      const facetStart=performance.now();
      const selected={style:'极简'};
      catalogFacetOptions(matches,selected);
      matches.filter(createCatalogFacetMatcher(selected));
      facetTimings.push(performance.now()-facetStart);
    }
  }
  timings.sort((a,b)=>a-b);
  const p=q=>Number(timings[Math.ceil(timings.length*q)-1].toFixed(2));
  facetTimings.sort((a,b)=>a-b);
  return {assets:assets.length,firstPassMs:Number(cold.toFixed(2)),p50Ms:p(.5),p95Ms:p(.95),facetP95Ms:Number(facetTimings[Math.ceil(facetTimings.length*.95)-1].toFixed(2))};
}
const larger=Array.from({length:5000},(_,i)=>({...source[i%source.length],id:'bench-'+i,title:source[i%source.length].title+' '+i}));
const results=[measure(source),measure(larger)];
console.table(results);
console.log('SEARCH_BENCHMARK_JSON='+JSON.stringify(results));
