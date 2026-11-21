export const PREVIEW_WIDTHS = Object.freeze({ fluid: 0, mobile: 390, tablet: 768, desktop: 1280 });

export function calculatePreviewLayout(areaWidth, areaHeight, mode = 'fluid') {
  if(!Number.isFinite(areaWidth) || !Number.isFinite(areaHeight) || areaWidth <= 0 || areaHeight <= 0) return null;
  if(!Object.hasOwn(PREVIEW_WIDTHS,mode)) return null;
  const width = PREVIEW_WIDTHS[mode] || areaWidth;
  const scale = Math.min(1,areaWidth / width);
  return {
    width,
    height: Math.ceil(areaHeight / scale),
    left: Math.max(0,(areaWidth - width * scale) / 2),
    scale
  };
}

export function applyPreviewLayout(container,iframe,mode='fluid') {
  if(!container || !iframe) return;
  const result = calculatePreviewLayout(container.clientWidth,container.clientHeight,mode);
  if(!result) return;
  iframe.style.width = result.width+'px';
  iframe.style.height = result.height+'px';
  iframe.style.left = result.left+'px';
  iframe.style.transform = 'scale('+result.scale+')';
}
