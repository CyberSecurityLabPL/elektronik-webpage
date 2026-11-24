"use client"
import { aboutQuote } from "@/content/landing"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { DashedCurve, DotGrid, QuoteMark } from "./shared/Decorations"
import LandingImage from "./shared/LandingImage"

export default function AboutQuote() {
  const c = aboutQuote

  return (
    <section
      id={c.sectionId}
      className="relative w-full scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <DashedCurve
        variant={2}
        className="absolute -left-24 top-0 -z-10 hidden h-80 w-[40%] -rotate-[30deg] text-primary/25 hc:hidden md:block"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-5 sm:px-8 md:grid-cols-12 md:gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none"
        >
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[4/5] rounded-2xl border-b-[6px] border-primary bg-slate-100 shadow-[0_30px_60px_-30px_rgba(53,77,252,0.55)] hc:bg-background-muted">
            <LandingImage image={c.image} sizes="(min-width: 768px) 40vw, 90vw" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative md:col-span-7"
        >
          <DotGrid className="absolute -top-6 right-0 hidden text-slate-300 hc:text-muted-foreground sm:block" />

          <blockquote className="relative">
            <QuoteMark className="absolute -left-2 -top-10 w-16 rotate-180 text-slate-200 hc:text-muted-foreground sm:-left-10 sm:-top-12 sm:w-20" />
            <p className="relative text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-primary">{c.highlight}</span> {c.title}
            </p>
            <QuoteMark className="absolute -bottom-12 right-4 w-16 text-primary/20 hc:text-primary sm:right-10 sm:w-20" />
          </blockquote>

          <p className="mt-10 max-w-lg text-pretty text-sm leading-relaxed text-slate-600 hc:text-foreground sm:text-base">
            {c.description}
          </p>

          {c.link && (
            <Link
              href={c.link.href}
              target={c.link.isExternal ? "_blank" : undefined}
              className={cn(buttonVariants({ variant: "outline" }), "group mt-6 gap-2 px-6")}
            >
              {c.link.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
