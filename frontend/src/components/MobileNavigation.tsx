"use client"
import React, { ReactNode } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import { ChevronDown, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default  function MobileNavigation() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <motion.div 
                    whileHover={{
                        scale: 1.5,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Menu className='w-8 h-8'/>
                </motion.div>
            </DrawerTrigger>
            <DrawerContent className='h-[90%]'>
                <div className='h-full w-full p-4  overflow-scroll'>
                <LinkPanel title="O szkole">
                            <LinkItem name="Osiągnięcia" href="/osiagniecia" />
                            <LinkItem name="Kadra" href="/kadra" />
                            <LinkItem name="Galeria" href="/galeria" />
                            <LinkItem name="Aktualności" href="/aktualnosci" />
                        </LinkPanel>
                        <LinkPanel title="Edukacja">
                            <LinkItem name="Praktyki" href="/praktyki" />
                            <LinkItem name="Warsztaty" href="https://zseis.zgora.pl/warsztaty/" />
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
                            <LinkItem name="Egzamin maturalny" href="http://www.oke.poznan.pl/index.php?menu_st_id=5&el_id=718&submit_element=1" />
                            <LinkItem name="Egzamin zawodowy" href="" />
                            <LinkItem name="OKE w Poznaniu" href="http://www.oke.poznan.pl/" />
                            <LinkItem name="Komunikaty Dyrektora CKE" href="" />
                        </LinkPanel>
                        <LinkPanel title="Nabór">
                            <LinkItem name="Regulamin" href="" />
                            <LinkItem name="Kierunki" href="/nabor" />
                        </LinkPanel>
                </div>
                <DrawerFooter className='text-lg'>
                <Button asChild>
                    <Link href={'/'}>E-dziennik</Link>
                </Button>
                <Button variant={'ghost'} asChild>
                    <Link href={'/'}>Plan Lekcji</Link>
                </Button>
                
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}


function LinkPanel({title, children} : {children?: ReactNode, title: string}){
    return (
        <Collapsible className=''>
            <CollapsibleTrigger className='text-2xl font-semibold  flex justify-between items-center'>
                <span>{title}</span>
                <ChevronDown />
            </CollapsibleTrigger>
            <CollapsibleContent className='flex flex-col gap-6'>
                {children}
            </CollapsibleContent>
        </Collapsible>
    )
}



//components for main panel
function LinkItem({name, href} : {name: string, href: string}) {
    return (
            <Link className="text-lg font-medium text-slate-600 text-center" href={href}>{name}</Link>
    )
}