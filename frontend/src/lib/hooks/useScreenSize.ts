"use client"
import { useState, useEffect } from "react"

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    // Check initial size
    const checkSize = () => {
      setScreenSize(window.innerWidth) // example breakpoint of 1024px
    }

    checkSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return {
    screenSize,
    breakpoints: {
      small: screenSize < 640,
      medium: screenSize >= 768 && screenSize < 1024,
      large: screenSize >= 1024,
    },
  }
}
