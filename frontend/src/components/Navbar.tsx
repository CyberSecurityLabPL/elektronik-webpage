"use client"

import { getImage } from "@/lib/utils"
import { motion } from "framer-motion"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { buttonVariants } from "./ui/button"

export default function Navbar({
  navItems,
  additionalLinks,
}: {
  navItems?: any
  additionalLinks?: any
}) {
  const [isSmaller, setIsSmaller] = useState(false)

  const sentinelRef = useRef(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]

      setIsSmaller(!entry.isIntersecting)
    }
    // TODO do naprawienia
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 1,
      rootMargin: "0px",
    })

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <div
        className="absolute left-0 top-0"
        id="navbar-sentinel"
        ref={sentinelRef}
      />
      <motion.div
        data-smaller={isSmaller}
        className="group sticky top-0 z-[100] flex h-32 w-full justify-between border-b border-black/10 bg-white transition-all data-[smaller=true]:h-16 data-[smaller=true]:bg-white/10 data-[smaller=true]:backdrop-blur-2xl"
      >
        <div className="flex items-center justify-center px-8 ">
          <Link href={"/"} passHref>
            <Image
              src={getImage(additionalLinks?.logo.url)}
              width={80}
              height={80}
              priority
              className="h-16 w-auto group-[[data-smaller=true]]:h-12 md:h-20"
              alt="Logo"
            />
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
          </div>
          <div className="flex items-center justify-center xl:hidden">
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
