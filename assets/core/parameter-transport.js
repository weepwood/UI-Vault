// 单在途请求 + 单最新值槽位；不积压过时的滑块输入。
export function createParameterTransport({send,onState=()=>{},onResult=()=>{},onFailure=()=>{},interval=50,timeout=3000,setTimer=setTimeout,clearTimer=clearTimeout}){
 let active=null,latest=null,tick=null,deadline=null,disposed=false;
 const state=()=>{if(!disposed)onState({busy:Boolean(active),blocking:Boolean(active&&!active.job.live),queued:Boolean(latest)});};
 function clearTick(){if(tick!==null)clearTimer(tick);tick=null;}
 function clearDeadline(){if(deadline!==null)clearTimer(deadline);deadline=null;}
 function fail(job,message){clearTick();clearDeadline();active=null;latest=null;state();onFailure(job,message);}
 function launch(job){if(disposed)return;try{const token=send(job);active={job,token};const entry=active;deadline=setTimer(()=>{if(active===entry)fail(job,'未收到 Demo 响应，请重新读取或手动应用');},timeout);state();}catch(error){fail(job,error?.message||'发送失败');}}
 function pump(){if(disposed||active||!latest||tick!==null)return;tick=setTimer(()=>{tick=null;if(active||!latest||disposed)return;const job=latest;latest=null;launch(job);},interval);}
 function cancelQueued(){clearTick();latest=null;state();}
 return {
  enqueue(job){if(disposed)return false;latest={...job,live:true};state();pump();return true;},
  manual(job){if(disposed||active)return false;cancelQueued();launch({...job,live:false});return true;},
  current(){return active;},
  complete(token,result){if(disposed||!active||active.token!==token)return false;const job=active.job;if(result?.error){fail(job,result.error);return true;}clearDeadline();active=null;onResult(job,result,{queued:Boolean(latest)});state();pump();return true;},
  cancelQueued,
  dispose(){disposed=true;clearTick();clearDeadline();active=null;latest=null;}
 };
}
