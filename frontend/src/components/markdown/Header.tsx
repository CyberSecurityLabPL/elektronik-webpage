import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

const fontSizes = {
  h1: "text-2xl sm:text-4xl",
  h2: "text-xl sm:text-3xl",
  h3: "text-lg sm:text-2xl",
}

type HeaderVariants = "h1" | "h2" | "h3"

export default function Header({
  children,
  Variant = "h1",
}: PropsWithChildren<{ Variant?: HeaderVariants }>) {
  return (
    <Variant
      className={cn("relative pb-2 pt-4 font-semibold", fontSizes[Variant])}
    >
      {children}
    </Variant>
  )
}
