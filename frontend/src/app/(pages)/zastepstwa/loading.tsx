import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-4">
        {/* Header skeleton */}
        <header className="my-6 flex w-full flex-col items-center justify-center sm:my-8 sm:mb-4">
          <div className="w-full text-center py-4">
            <Skeleton className="mx-auto h-12 w-64 sm:h-14 sm:w-72 lg:h-16 lg:w-96" />
          </div>
          <div className="mt-2 flex w-full justify-center">
            <Skeleton className="h-8 w-32 sm:h-9 sm:w-36" />
          </div>
          <div className="mt-2 flex w-full justify-start px-2">
            <Skeleton className="h-10 w-60 sm:h-11 sm:w-64" />
          </div>
        </header>

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