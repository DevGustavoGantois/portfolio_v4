import Image from "next/image";

const cardsWorkData = [
    {
        icon: "/ContractIcon.svg", // Caminho atualizado para a pasta public
        title: "Contrato",
        description: "Formalizamos o acordo, garantindo segurança para ambas as partes.",
    },
    {
        icon: "/FigmaIconWork.svg",
        title: "Design",
        description: "Criamos um protótipo alinhado às suas expectativas antes da codificação.",
    },
    {
        icon: "/CodeIcon.svg",
        title: "Desenvolvimento",
        description: "Transformamos o design aprovado em um site funcional e responsivo.",
    }
];

export function WorkSection() {
    return (
        <section id="whoWork" className="max-w-[1440px] mx-auto px-8 lg:px-0 mt-20 flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl text-white text-center flex flex-col" data-aos="fade-down">
                Soluções Digitais Sob Medida
                <span className="text-[#0AE7E7]">Do Planejamento à Entrega Perfeita</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24" data-aos="fade-down" data-aos-delay="300">
                {cardsWorkData.map((item, index) => (
                    <article key={index} className="bg-gradient-to-b from-black via-[#0F0F0F] to-[#030303] p-6 rounded-lg border-b-1 border-r-2 border-white/10">
                        <div className="flex flex-col gap-4 items-start relative">
                            <div className="absolute">
                                <div className="h-1 w-20 rounded-full bg-[#0AE7E7]">

                                </div>
                            </div>
                            <Image className="mt-10" src={item.icon} width={100} height={40} alt={item.title} />
                            <h2 className="text-2xl text-white font-semibold">{item.title}</h2>
                            <p className="text-base text-gray-500">{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
            
        </section>
    );
}
