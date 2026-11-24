"use client"
import { getImage } from "@/lib/utils"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"

type ImageProp = {
  name: string
  alternativeText: string | null
  url: string
}

/** Embla needs enough slides to loop smoothly – repeat the set if needed. */
const MIN_SLIDES = 10

export function HeroImages({ images }: { images: ImageProp[] }) {
  const slides = useMemo(() => {
    if (!images.length) return []
    const repeat = Math.max(1, Math.ceil(MIN_SLIDES / images.length))
    return Array.from({ length: repeat }).flatMap(() => images)
  }, [images])

  const [reduceMotion, setReduceMotion] = useState(false)
  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
  }, [])

  const plugins = useMemo(
    () =>
      reduceMotion
        ? []
        : [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })],
    [reduceMotion]
  )

  const [emblaRef, api] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: true },
    plugins
  )

  const [selected, setSelected] = useState(0)
  const onSelect = useCallback(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap() % images.length)
  }, [api, images.length])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  const goTo = (index: number) => {
    if (!api) return
    // jump to the nearest copy of the chosen image
    const current = api.selectedScrollSnap()
    const base = current - (current % images.length)
    api.scrollTo(base + index)
  }

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="karuzela"
      aria-label="Zdjęcia szkoły"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y py-2 sm:-ml-6">
          {slides.map((image, index) => (
            <div
              key={`hero-image-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-[72%] pl-4 xs:basis-[60%] sm:basis-[40%] sm:pl-6 md:basis-[31%] lg:basis-[23%] xl:basis-[19.5%]"
              aria-hidden={index >= images.length ? true : undefined}
            >
              <div className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-2.5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] hc:border-none hc:bg-background-muted hc:shadow-none sm:p-3">
                <div className="relative aspect-[1/1.05] overflow-hidden rounded-[1.25rem] bg-slate-200">
                  <Image
                    src={getImage(image.url)}
                    alt={image.alternativeText ?? "Zdjęcie szkoły"}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 24vw, (min-width: 640px) 40vw, 72vw"
                    className="select-none object-cover transition-transform duration-700 hover:scale-105"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="mt-6 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Pokaż zdjęcie ${index + 1}`}
              aria-current={index === selected}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === selected
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400 hc:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
