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
import { cn } from "@/lib/utils"

export default function WorkerCard({
  titles,
  name,
  src,
  position,
  description,
  className
}: {
  titles: string
  name: string
  src: string
  position: string
  description: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
        <div className="relative aspect-3/4 w-full">
          <Image
            className="rounded-xl object-cover"
            alt={`${name} img`}
            src={src.startsWith("/default/") ? src : getImage(src)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold leading-tight text-slate-400">
            {titles}
          </p>
          <p className="text-2xl font-bold leading-none text-primary">{name}</p>
          <p className="text-base font-bold leading-none text-foreground">{position}</p>
        </div>
        <p className="text-xs font-medium text-slate-500">{description}</p>
      </div>
    </div>
  )
}
