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
    <div className="   h-fit flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center font-semibold text-slate-800 py-8 px-2">
        Dlaczego warto wybrać Elektrona?
      </h1>
      <div className="grid w-3/4 grid-cols-1 grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 gap-4">
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
        <Card className="lg:col-span-4  flex relative ">
          <CardContent className="w-72 h-full p-0 left-0 absolute">
            <div className="w-full h-full relative">
              <div className="hidden md:block w-full h-full bg-gradient-to-l from-white from-10% to-transparent absolute top-0 right-0 z-10" />
              <Image
                src={"/cards/university.png"}
                alt="Image"
                fill
                className="hidden md:block rounded-l-lg"
              />
            </div>
          </CardContent>
          <div className=" px-0 absolute right-0 z-20 flex flex-col items-end">
            <CardHeader className="pb-1 ">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-right">
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
        <Card className="flex relative lg:col-span-4">
          <div className="w-3/4 py-4 flex flex-col justify-end absolute left-0 bottom-0  z-20">
            <CardHeader className="pb-1 ">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                Przyjazna atmosfera
              </CardTitle>
            </CardHeader>
            <CardContent className=" py-0 text-sm w-11/12 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed est eu turpis porta fringilla.
              </p>
            </CardContent>
          </div>
          <CardContent className="w-72 h-full p-0  absolute right-0">
            <div className="w-full h-full relative right-0">
              <div className="hidden md:block w-full h-full bg-gradient-to-r from-white from-10% to-transparent absolute top-0 right-0 z-10" />
              <Image
                src={"/cards/friends.png"}
                alt="Image"
                fill
                className="hidden md:block rounded-r-lg"
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
          <CardFooter className=" text-xs px-0 py-4 flex justify-center gap-4   ">
            <div className="flex flex-col justify-center items-center w-1/4">
              <Headphones className="text-primary" />
              <span className="text-center ">Turnieje Esportowe</span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4">
              <Dumbbell className="text-primary" />
              <span className="text-center">Mocarny Elektroniarz</span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4">
              <Dribbble className="text-primary" />
              <span className="text-center">Turnieje sportowe</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
