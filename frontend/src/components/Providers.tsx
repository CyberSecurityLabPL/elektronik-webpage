"use client"
import { Suspense } from "react"
import ScrollBarProvider from "./ScrollBarProvider"
import { ThemeProvider } from "./providers/theme-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="light"
        themes={["light", "high-contrast"]}
      >
        <ScrollBarProvider>{children}</ScrollBarProvider>
      </ThemeProvider>
    </Suspense>
  )
}
