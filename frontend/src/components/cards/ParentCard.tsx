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
    <Card className=" flex h-64 w-4/5 shadow-sm sm:w-96  md:w-[32rem]">
      <div className="relative hidden h-full w-1/3 md:block">
        <Image
          className="rounded-l-md "
          alt={`${name} img`}
          src={src}
          fill
          objectFit="cover"
        />
      </div>
      <div className="h-full w-full md:w-2/3">
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
