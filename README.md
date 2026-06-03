# Roots of Grace

Marketing site for _Roots of Grace_, built with Next.js 16 (App Router).

## Requirements

- Node.js 20.9+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

App runs at http://localhost:3000.

## Scripts

- `npm run dev`: Start development server.
- `npm run lint`: Run ESLint.
- `npm run build`: Create production build.
- `npm run start`: Serve production build.

## Production readiness checklist

- Run `npm run lint` with zero errors.
- Run `npm run build` successfully.
- Verify external image allowlist in [next.config.ts](next.config.ts).
- Confirm metadata, `robots.txt`, and `sitemap.xml` output.
- Validate key pages in desktop/mobile viewports.
- Check reduced-motion behavior (`prefers-reduced-motion`).

## App structure

- [app/layout.tsx](app/layout.tsx): Global layout and metadata.
- [app/page.tsx](app/page.tsx): Main landing page.
- [app/falling-leaves.tsx](app/falling-leaves.tsx): Decorative hero animation.
- [app/scroll-path.tsx](app/scroll-path.tsx): Narrative path animation.
- [app/global-error.tsx](app/global-error.tsx): Global runtime error UI.
- [app/not-found.tsx](app/not-found.tsx): 404 page.
- [app/robots.ts](app/robots.ts): Robots metadata route.
- [app/sitemap.ts](app/sitemap.ts): Sitemap metadata route.
