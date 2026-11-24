import {useState} from 'react';
export function HexColorInput({color,disabled,onCommit,label="当前色标 HEX"}){
 const [draft,setDraft]=useState(null);
 const value=draft??color.toUpperCase();
 const valid=/^#[0-9a-f]{6}$/i.test(value);
 function commit(){if(valid&&value.toLowerCase()!==color.toLowerCase())onCommit(value.toLowerCase());setDraft(null);}
 return <input className="material-hex-input" aria-label={label} aria-invalid={!valid||undefined} disabled={disabled} value={value} maxLength={7} spellCheck={false} onChange={e=>setDraft(e.target.value)} onBlur={commit} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();commit();}else if(e.key==='Escape'){e.preventDefault();setDraft(null);}}}/>;
}
