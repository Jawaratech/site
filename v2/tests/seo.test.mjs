// SEO / meta-content regression tests for v2/index.html.
//
// Scope: these assert against the RAW HTML TEXT that ships over the wire —
// not the post-hydration DOM — because social-card scrapers (Facebook,
// LinkedIn, Twitter/X, WhatsApp) and many SEO crawlers read the static
// response and do not execute support.js's React runtime. A fix that only
// works after JS runs (e.g. the page's own `document.documentElement.lang =
// ...` in its onMount handler) does not satisfy these tests, and should not.
//
// Run: node --test v2/tests/seo.test.mjs

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const CANONICAL = 'https://jawaratech.co.id/';

test('<html> declares lang statically (not only via client-side JS)', () => {
  const m = html.match(/<html\b([^>]*)>/i);
  assert.ok(m, 'expected an <html ...> opening tag');
  const langAttr = m[1].match(/\blang\s*=\s*"([^"]+)"/i);
  assert.ok(
    langAttr,
    'raw <html> tag has no lang attribute — screen readers and non-JS ' +
      'crawlers see an undeclared-language document until support.js runs'
  );
  assert.match(langAttr[1], /^(en|id)$/, 'lang should be "en" or "id"');
});

test('viewport meta is declared exactly once across head + helmet', () => {
  const matches = html.match(/<meta\b[^>]*\bname\s*=\s*"viewport"[^>]*>/gi) || [];
  assert.equal(
    matches.length,
    1,
    `found ${matches.length} viewport meta tags (one in raw <head>, one ` +
      `inside <helmet> — support.js's helmet manager APPENDS to <head> ` +
      `rather than replacing it, so both land in the live DOM)`
  );
});

test('meta description stays within Google\'s ~160 character truncation limit', () => {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  assert.ok(m, 'expected a <meta name="description"> tag');
  const text = m[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'");
  assert.ok(
    text.length <= 160,
    `description is ${text.length} chars, over the ~160 char limit search ` +
      `engines truncate at — current copy gets cut off mid-sentence`
  );
});

test('og:image ships width, height, type and alt companions', () => {
  for (const prop of ['og:image:width', 'og:image:height', 'og:image:type', 'og:image:alt']) {
    const re = new RegExp(`<meta\\s+property="${prop}"\\s+content="[^"]+"`, 'i');
    assert.ok(
      re.test(html),
      `missing <meta property="${prop}"> — without it, scrapers must ` +
        `fetch and decode the image before they can render a link preview`
    );
  }
});

test('page declares Organization structured data (JSON-LD)', () => {
  const m = html.match(
    /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/i
  );
  assert.ok(m, 'expected a <script type="application/ld+json"> block');

  let data;
  assert.doesNotThrow(() => { data = JSON.parse(m[1]); }, 'ld+json block is not valid JSON');

  assert.equal(data['@type'], 'Organization');
  assert.equal(data.url, CANONICAL);
  assert.ok(Array.isArray(data.sameAs), 'expected sameAs[] linking social profiles');
  assert.ok(
    data.sameAs.some((u) => u.includes('linkedin.com')),
    'sameAs should include the LinkedIn company profile'
  );
  assert.ok(
    data.sameAs.some((u) => u.includes('instagram.com')),
    'sameAs should include the Instagram profile'
  );
});

test('hreflang alternates cover en, id, and x-default', () => {
  for (const lang of ['en', 'id', 'x-default']) {
    const re = new RegExp(
      `<link\\s+rel="alternate"\\s+hreflang="${lang}"\\s+href="${CANONICAL.replace(/\//g, '\\/')}"`,
      'i'
    );
    assert.ok(
      re.test(html),
      `missing hreflang="${lang}" alternate — the page serves en/id from ` +
        `one URL via a client-side toggle, so self-referencing hreflang ` +
        `alternates are how search engines are told both variants exist`
    );
  }
});

test('robots meta opts into large image search snippets', () => {
  const m = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);
  assert.ok(m, 'expected a <meta name="robots"> tag');
  const directives = m[1].split(',').map((d) => d.trim());
  assert.ok(directives.includes('index'));
  assert.ok(directives.includes('follow'));
  assert.ok(
    directives.includes('max-image-preview:large'),
    `robots content is "${m[1]}" — missing max-image-preview:large means ` +
      `Google defaults to a small/no image in search results`
  );
});
