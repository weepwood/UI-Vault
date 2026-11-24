import {isStyleTag,styleTagsOf} from './style-taxonomy.js';
// 搜索只使用资产目录中可核实的元数据，不从 iframe 或第三方页面读取内容。
const FIELD_WEIGHTS=Object.freeze({
  title:120,id:100,project:65,tags:82,technologies:72,subtitle:43,
  category:30,description:20,notes:13,source:7
});
const TERM_ALIASES=Object.freeze({
  '玻璃':['glass'],'glass':['玻璃'],
  '液态':['liquid'],'liquid':['液态'],
  '毛玻璃':['frosted','mica','acrylic'],'frosted':['毛玻璃'],
  '动效':['motion','animation'],'motion':['动效'],'animation':['动效'],
  '组件':['component'],'component':['组件'],
  '布局':['layout'],'layout':['布局'],
  '镜像':['mirror'],'mirror':['镜像'],
  '桌面':['desktop'],'desktop':['桌面']
});
const OMIT_TOKENS=new Set(['and','or']);

export function normalizeSearchText(value){
  return String(value??'').normalize('NFKC').toLocaleLowerCase()
    .normalize('NFKD').replace(/\p{M}/gu,'')
    .replace(/[\p{P}\p{S}\s]+/gu,' ').trim();
}
export function tokenizeSearch(query){
  return [...new Set(normalizeSearchText(query).split(/\s+/).filter(term=>term&&!OMIT_TOKENS.has(term)))].slice(0,8);
}
function searchFields(asset,labels={}){
  return [
    {key:'title',values:[asset.title]},
    {key:'id',values:[asset.id]},
    {key:'project',values:[asset.projectId]},
    {key:'tags',values:asset.tags||[]},
    {key:'technologies',values:asset.technologies||[]},
    {key:'subtitle',values:[asset.subtitle]},
    {key:'category',values:[labels[asset.type],asset.type]},
    {key:'description',values:[asset.description]},
    {key:'notes',values:[...(asset.reuseNotes||[]),...(asset.tuningPoints||[])]},
    {key:'source',values:[asset.url,asset.originRepo,asset.sourceUrl,asset.siteUrl]}
  ];
}
export function assetSearchText(asset,labels={}){
  return searchFields(asset,labels).flatMap(field=>field.values).filter(Boolean).map(normalizeSearchText).join(' ');
}
// 只缓存字符串的纯归一化结果，不缓存资产对象或查询结果：
// 数据替换、原地编辑或分类标签变更都不会读到过期索引。
// FIFO 容量与单条长度双重限制，避免长期打开工作台时缓存无限增长。
const MAX_SEARCH_VALUES=8192;
const MAX_SEARCH_VALUE_LENGTH=512;
const normalizedValues=new Map();
function normalizedValue(value){
  const raw=String(value??'');
  if(normalizedValues.has(raw))return normalizedValues.get(raw);
  const text=normalizeSearchText(raw);
  const entry={text,compact:text.replace(/\s+/g,'')};
  if(raw.length<=MAX_SEARCH_VALUE_LENGTH){
    if(normalizedValues.size>=MAX_SEARCH_VALUES)normalizedValues.delete(normalizedValues.keys().next().value);
    normalizedValues.set(raw,entry);
  }
  return entry;
}
function matchNormalized({text,compact},term){
  if(!text)return 0;
  if(text===term)return 1.5;
  if(text.startsWith(term))return 1.25;
  if(text.includes(term))return 1;
  // WebGPU、Vue3、Liquid-Glass 和仓库 slug 同时支持含/不含连接符的查询。
  if(term.length>=2&&compact.includes(term))return .9;
  // 用户查询可能恰好为 constructor 等对象原型属性；只读取词表自有键。
  for(const alias of Object.hasOwn(TERM_ALIASES,term)?TERM_ALIASES[term]:[]){
    if(text.includes(alias))return .48;
  }
  return 0;
}
function matchQuality(value,term){
  return matchNormalized(normalizedValue(value),term);
}
function assetRelevance(asset,terms,labels,phrase,compactPhrase){
  // 每个候选资产的字段只归一化一次，多词匹配复用同一批字段。
  const fields=searchFields(asset,labels).map(({key,values})=>({
    weight:FIELD_WEIGHTS[key],values:values.map(normalizedValue)
  }));
  let score=0;
  // 多个词需要全部命中；每个词可以匹配不同的元数据字段。
  for(const term of terms){
    let best=0;
    for(const {weight,values} of fields){
      for(const value of values){
        const quality=matchNormalized(value,term);
        if(quality)best=Math.max(best,weight*quality);
      }
    }
    if(!best)return -1;
    score+=best;
  }
  const {text:title,compact:compactTitle}=normalizedValue(asset.title);
  const {text:id}=normalizedValue(asset.id);
  if(title===phrase)score+=200;
  else if(title.includes(phrase)||compactTitle.includes(compactPhrase))score+=70;
  if(id===phrase)score+=120;
  return score;
}
const byTitle=(a,b)=>a.title.localeCompare(b.title,'zh-CN');
const byFeatured=(a,b)=>Number(b.featured)-Number(a.featured)||b.created.localeCompare(a.created)||byTitle(a,b);
// 复用程度（Phase 1 目录治理）：从既有元数据派生，不增加 schema 字段。
// 优先级：手工精选 stable > 独立演示包 > 单文件可复制 > 本地实验 > 外部参考。
export const REUSE_LEVELS=Object.freeze([
  {id:'verified',label:'已验证'},
  {id:'installable',label:'可安装'},
  {id:'copyable',label:'可复制'},
  {id:'sample',label:'本地实现'},
  {id:'reference',label:'外部项目'}
]);
export function reuseLevelOf(asset){
  if(asset.curated&&asset.curationStage==='stable')return 'verified';
  if(Array.isArray(asset.bundleFiles)&&asset.bundleFiles.length)return 'installable';
  if(asset.copyable===true)return 'copyable';
  if(asset.source==='local')return 'sample';
  return 'reference';
}
// 目录分面：不同维度取交集，同维度候选计数忽略自身当前选项。
export const FACET_KEYS=Object.freeze(['tag','style','technology','source','projectId']);
function facetValues(asset,key){
  if(key==='tag')return asset.tags||[]; // 保留旧 API 对所有标签的直接查询
  if(key==='style')return styleTagsOf(asset);
  if(key==='technology')return asset.technologies||[];
  return asset[key]?[asset[key]]:[];
}
// 兼容旧的单值字符串；多值在维度内取并集、维度之间取交集。
export function facetSelection(value){
  return [...new Set((Array.isArray(value)?value:[value]).filter(item=>typeof item==='string'&&item.trim()).map(item=>item.trim()))];
}
export function normalizeFacetSelection(value){
  const values=facetSelection(value).slice(0,30);
  return values.length>1?values:values[0]||'';
}
export function createCatalogFacetMatcher(filters={},except=''){
  const entries=FACET_KEYS.filter(key=>key!==except).map(key=>[key,facetSelection(filters[key])]).filter(([,values])=>values.length);
  return asset=>entries.every(([key,selected])=>{
    const values=facetValues(asset,key);
    return selected.some(value=>values.includes(value));
  });
}
export function matchesCatalogFacets(asset,filters={},except=''){
  return createCatalogFacetMatcher(filters,except)(asset);
}
export function catalogFacetOptions(assets,filters={}){
  const result={};
  for(const key of FACET_KEYS){
    const counts=new Map();
    const matches=createCatalogFacetMatcher(filters,key);
    const selected=facetSelection(filters[key]);
    for(const asset of assets){
      if(!matches(asset))continue;
      for(const value of new Set(facetValues(asset,key))){
        if(key==='tag'&&isStyleTag(value)&&!selected.includes(value))continue;
        counts.set(value,(counts.get(value)||0)+1);
      }
    }
    for(const value of selected)if(!counts.has(value))counts.set(value,0);
    result[key]=[...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'zh-CN'))
      .map(([value,count])=>({value,count}));
  }
  return result;
}
export function filterAssets(assets,{category='all',tag='',style='',technology='',source='',projectId='',reuse='',query='',favoritesOnly=false,importedOnly=false,curatedOnly=false,sort='featured',labels={}}={},favorites=new Set()){
  const terms=tokenizeSearch(query);
  const phrase=terms.join(' ');
  const compactPhrase=phrase.replace(/\s/g,'');
  const matches=[];
  const matchesFacets=createCatalogFacetMatcher({tag,style,technology,source,projectId});
  for(const asset of assets){
    if((category!=='all'&&asset.type!==category)||
      (favoritesOnly&&!favorites.has(asset.id))||
      (importedOnly&&!asset.originRepo)||
      (curatedOnly&&asset.curated!==true)||
      (reuse&&reuseLevelOf(asset)!==reuse)||
      !matchesFacets(asset))continue;
    const score=terms.length?assetRelevance(asset,terms,labels,phrase,compactPhrase):0;
    if(score<0)continue;
    matches.push({asset,score});
  }
  matches.sort((a,b)=>sort==='project'?(a.asset.projectId||'').localeCompare(b.asset.projectId||'','en')||byFeatured(a.asset,b.asset):
    sort==='az'?byTitle(a.asset,b.asset):
    sort==='newest'?b.asset.created.localeCompare(a.asset.created)||byTitle(a.asset,b.asset):
    terms.length?b.score-a.score||byFeatured(a.asset,b.asset):byFeatured(a.asset,b.asset));
  return matches.map(item=>item.asset);
}

function snippet(value,terms,max=60){
  const text=String(value??'').replace(/\s+/g,' ').trim();
  if(text.length<=max)return text;
  const lower=text.toLocaleLowerCase();
  const positions=terms.map(term=>lower.indexOf(term)).filter(index=>index>=0);
  const first=positions.length?Math.min(...positions):0;
  const start=Math.max(0,first-12);
  const end=Math.min(text.length,start+max);
  return (start?'…':'')+text.slice(start,end)+(end<text.length?'…':'');
}
// 结果列表解释「为什么匹配」，优先展示标签/技术栈，而不是重复的仓库 URL。
export function searchMatchDetail(asset,query,labels={}){
  const terms=tokenizeSearch(query);
  if(!terms.length)return null;
  const fields=searchFields(asset,labels);
  const descriptions={tags:'标签',technologies:'技术',subtitle:'概述',
    description:'简介',notes:'复用说明',category:'分类',source:'来源',id:'资产 ID',project:'所属项目'};
  for(const key of ['tags','technologies','subtitle','description','notes','category','source','project','id']){
    const field=fields.find(item=>item.key===key);
    const values=field.values.filter(Boolean).filter(value=>terms.some(term=>matchQuality(value,term)>0));
    if(!values.length)continue;
    const value=key==='tags'||key==='technologies'?values.slice(0,2).join(' · '):values[0];
    return {label:descriptions[key],text:snippet(value,terms)};
  }
  return {label:'名称',text:asset.subtitle||labels[asset.type]||'项目名称匹配'};
}
// React 文本高亮使用纯文本片段，避免把资源字段拼成 HTML。
export function highlightSearchText(value,query){
  const source=String(value??'');
  const terms=tokenizeSearch(query).sort((a,b)=>b.length-a.length);
  if(!source||!terms.length)return [{text:source,matched:false}];
  const lower=source.toLocaleLowerCase();
  const ranges=[];
  for(const term of terms){
    let from=0,index;
    while((index=lower.indexOf(term,from))>=0){
      ranges.push([index,index+term.length]);
      from=index+term.length;
    }
  }
  if(!ranges.length)return [{text:source,matched:false}];
  ranges.sort((a,b)=>a[0]-b[0]||b[1]-a[1]);
  const merged=[];
  for(const range of ranges){
    const prev=merged[merged.length-1];
    if(prev&&range[0]<=prev[1])prev[1]=Math.max(prev[1],range[1]);
    else merged.push([...range]);
  }
  const pieces=[];let offset=0;
  for(const [start,end] of merged){
    if(start>offset)pieces.push({text:source.slice(offset,start),matched:false});
    pieces.push({text:source.slice(start,end),matched:true});
    offset=end;
  }
  if(offset<source.length)pieces.push({text:source.slice(offset),matched:false});
  return pieces;
}

export function popularTags(assets,limit=10,selected=''){
  const counts=new Map();
  for(const asset of assets)for(const tag of asset.tags||[])counts.set(tag,(counts.get(tag)||0)+1);
  const tags=[...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'zh-CN')).slice(0,limit).map(([tag])=>tag);
  if(selected&&!tags.includes(selected))tags.push(selected);
  return tags;
}
