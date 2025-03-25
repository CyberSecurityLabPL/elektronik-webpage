"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

interface ScrollColors {
  start: {
    r: number
    g: number
    b: number
  }
  end: {
    r: number
    g: number
    b: number
  }
}

const THEME_COLORS: Record<string, ScrollColors> = {
  light: {
    start: { r: 49, g: 49, b: 241 }, // Niebieski
    end: { r: 38, g: 39, b: 39 }     // Ciemny szary
  },
  "high-contrast": {
    start: { r: 0, g: 255, b: 234 },  // Turkusowy
    end: { r: 38, g: 39, b: 39 }      // Ciemny szary
  }
}

export default function ScrollBarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()

  useEffect(() => {
    const colors = THEME_COLORS[theme ?? 'light']
    let currentColor = colors.start

    const onScroll = () => {
      const scrollArea = 800 + window.innerHeight
      const scrollProgress = Math.round(
        (Math.max(
          window.scrollY - document.body.scrollHeight + scrollArea,
          0
        ) /
          (scrollArea - window.innerHeight)) *
          100
      ) / 100

      currentColor = getRgbInBetween(colors.start, colors.end, scrollProgress)
      
      const elem = document.body
      const scrollBorder = window.scrollY === 0 
        ? "0 0 0 10px" 
        : window.scrollY - document.body.scrollHeight + window.innerHeight === 0
        ? "10px 0 0 0"
        : "10px 0 0 10px"

      elem.style.setProperty("--scroll-border", scrollBorder)
      elem.style.setProperty(
        "--scroll-thumb",
        `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      )
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [theme])

  return <>{children}</>
}

interface RGBColor {
  r: number;
  g: number;
  b: number;
}

function getRgbInBetween(start: RGBColor, end: RGBColor, perc: number): RGBColor {
  return {
    r: start.r - (start.r - end.r) * perc,
    g: start.g - (start.g - end.g) * perc,
    b: start.b - (start.b - end.b) * perc,
  }
}