/*
 * Reusable Liquid Orb dialog — load dialog.css beside this JS module.
 * import {createLiquidOrbDialog} from './dialog.js';
 */
const CHANNEL = 'ui-vault/liquid-orb';
const ORB_URL = new URL('../liquid-orb/index.html?embed=1', import.meta.url).href;
const VALID_STATES = new Set(['idle', 'thinking']);

export function createLiquidOrbDialog({
  container = document.body,
  text = 'Thinking...',
  state = 'thinking',
  startOpen = false,
} = {}) {
  if (!(container instanceof HTMLElement)) throw new TypeError('container must be an HTMLElement');
  if (!VALID_STATES.has(state)) throw new TypeError('Unknown liquid orb state: ' + state);

  const layer = document.createElement('div');
  layer.className = 'lod-overlay';
  layer.hidden = true;
  layer.innerHTML = [
    '<section class="lod-panel" role="dialog" aria-modal="true" tabindex="-1">',
    '  <div class="lod-art">',
    '    <div class="lod-loading" role="status" aria-live="polite">',
    '      <div class="lod-track" role="progressbar" aria-label="WebGPU 初始化进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="8"><span class="lod-fill"></span></div>',
    '      <span class="lod-loading-label">正在准备玻璃球…</span>',
    '      <button class="lod-retry" type="button" hidden>重新尝试</button>',
    '    </div>',
    '    <div class="lod-viewport"><iframe title="动态液态玻璃球" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe></div>',
    '  </div>',
    '  <div class="lod-copy"><p class="lod-text"></p></div>',
    '  <button type="button" class="lod-close" aria-label="关闭对话框" title="关闭">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    '  </button>',
    '</section>'
  ].join('');
  container.appendChild(layer);
  const panel = layer.querySelector('.lod-panel');
  const frame = layer.querySelector('iframe');
  const label = layer.querySelector('.lod-text');
  const track = layer.querySelector('.lod-track');
  const fill = layer.querySelector('.lod-fill');
  const loadingLabel = layer.querySelector('.lod-loading-label');
  const closeButton = layer.querySelector('.lod-close');
  const retryButton = layer.querySelector('.lod-retry');
  let selectedState = state;
  let loaded = false;
  let ready = false;
  let destroyed = false;
  let retryCount = 0;
  let previousFocus = null;
  let previousOverflow = '';
  let desiredPlaying = !matchMedia('(prefers-reduced-motion: reduce)').matches;

  const command = (action, value) => {
    if (!loaded || !frame.contentWindow || !ready) return;
    frame.contentWindow.postMessage({ channel: CHANNEL, event: 'command', action, value }, '*');
  };
  function resetLoading() {
    ready = false;
    layer.classList.remove('lod-ready', 'lod-failed');
    loadingLabel.textContent = '正在准备玻璃球…';
    fill.style.width = '8%';
    track.setAttribute('aria-valuenow', '8');
    retryButton.hidden = true;
  }
  function load() {
    resetLoading();
    loaded = true;
    const url = new URL(ORB_URL);
    if (retryCount > 0) url.searchParams.set('attempt', String(retryCount));
    frame.src = url.href;
  }
  function onOrbMessage(event) {
    if (destroyed || event.source !== frame.contentWindow) return;
    const data = event.data;
    if (!data || data.channel !== CHANNEL) return;
    if (data.event === 'progress' && !ready) {
      if (!Number.isFinite(data.progress)) return;
      const progress = Math.min(99, Math.max(0, Math.round(data.progress)));
      track.setAttribute('aria-valuenow', String(progress));
      fill.style.width = progress + '%';
      if (typeof data.label === 'string') loadingLabel.textContent = data.label;
    }
    if (data.event === 'ready') {
      ready = true;
      track.setAttribute('aria-valuenow', '100');
      fill.style.width = '100%';
      layer.classList.remove('lod-failed');
      layer.classList.add('lod-ready');
      retryButton.hidden = true;
      command('setState', selectedState);
      command('setPlaying', !layer.hidden && desiredPlaying);
    }
    if (data.event === 'error') {
      ready = false;
      layer.classList.add('lod-failed');
      layer.classList.remove('lod-ready');
      loadingLabel.textContent = 'WebGPU 不可用';
      track.removeAttribute('aria-valuenow');
      retryButton.hidden = false;
    }
  }
  function setText(nextText) {
    if (destroyed) return;
    const value = String(nextText);
    label.textContent = value;
    panel.setAttribute('aria-label', value || '液态玻璃球对话框');
  }
  function setState(nextState) {
    if (!VALID_STATES.has(nextState)) throw new TypeError('Unknown liquid orb state: ' + nextState);
    selectedState = nextState;
    command('setState', nextState);
  }
  function setPlaying(nextPlaying) {
    desiredPlaying = Boolean(nextPlaying);
    command('setPlaying', !layer.hidden && desiredPlaying);
  }
  function show() {
    if (destroyed || !layer.hidden) return;
    previousFocus = document.activeElement;
    previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    layer.hidden = false;
    if (!loaded) load();
    command('setPlaying', desiredPlaying);
    closeButton.focus();
  }
  function close() {
    if (destroyed || layer.hidden) return;
    layer.hidden = true;
    document.documentElement.style.overflow = previousOverflow;
    command('setPlaying', false);
    if (previousFocus?.isConnected && typeof previousFocus.focus === 'function') previousFocus.focus();
  }
  function retry() {
    if (destroyed) return;
    retryCount += 1;
    load();
  }
  function onKeydown(event) {
    if (layer.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    if (event.key !== 'Tab') return;
    const focusable = [closeButton, ...(!retryButton.hidden ? [retryButton] : [])];
    const active = focusable.indexOf(document.activeElement);
    if (active < 0) { event.preventDefault(); focusable[0].focus(); }
    else if (!event.shiftKey && active === focusable.length - 1) { event.preventDefault(); focusable[0].focus(); }
    else if (event.shiftKey && active === 0) { event.preventDefault(); focusable.at(-1).focus(); }
  }
  const onBackdropClick = event => { if (event.target === layer) close(); };
  layer.addEventListener('keydown', onKeydown);
  layer.addEventListener('click', onBackdropClick);
  closeButton.addEventListener('click', close);
  retryButton.addEventListener('click', retry);
  window.addEventListener('message', onOrbMessage);
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const onReduceMotion = event => { if (event.matches) setPlaying(false); };
  reduceMotion.addEventListener?.('change', onReduceMotion);

  function destroy() {
    if (destroyed) return;
    close();
    destroyed = true;
    window.removeEventListener('message', onOrbMessage);
    reduceMotion.removeEventListener?.('change', onReduceMotion);
    layer.removeEventListener('keydown', onKeydown);
    layer.removeEventListener('click', onBackdropClick);
    closeButton.removeEventListener('click', close);
    retryButton.removeEventListener('click', retry);
    frame.removeAttribute('src');
    layer.remove();
  }

  setText(text);
  if (startOpen) show();
  return Object.freeze({
    element: layer,
    show, close, retry, destroy, setText, setState, setPlaying,
    isOpen: () => !layer.hidden,
    isReady: () => ready,
  });
}
