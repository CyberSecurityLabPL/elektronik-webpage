import Header from "@/components/Header"
import { formatDateWeek } from "@/lib/utils"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import SubstitutionsNavigation from "./SubstitutionsNavigation"
import ZastepstwaData from "./ZastepstwaData"
import { Skeleton } from "@/components/ui/skeleton"

export const dynamic = "force-dynamic"

export default async function Page({
  params,
}: {
  params: Promise<{ date: string }>
}) {
  const { date } = await params

  if (!isValidDateFormat(date)) {
    notFound()
  }

  return (
    <main className="max-w-(--breakpoint-lg) mx-auto flex w-full flex-col items-center">
      <Header
        animate={false}
        title="Zastępstwa"
        subtitle={formatDateWeek(date)}
      />
      <div className="relative min-h-48 w-full rounded-lg border p-2 text-xs shadow shadow-slate-300/20 sm:text-sm md:p-4 md:text-base">
        <span className="text-foreground"></span>
        <Suspense fallback={<SubstitutionSkeleton />}>
          {/* Ten komponent pobiera dane na serwerze */}
          <ZastepstwaData date={date} />
        </Suspense>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex w-full items-center justify-center gap-2">
        <SubstitutionsNavigation date={date} />
      </div>
    </main>
  )
}

function SubstitutionSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

function isValidDateFormat(date: string) {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(date)) return false

  const parsedDate = new Date(date)
  return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
}
function isWeekend(date: string) {
  const day = new Date(date).getDay()
  return day === 0 || day === 6
}
