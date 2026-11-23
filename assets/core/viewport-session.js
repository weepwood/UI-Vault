import {isPreviewMode,normalizeCustomWidth,isValidCustomWidth} from './preview.js';

export const VIEWPORT_SESSION_KEY='ui-vault:viewport-session:v1';

export function readViewportSession(storage=globalThis.localStorage){
  try{
    const raw=storage?.getItem(VIEWPORT_SESSION_KEY);
    if(!raw)return null;
    const value=JSON.parse(raw);
    if(!value||typeof value!=='object'||!isPreviewMode(value.mode))return null;
    return {mode:value.mode,width:normalizeCustomWidth(value.width)};
  }catch{return null;}
}
export function saveViewportSession(value,storage=globalThis.localStorage){
  if(!isPreviewMode(value?.mode)||!isValidCustomWidth(value?.width))return false;
  try{
    storage?.setItem(VIEWPORT_SESSION_KEY,JSON.stringify({mode:value.mode,width:value.width}));
    return Boolean(storage);
  }catch{return false;}
}
