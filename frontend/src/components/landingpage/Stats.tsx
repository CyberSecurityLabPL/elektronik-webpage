"use client"
import { stats } from "@/content/landing"
import { animate, motion, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Skyline, Wave } from "./shared/Shapes"

export default function Stats() {
  return (
    <section id={stats.sectionId} className="relative w-full scroll-mt-24">
      <Wave mirror />
      <div className="-mt-px bg-[var(--landing-blue)] text-white">
        <div className="mx-auto w-full max-w-5xl px-5 pb-10 pt-8 text-center sm:px-8 lg:pb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="text-white/75">{stats.titleLead}</span>
            <br />
            <span className="mt-1 inline-block">{stats.titleHighlight}</span>
          </motion.h2>

          <dl className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 lg:mt-16">
            {stats.items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex flex-col-reverse items-center gap-1"
              >
                <dt className="text-sm text-white/80">{item.label}</dt>
                <dd className="text-4xl font-bold tabular-nums tracking-tight lg:text-5xl">
                  <Counter value={item.value} />
                  {item.suffix}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
      <Skyline flip className="-mt-px" />
    </section>
  )
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return <span ref={ref}>{display}</span>
}
