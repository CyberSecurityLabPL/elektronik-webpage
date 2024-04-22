import Image from "next/image"
import React from "react"

export default function Overview() {
  return (
    <div className=" w-full py-48  ">
      <div className="flex h-screen w-full items-center justify-around bg-yellow-blob bg-cover">
        <div className="relative h-[50vh] w-3/5">
          <Image alt="dyrektor" src={"/sections/overview-2.svg"} fill />
        </div>
        <div className="flex w-2/5 flex-col  gap-8 py-8 pr-16 text-white">
          <h1 className="text-6xl font-bold ">Poznaj naszą szkołę</h1>
          <p className="text-right  text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
            mollis.
          </p>
        </div>
      </div>

      {/* Rebuild this maybe divide bg to two img */}
      <div className="flex h-screen w-full items-center justify-between  bg-violet-blob bg-cover">
        <div className="flex w-3/5 flex-col  gap-6 py-8 pl-16 text-white">
          <h1 className="text-6xl font-bold ">Poznaj naszą szkołę</h1>
          <p className="pr-16 text-left text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
            mollis.
          </p>
        </div>
        <div className="relative h-[50vh] w-3/5">
          <Image alt="dyrektor" src={"/sections/overview.svg"} fill />
        </div>
      </div>
    </div>
  )
}
