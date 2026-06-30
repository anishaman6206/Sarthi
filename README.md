# Sarthi

> Career counseling for Indian school students. Pick a career. See the exact
> subjects, exams, colleges, and scholarships — all tailored to your state,
> income, and category.

Live demo: _(add your Vercel URL after deploy)_

## What's in v1

- **Landing page** — gamified grid of 8 careers with hero imagery, hot tags, and animated entrance
- **Interactive roadmap** — chronological stepper for each career (subjects → exams → colleges → training → outlook → skills)
- **College data cards** — 91 verified Indian institutions (AIIMS, IIT, NIFT, IIST, NDA, aviation academies) with fees, placements, and accreditation
- **Personalization** — grade, state, income bracket, and category drive scholarship matching
- **Scholarship matching** — 23 verified schemes (Central Sector, INSPIRE, NTSE, Kanyashree, NMMSS, state-specific) with career relevance
- **Context-aware AI chat** — OpenAI gpt-4o-mini streaming, knows your career + current roadmap stage + profile
- **Rate-limited** — 10 chat requests per minute per IP

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Zustand · react-markdown · OpenAI gpt-4o-mini · Vercel

## Quick start

```bash
npm install
cp .env.example .env.local        # add your OPENAI_API_KEY here
npm run dev                         # http://localhost:3000
```

Without an `OPENAI_API_KEY`, the chat falls back to canned mock replies so the UI is still demoable.

## Environment variables

| Name | Required? | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | Optional | Enables real AI chat. Without it, mock replies are used. |
| `NEXT_PUBLIC_SUPABASE_URL` | v2 | Will replace `localStorage` profile persistence |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | v2 | Same |
| `NEXT_PUBLIC_SITE_URL` | Optional | Used for OG tags and absolute URLs |

## Project structure

```
app/                  Next.js App Router routes
  page.tsx            Landing page (Stage 1)
  roadmap/[slug]/     Per-career roadmap (Stages 2-4)
  api/chat/           Streaming OpenAI endpoint with rate limit
components/
  landing/            Hero, career card, career grid
  roadmap/            Stepper, stage detail panel
  colleges/           College data card
  scholarships/       Scholarship card + filtered list
  personalization/    Modal + button
  chat/               Floating chat window + panel + hook
  store/              Zustand store (SSR-safe persist)
lib/
  data/               Careers, stages, colleges, exams, scholarships, states
  format.ts           Indian RsL / RsCr formatter
```

## Deploy to Vercel

The project is configured for one-click Vercel deploy. No special build settings needed — Next.js 14 auto-detects everything.

### Option A: GitHub + Vercel dashboard (recommended)

1. **Push to GitHub** (skip if already there):
   ```bash
   git remote add origin https://github.com/<your-username>/sarthi.git
   git push -u origin main
   ```

2. **Import in Vercel**:
   - Go to https://vercel.com/new
   - Select the Sarthi repository
   - Vercel auto-detects Next.js — leave all defaults (Build Command, Output Directory, Install Command are auto-filled)
   - Click **Deploy**

3. **Add environment variables** (after first deploy, or before in the import screen):
   - `OPENAI_API_KEY` — your key from https://platform.openai.com/api-keys
   - Optional: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Optional: `NEXT_PUBLIC_SITE_URL` — your Vercel URL once known

4. **Verify**:
   - Open the deploy URL
   - Click any career tile → roadmap renders
   - Click "Personalize for me" → submit form → scholarship count updates
   - Click floating chat → send "hi" → AI responds

### Option B: Vercel CLI (for power users)

```bash
npm install -g vercel
vercel login
vercel                  # first deploy (preview)
vercel --prod           # promote to production
```

Environment variables via CLI:
```bash
vercel env add OPENAI_API_KEY production
# paste your key when prompted
```

### Cost notes

- **Vercel**: free tier handles a low-traffic student demo easily (100 GB bandwidth/month, 100k serverless invocations)
- **OpenAI**: gpt-4o-mini at ~$0.15 per 1M input tokens. A 200-word reply ≈ 300 tokens. Even 1000 students × 10 chats/day ≈ $0.50/day. The 10-req-per-minute rate limit prevents accidental burn.
- **No Supabase cost yet** — v1 uses localStorage. v2 will add it.

## Roadmap (v2 candidates)

- [ ] Real Supabase persistence (replace `localStorage`)
- [ ] College data scraping pipeline (NIRF annual JSON)
- [ ] OG image generation (`/api/og?career=pilot`) for WhatsApp previews
- [ ] Hindi + regional language toggle
- [ ] Component tests for scholarship `qualifiesFor` filter
- [ ] Lighthouse / SEO audit + image optimization

## License

MIT