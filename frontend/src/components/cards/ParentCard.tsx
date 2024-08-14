import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getImage } from "@/lib/utils"
import Image from "next/image"

export default function ParentCard({
  name,
  src,
  position,
  description,
}: {
  name: string
  src: string
  position: string
  description: string
}) {
  return (
    <Card className=" flex h-64 shadow-sm sm:w-[32rem]">
      <div className="relative hidden h-full w-1/3 sm:block">
        <Image
          className="rounded-l-md object-cover"
          alt={`${name} img`}
          src={src.startsWith("/default/") ? src : getImage(src)}
          fill
        />
      </div>
      <div className="h-full w-full sm:w-2/3">
        <CardHeader>
          <CardTitle className="text-2xl font-bold leading-none text-primary">
            {name}
          </CardTitle>
          <CardDescription className="text-base font-bold leading-none text-foreground">
            {position}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-1/3">
          <p className="text-xs font-medium text-slate-500">{description}</p>
        </CardContent>
      </div>
    </Card>
  )
}
