"use client"
import { cn } from "@/lib/utils"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { HeroImages } from "./HeroImages"
import {
  Ball,
  HandEllipse,
  LeftArrow,
  MSymbol,
  RightArrow,
  Squares,
  Wiggle,
} from "./shared/Decorations"

/** Words of the heading painted in the primary color. */
const HIGHLIGHTED_WORDS = ["chęć", "pasje"]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const word: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const decoTransition = (delay: number) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, duration: 0.6, ease: "backOut" as const },
})

export default function Hero({ data }: { data: any }) {
  const heading: string = data?.heading ?? "Witaj w Elektroniku"
  const words = heading.trim().split(/\s+/)

  return (
    <section
      id={data?.sectionId ?? "hero"}
      className="relative w-full pb-10 pt-12 sm:pt-16 lg:pt-20"
    >
      {/* Background squares */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden hc:hidden"
      >
        <Squares className="h-auto w-[1100px] min-w-[700px] text-[#f1f2f5] lg:w-[1300px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        {/* Decorations */}
        <div aria-hidden="true" className="pointer-events-none">
          <motion.div
            {...decoTransition(0.2)}
            className="absolute -top-10 left-1 w-10 sm:-top-4 sm:w-20 md:-left-6 lg:-left-16 lg:w-28"
          >
            <MSymbol className="h-auto w-full" />
          </motion.div>
          <motion.div
            {...decoTransition(0.5)}
            className="absolute right-0 top-[16%] hidden w-24 lg:-right-16 lg:block lg:w-32"
          >
            <motion.div
              animate={{ rotate: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <RightArrow className="h-auto w-full" />
            </motion.div>
          </motion.div>
          <motion.div
            {...decoTransition(0.7)}
            className="absolute left-0 top-[46%] hidden w-36 lg:-left-20 lg:block lg:w-52"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <LeftArrow className="h-auto w-full" />
            </motion.div>
          </motion.div>
          <motion.div
            {...decoTransition(0.9)}
            className="absolute -right-6 top-[62%] hidden w-20 md:block lg:-right-28 lg:w-28"
          >
            <Wiggle className="h-auto w-full" />
          </motion.div>
          <motion.div
            {...decoTransition(1.1)}
            className="absolute bottom-0 left-2 hidden w-10 md:block lg:-left-24 lg:w-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              <Ball className="h-auto w-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          aria-label={heading}
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative max-w-[16ch] text-balance text-[2.15rem] font-semibold leading-[1.2] tracking-tight text-foreground xs:text-[2.5rem] sm:max-w-[22ch] sm:text-5xl lg:max-w-[26ch] lg:text-6xl lg:leading-[1.18]"
        >
          {words.map((w, i) => {
            const isLast = i === words.length - 1
            const clean = w.replace(/[.,!?]/g, "")
            return (
              <span key={i} aria-hidden="true">
                <motion.span
                  variants={word}
                  className={cn(
                    "inline-block",
                    HIGHLIGHTED_WORDS.includes(clean) && "text-primary",
                    isLast && "relative"
                  )}
                >
                  {w}
                  {isLast && (
                    <motion.span
                      className="pointer-events-none absolute -inset-x-[6%] -inset-y-[16%] text-primary/80"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.5, ease: "backOut" }}
                    >
                      <HandEllipse className="h-full w-full" />
                    </motion.span>
                  )}
                </motion.span>
                {!isLast && " "}
              </span>
            )
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-slate-600 hc:text-foreground sm:text-lg"
        >
          {data?.text ?? "Zapraszamy do zapoznania się z naszą ofertą."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-5"
        >
          {data?.linkPrimary && (
            <Link
              href={data.linkPrimary.link}
              target={data.linkPrimary.isExternal ? "_blank" : undefined}
              className={cn(
                buttonVariants({ size: "lg" }),
                "group w-full max-w-xs gap-2 px-7 sm:w-auto"
              )}
            >
              {data.linkPrimary.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          {data?.linkSecondary && (
            <Link
              href={data.linkSecondary.link}
              target={data.linkSecondary.isExternal ? "_blank" : undefined}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full max-w-xs gap-2 px-7 sm:w-auto"
              )}
            >
              {data.linkSecondary.title}
              <Lightbulb className="h-4 w-4" />
            </Link>
          )}
        </motion.div>
      </div>

      {/* Photos */}
      {data?.images?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 w-full sm:mt-20"
        >
          <HeroImages images={data.images} />
        </motion.div>
      )}
    </section>
  )
}
