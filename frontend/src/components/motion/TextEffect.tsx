"use client"
import { cn } from "@/lib/utils"
import { motion, useInView, Variants } from "framer-motion"
import React, { useRef } from "react"
import { HighlightCircle } from "../landingpage/Hero"

type PresetType = "blur" | "shake" | "scale" | "fade" | "slide"

type TextEffectProps = {
  children: string
  per?: "word" | "char"
  as?: keyof JSX.IntrinsicElements
  variants?: {
    container?: Variants
    item?: Variants
  }
  className?: string
  preset?: PresetType
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
}

const AnimationComponent: React.FC<{
  word: string
  variants: Variants
  per: "word" | "char"
  highlighted?: boolean
  last?: boolean
}> = React.memo(({ word, variants, per, highlighted, last, }) => {
  if (per === "word") {
    return (
      <motion.span
        aria-hidden="true"
        variants={variants}
        className={cn("inline-block whitespace-pre my-3", highlighted ? "text-primary" : "", last ? "relative" : "")}
      >
        {word}
        {last ? <HighlightCircle className="z-[-1] absolute left-0 top-0 transform -translate-x-[32px] xl:-translate-x-[64px] -translate-y-[40px] xs:-translate-y-[30px] xl:-translate-y-[20px] w-[260px] xs:w-[320px] xl:w-[470px] aspect-[379/128]" /> : null}
      </motion.span>
    )
  }

  return (
    <span className="inline-block whitespace-pre">
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={`char-${charIndex}`}
          aria-hidden="true"
          variants={variants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
})

AnimationComponent.displayName = "AnimationComponent"

export function TextEffect({
  children,
  highlightedWords,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  ...props
}: TextEffectProps & React.ComponentProps<typeof motion.div> & {highlightedWords?: string[]}) {
  const words = children.split(/(\S+)/)
  const MotionTag = motion[as as keyof typeof motion]
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants }
  const containerVariants = variants?.container || selectedVariants.container
  const itemVariants = variants?.item || selectedVariants.item

  const ref = useRef<SVGSymbolElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -350px 0px" })

  return (
    // @ts-ignore
    <MotionTag
      // @ts-ignore
      ref={ref}
      initial="hidden"
      animate="visible"
      aria-label={children}
      variants={containerVariants}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <AnimationComponent
          key={`word-${wordIndex}`}
          word={word}
          highlighted={highlightedWords?.includes(word)}
          last={wordIndex === words.length - 2}
          variants={itemVariants}
          per={per}
        />
      ))}
    </MotionTag>
  )
}
