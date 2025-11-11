import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const truncate = (opis: string) =>
  opis?.length > 150 ? `${opis.substring(0, 120)}...` : opis

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
    <Card className="m-4 flex min-h-56 w-full max-w-3xl  cursor-pointer flex-col gap-4 rounded-3xl shadow-xs sm:flex-row">
      <div className="relative h-56 shrink sm:w-56 sm:shrink-0">
        <Image
          alt={name + " image"}
          src={src}
          fill
          className="min-w-56 rounded-t-3xl  object-cover sm:rounded-none sm:rounded-l-3xl  "
        />
      </div>
      <div className="flex  w-full flex-col justify-between px-4 py-6  pt-0 sm:pl-0 sm:pt-6">
        <div>
          <CardTitle>{name}</CardTitle>
          <CardContent className="align-center inline-block p-0 pt-4 font-medium">
            {truncate(opis)}
          </CardContent>
        </div>
        <CardFooter className="p-0 pt-2 ">{date}</CardFooter>
      </div>
    </Card>
  )
}
