# Legacy static site archive

Pre–Next.js 16 static site sources, archived after migration.

- **HTML** — root `.html` entry points (CDN + Babel-in-browser)
- **export/** — duplicated export bundles
- **Page folders** — `about/`, `v2/`, `cs/`, `src/`, etc. (legacy JSX sections)
- **colors_and_type.css** — original design tokens (now in `tailwind.config.ts` + `app/globals.css`)

Redirects from legacy URLs are handled by `lib/legacy-redirects.ts` and `next.config.ts`.

Do not serve these files in production. Reference only.
