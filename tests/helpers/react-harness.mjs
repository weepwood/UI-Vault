// React 行为测试基架：happy-dom 提供 DOM 全局，createRoot 真实渲染，act 驱动更新。
// 不引入测试框架：node --test + 本文件即完成组件行为断言（ROADMAP P1 升级正则测试）。
import { Window } from 'happy-dom';
import { act } from 'react';
import { createRoot } from 'react-dom/client';

let domReady = false;

export function setupReactDom() {
  if (domReady) return;
  const window = new Window({ url: 'https://ui-vault.local/' });
  for (const key of ['window', 'document', 'navigator', 'location', 'history', 'HTMLElement', 'Element', 'Node', 'CustomEvent', 'MouseEvent', 'KeyboardEvent', 'Event']) {
    if (window[key] !== undefined && globalThis[key] === undefined) globalThis[key] = window[key];
  }
  globalThis.requestAnimationFrame ??= window.requestAnimationFrame?.bind(window) ?? (callback => setTimeout(() => callback(Date.now()), 16));
  globalThis.cancelAnimationFrame ??= window.cancelAnimationFrame?.bind(window) ?? clearTimeout;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  domReady = true;
}

export function render(component) {
  setupReactDom();
  const container = document.createElement('div');
  document.body.append(container);
  const root = createRoot(container);
  act(() => root.render(component));
  return {
    container,
    root,
    rerender(next) { act(() => root.render(next)); },
    unmount() { act(() => root.unmount()); container.remove(); },
  };
}

// 真实派发 DOM 事件并包在 act() 内，状态更新同步落盘（React 合成事件根监听，事件需要 bubbles）。
export function fire(element, type, init = {}) {
  const Constructor = { keydown: 'KeyboardEvent', keyup: 'KeyboardEvent' }[type] || 'MouseEvent';
  const EventClass = globalThis[Constructor];
  const event = new EventClass(type, { bubbles: true, cancelable: true, ...init });
  act(() => { element.dispatchEvent(event); });
  return event;
}
