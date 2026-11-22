(() => {
  let hideTimer;
  let status;

  const getStatus = () => {
    if (status) return status;
    status = document.createElement('div');
    status.id = 'style-atlas-copy-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('aria-atomic', 'true');
    document.body.append(status);
    return status;
  };

  const announce = (message, state = 'success') => {
    const node = getStatus();
    node.textContent = message;
    node.dataset.state = state;
    node.dataset.visible = 'true';
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => { node.dataset.visible = 'false'; }, 2600);
  };

  const getCopyValue = (button) => {
    if (button.hasAttribute('data-copy')) return button.dataset.copy;
    const source = document.querySelector('#atlas-data');
    if (source) {
      const data = JSON.parse(source.textContent);
      return JSON.stringify({ id: data.id, name: data.name, palette: data.palette, tokens: data.tokens }, null, 2);
    }
    return document.querySelector('#tokens')?.textContent?.trim() || '';
  };

  const writeClipboard = async (value) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.cssText = 'position:fixed;inset:auto auto 0 -9999px;opacity:0';
    document.body.append(input);
    input.select();
    const copied = document.execCommand('copy');
    input.remove();
    if (!copied) throw new Error('Clipboard unavailable');
  };

  const collectPageInfo = () => {
    let pattern = {};
    try {
      const source = document.querySelector('#pattern-data');
      if (source) pattern = JSON.parse(source.textContent);
    } catch { /* Fall back to the visible reference notes. */ }
    const panel = document.querySelector('.reference-panel');
    const text = (node) => node?.textContent?.trim() || '';
    const sections = [...(panel?.querySelectorAll(':scope > .grid > .card') || [])].map((card) => ({
      title: text(card.querySelector('h2')),
      paragraphs: [...card.querySelectorAll(':scope > p')].map(text).filter(Boolean),
      items: [...card.querySelectorAll(':scope > ul > li, :scope > ol > li')].map(text).filter(Boolean),
      code: text(card.querySelector('pre code, pre')),
    })).filter((section) => section.title || section.paragraphs.length || section.items.length || section.code);
    const palette = [...(panel?.querySelectorAll('.palette [data-copy]') || [])]
      .map((node) => node.dataset.copy).filter((value) => /^#[\da-f]{3,8}$/i.test(value));
    const links = [...(panel?.querySelectorAll('.source-list a[href]') || [])]
      .map((node) => ({ label: text(node), url: node.href })).filter((link) => /^https:\/\//i.test(link.url));
    const notices = [...(panel?.querySelectorAll(':scope > .notice') || [])].map(text).filter(Boolean);
    return {
      pattern,
      kind: text(panel?.querySelector('.reference-kind')),
      summary: text(panel?.querySelector('.reference-summary')) || pattern.summary || '',
      sections,
      palette,
      links: (pattern.sources?.length ? pattern.sources : links),
      notices,
    };
  };

  const publishPageInfo = () => window.parent.postMessage({
    type: 'ui-vault:page-info',
    path: window.location.pathname,
    info: collectPageInfo(),
  }, '*');

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'ui-vault:request-page-info') publishPageInfo();
  });
  document.addEventListener('DOMContentLoaded', () => {
    publishPageInfo();
    document.querySelectorAll('details.reference-menu').forEach((menu) => menu.remove());
  }, { once: true });
  if (document.readyState !== 'loading') {
    publishPageInfo();
    document.querySelectorAll('details.reference-menu').forEach((menu) => menu.remove());
  }

  document.addEventListener('click', async (event) => {
    const button = event.target.closest?.('[data-copy], #copy-tokens');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    try {
      const value = getCopyValue(button);
      if (!value) throw new Error('No copy value');
      await writeClipboard(value);
      announce(button.id === 'copy-tokens' ? 'JSON 已复制到剪贴板' : `${value} 已复制到剪贴板`);
    } catch {
      announce('复制失败，请检查浏览器剪贴板权限后重试', 'error');
    }
  }, true);
})();
