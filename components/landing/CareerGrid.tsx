"use client";

import { useRouter } from "next/navigation";
import { ArrowUp } from "lucide-react";
import CareerCard from "@/components/landing/CareerCard";
import { CAREERS } from "@/lib/data/careers";
import { useUserStore } from "@/components/store/useUserStore";
import type { Career } from "@/lib/data/careers";

export default function CareerGrid() {
  const router = useRouter();
  const setChosenCareer = useUserStore((state) => state.setChosenCareer);

  const handleSelect = (slug: Career["slug"]): void => {
    setChosenCareer(slug);
    router.push(`/roadmap/${slug}`);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <header className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-sarthi-ink md:text-3xl">
          Pick a path to explore
        </h2>
        <p className="text-sarthi-ink/60 inline-flex items-center gap-1 text-sm">
          <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          {CAREERS.length} careers and counting
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CAREERS.map((career, i) => (
          <CareerCard
            key={career.slug}
            career={career}
            onSelect={handleSelect}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}