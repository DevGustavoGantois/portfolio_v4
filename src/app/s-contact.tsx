import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="mt-40 lg:mt-60 relative z-50">
            <div className="flex flex-col justify-center items-center gap-4 z-50">
                <h1 className="flex flex-col justify-center text-center items-center text-4xl text-white" data-aos="zoom-in-up">
                    Entre em contato
                    <span className="text-[#00FFFF]">Profissionalismo e Soluções Garantidas!</span>
                </h1>
                <p className="text-gray-500 text-base text-center max-w-[575px] mb-4" data-aos="flip-up">
                Vamos transformar sua ideia em realidade! Entre em contato e conte com um serviço profissional, 
                ágil e 100% focado na melhor solução para você.
                </p>
                <Button className="p-6 z-50" variant="secondary" asChild>
                    <Link href="https://wa.me/5571999588246?text=Ol%C3%A1%20Gustavo!%20Tudo%20bem!?%20Queria%20solicitar%20um%20or%C3%A7amento!" target="_blank">
                        Vamos trabalhar juntos!
                    </Link>
                </Button>
            </div>
            <div className="flex items-center justify-center z-10">
            <div className="absolute -top-20 left-0 right-0">
                <Image className="w-full -z-50" src="/CircleImgContact.svg" width={1400} height={200} alt="" />
            </div>
            </div>
        </section>
    )
}