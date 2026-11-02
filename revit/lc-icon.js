// <lc-icon name="bell" size="20"> — Lucide (outline, stroke 2) in a shadow root; color = currentColor.
(function () {
  if (customElements.get('lc-icon')) return;
  const cache = {};
  class LcIcon extends HTMLElement {
    static get observedAttributes() { return ['name', 'size']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    async render() {
      const n = this.getAttribute('name');
      const sz = (this.getAttribute('size') || '20') + 'px';
      if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
      const root = this.shadowRoot;
      const css = `<style>:host{display:inline-flex;flex:none;width:${sz};height:${sz};color:inherit}svg{width:100%;height:100%;display:block}</style>`;
      if (!n) { root.innerHTML = css; return; }
      cache[n] = cache[n] || fetch('https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg').then((r) => (r.ok ? r.text() : '')).catch(() => '');
      root.innerHTML = css;
      const t = await cache[n];
      if (this.getAttribute('name') !== n) return;
      root.innerHTML = css + t.replace(/stroke-width="[^"]*"/, 'stroke-width="2"');
    }
  }
  customElements.define('lc-icon', LcIcon);
})();
