export const DIRECTORY_SESSION_KEY='ui-vault:directory-session:v1';
const validKey=key=>typeof key==='string'&&/^[a-z-]{1,32}$/.test(key);
const valid=a=>a&&typeof a.id==='string'&&a.id.length<=200&&Number.isSafeInteger(a.index)&&a.index>=0&&Number.isFinite(a.offset)&&a.offset>=0&&[48,60].includes(a.rowHeight)&&a.offset<a.rowHeight;
export function readDirectoryAnchor(key,storage){
 try{if(!validKey(key))return null;const target=storage===undefined?globalThis.sessionStorage:storage;const data=JSON.parse(target?.getItem(DIRECTORY_SESSION_KEY)||'{}');return Object.hasOwn(data,key)&&valid(data[key])?data[key]:null;}catch{return null;}
}
export function saveDirectoryAnchor(key,anchor,storage){
 try{if(!validKey(key)||!valid(anchor))return false;const target=storage===undefined?globalThis.sessionStorage:storage;if(!target)return false;
 let data={};try{const parsed=JSON.parse(target.getItem(DIRECTORY_SESSION_KEY)||'{}');if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))data=parsed;}catch{}
 const safe=Object.fromEntries(Object.entries(data).filter(([k,v])=>validKey(k)&&valid(v)).slice(0,16));target.setItem(DIRECTORY_SESSION_KEY,JSON.stringify({...safe,[key]:anchor}));return true;}catch{return false;}
}
