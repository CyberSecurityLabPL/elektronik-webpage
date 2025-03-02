"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ExistingThemeProviderProps = React.ComponentProps<
  typeof NextThemesProvider
> & {
  children: React.ReactNode
}
export function ThemeProvider({
  children,
  ...props
}: ExistingThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
