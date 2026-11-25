// Reuse the exact existing material schema and CSS generation; no arbitrary CSS.
import {WARM_LAYOUT_FIELDS} from './demo-parameters.js';
import {importMaterialSnapshot,materialTokens} from './material-presets.js';
export function designMaterial(raw){
 const values=importMaterialSnapshot(raw);
 return materialTokens({...Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default])),...values});
}
export function designMaterialCSS(raw){
 const material=designMaterial(raw);
 return '/* Opt-in material sample; does not override component surfaces or design-plan layout. */\n.wb-design-plan .plan-material-surface {\n  background-color: '+material.surface+';\n  background-image: '+material.gradient+';\n  box-shadow: '+material.shadow+';\n}\n';
}
