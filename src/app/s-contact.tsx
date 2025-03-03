import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
    return (
        <section className="mt-20 lg:mt-40">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="flex flex-col justify-center items-center text-4xl text-white">
                    Entre em contato
                    <span className="text-[#00FFFF]">Profissionalismo e Soluções Garantidas!</span>
                </h1>
                <p className="text-gray-500 text-base text-center max-w-[575px] mb-4">
                Vamos transformar sua ideia em realidade! Entre em contato e conte com um serviço profissional, 
                ágil e 100% focado na melhor solução para você.
                </p>
                <Button className="p-6" variant="secondary" asChild>
                    <Link href="" target="_blank">
                        Vamos trabalhar juntos!
                    </Link>
                </Button>
            </div>
        </section>
    )
}