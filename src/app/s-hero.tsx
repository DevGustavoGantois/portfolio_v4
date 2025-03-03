import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="-z-10 -mt-20 h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-80 w-[150%] h-[150%] left-1/2 -translate-x-1/2 opacity-40"
        fill="#14A3A3"
      />
      <Spotlight
        className="top-10 w-[120%] h-[120%] left-1/2 -translate-x-1/2 opacity-30"
        fill="#14A3A3"
      />
      <div className="flex flex-col mt-0 lg:mt-64">
      <main className="mt-40 lg:mt-0">
      <div className="flex justify-center items-center">
        <Image src="/roleImg.svg" width={260} height={260} alt="" />
      </div>
      <div className="p-4 max-w-6xl mx-auto relative z-10 w-full pt-20 md:pt-0 -mt-20 md:mt-0 lg:mt-0">
        <h1 className="text-4xl md:text-6xl font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-[#FFFF] to-[#D8D8D8] bg-opacity-50">
          Eleve seu negócio com design e código de alto nível
        </h1>
        <p className="mt-4 font-normal text-base text-gray-500 max-w-lg text-center mx-auto">
          Transformo ideias em experiências digitais incríveis. Destaque-se da concorrência com sites e sistemas que inspiram e impactam!
        </p>
      </div>
      </main>
      <div className="flex items-center justify-center w-screen">
      <Image src="/HeroBlockImg.svg" className="w-full h-full" width={860} height={260} alt="" />
      </div>
      </div>
    </section>
  );
}
