"use client"
import { HTMLAttributes, ReactNode, useRef } from "react"
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from "framer-motion"

interface InViewProps {
  children: ReactNode
  variants?: {
    hidden: Variant
    visible: Variant
  }
  transition?: Transition
  viewOptions?: UseInViewOptions
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  ...props
}: InViewProps & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewOptions)

  return (
    <motion.div
      id={props.id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={props.className}
    >
      {children}
    </motion.div>
  )
}
