"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import Image from "next/image"
import { getImage } from "@/lib/utils"
import { motion as m } from "framer-motion"

export default function Benefits({ data }: { data: any }) {
  return (
    <div
      id={data.sectionId}
      className="flex h-fit max-w-7xl flex-col items-center justify-center px-8 py-16"
    >
      <m.h2
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="text-lg font-medium text-primary-foreground"
      >
        Plusy naszej szkoly
      </m.h2>
      <m.h1
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="px-2 py-4 pb-14 text-center font-sans text-4xl  font-bold text-slate-800"
      >
        Dlaczego warto wybrać Elektrona?
      </m.h1>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:grid-rows-2 ">
        {data.benefitCard.map((card: any, index: number) => (
          <Card
            key={index}
            className={`rounded-2xl p-6 shadow-[0_10px_25px_-10px_rgba(53,77,252,0.3)] ${
              index == 1 || index == 2 ? "md:col-span-2" : ""
            }`}
          >
            <CardContent className="relative h-52 rounded-lg">
              <Image
                src={getImage(card.image.url)}
                alt="Dlaczego warto wybrać naszą szkołe?"
                fill
                quality={80}
                className="rounded-2xl object-cover"
              />
            </CardContent>
            <CardHeader className="p-0 pt-6">
              <CardTitle className="text-primary-foreground ">
                {card.title}
              </CardTitle>
              <CardDescription className={` text-slate-700`}>
                {card.content}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
