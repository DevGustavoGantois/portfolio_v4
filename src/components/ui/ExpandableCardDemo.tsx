"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#0AE7E7] text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-8xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center transition-all hover:scale-[1.02] duration-700 hover:border-[#0AE7E7]/50 hover:border-1 border-white/10 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#0AE7E7] cursor-pointer text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Rafael Perrone",
    title: "Landing Page | Nutrição",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://website-nutrition-rafael-perrone.vercel.app/",
    content: () => {
      return (
        <p>
          Projeto desenvolvido para o nutricionista Rafael Perrone: uma landing page estratégica para promover seus serviços com excelência e profissionalismo.
          Este projeto foi criado com o objetivo de destacar a expertise do nutricionista Rafael Perrone e apresentar seus serviços de forma clara e atrativa. A landing page foi cuidadosamente planejada para transmitir confiança, profissionalismo e resultados eficazes, oferecendo aos visitantes uma experiência 
          única ao conhecerem os serviços especializados de Rafael.
        </p>
      );
    },
  },
  {
    description: "Novasce",
    title: "Landing Page | Emp. software",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://novasce-website-next-tailwind-css.vercel.app/",
    content: () => {
      return (
        <p>
          Landing page desenvolvida para a Novasce, empresa especializada em terceirização de software.
          A Novasce solicitou o desenvolvimento de uma landing page 
          com o objetivo de destacar sua expertise e profissionalismo 
          no setor de terceirização de software. Este projeto foi 
          cuidadosamente alinhado à identidade visual da empresa, 
          garantindo que o design refletisse 
          sua marca e valores de forma consistente e impactante.
        </p>
      );
    },
  },

  {
    description: "SF Team",
    title: "Landing Page | Bodybuilding",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://lp-sf-team-consultoria.vercel.app/",
    content: () => {
      return (
        <p>
          Este projeto foi criado com o objetivo de destacar a expertise de 
          Samuel Fernandes no universo do bodybuilding, oferecendo uma experiência visual 
          e funcional que transmite sua dedicação, paixão e compromisso com o sucesso de 
          seus alunos. A landing page foi projetada para refletir a garra e a essência que 
          definem a abordagem única de Samuel, com foco em resultados reais e transformadores.
        </p>
      );
    },
  },
  {
    description: "MS Sampaio",
    title: "Landing page | Advocacía",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://msampaio-adv.vercel.app/",
    content: () => {
      return (
        <p>
         Esta landing page foi criada com o objetivo de refletir o 
         compromisso e a dedicação de Maurício Sampaio com cada 
         cliente e caso que ele assume. Através de um design 
         elegante e funcional, a página transmite a seriedade e
          a expertise do advogado, enfatizando sua abordagem 
          personalizada e atenciosa 
         para solucionar as necessidades jurídicas de seus clientes.
        </p>
      );
    },
  },
  {
    description: "Mônica Aran",
    title: "Landing Page | Psicologia",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://www.psimonicaaran.com.br/",
    content: () => {
      return (
        <p>
          Esta landing page foi cuidadosamente elaborada para destacar o trabalho 
          excepcional de Mônica Aran, psicóloga especializada em gestalt-terapia. 
          A página foi projetada para transmitir a empatia, o carinho e a dedicação
           com que Mônica atende cada um de seus pacientes, refletindo 
          seu compromisso em oferecer um acompanhamento terapêutico humanizado e eficaz.
        </p>
      );
    },
  },
  {
    description: "Full Dev Community",
    title: "Saas | MVP de gerenciamento.",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://fulldev-seven.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaZTMuQeNDinOGKcBt59yV2zoTk5G0r3EB5lYZB2tXQvOoB4sH5JM1rn0oo_aem__QaWJekN-srZCm1KDCDSzQ",
    content: () => {
      return (
        <p>
         Este sistema foi criado com foco no gerenciamento de tempo, permitindo 
         aos usuários organizar suas atividades por dias, semanas e meses de 
         forma eficiente. Utilizando uma stack robusta, o projeto foi desenvolvido
          com Next.js, TypeScript, TailwindCSS, Java e banco de dados Prisma. A solução
           oferece uma interface intuitiva e recursos avançados para otimizar a gestão de
            tempo, sendo uma ferramenta valiosa para profissionais e equipes que buscam 
         aumentar sua produtividade e manter o controle de suas tarefas.
        </p>
      );
    },
  },
  {
    description: "Clínica Hayashi",
    title: "Landing Page | Serv. Médicos.",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://clinicahayashi.app.br/",
    content: () => {
      return (
        <p>
        A landing page foi cuidadosamente projetada para refletir a dedicação, experiência 
        e excelência do Dr. Matheus Hayashi nas áreas em que é especializado. O design busca
         transmitir a sua paixão pela medicina, seu compromisso com a saúde dos pacientes e 
         seu estilo de vida profissional. Com um layout moderno e informativo, a página 
         apresenta de forma clara as qualificações do Dr. 
        Matheus, os serviços oferecidos e sua visão inovadora dentro da área médica.
        </p>
      );
    },
  },
  {
    description: "Space Blog",
    title: "Blog | Blog temático.",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://space-blog-mu.vercel.app/",
    content: () => {
      return (
        <p>
        Esta landing page foi projetada para proporcionar uma imersão completa no universo espacial, 
        utilizando elementos visuais e interativos que capturam a essência desse tema. 
        O design da interface (UI) foi cuidadosamente elaborado para oferecer uma experiência única e envolvente,
         transportando o usuário para um ambiente dinâmico e instigante, com foco em usabilidade e estética. Cada 
         detalhe foi pensado para 
        criar uma experiência visual que mantenha o usuário imerso e interessado, promovendo uma navegação fluída e interativa.
        </p>
      );
    },
  },
  {
    description: "Dev Streak",
    title: "Landing Page | Capt. de leads.",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://fulldev-seven.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaZTMuQeNDinOGKcBt59yV2zoTk5G0r3EB5lYZB2tXQvOoB4sH5JM1rn0oo_aem__QaWJekN-srZCm1KDCDSzQ",
    content: () => {
      return (
        <p>
         O aplicativo, conforme descrito pelo seu criador, visa otimizar o gerenciamento de tempo e ajudar o 
         usuário a manter o foco de maneira semelhante ao sistema do Duolingo. A proposta é criar uma experiência
          envolvente e eficaz, que incentive os usuários a atingirem seus objetivos de forma contínua e disciplinada.
           A landing page foi projetada para atrair e converter leads, destacando os principais 
         benefícios do aplicativo e incentivando os visitantes a se cadastrarem para experimentar a ferramenta.
        </p>
      );
    },
  },
];
