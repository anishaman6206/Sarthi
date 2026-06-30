"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Career } from "@/lib/data/careers";
import { getStagesForCareer } from "@/lib/data/stages";
import StageDetailPanel from "@/components/roadmap/StageDetailPanel";
import {
  STAGE_TYPE_BADGE_CLASS,
  STAGE_TYPE_ICON,
} from "@/components/roadmap/StageTypeIcon";
import { useUserStore } from "@/components/store/useUserStore";
import {
  ChatContextProvider,
  useChatContext,
} from "@/components/chat/ChatContext";
import {
  Bot,
  Calculator,
  Landmark,
  Plane,
  Rocket,
  Scissors,
  Shield,
  Stethoscope,
} from "lucide-react";

const careerIconMap = {
  "commercial-pilot": Plane,
  "nda-defence": Shield,
  "doctor-mbbs": Stethoscope,
  "fashion-designer": Scissors,
  "robotics-engineer": Bot,
  astronaut: Rocket,
  "civil-services-ias": Landmark,
  "chartered-accountant": Calculator,
} as const;

const careerBadgeMap = {
  "commercial-pilot": "bg-sky-400/20 text-sky-100 border-sky-300/30",
  "nda-defence": "bg-amber-400/20 text-amber-100 border-amber-300/30",
  "doctor-mbbs": "bg-rose-400/20 text-rose-100 border-rose-300/30",
  "fashion-designer": "bg-fuchsia-400/20 text-fuchsia-100 border-fuchsia-300/30",
  "robotics-engineer": "bg-emerald-400/20 text-emerald-100 border-emerald-300/30",
  astronaut: "bg-indigo-400/20 text-indigo-100 border-indigo-300/30",
  "civil-services-ias": "bg-orange-400/20 text-orange-100 border-orange-300/30",
  "chartered-accountant": "bg-cyan-400/20 text-cyan-100 border-cyan-300/30",
} as const;

interface RoadmapViewProps {
  career: Career;
}

function RoadmapViewInner({ career }: RoadmapViewProps): JSX.Element {
  const stages = getStagesForCareer(career.slug);
  // Open the first stage by default so the page feels alive on first render —
  // students see context before they start clicking through the journey.
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);

  const activeStage = stages[activeIndex];
  const setCurrentStage = useUserStore((state) => state.setCurrentStage);
  const { setStageTitle } = useChatContext();
  const CareerIcon = careerIconMap[career.slug as keyof typeof careerIconMap];
  const careerBadgeClasses = careerBadgeMap[career.slug as keyof typeof careerBadgeMap];

  // Whenever the active stage changes, mirror its title into both the user
  // store (for persistence) and the ChatContext (for the AI panel header).
  useEffect(() => {
    if (!activeStage) return;
    setCurrentStage(activeStage.title);
    setStageTitle(activeStage.title);
  }, [activeStage, setCurrentStage, setStageTitle]);

  return (
    <main className="min-h-screen bg-sarthi-cream">
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${career.gradient} opacity-90`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
        />
        <div className="relative px-6 py-12 text-white">
          <Link
            href="/"
            className="text-sm font-semibold opacity-90 hover:opacity-100"
          >
            ← Back to all careers
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <span
              aria-hidden
              className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${careerBadgeClasses}`}
            >
              <CareerIcon className="h-8 w-8" />
            </span>
            <h1 className="font-display mt-3 text-4xl font-extrabold md:text-5xl">
              {career.title}
            </h1>
            <p className="mt-2 max-w-2xl text-base opacity-90 md:text-lg">
              {career.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="font-display text-2xl font-bold text-sarthi-ink">
          Your journey, step by step
        </h2>

        <div className="mt-8">
          {/* Mobile: vertical stack */}
          <ol className="flex flex-col gap-4 md:hidden">
            {stages.map((stage, index) => {
              const isCompleted = index < activeIndex;
              const isActive = index === activeIndex;
              return (
                <li key={stage.stage_order}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setOpen(true);
                    }}
                    className="flex w-full items-center gap-3 rounded-2xl border border-sarthi-ink/10 bg-white p-3 text-left shadow-sm transition hover:shadow-md"
                  >
                    <span
                      className={[
                        "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border text-2xl",
                        isCompleted
                          ? "bg-sarthi-violet text-white border-transparent"
                          : isActive
                            ? "bg-sarthi-peach text-sarthi-ink border-transparent animate-pulse"
                            : `bg-white border-sarthi-ink/15 text-sarthi-ink/60 ${STAGE_TYPE_BADGE_CLASS[stage.stage_type]}`,
                      ].join(" ")}
                      aria-hidden
                    >
                      {(() => {
                        const StageIcon = STAGE_TYPE_ICON[stage.stage_type];
                        return <StageIcon className="h-7 w-7" />;
                      })()}
                    </span>
                    <span className="text-sm font-semibold text-sarthi-ink">
                      {stage.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Desktop: horizontal stepper */}
          <ol className="hidden items-center gap-2 md:flex">
            {stages.map((stage, index) => {
              const isCompleted = index < activeIndex;
              const isActive = index === activeIndex;
              const isLast = index === stages.length - 1;
              return (
                <li
                  key={stage.stage_order}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setOpen(true);
                    }}
                    className="flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sarthi-violet/60 rounded-full"
                    aria-label={`Show step ${index + 1}: ${stage.title}`}
                  >
                    <span
                      className={[
                        "flex h-16 w-16 items-center justify-center rounded-full border text-2xl",
                        isCompleted
                          ? "bg-sarthi-violet text-white border-transparent"
                          : isActive
                            ? "bg-sarthi-peach text-sarthi-ink border-transparent animate-pulse"
                            : `bg-white border-sarthi-ink/15 text-sarthi-ink/60 ${STAGE_TYPE_BADGE_CLASS[stage.stage_type]}`,
                      ].join(" ")}
                      aria-hidden
                    >
                      {(() => {
                        const StageIcon = STAGE_TYPE_ICON[stage.stage_type];
                        return <StageIcon className="h-7 w-7" />;
                      })()}
                    </span>
                    <span className="max-w-[10rem] text-center text-sm font-semibold text-sarthi-ink">
                      {stage.title}
                    </span>
                  </button>
                  {!isLast ? (
                    <span
                      aria-hidden
                      className={[
                        "mx-2 h-1 flex-1 rounded-full",
                        isCompleted ? "bg-sarthi-violet" : "bg-sarthi-violet/20",
                      ].join(" ")}
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>

        {activeStage ? (
          <StageDetailPanel
            stage={activeStage}
            careerSlug={career.slug}
            open={open}
            onClose={() => setOpen(false)}
          />
        ) : null}
      </section>
    </main>
  );
}

export default function RoadmapView({ career }: RoadmapViewProps): JSX.Element {
  return (
    <ChatContextProvider initialStageTitle={getStagesForCareer(career.slug)[0]?.title}>
      <RoadmapViewInner career={career} />
    </ChatContextProvider>
  );
}