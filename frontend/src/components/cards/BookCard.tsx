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
    <Card className="flex w-fit aspect-[55/26] m-4 shadow-sm p-3">
      <div className="w-20 lg:w-32 h-full relative">
        <Image alt={`${title} img`} src={src} fill className="object-cover" />
      </div>
      <div className="w-52 lg:w-[19rem] h-full">
        <CardHeader className="py-0 lg:pb-2">
          <CardTitle className="font-semibold text-foreground text-lg lg:text-2xl">
            {subject}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs lg:text-sm text-foreground py-0 lg:pb-2">
          <p className="font-light">Tytuł: </p>
          <p className="font-medium mb-1">{title}</p>
          <p className="font-light">Wydawnictwo: </p>
          <p className="font-medium">{dist}</p>
        </CardContent>
        <CardFooter className="flex justify-center items-center w-full py-1 lg:py-0 my-0">
          <Button
            className="max-lg:hidden text-xs lg:text-sm"
            asChild
            variant={"outline"}
          >
            <Link href={url}>Kup Teraz</Link>
          </Button>
          <Button
            className="lg:hidden text-xs lg:text-sm p-[6px]"
            size={"sm"}
            asChild
            variant={"outline"}
          >
            <Link href={url} className="w-fit h-fit">
              Kup Teraz
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
