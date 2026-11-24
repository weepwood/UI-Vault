export const DOCK_SIZE_KEY='ui-vault:parameter-dock-size:v1';
export const DOCK_MIN=30,DOCK_MAX=70;
export function clampDockSize(value){return Number.isFinite(value)?Math.max(DOCK_MIN,Math.min(DOCK_MAX,Math.round(value))):null;}
export function readDockSize(storage){try{const raw=(storage===undefined?globalThis.localStorage:storage)?.getItem(DOCK_SIZE_KEY);return raw==null||raw.trim()===''?null:clampDockSize(Number(raw));}catch{return null;}}
export function saveDockSize(value,storage){try{const target=storage===undefined?globalThis.localStorage:storage;if(!target)return false;const size=clampDockSize(value);if(size===null)target.removeItem(DOCK_SIZE_KEY);else target.setItem(DOCK_SIZE_KEY,String(size));return true;}catch{return false;}}
