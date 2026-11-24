"use client"
import { whyUs, type WhyUsTab } from "@/content/landing"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useId, useRef, useState } from "react"
import { buttonVariants } from "../ui/button"
import {
  BrushUnderline,
  CurvedArrow,
  DashedCurve,
  ScribbleM,
} from "./shared/Decorations"
import LandingImage from "./shared/LandingImage"

const SWIPE_THRESHOLD = 60

export default function WhyUs() {
  const { tabs, title, highlight, sectionId } = whyUs
  const baseId = useId()
  const reduce = useReducedMotion()
  // [index, direction]: direction tells the panels which way to slide
  const [[active, direction], setState] = useState<[number, number]>([0, 0])
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // keep the active tab visible in the (horizontally scrollable on mobile)
  // tab list – scroll only the list itself, never the page
  const tabListRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const list = tabListRef.current
    const tab = tabRefs.current[active]
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({
      left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2,
      behavior: "smooth",
    })
  }, [active])

  const select = (index: number) => {
    if (index === active) return
    setState([index, index > active ? 1 : -1])
  }

  const step = (delta: number) => {
    const next = (active + delta + tabs.length) % tabs.length
    setState([next, delta])
    return next
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return
    e.preventDefault()
    const next = step(e.key === "ArrowRight" ? 1 : -1)
    tabRefs.current[next]?.focus()
  }

  const [before, after] = title.split(highlight)

  return (
    <section
      id={sectionId}
      className="relative w-full scroll-mt-24 overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      <DashedCurve className="absolute inset-x-0 top-[40%] -z-10 hidden h-64 w-full text-slate-200 hc:hidden md:block" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-balance text-center text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {before}
          <span className="relative inline-block">
            {highlight}
            <BrushUnderline className="absolute -bottom-3 left-0 h-3 w-full text-cyan-400 hc:text-primary sm:h-4" />
          </span>
          {after}
        </motion.h2>

        {/* Tabs */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Dlaczego warto wybrać Elektrona"
          onKeyDown={onKeyDown}
          className="no-scrollbar relative -mx-5 mt-10 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:justify-center sm:gap-6 sm:px-0 lg:mt-14 lg:gap-14"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`${baseId}-panel`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => select(i)}
              className={cn(
                "relative shrink-0 snap-center whitespace-nowrap rounded-lg px-3 pb-4 pt-2 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary sm:text-lg lg:text-xl",
                active === i
                  ? "text-primary"
                  : "text-foreground/75 hover:text-foreground"
              )}
            >
              {tab.label}
              {active === i && (
                <motion.span
                  layoutId={`${baseId}-underline`}
                  className="absolute inset-x-1 bottom-0.5 h-3 text-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                >
                  <BrushUnderline className="h-full w-full" />
                </motion.span>
              )}
            </button>
          ))}
        </div>

        {/* Panels – stacked in one grid cell so the outgoing and incoming
            panel can animate at the same time without clipping anything */}
        <motion.div
          drag={reduce ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          dragSnapToOrigin
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_THRESHOLD) step(1)
            else if (info.offset.x > SWIPE_THRESHOLD) step(-1)
          }}
          style={{ touchAction: "pan-y" }}
          className="mt-10 grid lg:mt-16"
        >
          <AnimatePresence initial={false} custom={direction}>
            <Panel
              key={active}
              tab={tabs[active]}
              direction={direction}
              reduce={!!reduce}
              id={`${baseId}-panel`}
              labelledBy={`${baseId}-tab-${active}`}
            />
          </AnimatePresence>
        </motion.div>

        {/* Progress dots (mobile helper) */}
        <div className="mt-8 flex justify-center gap-1.5 lg:hidden">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={() => select(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === i ? "w-6 bg-primary" : "w-1.5 bg-slate-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const EASE = [0.22, 1, 0.36, 1] as const

/** Direction-aware slide: content leaves one way, new content enters from the other. */
function slide(distance: number, delay: number, reduce: boolean, rotate = 0) {
  return {
    initial: (dir: number) =>
      reduce
        ? { opacity: 0 }
        : { opacity: 0, x: dir * distance, rotate: dir * rotate },
    animate: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.65, delay: 0.12 + delay, ease: EASE },
    },
    exit: (dir: number) =>
      reduce
        ? { opacity: 0, transition: { duration: 0.2 } }
        : {
            opacity: 0,
            x: dir * -distance * 0.6,
            rotate: dir * -rotate,
            transition: { duration: 0.35, delay: delay * 0.4, ease: "easeIn" },
          },
  }
}

function Panel({
  tab,
  direction,
  reduce,
  id,
  labelledBy,
}: {
  tab: WhyUsTab
  direction: number
  reduce: boolean
  id: string
  labelledBy: string
}) {
  const [main, secondary] = tab.images
  const variants = {
    text: slide(60, 0, reduce),
    photoA: slide(140, 0.08, reduce, 4),
    photoB: slide(180, 0.16, reduce, 6),
    deco: slide(40, 0.24, reduce),
  }

  return (
    <motion.div
      role="tabpanel"
      id={id}
      aria-labelledby={labelledBy}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative grid gap-12 [grid-area:1/1] lg:min-h-[600px] lg:grid-cols-12 lg:gap-8"
    >
      {/* Copy + main photo */}
      <div className="flex flex-col lg:col-span-6">
        <motion.div custom={direction} variants={variants.text}>
          <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {tab.title}
          </h3>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 hc:text-foreground lg:text-lg">
            {tab.description}
          </p>
          {tab.link && (
            <Link
              href={tab.link.href}
              target={tab.link.isExternal ? "_blank" : undefined}
              className={cn(buttonVariants(), "group mt-7 w-fit gap-2 px-6")}
            >
              {tab.link.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </motion.div>

        <motion.div
          custom={direction}
          variants={variants.photoA}
          className="mt-12 w-[92%] self-start sm:w-[72%] lg:mt-10 lg:w-[90%]"
        >
          <PhotoFrame image={main} className="-rotate-[4deg]" />
        </motion.div>
      </div>

      {/* Secondary photo + ornaments */}
      <div className="relative lg:col-span-6">
        <motion.div
          custom={direction}
          variants={variants.photoB}
          className="ml-auto w-[85%] sm:w-[64%] lg:-mr-4 lg:w-[92%] xl:-mr-12"
        >
          <PhotoFrame image={secondary} className="rotate-[6deg]" />
        </motion.div>
        <motion.div
          custom={direction}
          variants={variants.deco}
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          <CurvedArrow className="absolute left-[2%] top-[56%] w-40 text-primary" />
          <ScribbleM className="absolute bottom-[4%] right-[8%] w-28 text-primary/35 hc:text-primary" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function PhotoFrame({
  image,
  className,
}: {
  image: WhyUsTab["images"][number]
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-[1.6rem] bg-white p-2.5 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.45)] ring-1 ring-slate-100 transition-transform duration-500 hover:rotate-0 hc:bg-background-muted hc:ring-0",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem]">
        <LandingImage image={image} sizes="(min-width: 1024px) 45vw, 90vw" />
      </div>
    </div>
  )
}
