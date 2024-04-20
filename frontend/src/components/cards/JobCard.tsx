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
import { formatDateYear } from "@/lib/utils"

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
    <Card className="w-72 sm:w-[40rem] lg:w-[58rem] sm:rounded-lg lg:rounded-3xl mx-4 my-2 aspect-[935/136] flex justify-between items-center cursor-pointer shadow-sm">
      <div className={`flex h-full rounded-[inherit] rounded-r-none`}>
        <div className="hidden sm:block sm:w-36 lg:w-60 h-full overflow-hidden rounded-[inherit] bg-slate-600 relative">
          <Image
            className="object-cover"
            alt={name + " image"}
            src={src}
            fill
          />
        </div>
        <div className="max-w-md overflow-clip">
          <CardHeader className="max-sm:py-4 max-sm:pl-2 sm:py-2 lg:py-6 pr-0">
            <CardTitle className="text-slate-800 text-lg leading-tight lg:leading-normal lg:text-2xl">
              {name}
            </CardTitle>
            <CardDescription className="font-bold text-primary lg:text-base text-xs">{`${numberWithSpaces(minPay)} PLN - ${numberWithSpaces(maxPay)} PLN`}</CardDescription>
          </CardHeader>
          <CardFooter className="text-slate-400 text-xs lg:text-sm font-semibold py-0 lg:pb-2 max-sm:pl-2 max-sm:pb-2">
            <MapPin className="p-[4px] lg:p-[2px] ml-[-4px]" />
            <div>{location}</div>
          </CardFooter>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full sm:m-0 lg:mt-4 max-sm:py-4 sm:p-2 lg:p-5">
        <div className="flex max-sm:flex-col max-sm:gap-2 justify-center items-center">
          <Badge className="mx-1 bg-primary/25 text-primary hover:bg-primary/20">
            {badges[0]?.name ?? "No badge"}
          </Badge>
          <Badge className="mx-1 text-primary border-primary" variant="outline">
            {badges[1]?.name ?? "No badge"}
          </Badge>
        </div>
        <div className="flex justify-center sm:justify-end items-center text-slate-400 text-xs font-light">
          {formatDateYear(date)}
        </div>
      </div>
    </Card>
  )
}
