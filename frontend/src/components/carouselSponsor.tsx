"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SponsorItem {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

// Actual sponsors data
const sponsors: SponsorItem[] = [
  {
    id: 1,
    name: "Ekoenergetyka",
    logoUrl: "/assets/sponsors/ekoenergetka.svg",
    websiteUrl: "https://ekoenergetyka.com.pl"
  },
  {
    id: 2,
    name: "Seco/Warwick",
    logoUrl: "/assets/sponsors/seco.svg",
    websiteUrl: "https://www.secowarwick.com"
  },
  {
    id: 3,
    name: "Hertz Systems",
    logoUrl: "/assets/sponsors/hertz.svg",
    websiteUrl: "https://hertzsystems.com"
  },
  {
    id: 4,
    name: "Gedia",
    logoUrl: "/assets/sponsors/gedia.svg",
    websiteUrl: "https://www.gedia.com/pl"
  },
  {
    id: 5,
    name: "Swiss Krono",
    logoUrl: "/assets/sponsors/swiss.svg",
    websiteUrl: "https://www.swisskrono.pl/"
  },
  {
    id: 6,
    name: "ESA",
    logoUrl: "/assets/sponsors/esa.svg",
    websiteUrl: "https://www.esa.int/"
  },
  {
    id: 7,
    name: "BHPEx",
    logoUrl: "/assets/sponsors/bhpex.svg",
    websiteUrl: "https://bhpex.pl/"
  }
  
];

export default function CarouselSponsor() {
  const [duplicatedSponsors] = useState([...sponsors, ...sponsors, ...sponsors]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight / 3);
    }
  }, []);

  return (
    <div className="relative flex h-full w-full gap-2 sm:gap-4 overflow-hidden">
      {/* Left Column - Moving Up */}
      <div
        ref={containerRef}
        className="relative flex h-full w-1/2 flex-col overflow-hidden"
      >
        <motion.div
          animate={{
            y: [-height, 0],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
          className="flex flex-col gap-2 sm:gap-4"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <Link
              href={sponsor.websiteUrl}
              key={`${sponsor.id}-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-center rounded-lg hc:bg-white bg-secondary/50 p-2">
                <div className="relative h-12 sm:h-16 lg:h-20 w-full">
                  <Image
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Right Column - Moving Down */}
      <div className="relative flex h-full w-1/2 flex-col overflow-hidden">
        <motion.div
          animate={{
            y: [0, -height],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
          className="flex flex-col gap-2 sm:gap-4"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <Link
              href={sponsor.websiteUrl}
              key={`${sponsor.id}-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-center rounded-lg hc:bg-white bg-secondary/50 p-2">
                <div className="relative h-12 sm:h-16 lg:h-20 w-full">
                  <Image
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
