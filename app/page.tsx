import HeroGreeting from "@/components/landing/HeroGreeting";
import CareerGrid from "@/components/landing/CareerGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-sarthi-cream">
      <HeroGreeting />
      <CareerGrid />
    </main>
  );
}