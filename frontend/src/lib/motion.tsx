"use client"

import { motion } from "framer-motion"

export const staggerContainer = (
  staggerChildren: any,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}

export const MotionDiv = motion.div
