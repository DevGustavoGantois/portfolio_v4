"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { AboutSection } from "./s-about";
import { CasesSection } from "./s-cases";
import { ContactSection } from "./s-contact";
import { CTASection } from "./s-cta";
import { DiferentialWork } from "./s-diferential-work";
import { HeroSection } from "./s-hero";
import { ServiceSection } from "./s-service";
import { TestimonialsSection } from "./s-testimonials";
import { WorkSection } from "./whoWork";
import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    })
  }, [])

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
