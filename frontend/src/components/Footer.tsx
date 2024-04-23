import Image from "next/image"
import { Button } from "./ui/button"
import React, { ReactNode } from "react"
import Link from "next/link"
import { LucideProps, Github, Facebook, Instagram, Coffee } from "lucide-react"
import { getNavigation } from "@/lib/api"

export default function Footer() {
  return (
    <footer className="-mt-64 flex h-fit min-h-96 w-full flex-col items-center justify-end">
      <div className="h-80 w-full bg-footer-squares bg-repeat-x"></div>
      <div className="h-52 w-full bg-splash-transition bg-repeat-x"></div>
      <div className="flex h-fit min-h-32 w-full flex-col justify-between gap-6 overflow-auto bg-primary px-8 pb-4 pt-8">
        <Counter />
        <div className="flex flex-col-reverse items-center justify-center gap-4 xl:flex-row">
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
      <div className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-slate-200">
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
    <div className="flex w-full flex-col items-center justify-center text-center max-sm:my-4 sm:mx-4 sm:justify-start sm:text-left ">
      <div className="mt-6 w-full text-nowrap  pb-3 text-xl font-semibold text-background">
        {title}
      </div>
      <div className="flex w-full flex-col  gap-4 ">{children}</div>
    </div>
  )
}

//components for main panel
function LinkItem({ name, href }: { name: string; href: string }) {
  return (
    <Link
      className="text-xs font-medium text-slate-200 hover:text-white hover:underline"
      href={href}
    >
      {name}
    </Link>
  )
}

function SocialMedia() {
  return (
    <div className="flex w-64  items-center justify-center  pb-4 max-xl:flex-col-reverse">
      <div className="flex justify-center max-xl:w-full xl:h-full xl:flex-col ">
        <LinkIcon
          icon={Facebook}
          href="https://www.facebook.com/zgelektronik/"
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
      <div className="relative flex w-20 items-center justify-center max-xl:h-20 lg:flex-col xl:h-full">
        <Link
          passHref
          href={"/"}
          className="relative flex h-20 w-full items-center justify-center"
        >
          <Image alt="logo" fill src={"/logo-white.svg"} />
        </Link>
      </div>
    </div>
  )
}

async function MainPanel() {
  const nav = await getNavigation()

  return (
    <div className="flex justify-center max-sm:my-8">
      <div className="flex flex-col justify-around gap-6">
        <div className=" flex justify-center max-sm:flex-col max-sm:items-center">
          <div className="flex w-full justify-center max-sm:flex-col max-sm:items-center">
            {nav?.link_groups
              ? nav?.link_groups.map((panel: any, index: number) => (
                  <LinkPanel key={panel.name + index} title={panel.name}>
                    {panel.links.map((link: any, index: number) => (
                      <LinkItem
                        key={`l${index}`}
                        name={link.name ?? "Empty"}
                        href={link.isExternal ? link.href : `/${link.href}` ?? ""}
                      />
                    ))}
                  </LinkPanel>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}
function Copyrights() {
  return (
    <div className="flex flex-col justify-around gap-4">
      <div className="flex items-center justify-center px-4 text-center text-base text-background">
        {/* make names bold without char ,*/}
        Made with 🍷 by{" "}
        {["Krzysiek", "Kacper", "Mikołaj", "Wojtek", "Filipek"].map(
          (name, i) => (
            <span key={name}>
              {i !== 0 ? <>,&nbsp;</> : <>&nbsp;</>}
              <span className="font-bold">{name}</span>
            </span>
          )
        )}
      </div>
      <div className="flex items-center justify-center px-4 text-center text-xs text-slate-200">
        @Copyright 2001-2024 Zespół Szkół Elektronicznych i Samochodowych
      </div>
    </div>
  )
}
function Counter() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center text-3xl font-extrabold text-background max-sm:leading-relaxed sm:flex-row">
      Odwiedziło nas już
      <div className=" mx-2 w-fit rounded-2xl bg-background p-2 text-3xl font-extrabold text-primary">
        1280959
      </div>
      osób!
    </div>
  )
}

function Donate() {
  return (
    <div className=" flex w-64 flex-col  justify-center">
      <div className="flex justify-center">
        <Button
          variant={"secondary"}
          className="flex h-16 w-56 items-center justify-center gap-4 rounded-lg"
        >
          <Coffee className="mr-2 h-8 w-8" />
          Buy us a coffee
        </Button>
      </div>
      <div className="mt-2 text-center text-background">
        Spodobała Ci się nowa strona? Rozważ wsparcie twórców ✨✨
      </div>
    </div>
  )
}
