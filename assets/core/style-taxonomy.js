// 与 catalog/tag-vocabulary.json 的「风格视觉」分面保持一致；测试防止词表漂移。
export const STYLE_TAGS=Object.freeze(["暗色","浅色","深浅主题","黑白","粉彩","彩色","暖色","冷色","中性色","低饱和","高对比","柔和","渐变","动态色彩","玻璃材质","模糊材质","浮雕","纹理","纸质感","金属质感","光效","霓虹","透明","硬阴影","软阴影","图案","自然有机","几何","网格","粗野","极简","留白","层次","信息密度","克制","精致","优雅","奢华","活力","趣味","宁静","复古","梦核","杂志感","科技感","赛博朋克","故障感","东方","手工感","卡通","3D 空间","像素","点阵","生成艺术","动态背景","衬线","等宽","版式","游戏化"]);
const styles=new Set(STYLE_TAGS);
export function isStyleTag(value){return styles.has(value);}
export function styleTagsOf(asset){return (asset.tags||[]).filter(isStyleTag);}
