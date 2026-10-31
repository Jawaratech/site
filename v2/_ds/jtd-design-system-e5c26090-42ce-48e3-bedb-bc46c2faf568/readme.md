# JTD Design System – Tailwind

A compact, Tailwind-flavoured UI system for JTD: Playfair Display headings over Roboto body text, one brand blue (`primary-500` #2c71f6) for the action that matters, 6px corners, 1px borders and almost no shadow. Light theme by default; dark via `data-theme="dark"` on any ancestor.

The components are generic product UI — buttons, form fields, alerts, tags, avatars — plus two content tiles that hint at the intended surfaces: an **e-commerce product card** (with colour/size options and rating) and a **blog card**. No full product screens exist in the source.

## Sources

- Codebase (read-only, attached locally): `tailwind-css-ui-design-system/` — `README.md`, `tokens.json` (synced 2026-10-09 from the Figma file *"Tailwind CSS UI Design System (Free) (Community).fig"*), `components/bundle.js` + `bundle.css` (namespace `TwDS`), per-component `README.md` + `preview.html`, `assets/Icons/*.svg`, `fonts/lucide.woff2`.
- Uploads: `uploads/jtd-logo.svg` (brand logo → `assets/logo.svg`), `uploads/lucide.woff2` (→ `fonts/lucide.woff2`).
- The source Figma file itself was not provided; everything here comes from the exported codebase.

## Index

- `styles.css` — entry point; `@import`s only. Link this one file.
- `tokens/` — `fonts.css` (Google Fonts + Lucide `@font-face`), `colors.css` (ramps + light/dark semantics), `typography.css` (families + `--type-*` font shorthands), `spacing.css` (space + radius), `effects.css` (shadows, focus, motion), `layout.css` (grid), `base.css` (body + link defaults), `tokens.json` (source of truth with usage notes and contrast ratios).
- `components/components.css` — component class rules (`tw-*`), shipped through `styles.css`.
- `components/<group>/` — React primitives (`.jsx` + `.d.ts` + `.prompt.md`) and one `*.card.html` per group.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/logo.svg`, `assets/icons/*.svg` (+ README), `fonts/lucide.woff2`.
- `thumbnail.html`, `SKILL.md`.

## Components

Inventory = the source kit's `index.d.ts`, built 1:1.

- **icon/** — Icon
- **actions/** — Button
- **forms/** — Input, SearchInput, TextArea, Select, TagInput
- **data-display/** — Tag, Status, Avatar, AvatarGroup, AvatarWithText, Tooltip, Rating
- **feedback/** — Alert
- **selection/** — SwatchOption, SizeOption
- **cards/** — ProductCard, BlogCard
- **layout/** — ScrollArea

Components render `tw-*` classes; styling lives in `components/components.css`, so consumers must link `styles.css`. No intentional additions (the internal `fieldShell` helper is not a public component).

**UI kits:** none. The source has no screens — its Figma page templates (Top navigation, 404, Dashboard, E-commerce, 50+ "Full version" pages) were locked placeholders and were never exported.

## Content fundamentals

- The source ships placeholder microcopy only ("Label", "Help message", "Button text", "Product name", "Description goes here", "Success text goes here"), so there is no brand voice to quote. Follow what it shows: **short, plain, sentence case**.
- Buttons are one to three words: "Add to cart", "Edit", "Delete", "Try again". Field labels are nouns: "Email", "Username". Help text is one short clause: "Username is available".
- Alerts are one sentence; extra detail goes in the description line ("Payment failed" / "Check the card number and try again.").
- Address the reader as "you", or drop the subject. No "we"-voice marketing in UI.
- **No emoji.** No exclamation-heavy copy. No title case in buttons.
- Required fields get a red asterisk after the label; never write "(required)".
- Status words are always shown beside the dot or icon: Positive, Pending, Negative.

## Visual foundations

**Color.** Two themes, `light` (default) and `dark` (`data-theme="dark"`). Reach for semantic tokens (`bg-*`, `text-*`, `icon-*`, `border-*`); the six ramps (`neutral`, `primary`, `orange`, `yellow`, `green`, `red`, 050–900) are for minting new semantics, not painting UI. Ground `bg-default` (white / #202020), quiet panels and hover fills `bg-secondary`. Primary action `bg-primary` → hover `bg-primary-hover` (primary-700), label `text-on-primary`. Status in four families (info/primary, success, warning, error), each with solid, subdued wash, `*-secondary` text, icon and border tokens. Orange exists but no component uses it. The vibe is clean, neutral, cool-white with a single saturated blue.

**Contrast caveats (kept exact from source).** `text-on-primary` on `bg-primary` 4.38:1, `text-secondary` on white 3.49:1, `border-secondary` 1.42:1, `text-success` on white 2.73:1. Keep labels on blue ≥14px semibold; never put `text-success`/`text-warning` on white; never put `*-secondary` text tokens on the dark ground.

**Type.** Playfair Display (500; H5 600) carries every heading `header-h` 32 → `header-h5` 16, line-height 1.4. Roboto carries body (`body1/2/3`, `label`), buttons (`button1-3-semibold`, line 1) and links (underlined, line 1). Inter carries typed field values (`input-value` 14/20) and the Tailwind-style scale (`display-xs`, `text-xl…xs`). Card titles inside components are Roboto Medium, not Playfair. Use the `--type-*` shorthand tokens: `font: var(--type-header-h2)`.

**Spacing.** px steps named by value: `space-2,4,6,8,10,12,14,16,20,24,32,40`. Inputs pad 0/12 at 38px tall; buttons 10/20 at medium; alerts 16/24/16/16; tags 4/8. Exact values, not snapped to a 4/8 grid (status dot gap 5px, star gap 5px).

**Corners.** `radius-md` 6px for controls (buttons, inputs, tags, tooltips, size tiles); `radius-sm` 4px text area; `radius-lg` 8px product images; `radius-xl` 12px logo tiles; `radius-full` avatars, dots, round icon buttons, swatches. **Alerts are square.**

**Borders & cards.** Structure comes from 1px borders — `border-secondary` on controls, `border-default` hairlines on tags/avatars. Cards (ProductCard, BlogCard) have no border and no shadow: the image slot (bg-secondary, 8px radius) carries the shape and content stacks with 16px gaps.

**Shadows.** Tailwind-style tokens `shadow-depth-1`, `base`, `md`, `lg`, `xl`, `2xl`, `inner` — reserved for popovers, menus and modals. No inner glows, no coloured shadows.

**States.** Hover: primary → `bg-primary-hover`; secondary → `bg-secondary` fill; text button → `text-primary-secondary`; tags/size tiles → border darkens to `border-secondary`. Focus: 2px `border-primary` outline, 2px offset (destructive uses `border-error`); inputs show active as `border-primary` + 1px ring. Disabled: primary fill → `bg-primary-disabled`, inputs → `bg-disabled`, swatches 40% opacity. No press/shrink effect.

**Motion.** 120ms colour fades (background, border, colour) and a 120ms tooltip opacity fade. No bounces, slides or easing curves defined.

**Backgrounds & imagery.** Flat solid grounds only — no gradients, textures, patterns or full-bleed photography in the source. Product and avatar photos are consumer-supplied (none shipped). The only decorative motif is the kit cover: unequal full-width colour bands (primary, ink, primary-100, yellow, green) with ground-coloured 6px tiles cut out (`guidelines/brand-cover.html`).

**Transparency & blur.** Only in dark-theme washes (e.g. `#3e79f71a` = 10% tint). No backdrop blur.

**Layout.** 12 columns desktop (112px margin, 32px gutter at 1280/1440/1536), 6 on tablet (768, 32px margin/gutter), 4 on mobile (375, 16px). Top bar 64px. See `tokens/layout.css`.

## Iconography

- **Lucide** (v1.54.0, ISC) is the icon system, shipped as an icon font: `fonts/lucide.woff2` carries every Lucide icon as one glyph — 24px grid, 2px round-capped stroke, outline style.
- In code render with `<Icon name="circle-check" size={20} />` — drawn in `currentColor`, coloured with `icon-*` tokens. Any Lucide kebab-case name works (see lucide.dev).
- `assets/icons/*.svg` — single-ink (#202020) SVG copies of the 20 icons the components use, plus `star-filled.svg` (#ffbe18), for documents/slides where the font can't go.
- Sizes: 20px in fields and alerts, 18px in medium/small buttons (20 large/xlarge, 16 xsmall), 14px beside status words, 12px in tags; ≥16px elsewhere.
- Meaning by shape and colour: success `circle-check`, pending `clock`, negative `circle-x`, info `info`, warning `triangle-alert`, error `circle-alert`.
- The rating star is an inline SVG path (Lucide star, filled).
- **No emoji, no unicode glyphs as icons, no hand-drawn icons.** The original Figma used Heroicons; the system switched to Lucide by the author's choice.

## Brand

- Logo: `assets/logo.svg` (1740×749, navy #152B7F / cyan #37AEF2 / blue #0095FF / ink #333). Use on white or light grounds; on brand blue, place it on a white plate.
- Fonts: Playfair Display, Roboto and Inter load from Google Fonts (the source ships no text-font files). Lucide is local.

## Not in this system

- No page templates, top navigation, 404, dashboard or e-commerce screens (source placeholders only).
- Dark variants of alert and input were not designed in the source; dark values come from its Dark Mode colour styles.
- Assumptions flagged in `tokens.json` notes: dark `bg-tertiary`, `text-tertiary`, `icon-tertiary`; `SizeOption` selected state.
- The older documentation frames in the Figma quote a different blue (#3E79F7) and ink (#1A3353); the published styles (#2c71f6 / #202020) win.
