import type { NextRequest } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;

const rateLimitMap: Map<string, RateLimitEntry> = new Map();

const getClientIp = (req: NextRequest): string => {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0];
    if (first && first.trim().length > 0) return first.trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp && realIp.trim().length > 0) return realIp.trim();
  return "unknown";
};

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  entry.count += 1;
  return true;
};

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatBody {
  messages?: IncomingMessage[];
  context?: {
    careerSlug?: string;
    stageTitle?: string;
    profile?: Record<string, unknown>;
  };
}

const SYSTEM_PROMPT_TEMPLATE =
  "You are Sarthi, a kind expert career counselor for Indian school students (classes 8-12). " +
  "You are talking to the student right now. Use friendly 'my friend' tone. Give concrete steps. " +
  "Mention real Indian exams (NDA, NEET, JEE, NIFT, UPSC CSE), real Indian schemes, real Indian colleges. " +
  "Always suggest verifying on .gov.in / .nic.in / official sites when unsure. " +
  "Keep answers under 200 words unless detail truly required. " +
  "Current context: career={career}, current roadmap stage={stage}, student profile={profile}. " +
  "Stay in character. Never mention you are an AI or break the fourth wall.";

const MOCK_RESPONSES: Record<string, string> = {
  "commercial-pilot":
    "Great question! For a Commercial Pilot in India, the key thing is DGCA Class 2 Medical is mandatory before you even start flying school. If you wear glasses, you may still be eligible - DGCA allows vision correctable to 6/6 in each eye. Want me to walk you through the DGCA Class 1 procedure?",
  "nda-defence":
    "Ah, NDA aspirant - respect! First things first: you can only attempt NDA between ages 16.5 and 19.5. The written exam is by UPSC twice a year, and clearing it just gets you to SSB - the 5-day interview at Allahabad is where most selections actually happen. Want tips on the SSB?",
  doctor:
    "Healing the world - beautiful choice! The gateway is NEET-UG. Cutoffs vary: AIIMS Delhi closes under AIR 50, but state GM colleges accept 550-600+. Start with NCERT line by line for Biology. Want a study plan?",
  "fashion-designer":
    "Beautiful career choice! The gateway exams are NIFT and NID entrance - both require a strong portfolio. Start building one now with sketches and mood boards. Top institute NIFT Delhi has just 300 seats per course so prep hard. Want portfolio tips?",
  "robotics-engineer":
    "Robotics is the future! Your path is PCM in 11-12, then crack JEE Advanced for IITs - specifically IIT Bombay, Madras, or Kanpur for robotics. IISc Bangalore and IIIT Hyderabad are also stellar. Want a list of robotics specializations to focus on?",
  astronaut:
    "Touching the stars - inspiring choice! India's gateway is IIST (Indian Institute of Space Science and Technology) in Thiruvananthapuram. Admission through JEE Advanced. After B.Tech from IIST, ISRO recruits directly. Want details on the IIST admission process?",
  "ias-civil-services":
    "The dream of many - UPSC Civil Services! There's no age shortcut: you can attempt between 21 and 32 (General), with relaxations for OBC/SC/ST. The exam has 3 stages - Prelims, Mains, Interview. Most aspirants take 2-3 attempts. Want a study plan?",
  "chartered-accountant":
    "CA is a fantastic, stable career! The path is Foundation (after Class 10 or 12), then Inter, then Final - about 4-5 years total if you clear in one go. Articleship under a practicing CA is mandatory for 3 years. Want tips on clearing Inter in first attempt?",
  default:
    "Hey there! I'm Sarthi, your career guide. Pick a career on the home page and I'll help you with subjects, exams, colleges, and scholarships. You can also tell me about yourself using the Personalize button. What do you want to become, my friend?",
};

const encoder = new TextEncoder();

const buildSystemPrompt = (
  careerSlug: string | undefined,
  stageTitle: string | undefined,
  profile: Record<string, unknown> | undefined,
): string =>
  SYSTEM_PROMPT_TEMPLATE.replace("{career}", careerSlug ?? "not chosen")
    .replace("{stage}", stageTitle ?? "overview")
    .replace("{profile}", JSON.stringify(profile ?? {}) || "not yet filled");

const isOpenAIAvailable = (): boolean =>
  Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.length > 0);

/** Fallback stream used when OPENAI_API_KEY is missing (dev/CI). */
const mockStream = (text: string, controllers: { close: () => void; enqueue: (chunk: string) => void }): void => {
  const tokens = text.split(/(\s+)/);
  const chunks: string[] = [];
  let current = "";
  let wordCount = 0;
  for (const tok of tokens) {
    const isSpace = /^\s+$/.test(tok);
    if (!isSpace) wordCount += 1;
    current += tok;
    if (!isSpace && wordCount >= 8) {
      chunks.push(current);
      current = "";
      wordCount = 0;
    }
  }
  if (current.length > 0) chunks.push(current);

  let i = 0;
  const tick = (): void => {
    if (i >= chunks.length) {
      controllers.enqueue(JSON.stringify({ done: true }));
      controllers.close();
      return;
    }
    controllers.enqueue(JSON.stringify({ delta: chunks[i] }));
    i += 1;
    setTimeout(tick, 80);
  };
  setTimeout(tick, 100);
};

/** Real OpenAI stream. Uses Chat Completions streaming API; converts to NDJSON. */
const openaiStream = async (
  client: OpenAI,
  systemPrompt: string,
  history: IncomingMessage[],
  ctrl: ReadableStreamDefaultController<Uint8Array>,
): Promise<void> => {
  try {
    const stream = await client.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      max_tokens: 600,
      temperature: 0.7,
      messages: [
        { role: "system", content: systemPrompt },
        ...history.map((m) => ({ role: m.role, content: m.content })),
      ],
    });

    for await (const chunk of stream) {
      const delta = chunk.choices?.[0]?.delta?.content;
      if (delta) {
        ctrl.enqueue(encoder.encode(JSON.stringify({ delta }) + "\n"));
      }
    }
    ctrl.enqueue(encoder.encode(JSON.stringify({ done: true }) + "\n"));
    ctrl.close();
  } catch (err) {
    // Surface the error to the client so the UI can show a friendly message
    ctrl.enqueue(
      encoder.encode(
        JSON.stringify({
          error: err instanceof Error ? err.message : "OpenAI request failed",
        }) + "\n",
      ),
    );
    ctrl.enqueue(encoder.encode(JSON.stringify({ done: true }) + "\n"));
    ctrl.close();
  }
};

export async function POST(req: NextRequest): Promise<Response> {
  const clientIp = getClientIp(req);
  if (!checkRateLimit(clientIp)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Try again in a minute." }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: ChatBody;
  try {
    body = (await req.json()) as ChatBody;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: "messages must be a non-empty array" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const ctx = body.context ?? {};
  const careerSlug = typeof ctx.careerSlug === "string" ? ctx.careerSlug : undefined;
  const stageTitle = typeof ctx.stageTitle === "string" ? ctx.stageTitle : undefined;
  const profile = ctx.profile && typeof ctx.profile === "object" ? ctx.profile : undefined;
  const systemPrompt = buildSystemPrompt(careerSlug, stageTitle, profile);

  const useOpenAI = isOpenAIAvailable();

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const enqueue = (payload: string): void => {
        controller.enqueue(encoder.encode(payload + "\n"));
      };
      const close = (): void => {
        try {
          controller.close();
        } catch {
          // already closed
        }
      };

      if (!useOpenAI) {
        // Mock fallback
        const fallback =
          (careerSlug && MOCK_RESPONSES[careerSlug]) || MOCK_RESPONSES.default;
        mockStream(fallback, { enqueue, close });
        return;
      }

      // Real OpenAI
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      void openaiStream(client, systemPrompt, messages, controller);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson",
      "Cache-Control": "no-store",
    },
  });
}
