"use client"
import { MotionConfig } from "framer-motion"
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
        {/* "user": honour the OS "reduce motion" setting – framer-motion
            then skips transform/layout animations and keeps only fades */}
        <MotionConfig reducedMotion="user">
          <ScrollBarProvider>{children}</ScrollBarProvider>
        </MotionConfig>
      </ThemeProvider>
    </Suspense>
  )
}
