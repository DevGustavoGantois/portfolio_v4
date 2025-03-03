import { AboutSection } from "./s-about";
import { CasesSection } from "./s-cases";
import { ContactSection } from "./s-contact";
import { CTASection } from "./s-cta";
import { DiferentialWork } from "./s-diferential-work";
import { HeroSection } from "./s-hero";
import { ServiceSection } from "./s-service";
import { TestimonialsSection } from "./s-testimonials";
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
    <TestimonialsSection />
    <ContactSection />
    
    </>
  );
}
