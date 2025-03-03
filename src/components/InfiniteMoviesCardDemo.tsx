"use client";

import { InfiniteMovingCards } from "./ui/infinite-movig-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Ótimo trabalho! O site está responsivo e com uma ótima experiência de usuário, design excepcional com animações bem leves e reativas como eu esperava. Meus parabéns!",
    name: "Eduardo Sávio",
  },
  {
    quote:
      "Irmão está muito bom o site, ficou perfeito!",
    name: "Matheus Hayashi",
  },
  {
    quote: "O site ficou muito bom irmão! Está muito lindo de verdade, muito obrigado!",
    name: "Matheus Caria",
  },
  {
    quote:
      "Site ficou muito bom, convence muito bem o cliente de fechar a compra, me poupa muito o trabalho de vender no boca a boca, entregou dentro do prazo e supriu todas as minhas expectativas",
    name: "Samuel Fernandes",
  },
  {
    quote:
      "Guga, você é o cara, o site ficou muito bom, você conseguiu transmitir dentro do site exatamente o que eu te pedi.",
    name: "Maurício Sampaio",
  },
  {
    quote:
      "Fera demais! Parabéns mesmo, o projeto ficou muito bom!",
    name: "Thomaz",
  },
  {
    quote: "Ficou show Gustavo! O site ficou perfeito e transmitiu o que eu quero passar para os meus clientes!",
    name: "Mônica Aran",
  },
  {
    quote: "Trabalhar com Gustavo no Hackathon da FullDev foi essencial para o sucesso do projeto. Como designer UI/UX e desenvolvedor front-end, ele criou uma identidade visual original e de alta qualidade usando React e Next.js. Proativo, comunicativo e dedicado, sua contribuição foi fundamental para conquistarmos o primeiro lugar. Recomendo Gustavo sem dúvida para qualquer desafio!",
    name: "Eric Souza dos Santos",
  },
  {
    quote: "Colaborar com Gustavo no Hackathon Ato 5 da Fulldev foi incrível! Sua visão criativa e habilidade em transformar ideias em interfaces intuitivas elevaram o projeto. Tenho certeza de que ele fará a diferença em qualquer equipe!",
    name: "Carlos Augusto",
  },
  {
    quote: "Minha sincera gratidão ao Gustavo pelo excelente trabalho como designer e desenvolvedor front-end. Sua criatividade e técnica foram impecáveis. Foi um prazer trabalhar com você e espero colaborarmos novamente no futuro!",
    name: "Gabriel Dias Santiago",
  }
];
