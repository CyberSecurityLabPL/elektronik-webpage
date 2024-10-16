import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getImage } from "@/lib/utils"
import Image from "next/image"

export default function WorkerCard({
  titles,
  name,
  src,
  position,
  description,
}: {
  titles: string
  name: string
  src: string
  position: string
  description: string
}) {
  return (
    <Card className="flex h-60 w-full shadow-sm">
      <div className="relative hidden h-full w-1/4 md:block">
        <Image
          className="rounded-l-md "
          alt={`${name} img`}
          src={src.startsWith("/default/") ? src : getImage(src)}
          fill
        />
      </div>
      <div className="relative h-full w-full md:w-2/3">
        <CardHeader>
          <CardDescription className="text-xs font-bold leading-tight text-slate-400">
            {titles}
          </CardDescription>
          <CardTitle className="text-2xl font-bold leading-none text-primary">
            {name}
          </CardTitle>
          <CardDescription className="max-h-12 text-base font-bold leading-none text-foreground">
            {position}
          </CardDescription>
        </CardHeader>
        <CardContent className="sm:min-h-1/5 h-1/4 max-h-fit pb-0">
          <p className="text-xs font-medium text-slate-500">{description}</p>
        </CardContent>
      </div>
    </Card>
  )
}
