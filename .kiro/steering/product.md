---
inclusion: always
---

# Product

**What this is:** the personal website of Hadi — AI & Fullstack Engineer.
A single-page, content-first site whose job is to (1) explain who Hadi is in 10 seconds,
(2) show real projects, (3) make it trivial to get in touch.

**Audience:** hiring managers, conference organizers, developers who attended a workshop.

**Sections (in order):** Hero → About → Projects → Contact. Do not add sections without a spec.

**Tone of all copy:** warm, first-person, concise. No buzzwords ("synergy", "cutting-edge").

**Single source of truth for personal data:** #[[file:src/data/profile.ts]]
**Projects data:** #[[file:src/data/projects.ts]]

Never hard-code a name, email, URL or project inside a component — read it from `@data`.

**Non-goals (for now):** no blog, no CMS, no analytics, no contact form backend.
