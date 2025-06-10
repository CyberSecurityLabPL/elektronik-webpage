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
    <Card className="flex h-auto w-full max-w-4xl rounded-xl shadow-sm">
      <div className="relative hidden h-[400px] w-[250px] shrink-0 sm:block">
        <Image 
          className="rounded-l-xl object-cover" 
          alt={`${name} img`} 
          src={src} 
          fill 
          sizes="250px"
          priority
        />
      </div>
      <div className="flex w-full flex-col p-4">
        <CardHeader className="px-0 py-2">
          <CardTitle className="text-2xl font-semibold text-primary">
            {name}
          </CardTitle>
          <span className="text-base font-medium text-neutral-400">
            {yearClass}
          </span>
        </CardHeader>
        <Separator className="bg-neutral-200" />
        <CardContent className="flex h-full flex-col gap-3 px-0 py-2">
          <div>
            <h2 className="mb-1 text-sm font-semibold text-neutral-400">
              Osiągnięcia:
            </h2>
            <div className="max-h-[150px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200">
              <div className="text-sm leading-relaxed break-words whitespace-pre-wrap">{achivments}</div>
            </div>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-neutral-400">
              Zainteresowania:
            </h2>
            <div className="text-sm leading-relaxed break-words whitespace-pre-wrap">{hobby}</div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
