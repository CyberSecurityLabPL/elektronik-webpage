import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import IconComponent from "../Icon"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { formatDate, formatDateYear } from "@/lib/utils"

function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export default function JobCard({
  name,
  src,
  date,
  minPay,
  maxPay,
  location,
  badges,
}: {
  name: string
  src: string
  date: string
  minPay: number
  maxPay: number
  location: string
  badges: Array<{
    name: string
  }>
}) {
  return (
    <Card className="flex w-fit cursor-pointer flex-col gap-4 rounded-xl p-4 md:flex-row md:p-0 lg:w-[56rem]">
      <CardContent className="relative hidden w-80 rounded-l-lg md:block ">
        <Image
          className="rounded-l-lg object-cover"
          alt={name + " image"}
          src={src}
          fill
        />
      </CardContent>
      <CardHeader className="flex flex-col gap-8 px-0 pb-4 pt-0 md:py-4 ">
        <div>
          <CardTitle className="break-all text-slate-800">{name}</CardTitle>
          <CardDescription className="text-base font-bold text-primary">{`${numberWithSpaces(minPay)} PLN - ${numberWithSpaces(maxPay)} PLN`}</CardDescription>
        </div>

        <div className="flex gap-2 text-slate-400">
          <MapPin />
          <span>{location}</span>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col items-end justify-between gap-1 p-0 md:p-4">
        <div className="flex gap-2">
          <Badge className=" bg-primary/25 text-primary hover:bg-primary/20">
            {badges[0]?.name ?? "No badge"}
          </Badge>
          <Badge className=" border-primary text-primary" variant="outline">
            {badges[1]?.name ?? "No badge"}
          </Badge>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          {formatDateYear(date)}
        </span>
      </CardFooter>
    </Card>
  )
}
