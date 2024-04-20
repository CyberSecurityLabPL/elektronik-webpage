"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import React, { ReactNode } from "react"
import Link from "next/link"
import { LucideProps, Github, Facebook, Instagram, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-end w-full min-h-96 h-fit -mt-64">
      <div className="bg-repeat-x bg-footer-squares w-full h-80"></div>
      <div className="bg-repeat-x bg-splash-transition w-full h-52"></div>
      <div className="w-full h-fit min-h-32 bg-primary flex flex-col justify-between gap-6 pb-4 pt-8 px-8 overflow-auto">
        <Counter />
        <div className="flex justify-center items-center flex-col-reverse gap-4 xl:flex-row">
          <SocialMedia />
          <MainPanel />
          <Donate />
        </div>
        <Copyrights />
      </div>
    </footer>
  )
}

//component for social media panel
function LinkIcon({
  icon: Icon,
  href,
}: {
  icon: React.FC<LucideProps>
  href: string
}) {
  return (
    <Link passHref href={href}>
      <div className="w-8 h-8 bg-primary m-2 rounded-full flex justify-center items-center text-slate-200">
        <Icon />
      </div>
    </Link>
  )
}

//components for main panel
function LinkPanel({
  title,
  children,
}: {
  children?: ReactNode
  title: string
}) {
  return (
    <div className="w-full flex justify-center sm:justify-start items-center text-center sm:text-left flex-col sm:mx-4 max-sm:my-4 ">
      <div className="w-full text-background text-xl  pb-3 mt-6 font-semibold text-nowrap">
        {title}
      </div>
      <div className="w-full flex flex-col  gap-4 ">{children}</div>
    </div>
  )
}

//components for main panel
function LinkItem({ name, href }: { name: string; href: string }) {
  return (
    <Link className="text-slate-200 font-medium text-xs" href={href}>
      {name}
    </Link>
  )
}

function SocialMedia() {
  return (
    <div className="flex max-xl:flex-col-reverse  justify-center items-center  w-64 pb-4">
      <div className="flex justify-center xl:flex-col xl:h-full max-xl:w-full ">
        <LinkIcon
          icon={Facebook}
          href="https://www.facebook.com/zgelektronik/?locale=pl_PL"
        />
        <LinkIcon
          icon={Github}
          href="https://github.com/CyberSecurityLabPL/elektronik-webpage"
        />
        <LinkIcon
          icon={Instagram}
          href="https://www.instagram.com/zgelektronik/"
        />
      </div>
      <div className="flex justify-center items-center lg:flex-col w-20 max-xl:h-20 xl:h-full relative">
        <Link
          passHref
          href={"/"}
          className="flex justify-center items-center w-full h-20 relative"
        >
          <Image alt="logo" fill src={"/logo-white.svg"} />
        </Link>
      </div>
    </div>
  )
}

function MainPanel() {
  return (
    <div className="flex justify-center max-sm:my-8">
      <div className="flex justify-around flex-col gap-6">
        <div className=" flex max-sm:flex-col max-sm:items-center justify-center">
          <div className="w-full flex justify-center max-sm:flex-col max-sm:items-center">
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
              <LinkItem
                name="OKE w Poznaniu"
                href="http://www.oke.poznan.pl/"
              />
              <LinkItem name="Komunikaty Dyrektora CKE" href="" />
            </LinkPanel>
            <LinkPanel title="Nabór">
              <LinkItem name="Regulamin" href="" />
              <LinkItem name="Kierunki" href="/nabor" />
            </LinkPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
const authors = ["Krzysiek", "Kacper", "Mikołaj", "Wojtek", "Filipek"]
function Copyrights() {
  return (
    <div className="flex justify-around flex-col gap-4">
      <div className="flex justify-center items-center text-background text-base font-semibold px-4 text-center">
        {/* make names bold without char ,*/}
        Made with 🍷 by Kacper, Krzysiek, Mikołaj, Wojtek & Filip
      </div>
      <div className="flex justify-center items-center text-slate-400 text-xs px-4 text-center">
        @Copyright 2001-2024 Zespół Szkół Elektronicznych i Samochodowych
      </div>
    </div>
  )
}
function Counter() {
  return (
    <div className="text-background flex justify-center items-center flex-col sm:flex-row gap-1 text-3xl font-extrabold text-center max-sm:leading-relaxed">
      Odwiedziło nas już
      <div className=" w-fit text-primary font-extrabold text-3xl bg-background mx-2 p-2 rounded-2xl">
        1280959
      </div>
      osób!
    </div>
  )
}

function Donate() {
  return (
    <div className=" flex-col justify-center w-64  flex">
      <div className="flex justify-center">
        <Button
          variant={"secondary"}
          className="w-56 h-16 rounded-lg flex justify-center items-center gap-4"
        >
          <Coffee className="mr-2 h-8 w-8" />
          Buy us a coffee
        </Button>
      </div>
      <div className="text-background text-center mt-2">
        Spodobała Ci się nowa strona? Rozważ wsparcie twórców ✨✨
      </div>
    </div>
  )
}
