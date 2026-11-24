// 原生 checkbox + switch role；表单和键盘语义保持原生。
export function UiSwitch({className='',...props}){return <input {...props} type="checkbox" role="switch" className={['ui-switch',className].filter(Boolean).join(' ')}/>;}
