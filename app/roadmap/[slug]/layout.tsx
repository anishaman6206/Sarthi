import type { Metadata } from "next";
import { CAREERS } from "@/lib/data/careers";

interface RoadmapSlugLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const career = CAREERS.find((c) => c.slug === params.slug);
  if (!career) {
    return {
      title: "Career roadmap | Sarthi",
      description:
        "Explore a step-by-step roadmap to plan your career with Sarthi.",
    };
  }
  return {
    title: `${career.title} roadmap | Sarthi`,
    description: career.description,
  };
}

export default function RoadmapSlugLayout({
  children,
}: RoadmapSlugLayoutProps) {
  return <>{children}</>;
}