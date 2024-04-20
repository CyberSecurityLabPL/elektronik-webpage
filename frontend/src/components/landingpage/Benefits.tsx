import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Dribbble, Dumbbell, Headphones } from "lucide-react"
import Image from "next/image"

export default function Benefits() {
  return (
    <div className="   flex h-fit flex-col items-center justify-center">
      <h1 className="px-2 py-8 text-center text-4xl font-semibold text-slate-800">
        Dlaczego warto wybrać Elektrona?
      </h1>
      <div className="grid w-3/4 grid-cols-1 grid-rows-4 gap-4 lg:grid-cols-6 lg:grid-rows-2">
        <Card variant={"glass"} className="lg:col-span-2">
          <CardHeader className="pb-1">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl">
              Świetna Lokalizacja
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:w-4/6 lg:w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
              mollis.Vivamus tristique, odio et accumsan mollis.
            </p>
          </CardContent>
        </Card>
        <Card className="relative  flex lg:col-span-4 ">
          <CardContent className="absolute left-0 h-full w-72 p-0">
            <div className="relative h-full w-full">
              <div className="absolute right-0 top-0 z-10 hidden h-full w-full bg-gradient-to-l from-white from-10% to-transparent md:block" />
              <Image
                src={"/cards/university.png"}
                alt="Image"
                fill
                className="hidden rounded-l-lg md:block"
              />
            </div>
          </CardContent>
          <div className=" absolute right-0 z-20 flex flex-col items-end px-0">
            <CardHeader className="pb-1 ">
              <CardTitle className="text-right text-xl sm:text-2xl md:text-3xl">
                Świeżo wyremontowana
              </CardTitle>
            </CardHeader>
            <CardContent className="text-right  text-sm md:w-4/6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed est eu turpis porta fringilla. Vivamus tristique, odio et
                accumsan mollis.Vivamus tristique, odio et accumsan mollis.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="relative flex lg:col-span-4">
          <div className="absolute bottom-0 left-0 z-20 flex w-3/4 flex-col justify-end  py-4">
            <CardHeader className="pb-1 ">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                Przyjazna atmosfera
              </CardTitle>
            </CardHeader>
            <CardContent className=" w-11/12 py-0 text-sm ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed est eu turpis porta fringilla.
              </p>
            </CardContent>
          </div>
          <CardContent className="absolute right-0 h-full  w-72 p-0">
            <div className="relative right-0 h-full w-full">
              <div className="absolute right-0 top-0 z-10 hidden h-full w-full bg-gradient-to-r from-white from-10% to-transparent md:block" />
              <Image
                src={"/cards/friends.png"}
                alt="Image"
                fill
                className="hidden rounded-r-lg md:block"
              />
            </div>
          </CardContent>
        </Card>
        <Card variant={"glass"} className="lg:col-span-2">
          <CardHeader className="pb-1">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl">
              Ciekawe eventy
            </CardTitle>
          </CardHeader>
          <CardContent className=" pb-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            est eu turpis porta fringilla. Vivamus tristique, odio et accumsan
            mollis. Vivamus tristique, odio et accumsan mollis.
          </CardContent>
          <CardFooter className=" flex justify-center gap-4 px-0 py-4 text-xs   ">
            <div className="flex w-1/4 flex-col items-center justify-center">
              <Headphones className="text-primary" />
              <span className="text-center ">Turnieje Esportowe</span>
            </div>
            <div className="flex w-1/4 flex-col items-center justify-center">
              <Dumbbell className="text-primary" />
              <span className="text-center">Mocarny Elektroniarz</span>
            </div>
            <div className="flex w-1/4 flex-col items-center justify-center">
              <Dribbble className="text-primary" />
              <span className="text-center">Turnieje sportowe</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
