import Image from "next/image"
import React from "react"

export default function Overview({ data }: { data: any }) {
  return (
    <div id={data.sectionId} className=" flex w-full flex-col">
      <div className="flex w-full flex-col items-center justify-around p-4 md:flex-row md:gap-6 md:p-8 lg:gap-8">
        <div className="relative h-[25vh] w-5/6 md:h-[50vh] lg:w-3/5">
          <Image alt="dyrektor" src={"/sections/overview-2.svg"} fill />
        </div>
        <div className="flex w-full flex-col gap-4  py-4 md:gap-6 lg:w-2/5 ">
          <h1 className="text-left text-3xl font-bold text-primary-foreground md:text-5xl lg:text-right lg:text-[56px] xl:text-6xl">
            {data.row[0].Title}
          </h1>
          <p className="text-left  text-base lg:text-right lg:text-xl ">
            {data.row[0].Description}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-around p-4 md:flex-row md:gap-6 md:p-8 lg:gap-8">
        <div className="flex w-full flex-col gap-4  py-4 md:gap-6 lg:w-2/5 ">
          <h1 className="text-left text-3xl font-bold text-primary-foreground md:text-5xl lg:text-[56px]  xl:text-6xl">
            {data.row[1].Title}
          </h1>
          <p className="text-left  text-base  lg:text-xl ">
            {data.row[1].Description}
          </p>
        </div>
        <div className="relative h-[25vh] w-5/6 md:h-[50vh] lg:w-3/5">
          <Image alt="dyrektor" src={"/sections/overview-2.svg"} fill />
        </div>
      </div>
    </div>
  )
}
