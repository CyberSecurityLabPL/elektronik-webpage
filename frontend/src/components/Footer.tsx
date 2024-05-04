import Link from "next/link"

import { getNavigation } from "@/lib/api"
import { Separator } from "./ui/separator"
import Github from "./icons/Github"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import Image from "next/image"
import ShootEffect from "./ShootEffect"

export default function Footer() {
  return (
    <footer className="-mt-64 flex h-fit min-h-96 w-full flex-col items-center justify-end">
      {/* transition svg */}
      <div className="h-80 w-full bg-footer-squares bg-repeat-x" />
      <div className="h-60 w-full translate-y-1 bg-lines-transition-dark bg-cover bg-bottom bg-repeat-x" />
      {/* footer */}
      <div className="z-[1] flex h-fit min-h-32 w-full flex-col justify-between gap-6 overflow-auto bg-[#262727] px-8 pt-16">
        <div className="flex w-fit flex-col items-center justify-center self-center">
          <Sitemap />
        </div>
        <div className="flex w-full flex-col items-center justify-self-stretch pt-16">
          <Link href={"/autorzy"} className="mb-1 text-xs text-[#808080]">
            <ShootEffect
              amount={0}
              sparkle
              sparkleAmount={1}
              image={[
                "/assets/react.png",
                "/assets/next.png",
                "/assets/tw.png",
                "/assets/strapi.svg",
              ]}
            >
              Autorzy
            </ShootEffect>
          </Link>
          <Separator className="bg-[#3D3D3D]" />
          <div className="s:grid-cols-3 relative grid w-full grid-cols-2 items-center justify-between  gap-y-4 py-4 sm:px-5">
            <div className=" s:order-2 s:col-span-1 col-span-2 flex w-full justify-center gap-6 py-6">
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
            <Link
              passHref
              href={"/"}
              className="s:order-1 s:justify-self-start justify-self-center"
            >
              <Image
                alt="logo"
                src={"/assets/logo/logo-dark.svg"}
                width={48}
                height={48}
              />
            </Link>
            <Link
              passHref
              href={"https://cslsoft.pl/pl_pl/"}
              target="_blank"
              className="s:order-3 s:justify-self-end justify-self-center"
            >
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
    <ul className="grid grid-cols-2 flex-wrap justify-center gap-8 sm:grid-cols-4 lg:flex lg:gap-16">
      {nav?.link_groups
        ? nav?.link_groups.map((panel: any, index: number) => (
            <li
              key={index}
              className="flex flex-col items-center text-start sm:justify-start sm:text-left"
            >
              <span className="w-full text-nowrap pb-4 text-sm font-bold text-[#CACACA]">
                {panel.name}
              </span>
              <ol className="flex w-full flex-col gap-2 ">
                {panel.links.map((link: any, index: number) => (
                  <li key={`l${index}`}>
                    <Link
                      className="w-fit text-sm text-[#808080] hover:text-[#CACACA] hover:underline"
                      href={link.isExternal ? link.href : `/${link.href}` ?? ""}
                    >
                      {link.name ?? "Empty"}
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))
        : null}
    </ul>
  )
}
