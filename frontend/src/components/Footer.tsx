import Link from "next/link"

import { getNavigation } from "@/lib/api"
import { Separator } from "./ui/separator"
import Github from "./icons/Github"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="-mt-64 flex h-fit min-h-96 w-full flex-col items-center justify-end">
      {/* transition svg */}
      <div className="h-80 w-full bg-footer-squares bg-repeat-x" />
      <div className="bg-lines-transition-dark h-52 w-full translate-y-1 bg-bottom bg-repeat-x" />
      {/* footer */}
      <div className="z-[1] flex h-fit min-h-32 w-full flex-col justify-between gap-6 overflow-auto bg-[#262727] px-4 pt-16 md:px-8">
        <div className="flex w-fit flex-col items-center justify-center self-center">
          <Sitemap />
        </div>
        <div className="flex w-full flex-col items-center pt-16">
          <Link href={"/autorzy"} className="mb-1 text-xs text-[#808080]">
            Autorzy
          </Link>
          <Separator className="bg-[#3D3D3D]" />
          <div className="relative flex w-full items-center justify-between px-5 py-4">
            <Link passHref href={"/"}>
              <Image
                alt="logo"
                src={"/assets/logo/logo-dark.svg"}
                width={48}
                height={48}
              />
            </Link>
            <div className="center absolute flex w-fit justify-center gap-6 py-6">
              <Link
                href={
                  "https://github.com/CyberSecurityLabPL/elektronik-webpage"
                }
                target="_blank"
              >
                <Github />
              </Link>
              <Link
                href={"https://www.instagram.com/zgelektronik/"}
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                href={"https://www.facebook.com/zgelektronik/"}
                target="_blank"
              >
                <Facebook />
              </Link>
            </div>
            <Link passHref href={"https://cslsoft.pl/pl_pl/"} target="_blank">
              <Image
                alt="logo"
                width={96}
                height={48}
                src={"/assets/CSL.svg"}
              />
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
              <div className="w-full text-nowrap pb-4 text-sm font-bold text-[#CACACA]">
                {panel.name}
              </div>
              <div className="flex w-full flex-col gap-4 ">
                {panel.links.map((link: any, index: number) => (
                  <Link
                    key={`l${index}`}
                    className="w-fit text-sm text-[#808080] hover:text-[#CACACA] hover:underline"
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
