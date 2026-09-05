---
inclusion: fileMatch
fileMatchPattern: "src/components/**/*.tsx"
---

# Component conventions (loaded only when editing components)

Template for a new section component:

```tsx
import { profile } from "@data";
import styles from "./Name.module.css";

export function Name() {
  return (
    <section id="name" className={styles.section} aria-labelledby="name-title">
      <div className={styles.container}>
        <h2 id="name-title">Heading</h2>
        {/* content */}
      </div>
    </section>
  );
}
```

Rules:
- `id` on the section must match the anchor used in `Navbar.tsx` nav links.
- Always import data from `@data` barrel — never from `src/content/` or hardcoded strings.
- Use `React.FC<Props>` typing or inline typed props — no implicit prop types.
- Class names composed with array + `.filter(Boolean).join(' ')` pattern (see `Button.tsx`).
- Lists of things → `<ul>` with `<li>`; cards that link → the whole card is the `<a>`.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Reuse `ProjectCard` for anything card-shaped before inventing a new card.
- After creating a component, ask yourself: is the heading order still h1 → h2 → h3?
- Every new component needs a co-located `ComponentName.module.css` — no inline styles except dynamic values.
