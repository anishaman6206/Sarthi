"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { CAREERS } from "@/lib/data/careers";
import { useUserStore } from "@/components/store/useUserStore";
import RoadmapView from "@/components/roadmap/RoadmapView";
import PersonalizeButton from "@/components/personalization/PersonalizeButton";
import ScholarshipList from "@/components/scholarships/ScholarshipList";

export default function RoadmapPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const career = slug ? CAREERS.find((c) => c.slug === slug) : undefined;
  const setChosenCareer = useUserStore((state) => state.setChosenCareer);

  useEffect(() => {
    if (slug) {
      setChosenCareer(slug);
    }
  }, [slug, setChosenCareer]);

  if (!career) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-sarthi-cream">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-sarthi-ink">
            Hmm, this path isn&apos;t mapped yet
          </h1>
          <Link
            href="/"
            className="mt-4 inline-block text-sarthi-violet underline-offset-4 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sarthi-cream">
      <div className="sticky top-0 z-30 bg-sarthi-cream/90 backdrop-blur border-b border-sarthi-ink/5">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-end">
          <PersonalizeButton careerSlug={career.slug} />
        </div>
      </div>

      <RoadmapView career={career} />

      <ScholarshipList careerSlug={career.slug} />
    </main>
  );
}