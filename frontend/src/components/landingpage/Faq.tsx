"use client"
import { cn } from "@/lib/utils"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { motion } from "framer-motion"
import { MessageCircle, Plus } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import {
  DashedCurve,
  QuestionMark,
  ScribbleM,
  ScribbleWave,
} from "./shared/Decorations"

export default function Faq({ data }: { data: any }) {
  const questions: { question: string; answer: string }[] = data?.questions ?? []
  if (!questions.length) return null

  return (
    <section
      id={data?.sectionId ?? "faq"}
      className="relative w-full scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* ornaments */}
      <ScribbleWave className="absolute -left-6 top-6 hidden w-56 text-[color:var(--landing-deco-muted)] md:block" />
      <ScribbleM className="absolute right-6 top-4 hidden w-20 text-primary/50 hc:text-primary md:block lg:right-16" />
      <DashedCurve
        variant={3}
        className="absolute inset-x-0 bottom-2 -z-10 hidden h-40 w-full text-slate-200 hc:hidden md:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:col-span-4 lg:items-center"
        >
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {data?.title ?? "FAQ"}
          </h2>
          {data?.description && (
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              {data.description}
            </p>
          )}
          <motion.div
            initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
            className="mt-8 hidden w-40 lg:block"
          >
            <QuestionMark className="h-auto w-full" />
          </motion.div>
        </motion.div>

        {/* Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-8 lg:pt-4"
        >
          <AccordionPrimitive.Root type="single" collapsible className="w-full">
            {questions.map((q, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`faq-${index}`}
                className="border-b border-slate-200 hc:border-muted-foreground/40"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group flex w-full items-center justify-between gap-6 rounded-lg py-5 text-left text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-base",
                      "data-[state=open]:text-primary"
                    )}
                  >
                    <span>{formatQuestion(q.question)}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-primary group-data-[state=open]:text-white hc:group-data-[state=open]:text-black">
                      <Plus className="h-4 w-4" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-5 pr-12 text-sm leading-relaxed text-slate-600 hc:text-foreground sm:text-base">
                    {q.answer}
                  </p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>

          {data?.linkButton && (
            <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-slate-50 p-5 hc:bg-background-muted sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-foreground">
                  Nie znalazłeś odpowiedzi? Napisz do nas!
                </p>
              </div>
              <Link
                href={data.linkButton.link}
                target={data.linkButton.isExternal ? "_blank" : undefined}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-5")}
              >
                {data.linkButton.title}
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/** Normalize "Czy jest w szkole psycholog ?" -> "Czy jest w szkole psycholog?" */
function formatQuestion(text: string) {
  const t = text.trim().replace(/\s+\?$/, "?")
  return t.endsWith("?") ? t : `${t}?`
}
