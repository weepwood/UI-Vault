// 下拉菜单的统一关闭入口。
// React 的 WorkbenchSelect 在展开期间通过 trackDropdown() 登记自己；
// 切换到设置视图、打开移动端目录或展开另一个菜单时，调用 closeDropdowns() 统一收起。
// 原生的 enhanceSelect() 已随 React 迁移移除（2026-11-22）。
const opened=new Set();

export function trackDropdown(dropdown){
  opened.add(dropdown);
  return ()=>{opened.delete(dropdown);};
}

export function closeDropdowns(){
  // 复制一份再遍历：close() 触发的状态更新会在之后注销登记。
  for(const dropdown of [...opened])dropdown.close();
}
