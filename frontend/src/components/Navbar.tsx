"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export default function Navbar({ navItems }: { navItems?: any }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      data-smaller={scrollY > 10}
      className="group sticky top-0 z-[100] flex h-32 w-full justify-between border-white/10 bg-white transition-all data-[smaller=true]:h-16 data-[smaller=true]:border-b data-[smaller=true]:border-white/10 data-[smaller=true]:bg-white/10 data-[smaller=true]:backdrop-blur-2xl"
    >
      <div className="flex items-center justify-center px-8 ">
        <Link href={"/"} passHref>
          <Image
            src={"/assets/logo/logo.svg"}
            width={80}
            height={60}
            className="h-16 w-auto group-[[data-smaller=true]]:h-12 md:h-20"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex ">
        <Navigation navItems={navItems} />
      </div>
      <div className="  flex items-center justify-center px-8 ">
        <div className="items-bottom hidden h-full  flex-col-reverse gap-2 lg:flex xl:flex-row xl:items-center">
          <Button variant={"secondary"} asChild>
            <Link href={"/plan"}>Plan Lekcji</Link>
            {/* <Link href={data.timetable.link ?? 'https://zseis.vercel.app/plan?timetableId=o18'}>{data.timetable.title ?? "Plan Lekcji"}</Link> */}
          </Button>
          <Button asChild>
            <Link href={"https://uonetplus.vulcan.net.pl/zielonagora"}>
              E-dziennik
            </Link>
            {/* <Link href={data.gradebook.link ?? "https://uonetplus.vulcan.net.pl/zielonagora"}>{data.gradebook.title ?? "E-Dziennik"}</Link> */}
          </Button>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </motion.div>
  )
}
