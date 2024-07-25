"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
export default function Overview({ data }: { data: any }) {
  return (
    <div
      id={data.sectionId}
      className=" mb-24 flex w-full flex-col gap-24 px-4 xs:px-8 sm:px-16"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-12 ">
        <div className="flex w-full flex-col gap-4 md:gap-3 lg:w-2/5 ">
          <h1 className="text-center text-3xl font-bold text-primary-foreground xs:text-4xl sm:text-5xl md:text-left xl:text-6xl ">
            {data.row[0].title}
          </h1>
          <p className="text-center text-base  md:text-left lg:text-xl ">
            {data.row[0].description}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative aspect-[125/84] w-full  rounded-3xl md:w-[625px]"
        >
          <div className="absolute right-0 top-0  z-40 hidden h-full  w-full md:block">
            <Image
              src={"/assets/imgMaskFlip.svg"}
              alt="Image mask"
              fill
              priority
            />
          </div>
          <Image
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL + data.row[0].image.url ??
              "/cards/university.png"
            }
            alt="Hero Image"
            fill
            priority
            className="-scale-x-100 rounded-3xl"
          />
        </motion.div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row-reverse   lg:gap-16">
        <div className="flex w-full flex-col gap-4  md:gap-3 lg:w-2/5 ">
          <h1 className="text-center text-3xl font-bold text-primary-foreground xs:text-4xl sm:text-5xl md:text-right xl:text-6xl">
            {data.row[1].title}
          </h1>
          <p className="text-center text-base  md:text-right lg:text-xl ">
            {data.row[1].description}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative aspect-[125/84]  w-full rounded-3xl  md:w-[625px]"
        >
          <div className="absolute right-0 top-0  z-40 hidden h-full  w-full md:block">
            <Image
              src={"/assets/imgMask.svg"}
              alt="Image mask"
              fill
              priority
              className=""
            />
          </div>
          <Image
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL + data.row[1].image.url ??
              "/cards/university.png"
            }
            alt="Hero Image"
            fill
            priority
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  )
}
