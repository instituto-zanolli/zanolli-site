"use client";

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "./ui/button";

const slides = [
  {
    image: "/pessoas-lutando.png",
    title: "Kung Fu na Escola",
    description: "Conheça o projeto que leva a arte marcial para as escolas.",
    link: "/noticias/kung-fu-na-escola",
  },
  {
    image: "/pessoas-lutando.png",
    title: "Campeonato Brasileiro 2024",
    description: "Veja os resultados e fotos do maior evento do ano.",
    link: "/eventos/campeonato-brasileiro-2024",
  },
];

export function HeroCarousel() {
  // Configuração do plugin Autoplay
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[30rem] md:h-[40rem]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-white shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 shadow-md mt-2 max-w-2xl">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button size="lg" className="mt-4">
                      Saiba Mais
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </Carousel>
    </section>
  );
}
