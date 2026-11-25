// Only bounded design tokens enter CSS; material is intentionally not synthesized.
import {normalizeDesignTokens} from './design-plan.js';

export function designPlanStyle(values,theme){
 const t=normalizeDesignTokens(values);
 if(!['light','dark'].includes(theme))throw Error('主题无效');
 return {
  '--plan-surface':t.surface,'--plan-text':t.text,'--plan-border':t.border,
  '--plan-font':t.fontSize+'px','--plan-space':t.spacing+'px','--plan-radius':t.radius+'px',
  '--plan-duration':t.duration+'ms','--plan-error':theme==='dark'?'#ffaaa0':'#a43d34',
  'color-scheme':theme
 };
}
// Same fixed rules in the actual preview and exported stylesheet. No global selectors.
export const DESIGN_PLAN_RULES=`.wb-reuse-theme.wb-design-plan[data-theme] {
  --surface:var(--plan-surface); --canvas:var(--plan-surface);
  --ink:var(--plan-text); --text:var(--plan-text); --muted:var(--plan-text); --subtle:var(--plan-text);
  --line:var(--plan-border); --line-soft:var(--plan-border);
  --accent:var(--plan-text); --accent-line:var(--plan-text); --accent-line-strong:var(--plan-text);
  --accent-soft:var(--plan-surface); --focus:var(--plan-text);
  --hover:var(--plan-surface); --hover-strong:var(--plan-surface); --parameter-error:var(--plan-error);
  --motion-fast:var(--plan-duration); --motion-base:var(--plan-duration); --motion-slow:var(--plan-duration);
  --workbench-control-radius:var(--plan-radius);
  display:grid; gap:var(--plan-space); padding:var(--plan-space); min-width:0;
  border:1px solid var(--line); border-radius:var(--plan-radius);
  color:var(--ink); background:var(--surface); font:var(--plan-font)/1.5 system-ui,sans-serif;
  box-sizing:border-box;
}
.wb-reuse-theme.wb-design-plan .search-field,
.wb-reuse-theme.wb-design-plan .select-trigger {
  border-radius:var(--plan-radius); min-height:max(38px,calc(var(--plan-font) + 16px));
  height:auto; box-sizing:border-box; padding:6px 10px;
}
.wb-reuse-theme.wb-design-plan .search-field .search-icon {
  display:flex; align-items:center; justify-content:center; color:var(--ink);
}
.wb-reuse-theme.wb-design-plan .search-field input {
  font:inherit; color:var(--ink); border:0; border-radius:0; padding:0;
  background:transparent; min-width:0; outline:none; box-shadow:none;
}
.wb-reuse-theme.wb-design-plan :is(.select-trigger,.select-option) {font:inherit}
.wb-reuse-theme.wb-design-plan .select-popover {border-radius:var(--plan-radius)}
.wb-reuse-theme.wb-design-plan .select-option {border-radius:min(8px,var(--plan-radius))}
.wb-reuse-theme.wb-design-plan .select-option[aria-selected=true] {outline:1px solid var(--plan-border);outline-offset:-1px}
.wb-reuse-theme.wb-design-plan .search-field:focus-within,
.wb-reuse-theme.wb-design-plan :is(button,.select-option):focus-visible {outline:2px solid var(--focus);outline-offset:2px}
.wb-reuse-theme.wb-design-plan .search-clear {padding:0;min-width:24px;min-height:24px}
.wb-reuse-theme.wb-design-plan .ui-icon {width:16px;height:16px;flex:none}
.wb-reuse-theme.wb-design-plan [hidden] {display:none!important}
.wb-reuse-theme.wb-design-plan .plan-result {overflow-wrap:anywhere}
@media(prefers-reduced-motion:reduce){
 .wb-reuse-theme.wb-design-plan :is(.search-field,.search-clear,.select-trigger,.select-chevron,.select-option){transition:none}
 .wb-reuse-theme.wb-design-plan .select-popover{animation:none}
}
.wb-reuse-theme.wb-design-plan[data-motion=reduced] :is(.search-field,.search-clear,.select-trigger,.select-chevron,.select-option){transition:none}
.wb-reuse-theme.wb-design-plan[data-motion=reduced] .select-popover{animation:none}
`;
export function designPlanCSS(values,theme){
 const declarations=Object.entries(designPlanStyle(values,theme)).map(([key,value])=>'  '+key+':'+value+';').join('\n');
 return '/* UI-Vault: opt-in Workbench adapter. Load after shared controls CSS. Material intent is not rendered. */\n'+
 '.wb-reuse-theme.wb-design-plan[data-theme="'+theme+'"] {\n'+declarations+'\n}\n'+DESIGN_PLAN_RULES;
}
