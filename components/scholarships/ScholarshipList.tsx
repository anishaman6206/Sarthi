'use client';

import { useCallback, useMemo } from 'react';
import { useUserStore } from '@/components/store/useUserStore';
import {
  getScholarshipsForCareer,
  getScholarshipsForProfile,
  type Scholarship,
} from '@/lib/data/scholarships';
import ScholarshipCard from '@/components/scholarships/ScholarshipCard';
import PersonalizeButton from '@/components/personalization/PersonalizeButton';

interface ScholarshipListProps {
  careerSlug: string;
}

type Profile = ReturnType<typeof useUserStore.getState>['profile'];

export default function ScholarshipList({ careerSlug }: ScholarshipListProps) {
  const profile = useUserStore((state) => state.profile);

  const hasProfile = Boolean(profile.grade && profile.category);

  const qualifiesFor = useCallback(
    (s: Scholarship, p: Profile): boolean => {
      if (!p.grade && !p.category) return false;

      const gradeOk = p.grade
        ? s.applicable_grades.includes(p.grade)
        : true;
      const categoryOk = p.category
        ? s.applicable_categories.includes(p.category)
        : true;
      const incomeOk =
        p.familyIncome === undefined
          ? true
          : p.familyIncome <= s.income_max;
      const stateOk = !s.state || !p.homeState || s.state === p.homeState;

      return gradeOk && categoryOk && incomeOk && stateOk;
    },
    [],
  );

  // Intersect the profile-driven list with the career-driven list so only
  // scholarships that are (a) relevant to the chosen career path AND
  // (b) profile-eligible are shown. We start from the profile list because
  // it's already relevance-ranked, and filter to only those that the
  // career helper returns as well.
  const matched = useMemo(() => {
    if (!hasProfile) return [] as Scholarship[];
    const careerList = getScholarshipsForCareer(careerSlug);
    const profileList = getScholarshipsForProfile({
      grade: profile.grade,
      familyIncome: profile.familyIncome,
      category: profile.category,
      homeState: profile.homeState,
    });
    const careerSlugSet = new Set(careerList.map((s) => s.slug));
    return profileList.filter((s) => careerSlugSet.has(s.slug));
  }, [
    hasProfile,
    careerSlug,
    profile.grade,
    profile.familyIncome,
    profile.category,
    profile.homeState,
  ]);

  // Sort: scholarships the student fully qualifies for come first, then
  // by amount descending within each tier.
  const sorted = useMemo(() => {
    return [...matched].sort((a, b) => {
      const aq = qualifiesFor(a, profile);
      const bq = qualifiesFor(b, profile);
      if (aq !== bq) return aq ? -1 : 1;
      return b.amount_inr - a.amount_inr;
    });
  }, [matched, profile, qualifiesFor]);

  if (!hasProfile) {
    return (
      <section
        id="scholarships"
        className="mx-auto max-w-7xl px-6 py-10"
        aria-label="Scholarships"
      >
        <div className="rounded-3xl border border-sarthi-ink/10 bg-white p-8 text-center shadow-sm">
          <span aria-hidden className="text-3xl">🎯</span>
          <h3 className="mt-2 font-display text-xl font-bold text-sarthi-ink">
            Personalize to see tailored scholarships
          </h3>
          <p className="mt-1 text-sm text-sarthi-ink/70">
            Tell us a little about you and we&apos;ll match the schemes that fit your
            grade, income, and category.
          </p>
          <div className="mt-4 flex justify-center">
            <PersonalizeButton careerSlug={careerSlug} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="scholarships"
      className="mx-auto max-w-7xl px-6 py-10"
      aria-label={`Scholarships for ${careerSlug}`}
    >
      <h3 className="font-display text-2xl font-bold text-sarthi-ink">
        {sorted.length} scheme{sorted.length === 1 ? '' : 's'} matched for you
      </h3>
      <p className="mt-1 text-sm text-sarthi-ink/70">
        Sorted by how well you qualify, then by amount.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {sorted.map((s) => (
          <ScholarshipCard
            key={s.slug}
            scholarship={s}
            qualifies={qualifiesFor(s, profile)}
          />
        ))}
      </div>
    </section>
  );
}