# Sarthi

Career counseling web app for Indian school students. Pick a career, see the exact subjects, exams, colleges, scholarships — all tailored to your state and family income.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Zustand, react-markdown. Mock data layer (Supabase + Anthropic SDK integration pending).

## Quick start

1. `npm install`
2. `cp .env.example .env.local` (and add your keys when ready)
3. `npm run dev` — http://localhost:3000

## Structure (top-level)

- `app/` — Next.js App Router routes (landing, roadmap, /api/chat)
- `components/` — UI: chat, landing, roadmap, scholarships, personalization, shared, store
- `lib/` — Mock data layer (careers, exams, colleges, scholarships, stages, states)
- `.env.example` — environment variable template

## Roadmap

- [x] Stages 1–5 done (gamified landing, roadmap, college cards, personalization, AI chat mock)
- [/] Real Supabase
- [/] College data scraping
- [/] Hindi + regional language support

## Deploy

1. Push to GitHub
2. Import in Vercel
3. Add env vars from `.env.example`
4. Deploy