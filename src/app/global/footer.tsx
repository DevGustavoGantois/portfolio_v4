import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-60 mb-4 border-t border-white/50">
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between mt-4">
                <div className="flex items-center gap-4">
                  <Link href="https://www.instagram.com/devgustavogantois_/" target="_blank" className="text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF]">
                  <Instagram />
                  </Link>
                  <Link href="https://wa.me/5571999588246?text=Ol%C3%A1%20Gustavo!%20Tudo%20bem!?%20Queria%20solicitar%20um%20or%C3%A7amento!" target="_blank" className="text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF]">
                  <MessageCircle />
                  </Link>
                  <a href="mailto:gugagantois@gmail.com" className="text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF]">
                  <Mail />
                  </a>
                </div>
                <Link href="" target="_blank" className="text-base text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF] font-light">
                Desenvolvido por @devgustavogantois_
                </Link>
            </div>
        </footer>
    )
}