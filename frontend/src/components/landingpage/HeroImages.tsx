"use client"
import {
  Carousel,
  CarouselContent,
  // CarouselNavigation,
  CarouselItem,
  CarouselIndicators,
} from "@/components/motion/Carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { buttonVariants } from "../ui/button"
import useEmblaCarousel from 'embla-carousel-react'
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
  const plugin = useRef(
    Autoplay({ delay: 2500 })
  )
  
  return (
    <div className="relative mx-auto w-full max-w-screen-3xl px-4 z-50">
      <Carousel 
        opts={{
          loop:true,
          align: "center",
          dragFree: true
        }}
        plugins={[plugin.current]}
       >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              className="basis-full pl-4 sm:basis-2/3 md:basis-1/3 xl:basis-1/4"
              key={"landing-page-image-" + index}
            >
              <div className="pointer-events-none flex aspect-square items-center justify-center  rounded-3xl border border-zinc-200 bg-slate-300 object-cover p-4 shadow-lg shadow-slate-200">
                <Image
                  src={image}
                  alt="Zdjęcie szkoły"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="aspect-square rounded-2xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselIndicators  /> 

      </Carousel>
    </div>
  )
}
