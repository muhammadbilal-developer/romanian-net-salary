# Romanian Net Salary Calculator

Production-ready Next.js 16 app that converts Romanian **gross** monthly salary into **net** take-home pay with CAS, CASS, and income tax breakdown (2026 rules).

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- Motion (`motion/react`) for animations
- Metadata API + JSON-LD for SEO

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment (optional)

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity
- `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console
- `NEXT_PUBLIC_BING_VERIFICATION` — Bing Webmaster

## Contact API

`POST /api/contact` validates submissions server-side. Wire email delivery in `app/api/contact/route.ts` (Resend/Formspree TODO).

## Calculator logic

See `lib/salaryEngine.ts` — 25% CAS, 10% CASS, 10% income tax, personal deduction taper, min-wage relief when gross equals minimum wage.

## OG image

Add `public/og-image.png` (1200×630) for social previews (referenced in root metadata).
