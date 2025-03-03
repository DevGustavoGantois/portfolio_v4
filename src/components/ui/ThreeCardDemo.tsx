"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-b from-black via-[#040404] to-[#101010] relative group/card border-l-1 border-[#05FFFF]  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-8">
        <CardItem
          translateZ="50"
          className="text-2xl font-semibold text-white"
        >
          Gustavo Gantois
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Desenvolvedor Fullstack & UI/UX Designer
        </CardItem>
        <div className="flex items-center gap-4 bg-gray-500 mt-2 mb-2">

        </div>
        <CardItem
          translateZ="20"
          rotateX={10}
          rotateZ={0.5}
          className="w-full mt-4"
        >
          <Image
            src="/DevGustavo.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-2xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            <Link href="" target="_blank">
            Vamos conversar →
            </Link>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-full bg-white dark:text-black text-black text-xs font-semibold"
          >
            Certificações
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
