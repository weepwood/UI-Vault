// 原生 button 保留键盘、表单与无障碍行为；样式由 Foundation CSS recipes 提供。
export function UiButton({variant='primary',size='md',type='button',disabled=false,loading=false,className='',children,...props}){
  const classes=['ui-button',variant==='outline'?'ui-button--outline':variant==='quiet'?'ui-button--quiet':'',size==='sm'?'ui-button--sm':size==='lg'?'ui-button--lg':'',className].filter(Boolean).join(' ');
  return <button {...props} className={classes} type={type} disabled={disabled||loading} aria-busy={loading}>{children}</button>;
}
