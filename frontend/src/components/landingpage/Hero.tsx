import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div>
      <div className="relative px-4 md:px-12 flex flex-col justify-center  gap-8 lg:flex-row xl:justify-around w-full  h-[calc(100vh-8rem)] bg-hero-squares bg-no-repeat">
        <div className="w-full flex justify-around items-center gap-8 pb-24 z-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl  lg:text-5xl xl:text-6xl text-center font-extrabold py-4 bg-gradient-to-r from-primary to-primary-foreground inline-block text-transparent bg-clip-text">
              Witaj w Elektroniku
            </h1>
            <p className="text-center text-base md:text-lg max-w-[32rem] text-primary-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
              mollis.
            </p>
            <span className="w-full flex justify-center py-4">
              <Button asChild>
                <Link href="/aktualnosci">Dowiedz się więcej</Link>
              </Button>
            </span>
          </div>
          {/* lg:aspect-[125/84] */}
          <div className="hidden lg:block  min-[1420px]:max-w-[50rem]    lg:max-w-[30rem] xl:max-w-[35rem]  2xl:max-w-[40rem] max-w-[35rem] w-full relative  h-3/6 z-30 ">
            <Image alt="dyrektor" src={"/sections/hero.svg"} fill />
          </div>
        </div>
        <div className="w-full z-10 absolute bottom-0 left-0 h-48 bg-repeat-x bg-splash-transition"></div>
      </div>
    </div>
  )
}
