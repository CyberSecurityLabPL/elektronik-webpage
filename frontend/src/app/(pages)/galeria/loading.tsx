import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

export default function loading() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      <div className="flex h-32 w-full items-center justify-center">
        <Skeleton className="h-20 w-56" />
      </div>
      <div className="flex h-screen w-full justify-center gap-6 ">
        <div className="flex flex-col gap-6">
          <Skeleton className="h-96 w-64" />
          <Skeleton className="h-56 w-64" />
        </div>
        <div className="flex flex-col gap-6">
          <Skeleton className="h-56 w-64" />
          <Skeleton className="h-96 w-64" />
        </div>
        <div className="flex flex-col gap-6">
          <Skeleton className="h-96 w-64" />
          <Skeleton className="h-56 w-64" />
        </div>
        <div className="flex flex-col gap-6">
          <Skeleton className="h-56 w-64" />
          <Skeleton className="h-96 w-64" />
        </div>
        <div className="flex flex-col gap-6">
          <Skeleton className="h-96 w-64" />
          <Skeleton className="h-56 w-64" />
        </div>
      </div>
    </div>
  )
}
