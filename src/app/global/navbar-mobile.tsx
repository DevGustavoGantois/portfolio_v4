"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function NavbarMobile() {
  const [openNavbarMobile, setOpenNavbarMobile] = useState(false);

  function toggleNavbarMobile() {
    setOpenNavbarMobile((prevState) => !prevState);
  }

  return (
    <nav className="relative Z-50">
      <div className="fixed top-4 right-4 z-50 backdrop-blur-xl bg-black border-1 border-white/20 rounded-full p-1 shadow-md">
        <Button
          type="button"
          variant="ghost"
          onClick={toggleNavbarMobile}
          className="p-2 text-[#00FFFF]"
        >
          {openNavbarMobile ? <X size={32} /> : <Menu size={32} />}
        </Button>
      </div>

      {/* Menu Mobile - fundo branco sem blur */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b rounded-b-4xl from-black via-[#040404] to-[#0a0a0a] flex flex-col items-center justify-center transition-transform duration-300 z-40 shadow-lg ${
          openNavbarMobile ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-lg">
          {[
            { href: "#hero", label: "Início" },
            { href: "#services", label: "Serviços" },
            { href: "#showCases", label: "Show Cases" },
            { href: "#whoWork", label: "Como trabalho?" },
            { href: "#about", label: "Sobre mim" },
            { href: "#testimonials", label: "Depoimentos" },
            { href: "#contact", label: "Contato" },
          ].map((item, index) => (
            <li key={index} className="transition-all duration-300 hover:text-[#05FFFF] hover:-translate-y-1">
              <Link href={item.href} onClick={toggleNavbarMobile}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
