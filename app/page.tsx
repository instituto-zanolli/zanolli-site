import { HeroCarousel } from "@/components/CarouselSection";
import { EventsSection } from "@/components/EventsSection";
import { NewsSection } from "@/components/NewsSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <NewsSection />
      <EventsSection />
    </div>
  );
}
