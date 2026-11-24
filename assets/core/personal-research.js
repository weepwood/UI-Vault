// 研究元数据独立于公开资产，以稳定 ID 关联；使用记录不等同于浏览历史。
export const RESEARCH_STATES=Object.freeze([
  {id:'',label:'未标记'},{id:'queued',label:'待研究'},{id:'studying',label:'研究中'},
  {id:'studied',label:'已研究'},{id:'reused',label:'已复用'}
]);
export const RESEARCH_LIMITS=Object.freeze({reviews:2000,usage:1000,topics:50,links:500,title:80,text:4000,context:300});
const validId=value=>typeof value==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{0,159}$/.test(value);
const string=(value,max)=>typeof value==='string'?value.trim().slice(0,max):'';
const timestamp=value=>Number.isFinite(value)&&value>=0&&value<=8.64e15;
const statusIds=new Set(RESEARCH_STATES.map(item=>item.id));
const list=value=>Array.isArray(value)?value:[];
export function normalizeResearch(raw={}){
  const reviews=[],usage=[],topics=[],seen=new Set();
  for(const item of list(raw?.reviews)){
    if(!validId(item?.id)||seen.has(item.id)||!Number.isInteger(item.rating)||item.rating<0||item.rating>5||!statusIds.has(item.status)||(!item.rating&&!item.status))continue;
    seen.add(item.id);reviews.push({id:item.id,rating:item.rating,status:item.status});
    if(reviews.length>=RESEARCH_LIMITS.reviews)break;
  }
  seen.clear();
  for(const item of list(raw?.usage)){
    const context=string(item?.context,RESEARCH_LIMITS.context);
    if(!validId(item?.id)||!validId(item?.assetId)||!timestamp(item.at)||!context||seen.has(item.id))continue;
    seen.add(item.id);usage.push({id:item.id,assetId:item.assetId,at:item.at,context});
    if(usage.length>=RESEARCH_LIMITS.usage)break;
  }
  seen.clear();
  for(const item of list(raw?.topics)){
    const title=string(item?.title,RESEARCH_LIMITS.title);
    if(!validId(item?.id)||!title||seen.has(item.id))continue;
    seen.add(item.id);topics.push({id:item.id,title,text:string(item.text,RESEARCH_LIMITS.text),
      ids:[...new Set(list(item.ids).filter(validId))].slice(0,RESEARCH_LIMITS.links)});
    if(topics.length>=RESEARCH_LIMITS.topics)break;
  }
  return {reviews,usage,topics};
}
export function changeResearch(raw,action){
  const {reviews,usage,topics}=normalizeResearch(raw);
  const result={reviews,usage,topics};
  if(action.type==='research-review'){
    if(!validId(action.id)||!Number.isInteger(action.rating)||action.rating<0||action.rating>5||!statusIds.has(action.status))throw new TypeError('评分或研究状态无效');
    const rest=reviews.filter(item=>item.id!==action.id);
    if(action.rating||action.status){
      if(rest.length>=RESEARCH_LIMITS.reviews)throw new RangeError('评价数量已达上限');
      result.reviews=[{id:action.id,rating:action.rating,status:action.status},...rest];
    }else result.reviews=rest;
  }else if(action.type==='research-use'){
    const context=string(action.context,RESEARCH_LIMITS.context);
    if(!validId(action.id)||!validId(action.assetId)||!timestamp(action.at)||!context)throw new TypeError('请输入有效使用说明');
    if(usage.some(item=>item.id===action.id))throw new RangeError('使用记录 ID 重复');
    if(usage.length>=RESEARCH_LIMITS.usage)throw new RangeError('使用记录已达上限，请先删除旧记录');
    result.usage=[{id:action.id,assetId:action.assetId,at:action.at,context},...usage];
  }else if(action.type==='research-use-delete'){
    result.usage=usage.filter(item=>item.id!==action.id);
  }else if(action.type==='research-topic-save'){
    const title=string(action.title,RESEARCH_LIMITS.title);
    if(!validId(action.id)||!title)throw new TypeError('请输入研究主题名称');
    const existing=topics.find(item=>item.id===action.id);
    if(!existing&&topics.length>=RESEARCH_LIMITS.topics)throw new RangeError('研究主题已达上限');
    const item={id:action.id,title,text:string(action.text,RESEARCH_LIMITS.text),ids:existing?.ids||[]};
    result.topics=existing?topics.map(value=>value.id===item.id?item:value):[...topics,item];
  }else if(action.type==='research-topic-add'||action.type==='research-topic-remove'){
    if(!topics.some(item=>item.id===action.id))throw new RangeError('研究主题不存在');
    const selected=new Set(list(action.ids).filter(validId));
    result.topics=topics.map(item=>{
      if(item.id!==action.id)return item;
      const ids=action.type==='research-topic-add'?[...new Set([...item.ids,...selected])]:item.ids.filter(id=>!selected.has(id));
      if(ids.length>RESEARCH_LIMITS.links)throw new RangeError('每个主题最多关联 500 项资产');
      return {...item,ids};
    });
  }else if(action.type==='research-topic-delete'){
    result.topics=topics.filter(item=>item.id!==action.id);
  }
  return result;
}
export function mergeResearch(local,remote){
  const a=normalizeResearch(local),b=normalizeResearch(remote);
  const result={};
  for(const key of ['reviews','usage','topics']){
    const ids=new Set(a[key].map(item=>item.id));
    const merged=[...a[key],...b[key].filter(item=>!ids.has(item.id))];
    if(merged.length>RESEARCH_LIMITS[key])throw new RangeError('研究数据合并后超过上限');
    result[key]=merged;
  }
  return result;
}
export function validateResearchBackup(raw){
  if(raw===undefined)return normalizeResearch();
  if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new TypeError('研究数据格式错误');
  for(const key of ['reviews','usage','topics']){
    if(!Array.isArray(raw[key])||raw[key].length>RESEARCH_LIMITS[key])throw new RangeError('研究数据格式或数量错误');
  }
  for(const item of raw.usage)if(typeof item?.context!=='string'||item.context.length>RESEARCH_LIMITS.context)throw new TypeError('使用记录格式错误');
  for(const item of raw.topics)if(typeof item?.title!=='string'||item.title.length>RESEARCH_LIMITS.title||typeof item.text!=='string'||item.text.length>RESEARCH_LIMITS.text||!Array.isArray(item.ids)||item.ids.length>RESEARCH_LIMITS.links||!item.ids.every(validId)||new Set(item.ids).size!==item.ids.length)throw new TypeError('研究主题格式错误');
  const normalized=normalizeResearch(raw);
  if(['reviews','usage','topics'].some(key=>normalized[key].length!==raw[key].length))throw new TypeError('研究数据存在无效或重复记录');
  return normalized;
}
