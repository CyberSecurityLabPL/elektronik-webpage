"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { buttonVariants } from "./ui/button"

import { useTheme } from "next-themes"
import { ChangeThemeButton } from "./ui/themeButton"
import dynamic from "next/dynamic"

export default function Navbar({
  navItems,
  additionalLinks,
}: {
  navItems?: any
  additionalLinks?: any
}) {
  const [isSmaller, setIsSmaller] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      setIsSmaller(scrollPosition > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const Logo = dynamic(() => import("./Logo"), { ssr: false })

  return (
    <>
      <div className="absolute left-0 top-0" id="navbar-sentinel" />
      <motion.div
        data-smaller={isSmaller}
        className={`group sticky top-0 z-100 flex w-full justify-between border-b border-black/10 bg-background transition-all duration-200 data-[smaller=true]:bg-white/10 data-[smaller=true]:backdrop-blur-2xl`}
        animate={{ height: isSmaller ? "4rem" : "8rem" }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <div className="flex items-center justify-center px-8 ">
          <Link href={"/"} passHref>
            <Logo />
          </Link>
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center xl:flex ">
          <Navigation navItems={navItems} />
        </div>
        <div className="flex items-center justify-center px-8 ">
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
    </>
  )
}
