"use client"
import React, { ReactNode } from "react"
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
import { Separator } from "./ui/separator"

export default function MobileNavigation({ navItems }: { navItems: any }) {
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
      <DrawerContent className="h-[90%]">
        <div className="h-full w-full overflow-scroll overflow-x-hidden p-4">
          {navItems?.map((group: any, index: number) => (
            <>
              <LinkPanel key={index + group.name} title={group.name}>
                {group.name.toLowerCase() == "o szkole" ? (
                  <>
                    <LinkItem name="Galeria" href="/galeria" />
                    <Separator />
                  </>
                ) : null}
                {group.name.toLowerCase() == "o szkole" ? (
                  <>
                    <LinkItem name="Kontakt" href="/kontakt" />
                    <Separator />
                  </>
                ) : null}
                {group.links?.map((item: any) => (
                  <>
                    <LinkItem
                      key={item.name}
                      name={item.name}
                      href={item.isExternal ? item.href : `/${item.href}` ?? ""}
                    />
                    <Separator />
                  </>
                ))}
              </LinkPanel>
              <Separator />
            </>
          ))}
        </div>
        <DrawerFooter className="flex items-center justify-center text-lg">
          <DrawerClose asChild>
            <Button variant={"secondary"} asChild>
              <Link href={"/plan"}>Plan Lekcji</Link>
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button asChild>
              <Link href={"https://uonetplus.vulcan.net.pl/zielonagora"}>
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
      className="flex w-full flex-col gap-4 "
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
        <AccordionContent className="flex flex-col gap-2 pl-4 last:pb-4 ">
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
        className="text-left text-lg font-medium text-slate-600 md:text-center"
        href={href}
      >
        {name}
      </Link>
    </DrawerClose>
  )
}
