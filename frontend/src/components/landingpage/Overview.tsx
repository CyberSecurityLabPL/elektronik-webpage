import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

export default function Overview({ data }: { data: any }) {
  console.log(
    "src:  " + process.env.NEXT_PUBLIC_BACKEND_URL + data.row[0].image.url
  )

  return (
    <div id={data.sectionId} className=" flex w-full flex-col">
      <div className="flex w-full flex-col items-center justify-center  md:flex-row md:gap-6 lg:gap-16">
        <div className="relative aspect-[125/84] w-[625px] rounded-3xl">
          <div className="absolute right-0  top-0 z-40 aspect-[125/84] h-full w-full">
            <Image
              src={"/assets/imgMaskFlip.svg"}
              alt="Image mask"
              fill
              priority
              className=""
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
        </div>
        <div className="flex w-full flex-col gap-4  md:gap-6 lg:w-2/5 ">
          <h1 className="text-left text-3xl font-bold text-primary-foreground md:text-5xl lg:text-right lg:text-[56px] xl:text-6xl">
            {data.row[0].title}
          </h1>
          <p className="text-left  text-base lg:text-right lg:text-xl ">
            {data.row[0].description}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center  md:flex-row md:gap-6 lg:gap-16">
        <div className="flex w-full flex-col gap-4  md:gap-6 lg:w-2/5 ">
          <h1 className="text-left text-3xl font-bold text-primary-foreground md:text-5xl lg:text-[56px]  xl:text-6xl">
            {data.row[1].title}
          </h1>
          <p className="text-left  text-base  lg:text-xl ">
            {data.row[1].description}
          </p>
        </div>
        <div className="relative aspect-[125/84] w-[625px]  rounded-3xl">
          <div className="absolute right-0  top-0 z-40 aspect-[125/84] h-full w-full">
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
        </div>
      </div>
    </div>
  )
}
