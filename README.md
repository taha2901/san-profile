# San United — Website

Corporate site for **San United General Contracting Co.** — Next.js 16 (App Router) + Tailwind CSS 4 + Framer Motion, bilingual (Arabic RTL default, English LTR), exported as a fully static site.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /ar/)
npm run build    # static export into ./out  (+ scripts/flatten-rsc.mjs)
npm start        # serve ./out locally
```

Deploy: upload the contents of `out/` to any static host (Vercel, Netlify, Cloudflare Pages, cPanel/Apache, nginx).

## Where things live

| What | File |
|---|---|
| Company facts (phone, email, address, stats, socials) | `src/data/company.ts` |
| Services | `src/data/services.ts` |
| Projects (+ categories, featured order) | `src/data/projects.ts` |
| Clients | `src/data/clients.ts` |
| Fleet counts | `src/data/fleet.ts` |
| Certificates | `src/data/certificates.ts` |
| About text, values, departments, alliances | `src/data/about.ts` |
| Navigation + UI strings | `src/data/ui.ts` |
| Design tokens (colors, fonts, animations) | `src/app/globals.css` |
| Images | `public/images/{brand,fleet,gallery,projects,certs}` |

Every piece of text is a `{ ar, en }` object, so the data files map 1:1 to future CMS collections.

## Notes

- **Static export caveat:** Next 16 writes RSC prefetch files as nested folders while the client requests flat dotted names; `scripts/flatten-rsc.mjs` adds the flat copies after each build. Keep it in the build script until the site moves to a server runtime.
- **Forms** (contact, careers) currently open WhatsApp / the mail client with a pre-filled message — see `deliver()` in `src/components/Forms.tsx`. Replace with an API POST in phase 2.
- Open content questions for the client are tracked in `MISSING.md`.

## Phase 2 (planned)

Backend + admin dashboard: manage projects/news/careers, receive contact messages and CV uploads. Remove `output: "export"` from `next.config.ts` when moving to a server runtime.
