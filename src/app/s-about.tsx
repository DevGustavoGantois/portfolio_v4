"use client";
import { ThreeDCardDemo } from "@/components/ui/ThreeCardDemo"

const aboutData = [
    {
        title: "Sobre mim",
        description: "Desenvolvedor de software apaixonado por programação, com 21 anos e uma trajetória marcada por diversos projetos freelance e experiências em empresas, mesmo com apenas um ano na área. Especialista em criar soluções escaláveis, eficientes e otimizadas, aprimorando métricas de desempenho para empresas e clientes. Comprometido em deixar minha marca na internet por meio de código de qualidade e inovação.",
        softSkills: "Criatividade | Comunicação | Autodidata | Agilidade | Inteligência Emocional.",
    }
]

export function AboutSection() {
    return (
        <section id="about" className="mt-20 lg:mt-40">
            <div className="max-w-[1440px] mx-auto p-8 lg:p-0">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-6">
                    <div>
                        {aboutData.map((item, index) => {
                            return (
                                <article key={index}>
                                    <h1 className="text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-[#FFFF] to-[#0AE7E7] mb-4">{item.title}</h1>
                                    <p className="text-base text-gray-500 max-w-[437px]">
                                        {item.description}
                                    </p>
                                    <p className="text-base text-gray-500 mt-6">{item.softSkills}</p>
                                </article>
                            )
                        })}
                    </div>
                    <figure>
                        <ThreeDCardDemo />
                    </figure>
                </div>
            </div>
        </section>
    )
}