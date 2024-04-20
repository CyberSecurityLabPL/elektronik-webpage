"use client"
import React, { ReactNode } from "react"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionMobile"

export default function MobileNavigation() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.div
          whileHover={{
            scale: 1.5,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.7 }}
        >
          <Menu className="w-8 h-8" />
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="h-[90%]">
        <div className="h-full w-full p-4  overflow-scroll">
          <LinkPanel title="O szkole">
            <LinkItem name="Osiągnięcia" href="/osiagniecia" />
            <LinkItem name="Kadra" href="/kadra" />
            <LinkItem name="Galeria" href="/galeria" />
            <LinkItem name="Aktualności" href="/aktualnosci" />
          </LinkPanel>
          <LinkPanel title="Edukacja">
            <LinkItem name="Praktyki" href="/praktyki" />
            <LinkItem
              name="Warsztaty"
              href="https://zseis.zgora.pl/warsztaty/"
            />
            <LinkItem name="Programy Nauczania" href="" />
          </LinkPanel>
          <LinkPanel title="Uczeń">
            <LinkItem name="Ocenianie zachowania" href="" />
            <LinkItem name="Zastępstwa" href="/zastepstwa" />
            <LinkItem name="Dokumenty do pobrania" href="/dokumenty" />
            <LinkItem name="Oferty pracy dla absolwentów" href="/praca" />
          </LinkPanel>
          <LinkPanel title="Rodzic">
            <LinkItem name="Podręczniki" href="/podreczniki" />
            <LinkItem name="Rada Rodziców" href="/rada" />
          </LinkPanel>
          <LinkPanel title="Maturzysta">
            <LinkItem
              name="Egzamin maturalny"
              href="http://www.oke.poznan.pl/index.php?menu_st_id=5&el_id=718&submit_element=1"
            />
            <LinkItem name="Egzamin zawodowy" href="" />
            <LinkItem name="OKE w Poznaniu" href="http://www.oke.poznan.pl/" />
            <LinkItem name="Komunikaty Dyrektora CKE" href="" />
          </LinkPanel>
          <LinkPanel title="Nabór">
            <LinkItem name="Regulamin" href="" />
            <LinkItem name="Kierunki" href="/nabor" />
          </LinkPanel>
        </div>
        <DrawerFooter className="text-lg flex justify-center items-center">
          <Button variant={"ghost"} asChild>
            <Link href={"/"}>Plan Lekcji</Link>
          </Button>
          <Button asChild>
            <Link href={"/"}>E-dziennik</Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function LinkPanel({
  title,
  children,
}: {
  children?: ReactNode
  title: string
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-4 "
    >
      <AccordionItem value={title}>
        <AccordionTrigger className="w-full text-2xl font-semibold flex justify-between gap-4 items-center  py-2 [&[data-state=open]>svg]:rotate-180">
          <span className="truncate w-2/3 text-left">{title}</span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 last:pb-4 ">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

//components for main panel
function LinkItem({ name, href }: { name: string; href: string }) {
  return (
    <Link
      className="text-lg font-medium text-slate-600 text-center"
      href={href}
    >
      {name}
    </Link>
  )
}
