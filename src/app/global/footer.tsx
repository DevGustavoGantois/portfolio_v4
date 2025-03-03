import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-60 mb-4 border-t border-white/50">
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between mt-4">
                <div className="flex items-center gap-4">
                  <Link href="" target="_blank" className="text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF]">
                  <Instagram />
                  </Link>
                  <Link href="" target="_blank" className="text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF]">
                  <MessageCircle />
                  </Link>
                  <Link href="" target="_blank" className="text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF]">
                  <Mail />
                  </Link>
                </div>
                <Link href="" target="_blank" className="text-base text-white transition-all duration-700 hover:-translate-y-2 hover:text-[#00FFFF] font-light">
                Desenvolvido por @devgustavogantois_
                </Link>
            </div>
        </footer>
    )
}