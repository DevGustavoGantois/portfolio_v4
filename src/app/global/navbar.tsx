import { Button } from "@/components/ui/button";
import { NavbarMobile } from "./navbar-mobile";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="mt-5 max-w-[1440px] mx-auto p-8 lg:p-0 z-50">
      <div className="hidden lg:flex items-center justify-center gap-12">
        <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-around gap-8">
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#hero">
                    Início
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#services">
                    Serviços
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#showCases">
                    Show Cases
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#whoWork">
                Como trabalho?
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#about">
                Sobre mim
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#testimonials">
                Depoimentos
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF] hover:-translate-y-2">
                <Link href="#contact">
                Contato
                </Link>
                </li>
            </ul>
        </nav>
        <div>
                <Button className="p-6" variant="default" asChild>
                    <Link href="https://wa.me/5571999588246?text=Ol%C3%A1%20Gustavo!%20Tudo%20bem!?%20Queria%20solicitar%20um%20or%C3%A7amento!" target="_blank">
                    Encontre uma solução para você
                    </Link>
                </Button>
            </div>
      </div>
      <div className="flex lg:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
}
