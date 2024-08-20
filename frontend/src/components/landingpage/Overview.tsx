"use client"
import { cn, getImage } from "@/lib/utils"
import Image from "next/image"
import { InView } from "../motion/InView"
import { UseInViewOptions } from "framer-motion"
export default function Overview({ data }: { data: any }) {
  return (
    <div
      id={data.sectionId}
      className=" mb-24 mt-48 flex w-full flex-col gap-24 px-4 xs:px-8 sm:px-16"
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
  const mergedViewOptions = {
    margin: reverse ? "0px 0px -350px 0px" : "0px 0px 350px 0px",
    once: true,
    ...viewOptions,
  }

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
      viewOptions={mergedViewOptions}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-12  md:flex-row-reverse lg:gap-16",
        reverse ? "flex-col-reverse" : ""
      )}
    >
      <div className="flex w-full flex-col gap-4  md:gap-3 lg:w-2/5 ">
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
        <p
          className={cn("text-center text-base lg:text-xl", {
            "md:text-right": reverse,
            "md:text-left": !reverse,
          })}
        >
          {data.description}
        </p>
      </div>
      <div
        className={cn(
          "relative aspect-[125/84] w-full  rounded-3xl md:w-[625px]",
          reverse ? " order-first" : ""
        )}
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
          src={getImage(data.image?.url)}
          alt="Hero Image"
          fill
          priority
          className="rounded-3xl"
        />
      </div>
    </InView>
  )
}
