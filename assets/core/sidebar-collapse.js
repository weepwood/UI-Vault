// Logo 触发的窄图标栏状态独立于“侧栏宽度”偏好，不修改各 Demo。
export const NAV_COLLAPSED_KEY='ui-vault:nav-collapsed:v1';
export function readNavCollapsed(storage){
 try{const target=storage===undefined?globalThis.localStorage:storage;return target?.getItem(NAV_COLLAPSED_KEY)==='true';}
 catch{return false;}
}
export function saveNavCollapsed(collapsed,storage){
 try{const target=storage===undefined?globalThis.localStorage:storage;if(!target)return false;target.setItem(NAV_COLLAPSED_KEY,collapsed?'true':'false');return true;}
 catch{return false;}
}
