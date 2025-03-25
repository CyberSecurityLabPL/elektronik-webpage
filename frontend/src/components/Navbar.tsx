"use client"

import { getImage } from "@/lib/utils"
import { motion } from "framer-motion"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { Button, buttonVariants } from "./ui/button"
import { Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useTheme } from "next-themes"

export default function Navbar({
  navItems,
  additionalLinks,
}: {
  navItems?: any
  additionalLinks?: any
}) {
  const [isSmaller, setIsSmaller] = useState(false)
  const [srcLogo, setSrcLogo] = useState("/assets/logo/logo_white.svg")
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
  const { theme } = useTheme()
  useEffect(() => {
    
    if (theme === "high-contrast") {
      setSrcLogo("/assets/logo/logo_highcontrast.svg" );
    } else {
      setSrcLogo("/assets/logo/logo_blue.svg");
    }
  }, [theme]);
  
  

  const isHc = theme === "high-contrast"

  return (
    
    <>
      <div className="absolute left-0 top-0" id="navbar-sentinel" />
      <motion.div
        data-smaller={isSmaller}
        className={`group sticky top-0 z-[100] flex bg-background w-full justify-between border-b border-black/10 transition-all duration-200 data-[smaller=true]:bg-white/10 data-[smaller=true]:backdrop-blur-2xl`}
        animate={{ height: isSmaller ? "4rem" : "8rem" }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <div className="flex items-center justify-center px-8 ">
          <Link href={"/"} passHref>
            <Image
              src={srcLogo}
              width={80}
              height={80}
              priority
              className={`h-16 w-auto transition-all duration-200  group-[[data-smaller=true]]:h-12 md:h-20`}
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
            <ChangeThemeButton />
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

function ChangeThemeButton() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Zmień motyw</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Jasny
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("high-contrast")}>
          Wysoki kontrast
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
