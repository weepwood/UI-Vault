// 保留原生 input 的表单、键盘、标签与校验；调用者负责关联 label。
export function UiInput({className='',type='text',...props}){return <input {...props} type={type} className={['ui-input',className].filter(Boolean).join(' ')}/>;}
