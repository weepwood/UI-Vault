// Only bounded design tokens enter CSS; material is intentionally not synthesized.
import {normalizeDesignTokens,contrastRatio} from './design-plan.js';

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

// Contrast-aware state colors, independent of saved proposal protocol.
export function foundationPlanStates(values,theme){
 const t=normalizeDesignTokens(values);
 if(!['light','dark'].includes(theme))throw Error('主题无效');
 const fallback=contrastRatio('#000000',t.surface)>=contrastRatio('#ffffff',t.surface)?'#000000':'#ffffff';
 const pick=color=>contrastRatio(color,t.surface)>=4.5?color:fallback;
 const palette=theme==='light'?{accent:'#4355cb',success:'#0c766d',danger:'#b42337'}:{accent:'#a6b0ff',success:'#72d9c3',danger:'#ff9aa7'};
 const accent=pick(palette.accent);
 const on=contrastRatio('#000000',accent)>=contrastRatio('#ffffff',accent)?'#000000':'#ffffff';
 return {accent,on,success:pick(palette.success),danger:pick(palette.danger),focus:accent,borderContrast:contrastRatio(t.border,t.surface)};
}
// Framework-neutral mapping; the portal host explicitly opts into the same variables.
export function foundationPlanCSS(values,theme){
 const t=normalizeDesignTokens(values),state=foundationPlanStates(t,theme);
 const vars={'--ui-surface':t.surface,'--ui-canvas':t.surface,'--ui-text':t.text,'--ui-muted':t.text,'--ui-subtle':t.text,'--ui-border':t.border,'--ui-border-strong':t.border,'--ui-type-base':t.fontSize+'px','--ui-type-sm':t.fontSize+'px','--ui-radius-md':t.radius+'px','--ui-radius-lg':t.radius+'px','--ui-space-3':t.spacing+'px','--ui-motion-fast':t.duration+'ms','--ui-motion-normal':t.duration+'ms','--ui-accent':state.accent,'--ui-accent-on':state.on,'--ui-accent-hover':state.accent,'--ui-accent-soft':t.surface,'--ui-success':state.success,'--ui-danger':state.danger,'--ui-hover':t.surface};
 const scope='.ui-design-plan[data-theme="'+theme+'"]',portal='.ui-design-plan-portal[data-theme="'+theme+'"]';
 return scope+', '+portal+' {\n'+Object.entries(vars).map(([k,v])=>'  '+k+': '+v+';').join('\n')+'\n  color:var(--ui-text);font:var(--ui-type-base)/1.5 var(--ui-font-sans);color-scheme:'+theme+';\n}\n'+scope+' {background:var(--ui-surface);display:grid;gap:var(--ui-space-3);padding:var(--ui-space-3);min-width:0;}\n.ui-design-plan .ui-input {font-size:var(--ui-type-base);min-width:0}\n:is(.ui-design-plan,.ui-design-plan-portal) :is(.ui-button,.ui-input,.ui-primitive-trigger,.ui-switch):focus-visible {outline:2px solid var(--ui-accent);outline-offset:2px}\n:is(.ui-design-plan,.ui-design-plan-portal) .ui-primitive-option[data-highlighted] {outline:2px solid var(--ui-accent);outline-offset:-2px}\n';
}
