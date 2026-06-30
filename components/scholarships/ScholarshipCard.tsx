'use client';

import { formatINR } from '@/lib/format';
import { getStateName } from '@/lib/data/states';
import type { Scholarship } from '@/lib/data/scholarships';

interface ScholarshipCardProps {
  scholarship: Scholarship;
  matchReason?: string;
  qualifies?: boolean;
}

const GRADE_DISPLAY: Record<string, string> = {
  'class-9': 'Class 9',
  'class-10': 'Class 10',
  'class-11': 'Class 11',
  'class-12': 'Class 12',
  graduate: 'Graduate',
  postgraduate: 'Postgraduate',
};

const formatGrades = (grades: Scholarship['applicable_grades']): string => {
  if (grades.length === 0) return '';
  return grades.map((g) => GRADE_DISPLAY[g] ?? g).join(', ');
};

const DEADLINE_WINDOW_MS = 90 * 24 * 60 * 60 * 1000;

const isUpcomingWithin = (deadlineHint: string): boolean => {
  // Heuristic: try to parse a month-window like "October–December" and check
  // if the END of that window is within 90 days from now. If we can't parse,
  // assume it may be upcoming so we err on showing it.
  const now = new Date();
  const months: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };
  const match = deadlineHint.toLowerCase().match(/(january|february|march|april|may|june|july|august|september|october|november|december)/g);
  if (!match || match.length === 0) return false;

  const endMonth = months[match[match.length - 1] ?? ''];
  if (endMonth === undefined) return false;

  const endYear = endMonth < now.getMonth() ? now.getFullYear() + 1 : now.getFullYear();
  const endDate = new Date(endYear, endMonth + 1, 0); // last day of end month
  const diff = endDate.getTime() - now.getTime();
  return diff >= 0 && diff <= DEADLINE_WINDOW_MS;
};

export default function ScholarshipCard({
  scholarship,
  qualifies,
}: ScholarshipCardProps) {
  const gradesText = formatGrades(scholarship.applicable_grades);
  const categoriesText = scholarship.applicable_categories.join(', ');
  const stateText = scholarship.state ? (getStateName(scholarship.state) ?? scholarship.state) : 'All India';

  const eligibilityLine = `${gradesText} · ${categoriesText} · ${stateText}`;

  const showDeadline = isUpcomingWithin(scholarship.deadline_hint);

  return (
    <article className="rounded-2xl bg-white border border-sarthi-ink/10 shadow-sm hover:shadow-md transition-shadow p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-sarthi-ink">{scholarship.name}</h3>
        {qualifies ? (
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-sarthi-mint px-2.5 py-1 text-xs font-semibold text-sarthi-ink">
            <span aria-hidden>✅</span> You qualify
          </span>
        ) : null}
      </div>

      <p className="mt-1 text-sm text-sarthi-ink/60">
        {scholarship.provider}
        {scholarship.state ? ` · ${stateText}` : ''}
      </p>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl font-display font-bold text-sarthi-violet">
          {formatINR(scholarship.amount_inr)}
        </span>
        <span className="text-sm text-sarthi-ink/60">/year</span>
      </div>

      {showDeadline ? (
        <p className="mt-2 text-xs text-sarthi-ink/60">
          Deadline: {scholarship.deadline_hint}
        </p>
      ) : null}

      <p className="mt-3 text-sm text-sarthi-ink/70 italic">{eligibilityLine}</p>

      <div className="mt-4">
        <a
          href={scholarship.application_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-sarthi-ink text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sarthi-violet transition-colors"
        >
          Apply <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  );
}