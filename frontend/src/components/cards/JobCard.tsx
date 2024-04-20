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
    <Card className="mx-4 my-2 flex aspect-[935/136] w-72 cursor-pointer items-center justify-between shadow-sm sm:w-[40rem] sm:rounded-lg lg:w-[58rem] lg:rounded-3xl">
      <div className={`flex h-full rounded-[inherit] rounded-r-none`}>
        <div className="relative hidden h-full overflow-hidden rounded-[inherit] bg-slate-600 sm:block sm:w-36 lg:w-60">
          <Image
            className="object-cover"
            alt={name + " image"}
            src={src}
            fill
          />
        </div>
        <div className="max-w-md overflow-clip">
          <CardHeader className="pr-0 max-sm:py-4 max-sm:pl-2 sm:py-2 lg:py-6">
            <CardTitle className="text-lg leading-tight text-slate-800 lg:text-2xl lg:leading-normal">
              {name}
            </CardTitle>
            <CardDescription className="text-xs font-bold text-primary lg:text-base">{`${numberWithSpaces(minPay)} PLN - ${numberWithSpaces(maxPay)} PLN`}</CardDescription>
          </CardHeader>
          <CardFooter className="py-0 text-xs font-semibold text-slate-400 max-sm:pb-2 max-sm:pl-2 lg:pb-2 lg:text-sm">
            <MapPin className="ml-[-4px] p-[4px] lg:p-[2px]" />
            <div>{location}</div>
          </CardFooter>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between max-sm:py-4 sm:m-0 sm:p-2 lg:mt-4 lg:p-5">
        <div className="flex items-center justify-center max-sm:flex-col max-sm:gap-2">
          <Badge className="mx-1 bg-primary/25 text-primary hover:bg-primary/20">
            {badges[0]?.name ?? "No badge"}
          </Badge>
          <Badge className="mx-1 border-primary text-primary" variant="outline">
            {badges[1]?.name ?? "No badge"}
          </Badge>
        </div>
        <div className="flex items-center justify-center text-xs font-light text-slate-400 sm:justify-end">
          {formatDateYear(date)}
        </div>
      </div>
    </Card>
  )
}
