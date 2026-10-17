import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { TransformationBanner } from "@/components/home/TransformationBanner";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { PodcastsSection } from "@/components/home/PodcastsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSlider />
      <TrustStrip />
      <AboutSection />
      <ServicesGrid />
      <ExperienceSection />
      <ValuesSection />
      <TransformationBanner />
      <HowItWorks />
      <Testimonials />
      <PodcastsSection />
      <BlogSection />
      <IndustriesSection />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
