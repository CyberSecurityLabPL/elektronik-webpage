"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
} from "@/components/motion/Carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
const images = [
  "/assets/landing-page/1.jpg",
  "/assets/landing-page/2.jpg",
  "/assets/landing-page/3.jpg",
  "/assets/landing-page/4.jpg",
  "/assets/landing-page/5.jpg",
  "/assets/landing-page/6.jpg",
  "/assets/landing-page/7.jpg",
]

export function HeroImages() {
  const plugin = useRef(Autoplay({ delay: 2500 }))

  return (
    <div className="relative z-50  h-96 w-full">
      <Carousel
        opts={{
          loop: true,
          align: "center",
          dragFree: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-4 ">
          {images.map((image, index) => (
            <CarouselItem
              className="basis-full  pb-4  pl-4 sm:basis-2/3 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              key={"landing-page-image-" + index}
            >
              <div className="flex aspect-square items-center justify-center  rounded-3xl border border-zinc-200 bg-slate-300  p-4 shadow-lg shadow-slate-200">
                <Image
                  src={image}
                  alt="Zdjęcie szkoły"
                  width={500}
                  height={500}
                  className="aspect-square select-none rounded-2xl object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselIndicators />
      </Carousel>
    </div>
  )
}
