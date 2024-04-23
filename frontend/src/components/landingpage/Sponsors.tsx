"use client"
import Image from "next/image"
import { motion as m } from "framer-motion"
import Link from "next/link"
const images = [
  {
    link: "https://www.google.com",
    src: "/sponsors/ksc.svg",
  },
  {
    link: "https://www.google.com",
    src: "/sponsors/ekoenergetyka.svg",
  },
  {
    link: "https://www.google.com",
    src: "/sponsors/lapp.svg",
  },
  {
    link: "https://www.google.com",
    src: "/sponsors/relpol.svg",
  },
  {
    link: "https://www.google.com",
    src: "/sponsors/seven.svg",
  },
]

export default function Sponsors() {
  return (
    <div className="z-30 flex h-[50vh] w-full items-center justify-center bg-sponsors-bg bg-cover  ">
      <m.div
        className="absoulte left-0 flex gap-12"
        animate={{
          x: ["0%", "-33.69%"],
          transition: {
            ease: "linear",
            repeatType: "loop",
            duration: 28,
            repeat: Infinity,
          },
        }}
      >
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index + image.src}
            className="relative flex h-[100px] min-w-64 items-center justify-center overflow-hidden rounded-lg "
          >
            <Link href={image.link}>
              <Image src={image.src} alt={image.src} fill />
            </Link>
          </div>
        ))}
      </m.div>
    </div>
  )
}
