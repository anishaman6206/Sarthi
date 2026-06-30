import {
  BookOpen,
  Dumbbell,
  Landmark,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import type { StageType } from "@/lib/data/stages";

/**
 * Mapping of stage types to a single representative icon.
 * Used by the stepper nodes and other compact UI surfaces.
 */
export const STAGE_TYPE_ICON = {
  subjects: BookOpen,
  exams: Target,
  colleges: Landmark,
  training: Dumbbell,
  career_outlook: Rocket,
  skills: Sparkles,
} satisfies Record<StageType, typeof BookOpen>;

export const STAGE_TYPE_BADGE_CLASS: Record<StageType, string> = {
  subjects: "bg-sky-400/20 text-sky-100 border-sky-300/30",
  exams: "bg-amber-400/20 text-amber-100 border-amber-300/30",
  colleges: "bg-emerald-400/20 text-emerald-100 border-emerald-300/30",
  training: "bg-rose-400/20 text-rose-100 border-rose-300/30",
  career_outlook: "bg-indigo-400/20 text-indigo-100 border-indigo-300/30",
  skills: "bg-fuchsia-400/20 text-fuchsia-100 border-fuchsia-300/30",
};