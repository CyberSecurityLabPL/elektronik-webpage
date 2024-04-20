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
    <Card className="flex w-[38rem] aspect-[55/22] m-8 shadow-sm">
      <div className="w-1/3 h-full relative">
        <Image
          className="rounded-l-md"
          alt={`${name} img`}
          src={src}
          fill
          objectFit="cover"
        />
      </div>
      <div className="w-2/3 h-full">
        <CardHeader>
          <CardDescription className="font-bold text-xs text-slate-400 leading-tight">
            {titles}
          </CardDescription>
          <CardTitle className="font-bold text-primary text-2xl leading-none">
            {name}
          </CardTitle>
          <CardDescription className="font-bold text-foreground text-base leading-none">
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
