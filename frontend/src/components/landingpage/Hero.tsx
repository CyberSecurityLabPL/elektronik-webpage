"use client"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero({ data }: { data: any }) {
  const heading = {
    initial: {
      y: -400,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  }
  const letter = {
    initial: {
      y: -400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
    },
  }

  return (
    <div>
      <div className=" relative flex  w-full flex-col justify-center  gap-8 bg-hero-squares bg-no-repeat px-4  md:px-12 lg:flex-row xl:justify-around">
        <div className="hero-content z-20 flex w-full items-center justify-around gap-8 pb-52 pt-12">
          <div className=" flex flex-col items-center justify-center">
            <motion.h1
              className="relative  bg-gradient-to-r  from-primary to-primary-foreground bg-clip-text py-4  text-center text-4xl font-extrabold  text-transparent  lg:text-5xl xl:text-6xl"
              initial={{
                opacity: 0,
                x: -500,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.4,
              }}
            >
              {data?.heading ?? "Witaj w Elektroniku"}
            </motion.h1>
            <motion.p
              className="max-w-[32rem] text-center text-base leading-relaxed text-primary-foreground md:text-lg"
              initial={{
                opacity: 0,
                x: -200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.8,
              }}
            >
              {data?.text ?? ""}
            </motion.p>
            <span className="flex w-full justify-center py-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button asChild variant={data?.link.type ?? ""}>
                  <Link href={data?.link.link ?? "#overview"}>
                    {data?.link.title ?? "Dowiedz się wiecej"}
                  </Link>
                </Button>
              </motion.div>
            </span>
          </div>
          <motion.div
            className="hero-container relative z-30 hidden aspect-[125/84] w-[565px] rounded-3xl lg:block 2xl:w-[625px]"
            initial={{
              opacity: 0,
              x: 500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <Image
              alt="dyrektor"
              src={process.env.NEXT_PUBLIC_BACKEND_URL + data.image.url}
              fill
              className="hero z-20 rounded-3xl object-cover "
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 h-48 w-full bg-lines-transition bg-repeat-x"></div>
      </div>
    </div>
  )
}
