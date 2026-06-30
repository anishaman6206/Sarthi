'use client';

import { useState } from 'react';
import { PencilLine, Sparkles } from 'lucide-react';
import { useUserStore } from '@/components/store/useUserStore';
import PersonalizeModal from '@/components/personalization/PersonalizeModal';

interface PersonalizeButtonProps {
  careerSlug?: string;
}

export default function PersonalizeButton({ careerSlug }: PersonalizeButtonProps) {
  const [open, setOpen] = useState<boolean>(false);
  const profile = useUserStore((state) => state.profile);

  const isForThisCareer =
    careerSlug === undefined || profile.chosenCareerSlug === careerSlug;
  const hasProfile =
    Boolean(profile.grade) && Boolean(profile.category) && isForThisCareer;

  const label = hasProfile
    ? 'Edit profile'
    : 'Personalize for me';
  const LabelIcon = hasProfile ? PencilLine : Sparkles;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-white text-sarthi-violet border border-sarthi-violet/40 px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-shadow"
        aria-label={hasProfile ? 'Edit your profile' : 'Personalize scholarships for me'}
      >
        <LabelIcon className="h-4 w-4" aria-hidden />
        {label}
      </button>

      <PersonalizeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}