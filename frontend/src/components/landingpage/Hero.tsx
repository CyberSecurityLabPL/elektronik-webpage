import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero({ data }: { data: any }) {
  return (
    <div>
      <div className="relative flex h-[calc(100vh-8rem)] w-full flex-col justify-center  gap-8 bg-hero-squares bg-no-repeat px-4  md:px-12 lg:flex-row xl:justify-around">
        <div className="z-20 flex w-full items-center justify-around gap-8 pb-24">
          <div className="flex flex-col items-center justify-center">
            <h1 className="inline-block  bg-gradient-to-r from-primary to-primary-foreground bg-clip-text py-4 text-center text-4xl font-extrabold text-transparent lg:text-5xl xl:text-6xl">
              {data?.heading ?? "Witaj w Elektroniku"}
            </h1>
            <p className="max-w-[32rem] text-center text-base leading-relaxed text-primary-foreground md:text-lg">
              {data?.text ?? ""}
            </p>
            <span className="flex w-full justify-center py-4">
              <Button asChild variant={data?.link.type ?? ""}>
                <Link href={data?.link.link ?? "#overview"}>
                  {data?.link.title ?? "Dowiedz się wiecej"}
                </Link>
              </Button>
            </span>
          </div>
          <div className="relative z-30 hidden aspect-[125/84] w-[565px] rounded-3xl lg:block 2xl:w-[625px]">
            <Image
              alt="dyrektor"
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL + data.image.url ??
                "/sections/kmieciu.svg"
              }
              fill
              className=" hero z-20 rounded-3xl object-cover "
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 h-48 w-full bg-splash-transition bg-repeat-x"></div>
      </div>
    </div>
  )
}
