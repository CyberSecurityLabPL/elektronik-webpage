"use client"
import { Suspense } from "react"
import ScrollBarProvider from "./ScrollBarProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ScrollBarProvider>{children}</ScrollBarProvider>
    </Suspense>
  )
}
