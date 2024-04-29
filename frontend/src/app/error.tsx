"use client" // Error components must be Client Components

import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full flex-col items-center  justify-center">
      <Header
        title="Coś poszło nie tak"
        subtitle={"Wystąpiły nieoczekiwane błędy, spróbuj ponownie później"}
      />
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Spróbuj ponownie
      </Button>
    </div>
  )
}
