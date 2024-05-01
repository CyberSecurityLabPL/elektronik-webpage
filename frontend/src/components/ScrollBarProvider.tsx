"use client"

import { useEffect } from "react"

interface color {
  r: number
  g: number
  b: number
}

export default function ScrollBarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const start: color = { r: 53, g: 77, b: 252 }
    const end: color = { r: 38, g: 39, b: 39 }

    let color: color = start

    const onScroll = () => {
      color = getRgbInBetween(
        start,
        end,
        Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100
        ) / 100
      )
      const elem = document.body
      if (window.scrollY == 0) {
        elem.style.setProperty("--scroll-border", "0 0 0 10px")
        elem.style.setProperty(
          "--scroll-color",
          `rgb(${color.r}, ${color.g}, ${color.b})`
        )
      } else if (
        Math.round(
          window.scrollY - document.body.scrollHeight + window.innerHeight
        ) == 0
      ) {
        elem.style.setProperty("--scroll-border", "10px 0 0 0")
        elem.style.setProperty(
          "--scroll-color",
          `rgb(${color.r}, ${color.g}, ${color.b})`
        )
      } else {
        elem.style.setProperty("--scroll-border", "10px 0 0 10px")
        elem.style.setProperty(
          "--scroll-color",
          `rgb(${color.r}, ${color.g}, ${color.b})`
        )
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return <>{children}</>
}

function getRgbInBetween(start: color, end: color, perc: number): color {
  if (perc < 0.8) return start
  perc = (perc - 0.8) / 0.2

  console.log(start.r - (start.r - end.r) * perc == end.r)

  return {
    r: start.r - (start.r - end.r) * perc,
    g: start.g - (start.g - end.g) * perc,
    b: start.b - (start.b - end.b) * perc,
  }
}
