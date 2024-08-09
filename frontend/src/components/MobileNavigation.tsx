"use client"
import React, { ReactNode, TouchEvent, useRef, useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionMobile"
import { cn } from "@/lib/utils"

export default function MobileNavigation({ navItems }: { navItems: any }) {
  // const scrollableRef = useRef<HTMLDivElement | null>(null)
  // const [startY, setStartY] = useState<number>(0)
  // const [isPulling, setIsPulling] = useState<boolean>(false)

  // const maxPullDistance = 100

  // const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
  //   setStartY(e.touches[0].clientY)
  // }

  // const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
  //   const currentY = e.touches[0].clientY
  //   let diffY = currentY - startY

  //   const scrollable = scrollableRef.current
  //   if (scrollable) {
  //     // Sprawdzamy, czy użytkownik przewija w dół i jest na końcu zawartości
  //     if (
  //       scrollable.scrollHeight - scrollable.scrollTop <=
  //         scrollable.clientHeight &&
  //       diffY < 0
  //     ) {
  //       // Ograniczamy odległość "pull"
  //       diffY = Math.max(diffY, -maxPullDistance)
  //       scrollable.style.transform = `translateY(${diffY}px)`
  //       setIsPulling(true)
  //     }
  //   }
  // }

  // const handleTouchEnd = () => {
  //   if (isPulling) {
  //     const scrollable = scrollableRef.current
  //     if (scrollable) {
  //       scrollable.style.transition = "transform 0.3s ease-out"
  //       scrollable.style.transform = "translateY(0px)"
  //       setIsPulling(false)

  //       const handleTransitionEnd = () => {
  //         if (scrollable) {
  //           scrollable.style.transition = "none"
  //         }
  //       }

  //       scrollable.addEventListener("transitionend", handleTransitionEnd, {
  //         once: true,
  //       })
  //     }
  //   }
  // }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.div
          whileHover={{
            scale: 1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.7 }}
        >
          <Menu className="h-8 w-8" />
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="drawer-content z-[101] h-[85%] bg-slate-100">
        {/* <div className=""> */}
        <div
          className="scroll-overflow flex h-full w-full flex-col items-center gap-2 overflow-x-hidden overflow-y-scroll rounded-3xl p-4"
          // ref={scrollableRef}
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
          // onTouchEnd={handleTouchEnd}
        >
          {navItems?.map((group: any, index: number) => (
            <>
              <LinkPanel key={index + group.name} title={group.name}>
                {group.name.toLowerCase() == "o szkole" ? (
                  <>
                    <LinkItem name="Galeria" href="/galeria" />
                  </>
                ) : null}
                {group.name.toLowerCase() == "o szkole" ? (
                  <>
                    <LinkItem name="Kontakt" href="/kontakt" />
                  </>
                ) : null}
                {group.links?.map((item: any) => (
                  <>
                    <LinkItem
                      key={item.name}
                      name={item.name}
                      href={item.isExternal ? item.href : `/${item.href}` ?? ""}
                    />
                  </>
                ))}
              </LinkPanel>
            </>
          ))}
        </div>
        {/* </div> */}
        <DrawerFooter className="flex items-center justify-center gap-2 text-lg shadow-[0_-12px_40px] shadow-slate-100">
          <DrawerClose asChild>
            <Button
              variant={"secondary"}
              asChild
              className="w-full rounded-xl bg-white text-2xl  font-semibold text-foreground"
            >
              <Link href={"/plan"} className="py-6">
                Plan Lekcji
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              asChild
              className="w-full rounded-xl text-2xl font-semibold"
            >
              <Link
                href={"https://uonetplus.vulcan.net.pl/zielonagora"}
                className="py-6"
              >
                E-dziennik
              </Link>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function LinkPanel({
  title,
  children,
  className,
}: {
  children?: ReactNode
  title: string
  className?: string
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col gap-4 rounded-3xl bg-white px-4 py-2 active:bg-white/60"
    >
      <AccordionItem value={title}>
        <AccordionTrigger
          className={cn(
            "flex w-full items-center justify-between py-2 text-2xl  font-semibold [&[data-state=open]>svg]:rotate-180",
            className
          )}
        >
          <span className="w-2/3 truncate text-left">{title}</span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 pb-2 pt-4">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

//components for main panel
function LinkItem({ name, href }: { name: string; href: string }) {
  return (
    <DrawerClose asChild>
      <Link
        className="rounded-3xl bg-accent/50 px-4 py-2 text-left text-lg font-medium text-slate-600 active:bg-slate-100 md:text-center"
        href={href}
      >
        {name}
      </Link>
    </DrawerClose>
  )
}
