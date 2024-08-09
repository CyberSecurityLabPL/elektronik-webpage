import React from "react"
import { Button, buttonVariants } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Lightbulb } from "lucide-react"
import Image from "next/image"

const Hero2 = ({ data }: { data: any }) => {
  return (
    <div className="relative mb-20 flex w-full flex-col items-center px-4 py-20">
      {/* BUBBLES BACKGROUND */}
      <Image
        src="/backgrounds/bubbles.svg"
        alt=""
        className="absolute bottom-0 left-0 -z-10 h-[848px] w-full"
        width={1920}
        height={1080}
      />

      <div className="relative flex w-full max-w-xl flex-col items-center gap-8 2xl:max-w-2xl">
        <h1 className="text-center text-4xl font-bold text-primary xs:text-5xl xl:text-6xl">
          {data?.heading ?? "Witaj w Elektroniku"}
        </h1>
        <p className="text-center text-base text-primary-foreground xs:text-lg xl:text-xl ">
          {data?.text ?? "Zapraszamy do zapoznania się z naszą ofertą."}
        </p>

        {/* BUTTON */}

        <div className="mt-20 flex flex-col gap-8 sm:flex-row">
          <Link
            href={"/articles"}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xs border-[3px] border-primary py-6 text-lg"
            )}
          >
            Sprawdź aktualności
          </Link>
          <Link
            href={"#overview"}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full max-w-xs py-6 text-lg"
            )}
          >
            Dowiedz się więcej <Lightbulb className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* ARROWS */}

        <Image
          src="/assets/left-arrow.svg"
          alt=""
          className="absolute -left-[250px] top-0 hidden md:block"
          width={200}
          height={170}
        />
        <Image
          src="/assets/right-arrow.svg"
          alt=""
          className="-inset-1rotate-12 absolute -right-[200px] top-[20px] hidden md:block"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-20 grid  w-full max-w-7xl grid-flow-dense grid-cols-2 grid-rows-1 gap-8  s:grid-rows-2 lg:grid-rows-1 lg:[grid-template-columns:_1fr_3fr_1fr]">
        <Photo src="/assets/elektronik1.png" className="hidden s:block" />

        <Photo
          src="/assets/elektronik2.png"
          className="-order-1 col-span-2 lg:col-span-1 lg:h-[400px]"
        />
        <Photo src="/assets/elektronik3.png" className="hidden s:block" />
      </div>
    </div>
  )
}

function Photo({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[400px] rounded-3xl border-4 border-primary bg-primary/10 p-2",
        className
      )}
    >
      <div
        className={
          "h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat  outline-[20px] outline-primary  "
        }
        style={{ backgroundImage: `url('${src}')` }}
      />
    </div>
  )
}

export default Hero2

// const heading = {
//   initial: {
//     y: -400,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.04,
//       staggerDirection: -1,
//     },
//   },
// }
// const letter = {
//   initial: {
//     y: -400,
//   },
//   animate: {
//     y: 0,
//     transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
//   },
// }
