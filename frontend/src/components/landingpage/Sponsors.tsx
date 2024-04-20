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
    <div className="w-full h-[50vh] bg-sponsors-bg bg-cover flex justify-center items-center  ">
      <m.div
        className="absoulte left-0 flex gap-12"
        animate={{
          // fix this animation
          x: ["0%", "-80%"],
          transition: {
            ease: "linear",
            duration: 48,
            repeat: Infinity,
          },
        }}
      >
        {[...images, ...images].map((image) => (
          <div
            key={image.src}
            className="relative overflow-hidden h-[100px] min-w-64 rounded-lg flex justify-center items-center "
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
