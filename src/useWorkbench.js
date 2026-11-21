import {useCallback,useEffect,useLayoutEffect,useMemo,useReducer,useRef} from 'react';
import {filterAssets,popularTags} from '../assets/core/catalog.js';
import {loadFavorites,saveFavorites} from '../assets/core/favorites.js';
import {resolveAsset} from '../assets/core/render.js';
import {createWorkbenchRouter} from '../assets/core/workbench-router.js';
import {createWorkbenchState,setCatalogData,changeCatalogFilter,resetCatalogFilters,
  setCatalogQuery,setCatalogSort,setCatalogTag,activateAsset,deactivateAsset,
  changePreviewMode,hasActiveCatalogFilters} from '../assets/core/workbench-state.js';
import {loadSettings,applySettings,SETTINGS_KEY,DEFAULT_SETTINGS} from '../assets/core/settings.js';

const router=createWorkbenchRouter(window);
function initial(){
  const session=createWorkbenchState();
  return {...session,favorites:loadFavorites(),preferences:loadSettings(),
    view:router.read().view,menuOpen:false,loading:true,error:null};
}
function chooseVisible(next,preferred=null){
  const visible=filterAssets(next.assets,next,next.favorites);
  if(!visible.length){deactivateAsset(next);return next;}
  const desired=(preferred&&visible.find(item=>item.id===preferred))||
    (next.active&&visible.find(item=>item.id===next.active.id))||visible[0];
  activateAsset(next,desired,next.preferences.preview);
  return next;
}
export function workbenchReducer(current,action){
  const next={...current};
  switch(action.type){
    case 'catalog':{
      setCatalogData(next,action.assets,action.categories);
      next.loading=false;next.error=null;
      const preferred=action.routeAsset&&action.assets.find(a=>a.id===action.routeAsset)||
        action.assets.find(a=>a.source==='local'&&a.curated===true)||
        action.assets.find(a=>a.source==='local')||action.assets[0];
      if(preferred)activateAsset(next,preferred,next.preferences.preview);
      return chooseVisible(next);
    }
    case 'error':return {...next,loading:false,error:action.message};
    case 'filter':changeCatalogFilter(next,action.kind,action.value);return chooseVisible(next);
    case 'reset':resetCatalogFilters(next);return chooseVisible(next);
    case 'query':setCatalogQuery(next,action.value);return chooseVisible(next);
    case 'sort':setCatalogSort(next,action.value);return chooseVisible(next);
    case 'tag':setCatalogTag(next,action.value);return chooseVisible(next);
    case 'select':{
      const asset=next.assets.find(a=>a.id===action.id);
      if(asset)activateAsset(next,asset,next.preferences.preview);
      return next;
    }
    case 'favorite':{
      const favorites=new Set(current.favorites);
      if(favorites.has(action.id))favorites.delete(action.id);else favorites.add(action.id);
      next.favorites=favorites;
      return next.favoritesOnly?chooseVisible(next):next;
    }
    case 'preference':{
      next.preferences={...current.preferences,[action.key]:action.value};
      if(action.key==='preview'&&next.active?.source==='local')changePreviewMode(next,action.value);
      return next;
    }
    case 'preferences':{
      next.preferences=action.values;
      if(next.active?.source==='local')changePreviewMode(next,action.values.preview);
      return next;
    }
    case 'resetPreferences':{
      next.preferences={...DEFAULT_SETTINGS};
      if(next.active?.source==='local')changePreviewMode(next,next.preferences.preview);
      return next;
    }
    case 'previewMode':
      if(next.active?.source!=='local')return current;
      return changePreviewMode(next,action.value)?next:current;
    case 'view':return {...next,view:action.value,menuOpen:false};
    case 'menu':return {...next,menuOpen:Boolean(action.value)};
    case 'navigate':{
      next.view=action.view;
      next.menuOpen=false;
      const asset=next.assets.find(a=>a.id===action.asset);
      if(asset)activateAsset(next,asset,next.preferences.preview);
      return next;
    }
    default:return current;
  }
}
async function fetchJSON(path,signal){
  const response=await fetch(resolveAsset(path),{cache:'no-cache',signal});
  if(!response.ok)throw Error('请求失败：'+path+' · HTTP '+response.status);
  return response.json();
}
/**
 * 全工作台唯一 React 状态源：
 * Session + 过滤器 + 收藏 + 偏好 + 视图 + 移动导航。
 * 浏览器历史、持久化和主题是 Store 外部副作用，统一由 Hooks 执行。
 */
export function useWorkbench(){
  const [state,dispatch]=useReducer(workbenchReducer,undefined,initial);
  const [notice,setNotice]=useReducer((_old,next)=>next,'');
  const previousSettings=useRef(state.preferences);
  const initialized=useRef(false);
  const notify=useCallback(message=>setNotice(message),[]);
  useEffect(()=>{
    const controller=new AbortController();
    Promise.all([
      fetchJSON('content/assets.json',controller.signal),
      fetchJSON('content/categories.json',controller.signal)
    ]).then(([assets,categories])=>{
      if(!Array.isArray(assets)||!Array.isArray(categories))throw Error('资源清单格式不正确');
      dispatch({type:'catalog',assets,categories,routeAsset:router.read().asset});
    }).catch(error=>{
      if(error.name==='AbortError')return;
      console.error('UI-Vault React 工作台：',error);
      dispatch({type:'error',message:'项目加载失败，请检查网络连接和静态站点构建。'});
    });
    return ()=>controller.abort();
  },[]);
  useEffect(()=>router.subscribe(route=>dispatch({type:'navigate',...route})),[]);
  useEffect(()=>{
    if(!state.loading)router.setAsset(state.active?.id||null,'replace');
  },[state.active?.id,state.loading]);
  useEffect(()=>{
    if(!initialized.current){initialized.current=true;return;}
    if(!saveFavorites(state.favorites))notify('无法持久保存收藏，本次会话仍可使用');
  },[state.favorites,notify]);
  useLayoutEffect(()=>{applySettings(state.preferences);},[state.preferences]);
  useEffect(()=>{
    if(previousSettings.current===state.preferences)return;
    previousSettings.current=state.preferences;
    try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(state.preferences));}
    catch{notify('当前浏览器无法保存设置，刷新后可能恢复默认值');}
  },[state.preferences,notify]);
  useEffect(()=>{
    const sync=()=>{
      const values=loadSettings();
      dispatch({type:'preferences',values});
    };
    const onStorage=event=>{if(event.key===SETTINGS_KEY||event.key===null)sync();};
    const media=matchMedia('(prefers-color-scheme: dark)');
    const onMedia=()=>{if(state.preferences.theme==='system')applySettings(state.preferences);};
    window.addEventListener('storage',onStorage);
    window.addEventListener('pageshow',sync);
    media.addEventListener?.('change',onMedia);
    return ()=>{
      window.removeEventListener('storage',onStorage);
      window.removeEventListener('pageshow',sync);
      media.removeEventListener?.('change',onMedia);
    };
  },[state.preferences]);

  const filtered=useMemo(()=>filterAssets(state.assets,state,state.favorites),[state]);
  const tags=useMemo(()=>popularTags(state.assets,14,state.tag),[state.assets,state.tag]);
  const filteredActive=hasActiveCatalogFilters(state);
  const openView=useCallback((view,{historyMode='push'}={})=>{
    router.setView(view,historyMode);
    dispatch({type:'view',value:view});
  },[]);
  const leaveSettings=useCallback(()=>{if(state.view==='settings')openView('library');},[openView,state.view]);
  const selectAsset=useCallback((id,options={})=>{
    router.setAsset(id,options.historyMode||'push');
    dispatch({type:'select',id});
    dispatch({type:'menu',value:false});
  },[]);
  const filter=useCallback((kind,value)=>{
    leaveSettings();
    dispatch({type:'filter',kind,value});
    dispatch({type:'menu',value:false});
  },[leaveSettings]);
  const changeSearch=useCallback(value=>{leaveSettings();dispatch({type:'query',value});},[leaveSettings]);
  const changeSort=useCallback(value=>{leaveSettings();dispatch({type:'sort',value});},[leaveSettings]);
  const changeTag=useCallback(value=>{leaveSettings();dispatch({type:'tag',value});},[leaveSettings]);
  const reset=useCallback(()=>{leaveSettings();dispatch({type:'reset'});},[leaveSettings]);
  const favorite=useCallback(id=>{
    if(!id)return;
    notify(state.favorites.has(id)?'已从收藏中移除':'已加入收藏');
    dispatch({type:'favorite',id});
  },[state.favorites,notify]);
  const changePreference=useCallback((key,value)=>{
    dispatch({type:'preference',key,value});
  },[]);
  const resetPreferences=useCallback(()=>{
    dispatch({type:'resetPreferences'});
    notify('已恢复默认设置');
  },[notify]);
  const changePreview=useCallback(value=>dispatch({type:'previewMode',value}),[]);
  const menu=useCallback(value=>dispatch({type:'menu',value}),[]);
  const copyText=useCallback(async(text,message)=>{
    try{await navigator.clipboard.writeText(text);notify(message);}
    catch{notify('复制失败，请检查浏览器剪贴板权限');}
  },[notify]);
  const copyLink=useCallback(()=>{
    if(state.active)void copyText(router.assetURL(state.active.id).href,'项目链接已复制');
  },[state.active,copyText]);
  const copySource=useCallback(async(id)=>{
    const asset=state.assets.find(a=>a.id===id&&a.source==='local'&&a.copyable!==false);
    if(!asset)return;
    try{
      const response=await fetch(resolveAsset(asset.code));
      if(!response.ok)throw Error('HTTP '+response.status);
      await copyText(await response.text(),'单文件 Demo 源码已复制');
    }catch{notify('源码读取失败，请在 GitHub 打开对应文件');}
  },[state.assets,copyText,notify]);

  return {state,filtered,tags,filteredActive,notice,notify,
    dispatch,openView,leaveSettings,selectAsset,filter,changeSearch,changeSort,changeTag,reset,
    favorite,changePreference,resetPreferences,changePreview,menu,copyText,copyLink,copySource};
}
