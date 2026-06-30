"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useMemo } from "react";
import { CAREERS, type Career } from "@/lib/data/careers";
import { getProgramsForCareer } from "@/lib/data/colleges";
import type { Stage } from "@/lib/data/stages";
import CollegeCard from "@/components/colleges/CollegeCard";

interface StageDetailPanelProps {
  stage: Stage;
  careerSlug: Career["slug"];
  open: boolean;
  onClose: () => void;
}

interface ExamEntry {
  name: string;
  conducting_body?: string;
  frequency?: string;
  age_limit?: string;
  attempts?: string;
  application_url?: string;
}

const asString = (value: unknown, fallback = ""): string =>
  typeof value === "string" ? value : fallback;

const asNumber = (value: unknown): number | undefined =>
  typeof value === "number" && Number.isFinite(value) ? value : undefined;

const asStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];

const asExamList = (value: unknown): ExamEntry[] => {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry): ExamEntry[] => {
    if (!entry || typeof entry !== "object") return [];
    const e = entry as Record<string, unknown>;
    return [
      {
        name: asString(e.name, "Exam"),
        conducting_body: asString(e.conducting_body) || undefined,
        frequency: asString(e.frequency) || undefined,
        age_limit: asString(e.age_limit) || undefined,
        attempts: asString(e.attempts) || undefined,
        application_url: asString(e.application_url) || undefined,
      },
    ];
  });
};

export default function StageDetailPanel({
  stage,
  careerSlug,
  open,
  onClose,
}: StageDetailPanelProps) {
  const career = useMemo<Career | undefined>(
    () => CAREERS.find((c) => c.slug === careerSlug),
    [careerSlug],
  );

  const gradientClass = career?.gradient ?? "from-violet/30 via-peach/20 to-mint/30";

  const handleMarkComplete = (): void => {
    if (typeof window !== "undefined") {
      window.alert("Marked!");
    }
  };

  const renderBody = (): React.ReactNode => {
    const metadata = stage.metadata ?? {};
    switch (stage.stage_type) {
      case "subjects": {
        const subjects = asStringArray(metadata.required_subjects);
        const minPct = asNumber(metadata.min_pct_class12);
        const extra = asString(metadata.extra);
        return (
          <div className="space-y-4">
            {subjects.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 text-sarthi-ink/80">
                {subjects.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sarthi-ink/70">No specific subjects required.</p>
            )}
            {minPct !== undefined ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-sarthi-violet/10 px-3 py-1 text-sm font-semibold text-sarthi-violet">
                Min {minPct}% in Class 12
              </span>
            ) : null}
            {extra ? (
              <p className="text-sm italic text-sarthi-ink/60">{extra}</p>
            ) : null}
          </div>
        );
      }

      case "exams": {
        const exams = asExamList(metadata.exams);
        return (
          <div className="space-y-3">
            {exams.length === 0 ? (
              <p className="text-sarthi-ink/70">Exam details will appear here.</p>
            ) : (
              exams.map((exam) => (
                <div
                  key={exam.name}
                  className="rounded-2xl border border-sarthi-ink/10 bg-sarthi-cream/50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-sarthi-ink">
                      {exam.name}
                    </h3>
                    {exam.application_url ? (
                      <a
                        href={exam.application_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sarthi-violet px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                      >
                        Apply on official site
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                  <dl className="mt-3 grid grid-cols-1 gap-1 text-sm text-sarthi-ink/70 sm:grid-cols-2">
                    {exam.conducting_body ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-sarthi-ink/50">
                          Body
                        </dt>
                        <dd>{exam.conducting_body}</dd>
                      </div>
                    ) : null}
                    {exam.frequency ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-sarthi-ink/50">
                          Frequency
                        </dt>
                        <dd>{exam.frequency}</dd>
                      </div>
                    ) : null}
                    {exam.age_limit ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-sarthi-ink/50">
                          Age limit
                        </dt>
                        <dd>{exam.age_limit}</dd>
                      </div>
                    ) : null}
                    {exam.attempts ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-sarthi-ink/50">
                          Attempts
                        </dt>
                        <dd>{exam.attempts}</dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
              ))
            )}
          </div>
        );
      }

      case "colleges": {
        const entries = getProgramsForCareer(careerSlug);
        if (entries.length === 0) {
          return (
            <p className="text-sarthi-ink/70">
              We&apos;re adding more colleges for this path soon — check back next
              week!
            </p>
          );
        }
        return (
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {entries.map((entry) => (
              <li key={`${entry.college.name}-${entry.program.course_name}`}>
                <CollegeCard
                  program={entry.program}
                  college={entry.college}
                />
              </li>
            ))}
          </ul>
        );
      }

      case "training":
      case "career_outlook": {
        const highlights = asStringArray(metadata.highlights);
        return (
          <div className="space-y-4">
            <p className="whitespace-pre-wrap text-sarthi-ink/80">
              {stage.description}
            </p>
            {highlights.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 text-sarthi-ink/80">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      }

      case "skills": {
        const skills = asStringArray(metadata.skills);
        if (skills.length === 0) {
          return (
            <p className="text-sarthi-ink/70">
              Skill breakdowns will appear here.
            </p>
          );
        }
        return (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-sarthi-cream px-3 py-1 text-sm text-sarthi-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          key={stage.stage_order}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="mt-8 overflow-hidden rounded-3xl border border-sarthi-ink/10 bg-white shadow-md"
        >
          <div
            className={`relative bg-gradient-to-br ${gradientClass} p-6 text-white`}
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-sarthi-ink/25 mix-blend-multiply"
            />
            <div className="flex items-start justify-between gap-4">
              <div className="relative max-w-3xl rounded-2xl bg-black/30 px-4 py-3 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {stage.title}
                </h2>
                <p className="mt-1 text-sm text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  {stage.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close stage details"
                className="rounded-full bg-white/20 p-2 transition hover:bg-white/30"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">{renderBody()}</div>

          <div className="flex justify-end border-t border-sarthi-ink/10 p-4">
            <button
              type="button"
              onClick={handleMarkComplete}
              className="rounded-full bg-sarthi-violet px-4 py-2 text-sm font-semibold text-white transition hover:bg-sarthi-violet/90"
            >
              Mark complete
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}