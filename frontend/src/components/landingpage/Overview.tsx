"use client"
import { cn, getImage } from "@/lib/utils"
import Image from "next/image"
import { InView } from "../motion/InView"
import { motion } from "framer-motion"
import { UseInViewOptions } from "framer-motion"
export default function Overview({ data }: { data: any }) {
  return (
    <div
      id={data.sectionId}
      className=" mb-24 mt-24 flex w-full flex-col gap-32 px-4 xs:px-8 sm:px-16"
    >
      <Row data={data.row[0]} viewOptions={{ amount: 0.9 }} />
      <Row data={data.row[1]} reverse={true} />
    </div>
  )
}

function Row({
  data,
  reverse,
  viewOptions,
}: {
  data: any
  reverse?: boolean
  viewOptions?: UseInViewOptions
}) {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          x: reverse ? 100 : -100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-16  md:flex-row-reverse lg:gap-24",
        reverse ? "flex-col-reverse" : ""
      )}
    >
      {/* md:mt-16 */}
      <div className="flex w-full flex-col gap-8   md:gap-6 lg:w-2/5 ">
        <div className="flex flex-col gap-4">
          <h3
            className={cn("text-center text-lg font-semibold", {
              "md:text-right": reverse,
              "md:text-left": !reverse,
            })}
          >
            {/* Dołącz do nas */}
            {data.subTitle}
          </h3>
          <h1
            className={cn(
              "text-center text-3xl font-bold text-primary xs:text-4xl sm:text-5xl md:text-right xl:text-6xl",
              {
                "md:text-right": reverse,
                "md:text-left": !reverse,
              }
            )}
          >
            {data.title}
          </h1>
        </div>

        <p
          className={cn(
            "text-center text-base text-secondary-foreground lg:text-xl",
            {
              "md:text-right": reverse,
              "md:text-left": !reverse,
            }
          )}
        >
          {data.description}
        </p>
      </div>
      <div
        className={cn(
          "shadow-mask  relative aspect-[125/84] w-full  rounded-3xl md:w-[625px]",
          reverse ? " order-first" : ""
        )}
      >
        <Image
          src={getImage(data.image?.url)}
          alt="Hero Image"
          fill
          priority
          className={cn("rounded-3xl  ", reverse ? "mask" : "mask2")}
        />
      </div>
    </InView>
  )
}
