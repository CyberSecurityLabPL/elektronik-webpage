"use client"
import { ReactNode } from "react"
import { motion as m } from "framer-motion"
export default function Header({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <m.header
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
        ease: "circOut",
      }}
      className="my-6 flex w-full flex-col items-center justify-center sm:my-8"
    >
      <h1 className="w-full text-pretty bg-clip-text py-4 text-center text-3xl font-extrabold text-primary sm:text-4xl lg:w-auto lg:text-6xl">
        {title}
      </h1>
      {subtitle ? (
        <m.div
          className="flex items-center justify-center px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25, ease: "circOut" }}
        >
          <div className="text-md flex max-w-[54rem] items-center justify-center text-pretty text-center leading-relaxed text-primary-foreground sm:text-lg lg:text-xl">
            {subtitle}
          </div>
        </m.div>
      ) : null}
      {children}
    </m.header>
  )
}
