# waleedalikhan.github.io

Personal portfolio for **Waleed Ali Khan** — Product-focused Senior Frontend Architect.

Live: <https://waleedalikhan.github.io>

## Stack

- **Astro 6** — static, islands-only, zero-JS by default
- **Tailwind CSS v4** — CSS-first `@theme` config, no `tailwind.config.js`
- **TypeScript** (strict) — typed data layer + scripts
- **Native Web APIs** — IntersectionObserver, pointer events, Web Animations. No React/Framer at runtime.

## Scripts

```bash
pnpm install          # install
pnpm dev              # local dev server
pnpm build            # static build to ./dist
pnpm preview          # preview the static build
```

## Structure

```
src/
├── components/       # Astro components (Hero, Projects, Experience, ...)
├── data/             # typed content (site.ts, projects.ts, experience.ts, skills.ts)
├── layouts/          # Layout.astro — SEO head, shared shell
├── lib/              # icon registry
├── pages/            # Astro pages → index.astro
├── scripts/          # client-side TS: cursor-glow, reveal, magnetic, typing, bento
└── styles/
    └── global.css    # Tailwind v4 @theme + utilities
```

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` using `withastro/action@v6`.
Pushes to `main` trigger a build-and-deploy pipeline.
