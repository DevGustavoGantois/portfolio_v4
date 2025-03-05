import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function CertificateDialogComponent() {
  return (
    <Dialog>
      <DialogTrigger className="text-black">Certificações</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">Certificações</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-white/50">
          Certificações que comprovam meu conhecimento e expertise na área de
          desenvolvimento de software/Design UI/UX
        </DialogDescription>
        <span className="mt-8 flex flex-col gap-2">
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            1. International Certificate | Full Stack Programming | Infinity
            School
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            2. Fundamentos do React | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            3. Carta de Recomendação | Infinity School
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            4. Aprofundamento em Hooks | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            5. Fundamentos de Acessibilidade, Guidelines, WCAG, Leitores de tela
            | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            6. Acessibilidade, modal, requisição HTTP, conexão com API,
            gerenciamento de estados via contexto performance. | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            7. Masterizando o TailwindCSS | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            8. NWL Pocket Full Stack (Trilha Intermediária) | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            9. Fundamentos em Next.JS | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            10. Introdução a CiberSegurança | CISCO
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            11. Certificado de Fundamentos a CiberSegurança | CISCO Networking
            Academy
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            12. Certificado do Mundo 1 e 2 de Python | Gustavo Guanabara
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            13. Certificado em Design System | Design | Storybook | Github
            Actions - RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            14. Integrando o Frontend e Backend | RocketSeat{" "}
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            15. Aprofundando em Next.js | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            16. Especialista em React | RocketSeat
          </DialogDescription>
          <DialogDescription className="text-white/50 text-sm lg:text-base">
            16. Fundamentos em Java | RocketSeat
          </DialogDescription>
        </span>
      </DialogContent>
    </Dialog>
  );
}
