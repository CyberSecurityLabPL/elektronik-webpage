import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "../ui/separator"

export default function StudentCard({
  yearClass,
  name,
  src,
  achivments,
  hobby,
}: {
  yearClass: string
  name: string
  src: string
  achivments: string
  hobby: string
}) {
  return (
    <Card className="flex h-auto min-h-80 w-full rounded-xl shadow-sm">
      <div className="relative hidden h-auto min-h-80 w-2/6 sm:block">
        <Image className="rounded-l-xl " alt={`${name} img`} src={src} fill />
      </div>
      <div className="relative min-h-80 w-full  px-4 sm:w-2/3 ">
        <CardHeader className="px-0 py-4">
          <CardTitle className="text-3xl font-semibold text-primary">
            {name}
          </CardTitle>
          <span className="text-base font-medium text-neutral-400">
            {yearClass}
          </span>
        </CardHeader>
        <Separator className=" bg-neutral-200" />
        <CardContent className="px-0  py-3">
          <h2 className="py-1 text-sm font-semibold text-neutral-400">
            Osiągnięcia:{" "}
          </h2>
          <div>{achivments}</div>

          <h2 className="py-1 pt-6 text-sm font-semibold text-neutral-400">
            Zainteresowania:{" "}
          </h2>
          <div>{hobby}</div>
        </CardContent>
      </div>
    </Card>
  )
}
