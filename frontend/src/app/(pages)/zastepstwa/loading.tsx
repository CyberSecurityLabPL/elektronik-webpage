import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"

export default function Loading() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-4">
        {/* Header skeleton */}
        <Header animate={false} title={"Zastępstwa"}>
          <div className=" flex w-full max-w-7xl justify-center px-2 sm:justify-start ">
            <div className="text-md relative right-2  mt-2 w-fit    gap-4 text-pretty stroke-primary-foreground text-center leading-relaxed text-primary-foreground hover:cursor-pointer hover:stroke-primary hover:text-primary sm:text-lg lg:text-xl">
              <Button
                variant={"outline"}
                className={cn("w-[240px] pl-3 text-left font-normal")}
              >
                <span>Wybierz date</span>

                <CalendarIcon className="ml-auto h-5 w-5 opacity-70" />
              </Button>
            </div>
          </div>
        </Header>

        {/* Content skeleton */}
        <div className="h-fit min-h-96 w-full rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex flex-col gap-4 p-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-6 w-3/5" />
          </div>
        </div>

        {/* Navigation buttons skeleton */}
        <div className="flex gap-2">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </main>
  )
}
