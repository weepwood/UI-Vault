export const PREVIEW_WIDTHS = Object.freeze({ fluid: 0, mobile: 390, tablet: 768, desktop: 1280 });
export const MIN_CUSTOM_WIDTH = 320;
export const MAX_CUSTOM_WIDTH = 2560;
export const DEFAULT_CUSTOM_WIDTH = 800;

export function isPreviewMode(mode) {
  return mode === 'custom' || Object.hasOwn(PREVIEW_WIDTHS, mode);
}
export function normalizeCustomWidth(value, fallback = DEFAULT_CUSTOM_WIDTH) {
  const n = Number(value);
  return Number.isInteger(n) ? Math.max(MIN_CUSTOM_WIDTH,Math.min(MAX_CUSTOM_WIDTH,n)) : fallback;
}
export function isValidCustomWidth(value) {
  return Number.isInteger(Number(value)) && Number(value)>=MIN_CUSTOM_WIDTH && Number(value)<=MAX_CUSTOM_WIDTH;
}

export function calculatePreviewLayout(areaWidth, areaHeight, mode = 'fluid', customWidth = DEFAULT_CUSTOM_WIDTH) {
  if(!Number.isFinite(areaWidth) || !Number.isFinite(areaHeight) || areaWidth <= 0 || areaHeight <= 0) return null;
  if(!isPreviewMode(mode)) return null;
  const width = mode === 'custom' ? normalizeCustomWidth(customWidth) : PREVIEW_WIDTHS[mode] || areaWidth;
  const scale = Math.min(1,areaWidth / width);
  return {
    width,
    height: Math.ceil(areaHeight / scale),
    left: Math.max(0,(areaWidth - width * scale) / 2),
    scale
  };
}

export function applyPreviewLayout(container,iframe,mode='fluid',customWidth=DEFAULT_CUSTOM_WIDTH) {
  if(!container || !iframe) return;
  const result = calculatePreviewLayout(container.clientWidth,container.clientHeight,mode,customWidth);
  if(!result) return;
  iframe.style.width = result.width+'px';
  iframe.style.height = result.height+'px';
  iframe.style.left = result.left+'px';
  iframe.style.transform = 'scale('+result.scale+')';
  return result;
}
