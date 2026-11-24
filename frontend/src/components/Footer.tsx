import Link from "next/link"
import { getNavigation } from "@/lib/api"
import Github from "./icons/Github"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import Image from "next/image"
import ShootEffect from "./ShootEffect"
import { Skyline } from "./landingpage/shared/Shapes"

const sponsors = [
  {
    name: "Ekoenergetyka",
    logo: "/assets/sponsors/ekoenergetka.svg",
    url: "https://ekoenergetyka.com.pl/",
  },
  {
    name: "Hertz Systems",
    logo: "/assets/sponsors/hertz.svg",
    url: "https://hertzsystems.com/",
  },
  {
    name: "Gedia Poland",
    logo: "/assets/sponsors/gedia.svg",
    url: "https://www.gedia.com/pl/",
  },
  {
    name: "KSC",
    logo: "/assets/sponsors/ksc.svg",
    url: "https://www.ksc-automation.eu/",
  },
  {
    name: "Seco/Warwick",
    logo: "/assets/sponsors/seco.svg",
    url: "https://www.secowarwick.com/",
  },
  {
    name: "ESA",
    logo: "/assets/sponsors/esa.svg",
    url: "https://www.esa.int/",
  },
  {
    name: "BHP Ex",
    logo: "/assets/sponsors/bhpexFooter.svg",
    url: "https://bhpex.pl/",
  },
  {
    name: "Swiss Krono",
    logo: "/assets/sponsors/swiss.svg",
    url: "https://www.swisskrono.pl/",
  },
]

function Sponsors() {
  return (
    <ul className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
      {sponsors.map((sponsor) => (
        <li key={sponsor.name}>
          <Link
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            title={sponsor.name}
            className="flex h-12 w-24 items-center justify-center sm:w-28"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={112}
              height={48}
              className="max-h-12 w-auto object-contain opacity-50 brightness-0 invert transition-opacity hover:opacity-80"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/CyberSecurityLabPL/elektronik-webpage",
    Icon: Github,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zgelektronik/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/zgelektronik/",
    Icon: Facebook,
  },
]

export default function Footer() {
  return (
    <footer className="w-full hc:mt-20">
      <Skyline fill="#262727" shadow="#F4F4F4" className="-mb-px hc:hidden" />

      <div className="bg-[#262727] text-[#808080]">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:pt-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <div className="flex flex-col items-start gap-5 lg:col-span-3">
              <Link href="/" aria-label="Strona główna">
                <Image
                  alt="Elektronik"
                  src="/assets/logo/logo-dark.svg"
                  width={64}
                  height={64}
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed">
                ZSEiS Elektronik – technikum z przyszłością. Kierunki
                techniczne, pasja i ludzie, z którymi warto się uczyć.
              </p>
              <ul className="flex gap-2">
                {socials.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/15"
                    >
                      <Icon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sitemap */}
            <nav aria-label="Mapa strony" className="lg:col-span-9">
              <Sitemap />
            </nav>
          </div>

          {/* Sponsors */}
          <div className="mt-12 border-t border-[#3D3D3D] pt-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">
              Wspierają nas
            </p>
            <Sponsors />
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#3D3D3D] py-6 text-xs sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} ZSEiS Elektronik</p>
            <div className="flex items-center gap-6">
              <Link href="/autorzy" className="hover:text-[#CACACA]">
                <ShootEffect amount={0} sparkle sparkleAmount={2} image={[]}>
                  Autorzy
                </ShootEffect>
              </Link>
              <Link
                href="https://cslsoft.pl/pl_pl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cyber Security Lab"
              >
                <Image alt="Cyber Security Lab" width={96} height={48} src="/assets/CSL.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

async function Sitemap() {
  const nav = await getNavigation()
  const groups: any[] = nav?.link_groups ?? []
  if (!groups.length) return null

  return (
    // CSS columns balance groups of very different length (e.g. "O szkole")
    <div className="columns-2 gap-x-8 sm:columns-3 xl:columns-4">
      {groups.map((panel: any, index: number) => {
        const links =
          index === 0
            ? [{ name: "Galeria", href: "galeria", isExternal: false }, ...panel.links]
            : panel.links
        return (
          <div key={index} className="mb-8 break-inside-avoid">
            <h2 className="pb-3 text-sm font-bold text-[#CACACA] hc:text-primary">
              {panel.name}
            </h2>
            <ul className="flex flex-col gap-2">
              {links.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    className="text-sm text-[#808080] hover:text-[#CACACA] hover:underline hc:text-muted-foreground hover:hc:text-foreground"
                    href={link.isExternal ? link.href : `/${link.href}`}
                    target={link.isExternal ? "_blank" : undefined}
                  >
                    {link.name ?? "Empty"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
