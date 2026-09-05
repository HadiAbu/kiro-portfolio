---
name: responsive-spacing
description: Applies a consistent, responsive vertical and horizontal spacing system across all pages and sections of the portfolio site. Use this whenever adjusting section padding, page rhythm, gaps between elements, or when spacing feels too large on mobile / too cramped or uneven across pages. Ensures spacing scales fluidly from mobile (320px) through tablet (768px) to desktop (1024px+).
---

# Responsive Spacing

This skill enforces one spacing system for the whole site so vertical rhythm is
consistent across pages and adapts to screen size. It relies on the design tokens in
`src/styles/variables.css` and the mobile-first breakpoints in `src/styles/breakpoints.css`
(768px tablet, 1024px desktop).

## The core problem it solves

Section and page CSS modules hardcode fixed padding like `padding: var(--spacing-16) 0`
or `--spacing-24`, with no responsive scaling. This makes spacing:
- Too tall/wasteful on small phones.
- Inconsistent between pages (some use 16, some 24, some 12).

## The system

Use these fluid section tokens defined in `variables.css`. They scale with viewport width
using `clamp()`, so one token works across all breakpoints — never hardcode raw
`--spacing-N` values for section/page vertical rhythm again.

| Token | Purpose | Value |
|---|---|---|
| `--section-gap-y` | Vertical padding for a top-level page section | `clamp(2.5rem, 6vw, 6rem)` |
| `--section-gap-y-sm` | Tighter vertical padding (compact sections, empty states) | `clamp(1.5rem, 4vw, 3rem)` |
| `--content-gap` | Gap between stacked content blocks within a section | `clamp(1.5rem, 4vw, 3rem)` |
| `--element-gap` | Gap between small related elements (cards in a grid, list items) | `clamp(1rem, 2.5vw, 1.5rem)` |

Horizontal page padding is handled globally by the `.container` class, which applies a
responsive gutter via `padding-inline: var(--container-gutter)` so content never touches
the screen edge. Do not add extra horizontal padding inside sections — put content inside a
`.container` element instead.

### Critical: never clobber the container gutter

When an element has BOTH `.container` and a CSS-module class (e.g.
`className={`container ${styles.page}`}`), the module class loads after `global.css` and
wins the cascade. Using the shorthand `padding: var(--section-gap-y) 0` on that module
class resets horizontal padding to `0`, so `.container`'s gutter is lost and content sticks
to the edges.

**Always set vertical rhythm with the logical `padding-block` property, never the
`padding: <y> 0` shorthand**, on any class that shares an element with `.container`:

```css
/* ✅ correct — preserves the container's horizontal gutter */
.page { padding-block: var(--section-gap-y); }

/* ❌ wrong — wipes out horizontal padding, content hits the edge */
.page { padding: var(--section-gap-y) 0; }
```

## Rules

1. **Every top-level page/section** uses `padding: var(--section-gap-y) 0;` for its outer
   vertical rhythm. Use `--section-gap-y-sm` only for genuinely compact areas.
2. **Never hardcode** `--spacing-16`, `--spacing-24`, `--spacing-12`, etc. for section
   padding. Those fixed tokens are still fine for small internal spacing (icon gaps,
   label margins), but not for page/section rhythm.
3. **Grid and flex gaps** between repeated items use `--element-gap`; gaps between distinct
   content blocks use `--content-gap`.
4. **Horizontal spacing** comes from `.container` (max-width + responsive side padding),
   never per-section left/right padding.
5. After changing spacing, verify at **320px, 768px, and 1024px+** that sections breathe on
   desktop and stay compact on mobile, with even rhythm between every page.
6. Respect `prefers-reduced-motion` — spacing changes must not introduce animation.

## How to apply

1. Ensure the four fluid tokens exist in `src/styles/variables.css` under `:root`.
2. In each section/page `.module.css`, replace fixed vertical padding with
   `padding: var(--section-gap-y) 0;`.
3. Replace grid/flex `gap: var(--spacing-6)` (and similar) between repeated cards with
   `gap: var(--element-gap);`, and gaps between content blocks with `var(--content-gap)`.
4. Remove any redundant per-section horizontal padding; rely on `.container`.
5. Run `npm run build` and check the three breakpoints.

## Files this typically touches

- `src/styles/variables.css` (token definitions)
- `src/components/sections/*.module.css`
- `src/pages/*.module.css`
