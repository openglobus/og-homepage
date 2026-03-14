import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { IndustrySection } from "../components/IndustrySection";
import { ImpactSection } from "../components/ImpactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <IndustrySection />
      <ImpactSection />
    </>
  );
}
