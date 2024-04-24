import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Calendar, Dribbble, Dumbbell, Headphones, Navigation, Paintbrush, Smile } from "lucide-react"
import Image from "next/image"
import IconComponent from "../Icon"
import { Separator } from "../ui/separator"

export default function Benefits() {
  return (
    <div className="   flex h-fit flex-col items-center justify-center">
      <h1 className="px-2 py-8 text-center text-4xl font-semibold text-slate-800">
        Dlaczego warto wybrać Elektrona?
      </h1>
      <Separator className="w-3/4 "/>
      <div className="flex gap-4 justify-center items-center flex-col lg:flex-row p-8 py-12">
        <div className="flex flex-col justify-center items-center px-8 gap-6 text-center">
          <IconComponent icon={Navigation} color="blue" IsCircle={true}/>
          <p className=" md:px-8 lg:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro modi blanditiis pariatur dolores inventore minima dignissimos repellat sequi neque?</p>
        </div>
        <Separator className="block lg:hidden w-3/4" />
        <div className="flex flex-col justify-center items-center px-8 gap-6 text-center">
          <IconComponent icon={Paintbrush} color="blue" IsCircle={true}/>
          <p className=" md:px-8 lg:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro modi blanditiis pariatur dolores inventore minima dignissimos repellat sequi neque?</p>
        </div>
        <Separator className="block lg:hidden w-3/4" />
        <div className="flex flex-col justify-center items-center px-8 gap-6 text-center">
          <IconComponent icon={Smile} color="blue" IsCircle={true}/>
          <p className=" md:px-8 lg:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro modi blanditiis pariatur dolores inventore minima dignissimos repellat sequi neque?</p>
        </div>
        <Separator className="block lg:hidden w-3/4" />
        <div className="flex flex-col justify-center items-center px-8 gap-6 text-center">
          <IconComponent icon={Calendar} color="blue" IsCircle={true}/>
          <p className=" md:px-8 lg:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro modi blanditiis pariatur dolores inventore minima dignissimos repellat sequi neque?</p>
        </div>
      </div>
      <Separator className="w-3/4 "/>
    </div>
  )
}
