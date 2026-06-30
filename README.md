# Sarthi — Your Career Guide

> **सारथि** — the charioteer. We guide Indian school students from "what do I want to become?" to a real, step-by-step plan.

**[sarthi-nine.vercel.app](https://sarthi-nine.vercel.app/)**

![Sarthi landing](https://sarthi-nine.vercel.app/)

---

## Why Sarthi?

Every year, **28 million Indian students** finish Class 10. Most have no idea what careers are even possible beyond "doctor or engineer," and even those who do pick a path have no roadmap for *how* to actually get there.

Sarthi closes that gap. Pick a career. See the exact subjects to take in 11th/12th, the entrance exams to write, the colleges to apply to, the scholarships you qualify for — all tailored to your state, income, and category. Ask our AI counsellor anything, anytime, with full context of where you are in the journey.

---

## Features

### For Students

| Feature | What it does |
|---|---|
| **Visual career grid** | Eight high-impact careers (Commercial Pilot, NDA, Doctor, Fashion Designer, Robotics Engineer, Astronaut, IAS, CA) shown as rich, photo-driven cards with hot tags for trending paths |
| **Interactive roadmap** | A chronological stepper per career: subjects → exams → colleges → training → career outlook → skills |
| **Rich college cards** | Fees (Rs Lakh / Crore), duration, placement %, average salary, accreditation pills — for every major Indian institution |
| **Personalised scholarships** | Filters 23+ verified government schemes by your grade, state, family income, and category. Each card shows why you qualify and links to the official `.gov.in` portal |
| **AI counsellor, always on** | Floating chat bubble on every page. Knows your career, current roadmap stage, and profile. Asks questions like *"What if I wear glasses?"* or *"Are bank loans easy for this?"* get grounded answers |
| **Real Indian data** | Every college, exam, and scholarship is verified against NIRF, AICTE, UGC, or the relevant `.gov.in` portal |

### For Parents

- See fees upfront — no surprises
- Filter scholarships your child actually qualifies for (not generic "apply for everything")
- State-specific schemes (Kanyashree, SVMCM, Vidyasiri, Maharashtra DBT) surfaced automatically

### For Schools

- Free to use, no signup
- Mobile-first (most Class 9-12 students browse on phones)
- Designed for low-bandwidth: lazy imagery, optimistic UI, no heavy video

---

## The Five Stages of a Sarthi Journey

1. **The Visual Hook** — *"What do you want to become, my friend?"* A gamified grid of career cards. No forms, no friction. Just browse.

2. **The Interactive Roadmap** — Pick a career and see it as a timeline. Each stage is a node you can tap to dive deeper.

3. **Rich Data Cards** — Tap a stage like "Colleges" to see actual institutions with fees, placements, and accreditation. Not generic advice.

4. **Personalisation** — A 30-second form (grade, state, income, category) unlocks tailored scholarship matching and refines every recommendation on the page.

5. **AI Counsellor** — Always-on chat that already knows what page you're on, what career you're exploring, and what stage of the roadmap you're looking at. No "please describe your question" filler.

---

## Career Paths Covered

| Path | Gateway | Hero Institutions |
|---|---|---|
| Commercial Pilot | DGCA Class 2 Medical + Flying School | Indira Gandhi Institute of Aeronautics, Bombay Flying Club |
| NDA / Defence Officer | UPSC NDA + SSB Interview | National Defence Academy Khadakwasla, IMA Dehradun |
| Doctor (MBBS) | NEET-UG | AIIMS network, CMC Vellore, JIPMER, KEM, MAMC |
| Fashion Designer | NIFT / NID entrance + portfolio | NIFT Delhi, NID Ahmedabad, Pearl Academy |
| Robotics Engineer | JEE Main/Advanced + IIT/IIIT | IIT Bombay, IIT Madras, IISc Bangalore, IIIT Hyderabad |
| Astronaut | IIST via JEE Advanced | IIST Thiruvananthapuram (ISRO tie-up) |
| IAS / Civil Services | UPSC CSE (Prelims + Mains + Interview) | LBSNAA Mussoorie (training academy) |
| Chartered Accountant | ICAI Foundation → Inter → Final | ICAI campuses; top feeder colleges SRCC, Loyola |

---

## Tech

- **Frontend**: Next.js 14 (App Router), TypeScript strict, Tailwind CSS
- **Animation**: Framer Motion (hero entrance, card reveals, panel transitions)
- **State**: Zustand with SSR-safe persistence
- **AI**: OpenAI `gpt-4o-mini` streaming via NDJSON; graceful fallback to mock when API key absent
- **Markdown rendering**: `react-markdown` + `remark-gfm` for AI chat output
- **Deployment**: Vercel (zero-config Next.js hosting)

## Project Structure

```
app/                    Next.js App Router
  page.tsx              Landing page (Stage 1)
  roadmap/[slug]/       Per-career roadmap (Stages 2-4)
    layout.tsx          Per-page <title> for SEO
    page.tsx            Roadmap + Personalize + Scholarships
  api/chat/             Streaming OpenAI endpoint + rate limit
components/
  landing/              Hero + CareerCard + CareerGrid
  roadmap/              Stepper + StageDetailPanel
  colleges/             CollegeCard
  scholarships/         ScholarshipCard + filtered list
  personalization/      Modal + button (portal-rendered)
  chat/                 ChatWindow + ChatPanel + useChatStream
  store/                Zustand user profile store
lib/
  data/                 Verified careers, stages, colleges, exams,
                        scholarships, states
  format.ts             Indian RsL / RsCr formatter
```

## Data Highlights

- **91** verified college-program pairs across 8 careers
- **23** verified scholarships with official `.gov.in` URLs
- **26** entrance exams with conducting body, frequency, age limits
- **38** Indian states and union territories (ISO 3166-2:IN codes)
- **39** roadmap stages across all careers

Every college link, scholarship URL, and exam portal points to the live, official source. No aggregators, no fake data.

---

## Local Development

```bash
git clone https://github.com/<your-username>/sarthi.git
cd sarthi
npm install
cp .env.example .env.local       # add OPENAI_API_KEY for real AI responses
npm run dev                       # http://localhost:3000
```

Without `OPENAI_API_KEY`, the chat falls back to canned mock replies so the UI is still demoable.

### Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build (this is what Vercel runs) |
| `npm start` | Run the production build locally |
| `npm run lint` | ESLint check |

### Environment variables

| Name | Required? | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | Optional | Enables real AI chat |
| `NEXT_PUBLIC_SUPABASE_URL` | v2 | Will replace localStorage profile persistence |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | v2 | Same |
| `NEXT_PUBLIC_SITE_URL` | Optional | Used for OG tags and absolute URLs |

---

## Roadmap

Shipped in v1:
- [x] Gamified landing with 8 career cards
- [x] Interactive chronological roadmap per career
- [x] Rich college data cards (91 institutions)
- [x] Personalization (grade, state, income, category)
- [x] Scholarship matching (23 schemes, career-aware)
- [x] Context-aware AI chat (OpenAI streaming)
- [x] Rate limiting + per-page SEO metadata

Coming in v2:
- [ ] Real Supabase persistence (replace localStorage)
- [ ] College data scraping pipeline (NIRF annual JSON)
- [ ] OG image generation for WhatsApp previews
- [ ] Hindi + regional language toggle
- [ ] Component tests for scholarship filter logic
- [ ] More careers: Lawyer, Architect, Journalist, Game Designer

---

## Contributing

This is a student-focused project. If you know an Indian scheme, college, or exam that we should add, open an issue or PR. Accuracy matters more than volume — every data point should be traceable to an official source.

## License

MIT