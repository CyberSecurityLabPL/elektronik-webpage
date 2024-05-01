import Image from "next/image"
import { Button } from "./ui/button"
import React, { ReactNode } from "react"
import Link from "next/link"
import {
  LucideProps,
  Github,
  Facebook,
  Instagram,
  Coffee,
  LucideIcon,
} from "lucide-react"
import { getNavigation } from "@/lib/api"
import { Separator } from "./ui/separator"

export default function Footer() {
  return (
    <footer className="-mt-64 flex h-fit min-h-96 w-full flex-col items-center justify-end">
      {/* transition svg */}
      <div className="h-80 w-full bg-footer-squares bg-repeat-x" />
      <div className="bg-lines-transition-dark h-52 w-full translate-y-1 bg-bottom bg-repeat-x" />
      {/* footer */}
      <div className="z-[1] flex h-fit min-h-32 w-full flex-col justify-between gap-6 overflow-auto bg-[#262727] px-4 pb-4 pt-8 md:px-8">
        <div className="flex w-fit flex-col items-center justify-center self-center">
          <Sitemap />
        </div>
        <div className="flex justify-center py-8">
          <div className="my-8 flex w-fit justify-center gap-2 rounded-2xl bg-white p-2 text-primary">
            <LinkIcon
              Icon={Github}
              href="https://github.com/CyberSecurityLabPL/elektronik-webpage"
            />
            <LinkIcon
              Icon={Facebook}
              href="https://www.facebook.com/zgelektronik/"
            />
            <LinkIcon
              Icon={Instagram}
              href="https://www.instagram.com/zgelektronik/"
            />
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="">
            <Link passHref href={"/"} className="relative flex h-20 w-1/2">
              <Image alt="logo" fill src={"/logo-white.svg"} />
            </Link>
            <Link passHref href={"/"} className="relative h-20 w-1/2">
              <Image alt="logo" fill src={"/logoCSL.svg"} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

async function Sitemap() {
  const nav = await getNavigation()

  return (
    <div className="grid grid-cols-2 flex-wrap justify-center gap-8 sm:flex sm:justify-start">
      {nav?.link_groups
        ? nav?.link_groups.map((panel: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-start sm:justify-start sm:text-left"
            >
              <div className="w-full text-nowrap pb-2 text-xs font-bold text-background">
                {panel.name}
              </div>
              <div className="flex w-full flex-col gap-2 ">
                {panel.links.map((link: any, index: number) => (
                  <Link
                    key={`l${index}`}
                    className="text-xs font-medium text-slate-200 hover:text-white hover:underline"
                    href={link.isExternal ? link.href : `/${link.href}` ?? ""}
                  >
                    {link.name ?? "Empty"}
                  </Link>
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  )
}

function LinkIcon({ Icon, href }: { Icon: LucideIcon; href: string }) {
  return (
    <Button size={"icon"} asChild>
      <Link href={href}>
        <Icon />
      </Link>
    </Button>
  )
}
