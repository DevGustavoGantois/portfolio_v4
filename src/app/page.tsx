import { AboutSection } from "./s-about";
import { CasesSection } from "./s-cases";
import { CTASection } from "./s-cta";
import { DiferentialWork } from "./s-diferential-work";
import { HeroSection } from "./s-hero";
import { ServiceSection } from "./s-service";
import { WorkSection } from "./whoWork";

export default function Page() {
  return (
    <>
    <HeroSection />
    <ServiceSection />
    <CTASection />
    <CasesSection />
    <WorkSection />
    <DiferentialWork />
    <AboutSection />
    <div className="h-[3000px]"></div>
    </>
  );
}
