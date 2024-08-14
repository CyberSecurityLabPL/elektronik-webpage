import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function BookCard({
  subject,
  src,
  title,
  dist,
  url,
}: {
  subject: string
  src: string
  title: string
  dist: string
  url: string
}) {
  return (
    <Card className="relative flex w-fit p-3 shadow-sm">
      <div className="flex h-full items-center">
        <div className="relative flex aspect-[8/12] w-20 items-center justify-center sm:w-32 ">
          <Image
            alt={`${title} img`}
            src={src}
            fill
            className="flex h-32 items-center rounded-lg object-cover sm:h-48"
          />
        </div>
      </div>

      <div className="flex h-full w-52 flex-col justify-between lg:w-[19rem]">
        <CardHeader className="py-0 lg:pb-2">
          <CardTitle className="text-lg font-semibold text-foreground lg:text-2xl">
            {subject}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2  text-xs text-foreground  lg:text-sm">
          <div>
            <p className="font-light">Tytuł: </p>
            <p className="mb-1 font-medium">{title}</p>
          </div>
          <div>
            <p className="font-light">Wydawnictwo: </p>
            <p className="font-medium">{dist ?? "Nieznane"}</p>
          </div>
        </CardContent>
        <CardFooter className=" justify-center py-0">
          <Button
            className="px-3 py-0 text-xs sm:px-4 sm:py-2 lg:text-sm"
            asChild
            variant={"outline"}
          >
            <Link href={url}>Kup Teraz</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
