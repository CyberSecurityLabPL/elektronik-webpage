"use client"

import { motion } from "framer-motion"

import Link from "next/link"
import { useEffect, useState } from "react"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { buttonVariants } from "./ui/button"

import { useTheme } from "next-themes"
import { ChangeThemeButton } from "./ui/themeButton"

import Logo from "./Logo"

export default function Navbar({
  navItems,
  additionalLinks,
}: {
  navItems?: any
  additionalLinks?: any
}) {
  const [isSmaller, setIsSmaller] = useState(false)
  useEffect(() => {
    let last = false

    const handleScroll = () => {
      const next = window.scrollY > 20
      if (next !== last) {
        last = next
        setIsSmaller(next)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="absolute left-0 top-0" id="navbar-sentinel" />
      <div className="z-100 sticky top-0 h-32 w-full">
        <motion.div
          data-smaller={isSmaller}
          className={`z-100 group flex h-full w-full justify-between items-center bg-white hc:bg-black border-b border-black/10`}
          animate={{
            height: isSmaller ? 86 : 128,
            y: isSmaller ? 0 : 0,
            background: `hsl(var(--background) / ${isSmaller ? .97 : 1.0})`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="flex items-center justify-center px-8">
            <Link href={"/"} passHref>
              <Logo />
            </Link>
          </div>
          <motion.div
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center xl:flex"
            animate={{
              opacity: 1,
              y: isSmaller ? -20 : 0,
              scale: isSmaller ? 0.92 : 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              y: { type: "spring", stiffness: 180, damping: 20 },
              scale: { type: "spring", stiffness: 180, damping: 20 },
            }}
            initial={{ opacity: 0, y: -10, scale: 1, filter: "none" }}
          >
            <Navigation navItems={navItems} isSmaller={isSmaller} />
          </motion.div>
          <div className="flex items-center justify-center px-8">
            <div className="items-bottom hidden h-full flex-col-reverse gap-2 xl:flex xl:flex-row xl:items-center">
              <Link
                href={additionalLinks?.timetable.link}
                className={buttonVariants({
                  variant: additionalLinks?.timetable.type,
                })}
                prefetch={false}
              >
                {additionalLinks?.timetable.title}
              </Link>
              <Link
                href={additionalLinks?.gradebook.link}
                className={buttonVariants({
                  variant: additionalLinks?.gradebook.type,
                })}
              >
                {additionalLinks?.gradebook.title}
              </Link>
              <ChangeThemeButton />
            </div>
            <div className="flex items-center justify-center gap-2 xl:hidden">
              <ChangeThemeButton />
              <MobileNavigation
                navItems={navItems}
                additionalLinks={additionalLinks}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
