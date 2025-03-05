"use client"
import { ExpandableCardDemo } from "@/components/ui/ExpandableCardDemo";

export function CasesSection() {
    return (
        <section id="showCases" className="mt-20 lg:mt-60 max-w-[1440px] mx-auto p-8 lg:p-0">
            <div className="flex flex-col items-center lg:flex-row justify-between">
            <div className="flex justify-center items-center lg:items-start flex-col gap-2">
            <div className="border-white/50 border-1 w-1/4 rounded-3xl lg:rounded-4xl p-1.5">
                <p className="text-white text-center pl-0 lg:pl-4" data-aos="fade-up">Show Cases</p>
            </div>
            <h1 className="text-white text-center lg:text-start text-4xl max-w-[624px]" data-aos="fade-down">
                Transformamos os desafios dos nossos clientes em soluções digitais eficientes.
            </h1>
            </div>
            <p className="text-base text-center lg:text-start mt-6 lg:mt-0 text-gray-500 max-w-[300px]" data-aos="fade-up">
                Alguns dos trabalhos feitos com perfeição para os nossos clientes.
            </p>
            </div>
            <main className="mt-10">
                <ExpandableCardDemo />
            </main>
        </section>
    )
}