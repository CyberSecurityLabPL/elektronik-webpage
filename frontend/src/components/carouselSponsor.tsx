"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface SponsorItem {
  id: number
  name: string
  logoUrl: string
  websiteUrl: string
}

const sponsors: SponsorItem[] = [
  {
    id: 1,
    name: "Ekoenergetyka",
    logoUrl: "/assets/sponsors/ekoenergetka.svg",
    websiteUrl: "https://ekoenergetyka.com.pl",
  },
  {
    id: 2,
    name: "Seco/Warwick",
    logoUrl: "/assets/sponsors/seco.svg",
    websiteUrl: "https://www.secowarwick.com",
  },
  {
    id: 3,
    name: "Hertz Systems",
    logoUrl: "/assets/sponsors/hertz.svg",
    websiteUrl: "https://hertzsystems.com",
  },
  {
    id: 4,
    name: "Gedia",
    logoUrl: "/assets/sponsors/gedia.svg",
    websiteUrl: "https://www.gedia.com/pl",
  },
  {
    id: 5,
    name: "Swiss Krono",
    logoUrl: "/assets/sponsors/swiss.svg",
    websiteUrl: "https://www.swisskrono.pl/",
  },
  {
    id: 6,
    name: "ESA",
    logoUrl: "/assets/sponsors/esa.svg",
    websiteUrl: "https://www.esa.int/",
  },
  {
    id: 7,
    name: "BHPEx",
    logoUrl: "/assets/sponsors/bhpex.svg",
    websiteUrl: "https://bhpex.pl/",
  },
]

export default function CarouselSponsor() {
  return (
    <div className="relative flex h-full w-full gap-2 overflow-hidden sm:gap-4">
      <div className="relative flex h-full w-1/2 flex-col overflow-hidden">
        <motion.div
          animate={{
            y: ["-50%", "0%"],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
          className="flex transform-gpu flex-col gap-2 will-change-transform sm:gap-4"
        >
          <SponsorGroup />
          <SponsorGroup ariaHidden />
        </motion.div>
      </div>

      <div className="relative flex h-full w-1/2 flex-col overflow-hidden">
        <motion.div
          animate={{
            y: ["0%", "-50%"],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
          className="flex transform-gpu flex-col gap-2 will-change-transform sm:gap-4"
        >
          <SponsorGroup />
          <SponsorGroup ariaHidden />
        </motion.div>
      </div>
    </div>
  )
}

function SponsorGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex flex-col gap-2 sm:gap-4">
      {sponsors.map((sponsor) => (
        <Link
          href={sponsor.websiteUrl}
          key={sponsor.id}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={ariaHidden ? -1 : undefined}
          className="block transition-transform hover:scale-105"
        >
          <div className="flex h-16 items-center justify-center rounded-lg bg-secondary/50 p-2 hc:bg-white sm:h-20 lg:h-24">
            <div className="relative h-12 w-full sm:h-16 lg:h-20">
              <Image
                src={sponsor.logoUrl}
                alt={`${sponsor.name} logo`}
                fill
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                className="object-contain p-1 sm:p-2"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
