import Image from "next/image";


const serviceSmallerCard = [
    {
        title: "Design UI/UX"
    },
    {
        title: "Saas"
    },
    {
        title: "MVP"
    },
    {
        title: "SEO",
    },
    {
        title: "Automação"
    },
]

export function ServiceSection() {
    return (
        <section id="services" className="mt-40 max-w-[1440px] mx-auto p-8 lg:p-0">
           <main className="flex items-center flex-col justify-center">
           <div className="rounded-t-md lg:rounded-t-[80px] p-6 border-t-2 w-full border-t-[#F9FFFF]/50 z-50">
                <h1 className="bg-clip-text mt-10 text-center text-transparent bg-gradient-to-r from-[#FFFF] to-[#D8D8D8]/30 font-semibold text-4xl mb-3" data-aos="flip-up">Nossas soluções</h1>
                <div className="flex items-center justify-center">
                <p className="text-center flex text-gray-500 max-w-[586px]" data-aos="fade-up">Criamos soluções personalizadas para transformar sua ideia em um produto digital moderno e eficiente.</p>
                </div>
            </div>
            <div className="p-0 lg:p-8 bg-gradient-to-b from-[#101010] to-black w-full h-full mt-20 max-w-[1400px] mx-auto shadow-2xl">
                <figure className="mt-8 p-8">
                    <Image src="/CodeService.svg" className="w-full h-full" width={800} height={400} alt="" />
                </figure>
                <div className="flex flex-col items-center lg:items-start gap-4 mt-20">
                    <h1 className="text-white font-medium text-2xl" data-aos="fade-right">Desenvolvimento de software</h1>
                    <p className="text-base text-gray-500 max-w-[400px]" data-aos="fade-right" data-aos-delay="200">Desenvolvemos diversos tipos de software de acordo com a necessidade do cliente.</p>
                    <div className="flex flex-wrap gap-2">
                        {serviceSmallerCard.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="rounded-sm bg-[#272626] border-white/20 border-1 shadow-2xl p-2" data-aos="flip-down">
                                        <p className="text-white/70">{item.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
           </main>
        </section>
    )
}