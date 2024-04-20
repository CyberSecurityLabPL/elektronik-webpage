import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { CalendarPlus, User } from "lucide-react"
import Link from "next/link"

interface NewsCardProps {
  author: string
  src: string
  date: string
  description: string
  title: string
  link: string
}

export default function NewsCard({
  author,
  src,
  date,
  description,
  title,
  link,
}: NewsCardProps) {
  return (
    <Card className="w-72 max-w-96 px-0 sm:w-96 md:w-full xl:w-96">
      <CardContent className="relative  h-48 rounded-t-lg bg-neutral-200 ">
        <Image src={src} alt="Image" fill className="rounded-t-md  " />
      </CardContent>
      <CardHeader className=" px-3 pb-0 pt-3">
        <CardTitle>
          <Link href={link} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative h-24 overflow-hidden p-3 text-xs">
        <div className="pointer-events-none absolute right-0  top-0 h-full w-full bg-gradient-to-b from-transparent to-white"></div>
        <p className=" ">{description}</p>
      </CardContent>
      <CardFooter className=" flex justify-between px-3 py-3  text-xs">
        <span className="flex items-center justify-center gap-2">
          <CalendarPlus className="h-5 w-5 text-primary sm:h-4 sm:w-4" />
          <p className="text-[8px] xl:text-[10px] ">{date}</p>
        </span>
        <span className="flex items-center justify-center gap-2">
          <User className="h-5 w-5 text-primary sm:h-4 sm:w-4" />
          <p className="text-[8px] xl:text-[10px] ">{author}</p>
        </span>
      </CardFooter>
    </Card>
  )
}
