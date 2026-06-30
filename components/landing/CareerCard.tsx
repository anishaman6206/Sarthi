"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calculator,
  Flame,
  Landmark,
  Plane,
  Rocket,
  Scissors,
  Shield,
  Stethoscope,
} from "lucide-react";
import type { Career } from "@/lib/data/careers";

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

interface CareerCardProps {
  career: Career;
  onSelect: (slug: Career["slug"]) => void;
  index: number;
}

export default function CareerCard({ career, onSelect, index }: CareerCardProps) {
  const CareerIcon = careerIconMap[career.slug as keyof typeof careerIconMap];
  const badgeClasses = careerBadgeMap[career.slug as keyof typeof careerBadgeMap];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(career.slug)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.06,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative h-72 w-full overflow-hidden rounded-3xl shadow-lg transition-shadow hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-sarthi-violet/60"
      aria-label={`Explore ${career.title}`}
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${career.image}')` }}
      />

      {/* Gradient overlay blending with career colors */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br ${career.gradient} mix-blend-multiply opacity-80`}
      />

      {/* Bottom darkness for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      />

      {/* Trending badge */}
      {career.hot ? (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-sarthi-peach px-3 py-1 text-xs font-semibold text-sarthi-ink">
          <Flame className="h-3.5 w-3.5" aria-hidden />
          Trending
        </span>
      ) : null}

      {/* Bottom content */}
      <div className="relative flex h-full flex-col justify-end p-5 text-white">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/55 to-transparent"
        />
        <span
          aria-hidden
          className={`absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${badgeClasses}`}
        >
          <CareerIcon className="h-7 w-7" />
        </span>
        <h3 className="font-display relative mt-2 text-2xl font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
          {career.title}
        </h3>
        <p className="relative mt-1 text-sm text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          {career.tagline}
        </p>

        <span className="relative mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
          View roadmap
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </motion.button>
  );
}