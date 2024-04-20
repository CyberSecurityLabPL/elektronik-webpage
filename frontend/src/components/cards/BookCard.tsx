import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

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
    <Card className="m-4 flex aspect-[55/26] w-fit p-3 shadow-sm">
      <div className="relative h-full w-20 lg:w-32">
        <Image alt={`${title} img`} src={src} fill className="object-cover" />
      </div>
      <div className="h-full w-52 lg:w-[19rem]">
        <CardHeader className="py-0 lg:pb-2">
          <CardTitle className="text-lg font-semibold text-foreground lg:text-2xl">
            {subject}
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 text-xs text-foreground lg:pb-2 lg:text-sm">
          <p className="font-light">Tytuł: </p>
          <p className="mb-1 font-medium">{title}</p>
          <p className="font-light">Wydawnictwo: </p>
          <p className="font-medium">{dist}</p>
        </CardContent>
        <CardFooter className="my-0 flex w-full items-center justify-center py-1 lg:py-0">
          <Button
            className="text-xs max-lg:hidden lg:text-sm"
            asChild
            variant={"outline"}
          >
            <Link href={url}>Kup Teraz</Link>
          </Button>
          <Button
            className="p-[6px] text-xs lg:hidden lg:text-sm"
            size={"sm"}
            asChild
            variant={"outline"}
          >
            <Link href={url} className="h-fit w-fit">
              Kup Teraz
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
