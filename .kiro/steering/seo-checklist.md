---
inclusion: manual
---

# SEO checklist (attach with #seo-checklist)

When asked about SEO or metadata, verify each item and report ✅/❌ before changing code:

1. `metadata.title` is `"<Name> — <Role>"` and ≤ 60 chars.
2. `metadata.description` is 120–160 chars and contains the role + one specialty.
3. `metadataBase` is set so relative OG images resolve.
4. `openGraph` has title, description, url, siteName, type, **and an image** (`/og.png`, 1200×630).
5. `twitter.card = "summary_large_image"`.
6. `src/app/sitemap.ts` and `src/app/robots.ts` exist.
7. Exactly one `<h1>` on the page.
8. `<html lang="en">` is set.
9. All images have descriptive `alt`.
10. JSON-LD `Person` schema is injected in `layout.tsx`.
