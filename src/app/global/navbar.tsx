import { Button } from "@/components/ui/button";
import { NavbarMobile } from "./navbar-mobile";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="mt-5 max-w-[1440px] mx-auto p-8 lg:p-0 z-50">
      <div className="hidden lg:flex items-center justify-center gap-12">
        <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-around gap-8">
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#hero">
                    Início
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#services">
                    Serviços
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#showCases">
                    Show Cases
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#whoWork">
                Como trabalho?
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#about">
                Sobre mim
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#testimonials">
                Depoimentos
                </Link>
                </li>
                <li className="text-white transition-all duration-700 hover:text-[#05FFFF]">
                <Link href="#contact">
                Contato
                </Link>
                </li>
            </ul>
        </nav>
        <div>
                <Button className="p-6" variant="default" asChild>
                    <Link href="" target="_blank">
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
