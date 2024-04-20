import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export default function ParentCard({
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
    <Card className="m-8 flex aspect-[55/22] w-[38rem] shadow-sm">
      <div className="relative h-full w-1/3">
        <Image
          className="rounded-l-md"
          alt={`${name} img`}
          src={src}
          fill
          objectFit="cover"
        />
      </div>
      <div className="h-full w-2/3">
        <CardHeader>
          <CardDescription className="text-xs font-bold leading-tight text-slate-400">
            {titles}
          </CardDescription>
          <CardTitle className="text-2xl font-bold leading-none text-primary">
            {name}
          </CardTitle>
          <CardDescription className="text-base font-bold leading-none text-foreground">
            {position}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-1/3 overflow-hidden">
          <p className="text-xs font-medium text-slate-500">{description}</p>
        </CardContent>
      </div>
    </Card>
  )
}
