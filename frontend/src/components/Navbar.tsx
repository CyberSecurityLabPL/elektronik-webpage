"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export default function Navbar({ navItems, additionalLinks }: { navItems?: any, additionalLinks: any }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSmaller, setIsSmaller] = useState(false)

  const sentinelRef = useRef(null)
  

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]

      setIsSmaller(!entry.isIntersecting)
    }
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
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
              src={"/assets/logo/logo.svg"}
              width={80}
              height={80}
              priority
              className="h-16 w-auto group-[[data-smaller=true]]:h-12 md:h-20"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center xl:flex ">
          <Navigation navItems={navItems} setIsExpanded={setIsExpanded} />
        </div>
        <div className="flex items-center justify-center px-8 ">
          <div className="items-bottom hidden h-full flex-col-reverse gap-2 xl:flex xl:flex-row xl:items-center">
            {additionalLinks.map((el: any) => 
              <Button variant={el.attributes.link.type} key={"lb"+el.id} asChild>
                <Link href={el.attributes.link.isExternal ? el.attributes.link.link : `/${el.attributes.link.link}`}>
                  {el.attributes.link.title}
                </Link>
              </Button>
            )}
          </div>
          <div className="flex items-center justify-center xl:hidden">
            <MobileNavigation navItems={navItems} />
          </div>
        </div>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 -z-10 hidden w-4/5 !-translate-x-1/2 !translate-y-full rounded-3xl border bg-white p-6 xl:block"
          >
            <ul className="flex h-full w-full flex-wrap justify-start gap-8">
              {navItems.slice(4)?.map((item: any) => (
                <li key={item.name} className="">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"secondary"}
                        className={cn("text-lg font-medium text-slate-800")}
                      >
                        {item.name}
                        <ChevronDown className="ml-2" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="space-y-4 rounded-3xl">
                      {item.links?.map((tab: any) => (
                        <Link
                          key={tab.name}
                          className="flex gap-4 rounded-xl bg-slate-50 p-2 text-lg font-medium text-slate-800 hover:bg-slate-100 hover:text-slate-900"
                          href={
                            tab.isExternal ? tab.href : `/${tab.href}`
                          }
                          target={tab.isExternal ? "_blank" : "_self"}
                        >
                          {tab.name}
                          {tab.isExternal && (
                            <ExternalLink className="h-6 w-6 text-muted-foreground" />
                          )}
                        </Link>
                      ))}
                    </PopoverContent>
                  </Popover>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}
