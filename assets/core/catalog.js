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
  '桌面':['desktop'],'desktop':['桌面'],
  '极简':['minimalism','minimal','minimalist'],'minimalism':['极简'],'minimal':['极简'],'minimalist':['极简'],
  '粗野':['brutalism','brutalist','neubrutalism'],'粗野主义':['粗野','brutalism','brutalist','neubrutalism'],'brutalism':['粗野'],'brutalist':['粗野'],'neubrutalism':['粗野'],
  '玻璃拟态':['glassmorphism','玻璃材质'],'glassmorphism':['玻璃材质','玻璃拟态'],
  '液态玻璃':['liquid glass','液态玻璃'],'liquid glass':['液态玻璃'],
  '赛博朋克':['cyberpunk'],'cyberpunk':['赛博朋克'],
  '像素':['pixel'],'pixel':['像素'],
  '设计系统':['design system'],'design system':['设计系统'],
  '命令面板':['command palette'],'command palette':['命令面板'],
  '暗色':['dark mode','dark theme'],'dark mode':['暗色'],'dark theme':['暗色'],
  '浅色':['light mode','light theme'],'light mode':['浅色'],'light theme':['浅色'],
  '数据可视化':['data visualization'],'data visualization':['数据可视化'],
  '背景特效':['background effects'],'background effects':['背景特效'],
  '落地页':['landing page'],'landing page':['落地页'],
  '导航':['navigation'],'navigation':['导航'],
  '编辑器':['editor'],'editor':['编辑器'],
  '复古':['retro','vintage'],'retro':['复古'],'vintage':['复古'],
  '霓虹':['neon'],'neon':['霓虹'],
  '渐变':['gradient'],'gradient':['渐变'],
  '排版':['typography','版式'],'typography':['排版','版式'],'版式':['typography','排版'],
  '包豪斯':['bauhaus'],'bauhaus':['包豪斯'],
  '便当网格':['bento grid'],'bento grid':['便当网格'],
  '装饰艺术':['art deco'],'art deco':['装饰艺术'],
  '新艺术':['art nouveau'],'art nouveau':['新艺术'],
  '亲生物设计':['biophilic design'],'biophilic design':['亲生物设计'],
  '生物形态':['biomorphic'],'biomorphic':['生物形态'],
  '三维沉浸':['3d immersive'],'3d immersive':['三维沉浸'],
  '蓝图设计':['blueprint technical'],'blueprint technical':['蓝图设计'],
  '酸性设计':['acid design'],'acid design':['酸性设计'],
  '非洲未来主义':['afrofuturism'],'afrofuturism':['非洲未来主义'],
  '反设计':['anti design'],'anti design':['反设计'],
  '工艺美术':['arts and crafts'],'arts and crafts':['工艺美术'],
  '原子时代':['atomic age'],'atomic age':['原子时代'],
  '芭蕾风':['balletcore'],'balletcore':['芭蕾风'],
  '芭比风':['barbiecore'],'barbiecore':['芭比风'],
  '巴洛克':['baroque'],'baroque':['巴洛克'],
  '卡片式':['card based design'],'card based design':['卡片式'],
  '天体风':['celestialcore'],'celestialcore':['天体风'],
  '混沌设计':['chaos design'],'chaos design':['混沌设计'],
  '中国风装饰':['chinoiserie'],'chinoiserie':['中国风装饰'],
  '色彩模糊':['chromatic blur'],'chromatic blur':['色彩模糊'],
  '铬金属风':['chromecore'],'chromecore':['铬金属风'],
  '黏土拟态':['claymorphism'],'claymorphism':['黏土拟态'],
  '色块设计':['color block'],'color block':['色块设计'],
  '混凝土粗野':['concrete brutalism'],'concrete brutalism':['混凝土粗野'],
  '构成主义':['constructivism'],'constructivism':['构成主义'],
  '企业孟菲斯':['corporate memphis'],'corporate memphis':['企业孟菲斯'],
  '田园风':['cottagecore'],'cottagecore':['田园风'],
  '手作风':['craftcore'],'craftcore':['手作风'],
  '水晶风':['crystal core'],'crystal core':['水晶风'],
  '立体主义':['cubism'],'cubism':['立体主义'],
  '赛博极简':['cyberminimalism'],'cyberminimalism':['赛博极简'],
  '达达主义':['dadaism'],'dadaism':['达达主义'],
  '丹麦粉彩':['danish pastel'],'danish pastel':['丹麦粉彩'],
  '暗黑学院':['dark academia'],'dark academia':['暗黑学院'],
  '暗黑植物':['dark botanical'],'dark botanical':['暗黑植物'],
  '风格派':['de stijl'],'de stijl':['风格派'],
  '解构主义':['deconstructivism'],'deconstructivism':['解构主义'],
  '柴油朋克':['dieselpunk'],'dieselpunk':['柴油朋克'],
  '数字拼贴':['digital collage'],'digital collage':['数字拼贴'],
  '数字花园':['digital garden'],'digital garden':['数字花园'],
  '多巴胺设计':['dopamine design'],'dopamine design':['多巴胺设计'],
  '双色调':['duotone'],'duotone':['双色调'],
  '大地色':['earth tones'],'earth tones':['大地色'],
  '杂志排版':['editorial magazine layout'],'editorial magazine layout':['杂志排版'],
  '表现主义':['expressionism'],'expressionism':['表现主义'],
  '仙灵风':['fairycore'],'fairycore':['仙灵风'],
  '黑色电影':['film noir'],'film noir':['黑色电影'],
  '扁平设计':['flat design'],'flat design':['扁平设计'],
  '弗莱舍动画':['fleischer style'],'fleischer style':['弗莱舍动画'],
  '森林风':['forestcore'],'forestcore':['森林风'],
  '四色设计':['four colors'],'four colors':['四色设计'],
  '九十年代雅致风':['frasurbane'],'frasurbane':['九十年代雅致风'],
  '法式乡村':['french provincial style'],'french provincial style':['法式乡村'],
  '磨砂触感':['frosted touch'],'frosted touch':['磨砂触感'],
  '弗鲁提格航空风':['frutiger aero'],'frutiger aero':['弗鲁提格航空风'],
  '弗鲁提格生态风':['frutiger eco'],'frutiger eco':['弗鲁提格生态风'],
  '未来原始主义':['future primitive'],'future primitive':['未来原始主义'],
  '未来主义':['futurism'],'futurism':['未来主义'],
  'z世代极繁主义':['gen z maximalism'],'gen z maximalism':['z世代极繁主义'],
  '生成图案':['generative pattern'],'generative pattern':['生成图案'],
  '几何波西米亚':['geo boho'],'geo boho':['几何波西米亚'],
  '早期个人网页风':['geocities'],'geocities':['早期个人网页风'],
  '几何现代主义':['geometric modernism'],'geometric modernism':['几何现代主义'],
  '故障艺术':['glitch art'],'glitch art':['故障艺术'],
  '地球村咖啡馆':['global village coffeehouse'],'global village coffeehouse':['地球村咖啡馆'],
  '地精自然风':['goblincore'],'goblincore':['地精自然风'],
  '古吉风格':['googie'],'googie':['古吉风格'],
  '户外机能风':['gorpcore'],'gorpcore':['户外机能风'],
  '哥特风格':['gothic'],'gothic':['哥特风格'],
  '涂鸦波普':['graffiti pop'],'graffiti pop':['涂鸦波普'],
  '颗粒粗粝风':['grain and grit'],'grain and grit':['颗粒粗粝风'],
  '千禧祖母风':['grandmillennial'],'grandmillennial':['千禧祖母风'],
  '食物趣味秋日风':['grocery girl fall'],'grocery girl fall':['食物趣味秋日风'],
  '巨型无衬线排版':['grotesk display'],'grotesk display':['巨型无衬线排版'],
  '粗粝复兴风':['grunge revival'],'grunge revival':['粗粝复兴风'],
  '古斯塔夫风格':['gustavian'],'gustavian':['古斯塔夫风格'],
  '手绘风格':['hand drawn'],'hand drawn':['手绘风格'],
  '欧舞霓虹风':['hands up'],'hands up':['欧舞霓虹风'],
  '英雄现实主义':['heroic realism'],'heroic realism':['英雄现实主义'],
  '独立手账风':['hipness purgatory'],'hipness purgatory':['独立手账风'],
  '好莱坞摄政风':['hollywood regency'],'hollywood regency':['好莱坞摄政风'],
  '全息界面':['holographic ui'],'holographic ui':['全息界面'],
  '蜂蜜田园风':['honeycore'],'honeycore':['蜂蜜田园风']
});
const OMIT_TOKENS=new Set(['and','or']);

export function normalizeSearchText(value){
  return String(value??'').normalize('NFKC').toLocaleLowerCase()
    .normalize('NFKD').replace(/\p{M}/gu,'')
    .replace(/[\p{P}\p{S}\s]+/gu,' ').trim();
}
export function tokenizeSearch(query){
  const words=normalizeSearchText(query).split(/\s+/).filter(Boolean);
  const terms=[];
  for(let i=0;i<words.length;i++){
    const pair=words.slice(i,i+2).join(' ');
    if(i+1<words.length&&Object.hasOwn(TERM_ALIASES,pair)){terms.push(pair);i++;}
    else if(!OMIT_TOKENS.has(words[i]))terms.push(words[i]);
  }
  return [...new Set(terms)].slice(0,8);
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
    // 英文别名按完整词/短语匹配，避免 minimal 命中 minimalistic 之外的无关拼接词。
    if(/[\u4e00-\u9fff]/u.test(alias)?text.includes(alias):(' '+text+' ').includes(' '+alias+' '))return .48;
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
  if(key==='tag')return asset.type==='design-style'?[...new Set(['风格主题',...(asset.tags||[])])]:asset.tags||[]; // 类型可证明的内容分面，不推断视觉标签
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
