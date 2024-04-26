"use client"

import { useEffect } from "react"

export default function ScrollBarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const onScroll = () => {
      const elem = document.body
      if (window.scrollY == 0) {
        elem.style.setProperty("--scroll-border", "0 0 0 10px")
      } else if (
        Math.round(
          window.scrollY - document.body.scrollHeight + window.innerHeight
        ) == 0
      ) {
        elem.style.setProperty("--scroll-border", "10px 0 0 0")
      } else {
        elem.style.setProperty("--scroll-border", "10px 0 0 10px")
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return <>{children}</>
}
