import {createContext,useContext} from 'react';

export const IconSpriteContext=createContext('./assets/icons/lucide.svg');

// 主站与组件展厅共用的 Lucide 图标。href 相对文档 <base> 解析，
// 因此在主站根目录和 demos/ 下（<base href="../../../">）都指向同一份 sprite。
export function Icon({name,className='ui-icon'}){
  const sprite=useContext(IconSpriteContext);
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <use href={sprite+'#'+name}/>
  </svg>;
}
