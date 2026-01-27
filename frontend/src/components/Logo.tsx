"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect } from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Logo = {
  key: string
  getSrc: (theme?: string) => string
  alt: string
}

const LOGOS: Logo[] = [
  {
    key: "theme-dependent",
    getSrc: (theme?: string) =>
      theme === "high-contrast"
        ? "/assets/logo/logo_highcontrast.svg"
        : "/assets/logo/animated/logo_blue-initial.svg",
    alt: "Logo"
  },
  {
    key: "zseis_logo",
    getSrc: () => "/assets/logo/logo_zseis.png",
    alt: "ZSEiS Logo"
  }
]

const Logo = () => {
  const { theme } = useTheme()
  const [currentIdx, setCurrentIdx] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Change image every 10s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % LOGOS.length)
    }, 10_000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Theme switch: only react if currently on theme-dependent logo (index 0)
  useEffect(() => {
    if (currentIdx === 0) {
      // poke state so framer will notice a new image if theme changed
      setCurrentIdx(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const currentLogo = LOGOS[currentIdx]
  const srcLogo = currentLogo.getSrc(theme)

  return (
    <div
      className="
        relative
        transition-all duration-200
        h-[80px] group-data-[smaller=true]:h-[60px] md:h-[80px]
        w-auto flex items-center
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLogo.key + (currentLogo.key === "theme-dependent" ? theme : "")}
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 16,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1.0,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: -16,
            filter: "blur(8px)",
          }}
          transition={{
            type: "spring",
            duration: 0.7,
            stiffness: 150,
            damping: 24,
            opacity: { duration: 0.38 },
            filter: { duration: 0.38 },
          }}
          className="flex items-center h-full w-auto"
        >
          <Image
            src={srcLogo}
            priority
            alt={currentLogo.alt}
            style={{ objectFit: "contain", height: "100%", width: "auto" }}
            width={160}
            height={100}
            className={`
              transition-all duration-200
              h-[80px] group-data-[smaller=true]:h-[60px] md:h-[80px]
              w-auto
              block
            `}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Logo
