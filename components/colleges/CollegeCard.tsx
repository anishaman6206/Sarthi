"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import {
  formatDuration,
  formatINR,
  formatINRRange,
} from "@/lib/format";
import type { College, CollegeProgram } from "@/lib/data/colleges";

interface CollegeCardProps {
  program: CollegeProgram;
  college: College;
}

const clampPercent = (value: number): number => {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
};

export default function CollegeCard({ program, college }: CollegeCardProps) {
  const [compared, setCompared] = useState(false);

  const initial = college.name.trim().charAt(0).toUpperCase() || "?";
  const placementValue = clampPercent(program.placement_pct);
  const accreds = program.accreditation
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const targetUrl = program.application_url ?? college.website;

  return (
    <article className="rounded-2xl bg-white border border-sarthi-ink/10 shadow-sm hover:shadow-lg transition-shadow p-5">
      <header className="flex items-start gap-4 mb-4">
        <div
          aria-hidden
          className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-sarthi-violet to-sarthi-peach flex items-center justify-center text-white font-bold text-xl"
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold text-sarthi-ink leading-snug">
            {college.name}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-1">
            <span className="bg-sarthi-cream text-sarthi-ink/70 text-xs px-2 py-0.5 rounded-full inline-block mr-1">
              {college.city}
            </span>
            <span className="bg-sarthi-cream text-sarthi-ink/70 text-xs px-2 py-0.5 rounded-full inline-block">
              {college.state}
            </span>
          </div>
        </div>
      </header>

      <p className="text-base font-semibold text-sarthi-violet mb-3">
        {program.course_name}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-sarthi-ink/50">
            Duration
          </p>
          <p className="mt-0.5 text-sm font-semibold text-sarthi-ink">
            {formatDuration(program.duration_months)}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-sarthi-ink/50">
            Fees
          </p>
          <p className="mt-0.5 text-sm font-semibold text-sarthi-ink">
            {formatINRRange(program.fees_inr_min, program.fees_inr_max)}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-sarthi-ink/50">
            Placement
          </p>
          <p className="mt-0.5 text-sm font-semibold text-sarthi-ink">
            {program.placement_pct}%
          </p>
          <div
            className="mt-1.5 h-1.5 bg-sarthi-cream rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={placementValue}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${program.placement_pct} percent placement`}
          >
            <div
              className="h-full bg-sarthi-mint"
              style={{ width: `${placementValue}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-sarthi-ink/50">
            Avg package
          </p>
          <p className="mt-0.5 text-sm font-semibold text-sarthi-ink">
            {formatINR(program.avg_salary_inr)}
          </p>
        </div>
      </div>

      {accreds.length > 0 ? (
        <div className="flex flex-wrap gap-2 mb-3">
          {accreds.map((tag) => (
            <span
              key={tag}
              className="bg-sarthi-violet/10 text-sarthi-violet text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <p className="text-sm text-sarthi-ink/70 line-clamp-3">
        {program.description}
      </p>

      <footer className="flex items-center justify-between mt-4 pt-4 border-t border-sarthi-ink/10">
        {targetUrl ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sarthi-violet hover:underline text-sm font-semibold"
          >
            Visit website
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={() => setCompared((prev) => !prev)}
          aria-pressed={compared}
          className={
            compared
              ? "inline-flex items-center gap-1 text-xs font-semibold text-sarthi-violet"
              : "text-xs font-semibold text-sarthi-ink/60 hover:text-sarthi-violet"
          }
        >
          {compared ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden />
              Added to compare
            </>
          ) : (
            "Compare"
          )}
        </button>
      </footer>
    </article>
  );
}