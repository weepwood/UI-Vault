import {isPreviewMode,normalizeCustomWidth,isValidCustomWidth} from './preview.js';

export const VIEWPORT_SESSION_KEY='ui-vault:viewport-session:v1';

export function readViewportSession(storage){
  try{
    const target=storage===undefined?globalThis.localStorage:storage;
    const raw=target?.getItem(VIEWPORT_SESSION_KEY);
    if(!raw)return null;
    const value=JSON.parse(raw);
    if(!value||typeof value!=='object'||!isPreviewMode(value.mode))return null;
    return {mode:value.mode,width:normalizeCustomWidth(value.width)};
  }catch{return null;}
}
export function saveViewportSession(value,storage){
  if(!isPreviewMode(value?.mode)||!isValidCustomWidth(value?.width))return false;
  try{
    const target=storage===undefined?globalThis.localStorage:storage;
    if(!target)return false;
    target.setItem(VIEWPORT_SESSION_KEY,JSON.stringify({mode:value.mode,width:value.width}));
    return true;
  }catch{return false;}
}
