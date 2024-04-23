import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero({data}:{data:any}) {
  
  return (
    <div>
      <div className="relative flex h-[calc(100vh-8rem)] w-full flex-col justify-center  gap-8 bg-hero-squares bg-no-repeat px-4  md:px-12 lg:flex-row xl:justify-around">
        <div className="z-20 flex w-full items-center justify-around gap-8 pb-24">
          <div className="flex flex-col items-center justify-center">
            <h1 className="inline-block  bg-gradient-to-r from-primary to-primary-foreground bg-clip-text py-4 text-center text-4xl font-extrabold text-transparent lg:text-5xl xl:text-6xl">
              {data.Heading}
            </h1>
            <p className="max-w-[32rem] text-center text-base leading-relaxed text-primary-foreground md:text-lg">
              {data.Text}
            </p>
            <span className="flex w-full justify-center py-4">
              <Button asChild type={data.Link.type}>
                <Link href={data.Link.link}>{data.Link.title}</Link>
              </Button>
            </span>
          </div>
          {/* lg:aspect-[125/84] */}
          <div className="relative z-30  hidden    h-3/6 w-full  max-w-[35rem] lg:block lg:max-w-[30rem] xl:max-w-[35rem]  min-[1420px]:max-w-[50rem] 2xl:max-w-[40rem] ">
            <Image alt="dyrektor" src={"/sections/hero.svg"} fill />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 h-48 w-full bg-splash-transition bg-repeat-x"></div>
      </div>
    </div>
  )
}
