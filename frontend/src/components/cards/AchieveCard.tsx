import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const truncate = (opis: string) =>
  opis?.length > 100 ? `${opis.substring(0, 90)}...` : opis

export default function AchieveCard({
  name,
  src,
  date,
  opis,
}: {
  name: string
  src: string
  date: string
  opis: string
}) {
  return (
    <Card className="m-2 flex  cursor-pointer items-center justify-between rounded-3xl shadow-sm">
      <div className={`flex flex-col sm:flex-row h-full rounded-t-xl sm:rounded-l-xl sm:rounded-none`}>
        <div className="h-56 relative  w-full sm:w-2/4 rounded-[inherit] bg-slate-200">
          <Image alt={name + " image"} src={src} fill objectFit="cover" />
        </div>
        <div className="">
          <CardHeader>
            <CardTitle className="text-slate-800">{name}</CardTitle>
          </CardHeader>
          <CardContent className="align-center inline-block font-medium">
            <div className="float-left flex items-center justify-end text-black">
              {truncate(opis)}
            </div>
          </CardContent>
          <CardFooter className="flex py-0 text-sm font-semibold text-slate-400">
            <div className="float-left mb-2 flex items-center justify-end text-xs font-light text-slate-400">
              {date}
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
