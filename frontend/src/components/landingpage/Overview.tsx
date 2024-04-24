import Image from "next/image"
import React from "react"

export default function Overview() {
  return (
    <div className=" w-full flex flex-col   ">
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 w-full items-center justify-around p-4 md:p-8">
        <div className="relative h-[25vh] md:h-[50vh] w-5/6 lg:w-3/5">
          <Image alt="dyrektor" src={"/sections/overview-2.svg"} fill />
        </div>
        <div className="flex w-full lg:w-2/5 flex-col  gap-4 md:gap-6 py-4 ">
          <h1 className="text-3xl md:text-5xl lg:text-[56px] xl:text-6xl font-bold text-left lg:text-right text-primary-foreground">Poznaj naszą szkołę</h1>
          <p className="text-left  text-base lg:text-right lg:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
            mollis.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 w-full items-center justify-around p-4 md:p-8">
        
        <div className="flex w-full lg:w-2/5 flex-col  gap-4 md:gap-6 py-4 ">
          <h1 className="text-3xl md:text-5xl lg:text-[56px] xl:text-6xl font-bold text-left  text-primary-foreground">Wspaniali nauczycielowie</h1>
          <p className="text-left  text-base  lg:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
            mollis.
          </p>
        </div>
        <div className="relative h-[25vh] md:h-[50vh] w-5/6 lg:w-3/5">
          <Image alt="dyrektor" src={"/sections/overview-2.svg"} fill />
        </div>
      </div>
    </div>
  )
}
